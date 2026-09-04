import type { ReactNode } from "react";

type StepHeadingProps = {
  eyebrow: string;
  title: string;
  icon: ReactNode;
};

export function StepHeading({ eyebrow, title, icon }: StepHeadingProps) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
        {icon}
      </div>
      <div>
        <p className="mb-1 text-xs font-bold tracking-wide text-teal-600">
          {eyebrow}
        </p>
        <h1 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
