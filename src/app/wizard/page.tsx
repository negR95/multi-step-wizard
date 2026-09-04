import { redirect } from "next/navigation";

export default function WizardIndexPage() {
  redirect("/wizard/basic-step");
}
