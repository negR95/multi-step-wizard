"use client";

import { UserIcon } from "@/components/icons";
import { StepHeading } from "@/components/StepHeading";
import { useBasicForm } from "@/hooks/useBasicForm";
import {
  BasicFormActions,
  EmailField,
  FirstNameField,
  LastNameField,
} from "./components";

export default function BasicInformationPage() {
  const { data, updateData, errors, handleSubmit } = useBasicForm();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <StepHeading
        eyebrow="مرحلهٔ اول"
        title="اطلاعات پایه"
        icon={<UserIcon className="size-6" />}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FirstNameField
          value={data.firstName}
          error={errors.firstName}
          onChange={(value: string) => updateData({ firstName: value })}
        />
        <LastNameField
          value={data.lastName}
          error={errors.lastName}
          onChange={(value: string) => updateData({ lastName: value })}
        />
        <EmailField
          value={data.email}
          error={errors.email}
          onChange={(value: string) => updateData({ email: value })}
        />
      </div>

      <BasicFormActions />
    </form>
  );
}
