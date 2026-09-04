"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type AdditionalFormActionsProps = {
  onBack: () => void;
};

export function AdditionalFormActions({ onBack }: AdditionalFormActionsProps) {
  return (
    <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
      <button className="secondary-button" type="button" onClick={onBack}>
        <ArrowRightIcon className="size-4" />
        مرحلهٔ قبل
      </button>
      <button className="primary-button" type="submit">
        مرحلهٔ بعد
        <ArrowLeftIcon className="size-4" />
      </button>
    </div>
  );
}
