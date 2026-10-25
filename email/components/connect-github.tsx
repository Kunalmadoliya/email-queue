"use client";
import { useConnectionStatus, useCreateConnectLink } from "@/app/corsair-client";

export function ConnectGitHub({ tenantId }: { tenantId: string }) {
    const { mutate, loading } = useCreateConnectLink();
    const { data: status } = useConnectionStatus({ tenantId });

    if (status?.github === "connected") return <span>GitHub connected ✓</span>;

    return (
        <button
            disabled={loading}
            onClick={async () => {
                const { connectUrl } = await mutate({ plugin: "github", tenantId });
                window.location.href = connectUrl;
            }}
        >
            Connect GitHub
        </button>
    );
}