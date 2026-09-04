"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useWizard } from "@/hooks/useWizard";
import { basicInfoSchema, getFieldErrors } from "@/lib/validation";
import type { FieldErrors } from "@/types/validation";

export function useBasicForm() {
  const router = useRouter();
  const { data, updateData } = useWizard();
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = basicInfoSchema.safeParse(data);

    if (!result.success) {
      setErrors(getFieldErrors(result.error));
      return;
    }

    setErrors({});
    router.push("/wizard/additional-step");
  }

  return { data, updateData, errors, handleSubmit };
}
