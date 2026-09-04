"use client";

import { FormField } from "@/components/FormField";

type DetailedAddressFieldProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function DetailedAddressField({
  value,
  error,
  onChange,
}: DetailedAddressFieldProps) {
  return (
    <div className="sm:col-span-2">
      <FormField
        label="نشانی دقیق"
        htmlFor="detailedAddress"
        error={error}
        hint="نام خیابان، کوچه، پلاک و واحد را بنویسید."
      >
        <textarea
          id="detailedAddress"
          name="detailedAddress"
          autoComplete="street-address"
          className={`form-textarea ${error ? "form-input-error" : ""}`}
          value={value}
          placeholder="مثلاً خیابان ولیعصر، کوچه پگاه، پلاک ۲۵، واحد ۳"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "detailedAddress-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      </FormField>
    </div>
  );
}
