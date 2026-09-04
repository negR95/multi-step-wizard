"use client";

import { FormField } from "@/components/FormField";

type OccupationFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function OccupationField({
  value,
  error,
  onChange,
}: OccupationFieldProps) {
  return (
    <FormField label="شغل" htmlFor="occupation" error={error}>
      <input
        id="occupation"
        name="occupation"
        autoComplete="organization-title"
        className={`form-input ${error ? "form-input-error" : ""}`}
        value={value}
        placeholder="مثلاً برنامه نویس"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "occupation-error" : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
    </FormField>
  );
}
