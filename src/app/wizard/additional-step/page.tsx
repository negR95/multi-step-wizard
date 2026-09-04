"use client";

import { BriefcaseIcon } from "@/components/icons";
import { StepHeading } from "@/components/StepHeading";
import { useAdditionalForm } from "@/hooks/useAdditionalForm";
import {
  AdditionalFormActions,
  AgeField,
  GenderField,
  OccupationField,
} from "./components";

export default function AdditionalInformationPage() {
  const { data, updateData, errors, handleSubmit, goToBasicStep } =
    useAdditionalForm();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <StepHeading
        eyebrow="مرحلهٔ دوم"
        title="اطلاعات تکمیلی"
        icon={<BriefcaseIcon className="size-6" />}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <AgeField
          value={data.age}
          error={errors.age}
          onChange={(value: string) => updateData({ age: value })}
        />
        <OccupationField
          value={data.occupation}
          error={errors.occupation}
          onChange={(value: string) => updateData({ occupation: value })}
        />
        <GenderField
          value={data.gender}
          error={errors.gender}
          onChange={(value: string) => updateData({ gender: value })}
        />
      </div>

      <AdditionalFormActions onBack={goToBasicStep} />
    </form>
  );
}
