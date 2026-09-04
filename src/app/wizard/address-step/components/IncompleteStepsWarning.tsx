"use client";

import Link from "next/link";
import type { IncompleteStep } from "@/types";

type IncompleteStepsWarningProps = {
  steps: IncompleteStep[];
};

export function IncompleteStepsWarning({ steps }: IncompleteStepsWarningProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <div
      className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      role="alert"
    >
      <p className="font-bold">
        بعضی از اطلاعات مراحل قبل ناقص یا نامعتبر است.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {steps.map((step) => (
          <Link
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold shadow-sm hover:text-amber-700"
            href={step.href}
            key={step.href}
          >
            تکمیل {step.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
