"use client";
import { createCorsairReactClient } from "corsair/client/react";

export const {
    useConnectionStatus, useCreateConnectLink, useTenants,
    client, // escape hatch — the vanilla client
} = createCorsairReactClient({ baseURL: "/api/corsair" });