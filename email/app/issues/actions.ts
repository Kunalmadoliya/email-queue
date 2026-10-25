'use server';
import { revalidatePath } from 'next/cache';
import { corsair } from '../server/corsair';
import { getTenantId} from '../server/tenant';

export async function closeIssue(issueNumber: number) {
    const tenant = corsair.withTenant(await getTenantId());
    await tenant.github.api.issues.update({
        owner: 'acme',
        repo: 'app',
        issueNumber,
        state: 'closed',
    });
    revalidatePath('/issues');
}