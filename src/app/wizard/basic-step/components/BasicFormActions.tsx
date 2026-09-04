"use client";

import { ArrowLeftIcon } from "@/components/icons";

type BasicFormActionsProps = {
  isSubmitting?: boolean;
};

export function BasicFormActions({ isSubmitting }: BasicFormActionsProps) {
  return (
    <div className="mt-8 flex justify-end border-t border-slate-100 pt-6">
      <button
        className="primary-button w-full sm:w-auto"
        type="submit"
        disabled={isSubmitting}
      >
        مرحلهٔ بعد
        <ArrowLeftIcon className="size-4" />
      </button>
    </div>
  );
}
