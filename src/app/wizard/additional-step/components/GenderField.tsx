"use client";

import { GENDER_OPTIONS } from "@/lib/wizardData";

type GenderOption = {
  value: string;
  label: string;
};

type GenderFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function GenderField({ value, error, onChange }: GenderFieldProps) {
  return (
    <fieldset className="sm:col-span-2">
      <legend className="form-label">جنسیت</legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {GENDER_OPTIONS.map((option: GenderOption) => (
          <label
            className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
              value === option.value
                ? "border-teal-500 bg-teal-50 text-teal-800 ring-4 ring-teal-500/10"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
            key={option.value}
          >
            <input
              className="size-4 accent-teal-600"
              type="radio"
              name="gender"
              value={option.value}
              checked={value === option.value}
              onChange={(event) => onChange(event.target.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error ? <p className="form-error">{error}</p> : null}
    </fieldset>
  );
}
