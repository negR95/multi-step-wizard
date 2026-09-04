"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type AddressFormActionsProps = {
  isSubmitting: boolean;
  onBack: () => void;
};

export function AddressFormActions({
  isSubmitting,
  onBack,
}: AddressFormActionsProps) {
  return (
    <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
      <button className="secondary-button" type="button" onClick={onBack}>
        <ArrowRightIcon className="size-4" />
        مرحلهٔ قبل
      </button>
      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            در حال ثبت…
          </>
        ) : (
          <>
            ثبت نهایی اطلاعات
            <ArrowLeftIcon className="size-4" />
          </>
        )}
      </button>
    </div>
  );
}
