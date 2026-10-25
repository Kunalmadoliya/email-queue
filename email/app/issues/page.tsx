import { corsair } from '../server/corsair';
import { getTenantId } from '@/app/server/tenant';
import { closeIssue } from './actions';

export default async function IssuesPage() {
    const tenant = corsair.withTenant(await getTenantId());
    const issues = await tenant.github.db.issues.search({
        data: { state: 'open' },
        limit: 50,
    });

    return (
        <ul>
            {issues.map((issue) => (
                <li key={issue.id}>
                    {issue.data.title}
                    <form action={closeIssue.bind(null, issue.data.number)}>
                        <button>Close</button>
                    </form>
                </li>
            ))}
        </ul>
    );
}