"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useWizard } from "@/hooks/useWizard";
import { additionalInfoSchema, getFieldErrors } from "@/lib/validation";
import type { FieldErrors } from "@/types/validation";

export function useAdditionalForm() {
  const router = useRouter();
  const { data, updateData } = useWizard();
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = additionalInfoSchema.safeParse(data);

    if (!result.success) {
      setErrors(getFieldErrors(result.error));
      return;
    }

    setErrors({});
    router.push("/wizard/address-step");
  }

  function goToBasicStep() {
    router.push("/wizard/basic-step");
  }

  return { data, updateData, errors, handleSubmit, goToBasicStep };
}
