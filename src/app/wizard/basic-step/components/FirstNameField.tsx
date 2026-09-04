"use client";

import { FormField } from "@/components/FormField";

type FirstNameFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function FirstNameField({
  value,
  error,
  onChange,
}: FirstNameFieldProps) {
  return (
    <FormField label="نام" htmlFor="firstName" error={error}>
      <input
        id="firstName"
        name="firstName"
        autoComplete="given-name"
        className={`form-input ${error ? "form-input-error" : ""}`}
        value={value}
        placeholder="مثلاً نگار"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "firstName-error" : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
    </FormField>
  );
}
