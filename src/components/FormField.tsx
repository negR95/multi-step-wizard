import type { ReactNode } from "react";
import { AlertIcon } from "@/components/icons";

type FormFieldProps = {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error ? (
        <p
          className="form-error"
          id={htmlFor ? `${htmlFor}-error` : undefined}
          role="alert"
        >
          <AlertIcon className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-400">{hint}</p>
      ) : null}
    </div>
  );
}
