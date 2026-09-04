"use client";

import { CheckIcon, SparkleIcon } from "@/components/icons";
import type { ApiSuccess } from "@/types";

type AddressSuccessViewProps = {
  submission: ApiSuccess;
  onReset: () => void;
};

export function AddressSuccessView({
  submission,
  onReset,
}: AddressSuccessViewProps) {
  return (
    <div className="flex min-h-[390px] flex-col items-center justify-center py-4 text-center">
      <div className="relative mb-6">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-200 opacity-40" />
        <div className="relative flex size-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
          <CheckIcon className="size-10" />
        </div>
      </div>
      <h1 className="text-2xl font-black text-slate-900">
        اطلاعات با موفقیت ثبت شد
      </h1>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
        {submission.message}
      </p>
      <div
        className="mt-5 rounded-xl bg-slate-50 px-4 py-2 text-xs text-slate-400"
        dir="ltr"
      >
        کد پیگیری:
        <span className="font-mono font-bold text-slate-600">
          {submission.submissionId}
        </span>
      </div>
      <button className="primary-button mt-7" type="button" onClick={onReset}>
        <SparkleIcon className="size-4" />
        ثبت اطلاعات جدید
      </button>
    </div>
  );
}
