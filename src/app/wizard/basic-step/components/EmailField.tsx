"use client";

import { FormField } from "@/components/FormField";

type EmailFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function EmailField({ value, error, onChange }: EmailFieldProps) {
  return (
    <div className="sm:col-span-2">
      <FormField label="ایمیل" htmlFor="email" error={error}>
        <input
          id="email"
          name="email"
          type="email"
          dir="ltr"
          inputMode="email"
          autoComplete="email"
          className={`form-input text-left ${error ? "form-input-error" : ""}`}
          value={value}
          placeholder="name@example.com"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "email-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      </FormField>
    </div>
  );
}
