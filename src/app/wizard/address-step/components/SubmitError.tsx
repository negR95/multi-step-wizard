"use client";

type SubmitErrorProps = {
  message: string;
};

export function SubmitError({ message }: SubmitErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700"
      role="alert"
    >
      {message}
    </div>
  );
}
