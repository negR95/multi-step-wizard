"use client";

import { PinIcon } from "@/components/icons";
import { StepHeading } from "@/components/StepHeading";
import { useAddressForm } from "@/hooks/useAddressForm";
import {
  AddressFormActions,
  AddressSuccessView,
  CitySelect,
  CountrySelect,
  DetailedAddressField,
  IncompleteStepsWarning,
  SubmitError,
} from "./components";

export default function AddressPage() {
  const {
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
  } = useAddressForm();

  if (submission) {
    return (
      <AddressSuccessView submission={submission} onReset={resetSubmission} />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <StepHeading
        eyebrow="مرحلهٔ پایانی"
        title="اطلاعات سکونت"
        icon={<PinIcon className="size-6" />}
      />

      <IncompleteStepsWarning steps={incompleteSteps} />
      <SubmitError message={submitError} />

      <div className="grid gap-5 sm:grid-cols-2">
        <CountrySelect
          value={data.country}
          error={errors.country}
          onChange={handleCountryChange}
        />
        <CitySelect
          value={data.city}
          error={errors.city}
          hint={!data.country ? "ابتدا کشور را انتخاب کنید." : undefined}
          disabled={!data.country}
          cities={cities}
          onChange={(value: string) => updateData({ city: value })}
        />
        <DetailedAddressField
          value={data.detailedAddress}
          error={errors.detailedAddress}
          onChange={(value: string) => updateData({ detailedAddress: value })}
        />
      </div>

      <AddressFormActions
        isSubmitting={isSubmitting}
        onBack={goToAdditionalStep}
      />
    </form>
  );
}
