"use client";

import { usePathname } from "next/navigation";

export const STEPS = [
  {
    path: "/wizard/basic-step",
    title: "اطلاعات پایه",
    shortTitle: "اطلاعات پایه",
  },
  {
    path: "/wizard/additional-step",
    title: "اطلاعات تکمیلی",
    shortTitle: "اطلاعات تکمیلی",
  },
  { path: "/wizard/address-step", title: "نشانی", shortTitle: "نشانی" },
] as const;

export function useWizardProgress() {
  const pathname = usePathname();
  const currentIndex = Math.max(
    0,
    STEPS.findIndex((step) => pathname.startsWith(step.path)),
  );

  return { steps: STEPS, currentIndex };
}
