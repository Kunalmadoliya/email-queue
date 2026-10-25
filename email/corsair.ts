import Database from 'better-sqlite3';
import { createCorsair } from 'corsair';
import { github } from '@corsair-dev/github';

export const corsair = createCorsair({
    database: new Database('corsair.db'),
    kek: process.env.CORSAIR_KEK!,
    multiTenancy: true,
    plugins: [github({ authType: 'managed' })], // one entry per @corsair-dev/* package you install
});