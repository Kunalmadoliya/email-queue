"use client";
import { useConnectionStatus } from "./corsair-client";

export function Connections({ tenantId }: { tenantId: string }) {
    const { data } = useConnectionStatus({ tenantId });
    if (!data) return null;
    return (
        <ul>
            {Object.entries(data).map(([plugin, status]) => (
                <li key={plugin}>{plugin}: {status === "connected" ? "✓" : "Connect →"}</li>
            ))}
        </ul>
    );
}