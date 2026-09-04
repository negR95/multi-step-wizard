import type { ReactNode } from "react";
import { WizardShell } from "@/components/WizardShell";
import { WizardProvider } from "@/context/WizardContext";

export default function WizardLayout({ children }: { children: ReactNode }) {
  return (
    <WizardProvider>
      <WizardShell>{children}</WizardShell>
    </WizardProvider>
  );
}
