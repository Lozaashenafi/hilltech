import { DoweitClient } from "@doweit/voice";

export const client = new DoweitClient({
    // ⚠️ CHANGE THIS to your key that starts with "dw_pub_"
    publicKey: "dw_pub_7bca4c9f1343abb0975c47742196e417e0a090dd1b55b7b5",
});

client.register({
    getCompanySummary: {
        description: "Explains what HillTech does.",
        handler: () => "HillTech specializes in 3 sectors: specialized furniture, enterprise technology solutions, and digital security."
    },
    checkServiceAvailability: {
        description: "Checks if a specific service is available in a region.",
        params: { service: { type: "string" }, region: { type: "string" } },
        handler: ({ service, region }) => {
            return { status: "available", message: `Yes, we provide ${service} in ${region}.` };
        }
    }
});

client.bindState(() => ({
    currentPath: window.location.pathname,
    isLoggedIn: false 
}));