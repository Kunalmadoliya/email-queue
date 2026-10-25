import Database from 'better-sqlite3';
import { createCorsair } from 'corsair';
import { github } from '@corsair-dev/github';

const db = new Database('corsair.db');

export const corsair = createCorsair({
    database: db,
    kek: process.env.CORSAIR_KEK!,
    multiTenancy: true, // gives every user their own credentials; enables corsair.withTenant(id)
    hub: {
        projectApiKey: process.env.CORSAIR_API_KEY!,
        signingSecret: process.env.CORSAIR_SIGNING_SECRET!,
    },
});