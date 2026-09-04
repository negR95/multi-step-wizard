"use client";

import { ChevronDownIcon } from "@/components/icons";
import { FormField } from "@/components/FormField";
import { COUNTRY_OPTIONS } from "@/lib/wizardData";

type CountrySelectProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function CountrySelect({ value, error, onChange }: CountrySelectProps) {
  return (
    <FormField label="کشور" htmlFor="country" error={error}>
      <div className="relative">
        <select
          id="country"
          name="country"
          autoComplete="country"
          className={`form-input pl-10 appearance-none ${error ? "form-input-error" : ""}`}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "country-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="">انتخاب کشور</option>
          {COUNTRY_OPTIONS.map((country) => (
            <option value={country.value} key={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
      </div>
    </FormField>
  );
}
