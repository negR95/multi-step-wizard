"use client";

import { FormField } from "@/components/FormField";

type AgeFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function AgeField({ value, error, onChange }: AgeFieldProps) {
  return (
    <FormField label="سن" htmlFor="age" error={error}>
      <input
        id="age"
        name="age"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        className={`form-input ${error ? "form-input-error" : ""}`}
        value={value}
        placeholder="مثلاً ۳۱"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "age-error" : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
    </FormField>
  );
}
