import { DoweitClient } from "@doweit/voice";

export const client = new DoweitClient({
    publicKey: "sk_live_XXXXXXXXXXXXXXXXP40k",
});

client.register({
    // Tool 1: Tell user about company
    getCompanySummary: {
        description: "Explains what HillTech does.",
        handler: () => "HillTech specializes in 3 sectors: specialized furniture, enterprise technology solutions, and digital security."
    },
    // Tool 2: Check availability (Example of a 'Smart' agent)
    checkServiceAvailability: {
        description: "Checks if a specific service is available in a region.",
        params: { service: { type: "string" }, region: { type: "string" } },
        handler: ({ service, region }) => {
            return { status: "available", message: `Yes, we provide ${service} in ${region}.` };
        }
    }
});

// Sync current location so AI knows where the user is
client.bindState(() => ({
    currentPath: window.location.pathname,
    isLoggedIn: false 
}));