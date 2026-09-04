"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useWizard } from "@/hooks/useWizard";
import { getCities } from "@/lib/wizardData";
import {
  addressSchema,
  completeWizardSchema,
  getFieldErrors,
} from "@/lib/validation";
import type { ApiSuccess, IncompleteStep } from "@/types";
import type { FieldErrors } from "@/types/validation";

function getIncompleteSteps(errors: FieldErrors): IncompleteStep[] {
  const steps: IncompleteStep[] = [];
  if (errors.firstName || errors.lastName || errors.email) {
    steps.push({ href: "/wizard/basic-step", label: "اطلاعات پایه" });
  }
  if (errors.age || errors.gender || errors.occupation) {
    steps.push({ href: "/wizard/additional-step", label: "اطلاعات تکمیلی" });
  }
  return steps;
}

export function useAddressForm() {
  const router = useRouter();
  const { data, updateData, resetData } = useWizard();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [incompleteSteps, setIncompleteSteps] = useState<IncompleteStep[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submission, setSubmission] = useState<ApiSuccess | null>(null);
  const cities = getCities(data.country);

  function handleCountryChange(country: string) {
    updateData({ country, city: "" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const stepResult = addressSchema.safeParse(data);
    const completeResult = completeWizardSchema.safeParse(data);

    if (!completeResult.success) {
      const allErrors = getFieldErrors(completeResult.error);
      setErrors(stepResult.success ? {} : getFieldErrors(stepResult.error));
      setIncompleteSteps(getIncompleteSteps(allErrors));
      return;
    }

    setErrors({});
    setIncompleteSteps([]);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as
        | ApiSuccess
        | { success: false; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "ارسال اطلاعات ناموفق بود.");
      }

      setSubmission(result);
      resetData();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "خطایی رخ داد؛ دوباره تلاش کنید.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetSubmission() {
    setSubmission(null);
    router.push("/wizard/basic-step");
  }

  function goToAdditionalStep() {
    router.push("/wizard/additional-step");
  }

  return {
    data,
    updateData,
    errors,
    incompleteSteps,
    isSubmitting,
    submitError,
    submission,
    cities,
    handleCountryChange,
    handleSubmit,
    resetSubmission,
    goToAdditionalStep,
  };
}
