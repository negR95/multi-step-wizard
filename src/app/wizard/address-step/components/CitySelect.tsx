"use client";

import { ChevronDownIcon } from "@/components/icons";
import { FormField } from "@/components/FormField";

type CityOption = {
  value: string;
  label: string;
};

type CitySelectProps = {
  value: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  cities: readonly CityOption[];
  onChange: (value: string) => void;
};

export function CitySelect({
  value,
  error,
  hint,
  disabled,
  cities,
  onChange,
}: CitySelectProps) {
  return (
    <FormField label="شهر" htmlFor="city" error={error} hint={hint}>
      <div className="relative">
        <select
          id="city"
          name="city"
          autoComplete="address-level2"
          className={`form-input pl-10 appearance-none ${error ? "form-input-error" : ""}`}
          value={value}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "city-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="">انتخاب شهر</option>
          {cities.map((city) => (
            <option value={city.value} key={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          className={`pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 ${disabled ? "opacity-50" : ""}`}
        />
      </div>
    </FormField>
  );
}
