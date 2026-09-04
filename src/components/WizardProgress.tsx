"use client";

import { CheckIcon } from "@/components/icons";
import { useWizardProgress } from "@/hooks/useWizardProgress";

const MOBILE_WIDTHS = ["w-1/3", "w-2/3", "w-full"];
const DESKTOP_WIDTHS = ["w-0", "w-1/2", "w-full"];

export function WizardProgress() {
  const { steps, currentIndex } = useWizardProgress();

  return (
    <nav aria-label="مراحل تکمیل اطلاعات">
      <div className="md:hidden">
        <div className="mb-3 flex items-center justify-between text-xs font-bold">
          <span className="text-slate-800">مرحله {currentIndex + 1} از ۳</span>
          <span className="text-teal-700">
            {steps[currentIndex].shortTitle}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full bg-teal-500 transition-all duration-500 ${MOBILE_WIDTHS[currentIndex]}`}
          />
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="absolute top-5 right-[16.666%] left-[16.666%] h-0.5 bg-slate-100">
          <div
            className={`h-full bg-teal-500 transition-all duration-500 ${DESKTOP_WIDTHS[currentIndex]}`}
          />
        </div>
        <ol className="relative z-10 grid grid-cols-3">
          {steps.map((step, index) => {
            const isComplete = index < currentIndex;
            const isCurrent = index === currentIndex;

            return (
              <li
                className="flex flex-col items-center"
                key={step.path}
                aria-current={isCurrent ? "step" : undefined}
              >
                <span
                  className={`flex size-10 items-center justify-center rounded-full border-2 text-sm font-black transition-colors ${
                    isComplete
                      ? "border-teal-500 bg-teal-500 text-white"
                      : isCurrent
                        ? "border-teal-500 bg-white text-teal-700 shadow-[0_0_0_5px_rgba(20,184,166,0.10)]"
                        : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  {isComplete ? <CheckIcon className="size-5" /> : index + 1}
                </span>
                <span
                  className={`mt-3 text-xs font-bold ${isCurrent ? "text-teal-700" : "text-slate-500"}`}
                >
                  {step.title}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
