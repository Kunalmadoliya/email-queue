import { ConnectGitHub } from "@/components/connect-github";
import { Button } from "@/components/ui/button";
import { getTenantId } from "@/app/server/tenant";

export default async function Page() {
  const tenantId = await getTenantId();
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>

        <ConnectGitHub tenantId={tenantId} />
      </div>
    </div>
  );
}
