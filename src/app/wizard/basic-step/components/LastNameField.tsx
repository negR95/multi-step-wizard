"use client";

import { FormField } from "@/components/FormField";

type LastNameFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function LastNameField({ value, error, onChange }: LastNameFieldProps) {
  return (
    <FormField label="نام خانوادگی" htmlFor="lastName" error={error}>
      <input
        id="lastName"
        name="lastName"
        autoComplete="family-name"
        className={`form-input ${error ? "form-input-error" : ""}`}
        value={value}
        placeholder="مثلاً مهدوی"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "lastName-error" : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
    </FormField>
  );
}
