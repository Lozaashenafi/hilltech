import { DoweitClient } from "@doweit/voice";

// ⚠️ REPLACE THIS with your deployed ws-server URL (Render/Railway/Fly).
// The voice/chat feature uses a WebSocket — Vercel's serverless functions
// cannot host one, so the SDK must point at the standalone `ws-server`
// (Doweit_Voice/ws-server) which serves init + manifest + live together.
// See AGENT_SETUP.md → "Deploying the backend".
const DOWEIT_BACKEND_URL = "https://doweit-voice.onrender.com";

// The Doweit Voice client. The publishable key comes from the Doweit dashboard.
export const client = new DoweitClient({
    publicKey: "dw_pub_84653972211e383be1868845d8298a0bbbf0073393d8a82b",
    baseUrl: DOWEIT_BACKEND_URL,
});

// ---------------------------------------------------------------------------
//  NAVIGATION BRIDGE
//  doweit.js is a plain module — it has no access to React Router. App.jsx
//  hands us router.navigate() once it mounts (setNavigator). Registering the
//  actions here at module load (not inside a component) guarantees they are
//  in the manifest BEFORE the widget calls client.init().
// ---------------------------------------------------------------------------
let _navigate = null;
export function setNavigator(fn) {
    _navigate = fn;
}

function go(path) {
    if (_navigate) _navigate(path);
    else if (typeof window !== "undefined") window.location.assign(path);
}

// Friendly page name → route. Aliases let the user say it however they like.
const PAGES = {
    home: "/",
    "home page": "/",
    about: "/about",
    "about us": "/about",
    blog: "/blog",
    news: "/blog",
    testimonials: "/testimonials",
    reviews: "/testimonials",
    faq: "/faq",
    faqs: "/faq",
    "frequently asked questions": "/faq",
    contact: "/contact",
    "contact us": "/contact",
    "get in touch": "/contact",
    furniture: "/service/furniture",
    "furniture solutions": "/service/furniture",
    technology: "/service/technology",
    "technology solutions": "/service/technology",
    it: "/service/technology",
    network: "/service/network",
    networking: "/service/network",
    "network infrastructure": "/service/network",
    security: "/service/security",
    "security solutions": "/service/security",
    digital: "/service/digital",
    "digital solutions": "/service/digital",
    hospitality: "/service/hospitality",
    "hospitality solutions": "/service/hospitality",
};

function resolvePage(input) {
    if (!input) return null;
    const s = String(input).trim().toLowerCase().replace(/\s+page$/, "").trim();
    if (s.startsWith("/")) return s;
    if (PAGES[s]) return PAGES[s];
    for (const [key, path] of Object.entries(PAGES)) {
        if (s.includes(key)) return path;
    }
    return null;
}

// ---------------------------------------------------------------------------
//  CONTACT-FORM BRIDGE
//  The form state lives inside the React <Contact> component. The assistant's
//  action handler can't touch React state directly, so it (a) buffers the
//  values here and (b) fires a window event. <Contact> reads the buffer on
//  mount (covers "navigate then fill") and listens for the event (covers
//  "already on the page").
// ---------------------------------------------------------------------------
let _pendingContactFill = null;

export function getPendingContactFill() {
    return _pendingContactFill;
}

// ---------------------------------------------------------------------------
//  CAPABILITIES
// ---------------------------------------------------------------------------
client.register({
    goToPage: {
        description:
            "Navigate the user to a page of the HillTech website. Pass the " +
            "page name as `page`. Valid pages: home, about, blog, testimonials, " +
            "faq, contact, and the service pages furniture, technology, network, " +
            "security, digital, hospitality.",
        params: {
            page: {
                type: "string",
                required: true,
                description: "The page name the user asked for.",
            },
        },
        handler: ({ page }) => {
            const path = resolvePage(page);
            if (!path) {
                return {
                    status: "unknown_page",
                    hint: "Valid pages: home, about, blog, testimonials, faq, contact, furniture, technology, network, security, digital, hospitality.",
                };
            }
            go(path);
            return { status: "navigated", to: path };
        },
    },

    fillContactForm: {
        description:
            "Fill the HillTech contact form with details the user gives you. " +
            "All fields are optional — pass only what the user has provided so " +
            "far; you can call this again to add or correct fields. It opens " +
            "the Contact page automatically if the user isn't already there. " +
            "Do NOT submit — that's a separate step the user must confirm.",
        params: {
            firstName: { type: "string", required: false },
            lastName: { type: "string", required: false },
            email: { type: "string", required: false },
            phone: { type: "string", required: false },
            company: { type: "string", required: false, description: "Company or organization name." },
            service: {
                type: "string",
                required: false,
                description:
                    "Which service they're interested in: furniture, technology, security, digital, hospitality, or consultation.",
            },
            message: {
                type: "string",
                required: false,
                description: "The user's message / description of their project or needs.",
            },
        },
        handler: (fields) => {
            // Keep only the fields the model actually provided.
            const clean = {};
            for (const [k, v] of Object.entries(fields || {})) {
                if (v !== undefined && v !== null && String(v).trim() !== "") {
                    clean[k] = v;
                }
            }
            // Accumulate so repeated calls build up the form.
            _pendingContactFill = { ..._pendingContactFill, ...clean };

            if (typeof window !== "undefined" && window.location.pathname !== "/contact") {
                go("/contact");
            }
            // Notify a <Contact> that is already mounted. If it's mounting now
            // (after the navigation above) it will read getPendingContactFill().
            if (typeof window !== "undefined") {
                window.dispatchEvent(
                    new CustomEvent("hilltech:fill-contact", { detail: clean }),
                );
            }
            return { status: "filled", applied: clean };
        },
    },

    submitContactForm: {
        description:
            "Submit the HillTech contact form. Only call this after the user " +
            "has reviewed what's filled in and explicitly confirms they want to send it.",
        params: {},
        handler: () => {
            if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("hilltech:submit-contact"));
            }
            return { status: "submitted" };
        },
    },

    getCompanySummary: {
        description: "Explain in one or two sentences what HillTech does.",
        params: {},
        handler: () =>
            "HillTech (Hiltech Electronics) designs integrated business environments — combining furniture, enterprise IT, networking, security, digital display, and hospitality solutions.",
    },
});

// Live UI state pushed to the assistant before each turn so it knows where
// the user currently is.
client.bindState(() => ({
    currentPath: typeof window !== "undefined" ? window.location.pathname : "/",
}));
