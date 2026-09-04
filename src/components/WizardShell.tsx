"use client";

import { SparkleIcon } from "@/components/icons";
import { WizardProgress } from "@/components/WizardProgress";
import { useWizard } from "@/hooks/useWizard";
import type { ReactNode } from "react";

export function WizardShell({ children }: { children: ReactNode }) {
  const { isHydrated } = useWizard();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#f4f7f7]">
      <header className="relative z-10 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-18 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
              <SparkleIcon className="size-5" />
            </div>
            <div>
              <p className="text-base font-black tracking-tight text-slate-900">
                گام به گام
              </p>
              <p className="text-[11px] text-slate-400">ثبت نام سه مرحله ای </p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-12">
        <section className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.28)]">
          <div className="border-b border-slate-100 bg-slate-50/50 px-5 py-6 sm:px-9 sm:py-8">
            <WizardProgress />
          </div>
          <div className="min-h-[420px] px-5 py-7 sm:px-9 sm:py-9">
            {isHydrated ? (
              children
            ) : (
              <div
                className="flex min-h-[350px] flex-col items-center justify-center gap-4"
                role="status"
              >
                <span className="size-9 animate-spin rounded-full border-4 border-teal-100 border-t-teal-600" />
                <p className="text-sm font-medium text-slate-500">
                  در حال بازیابی اطلاعات شما…
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
