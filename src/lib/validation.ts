import { z } from "zod";
import { COUNTRY_OPTIONS, GENDER_OPTIONS, getCities } from "@/lib/wizardData";
import type { FieldErrors } from "@/types/validation";

const requiredText = (label: string, minimum = 2) =>
  z
    .string()
    .trim()
    .min(1, `${label} را وارد کنید.`)
    .min(minimum, `${label} باید حداقل ${minimum} کاراکتر باشد.`)
    .max(80, `${label} بیش از حد طولانی است.`);

const toEnglishDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));

export const basicInfoSchema = z.object({
  firstName: requiredText("نام"),
  lastName: requiredText("نام خانوادگی"),
  email: z
    .string()
    .trim()
    .min(1, "ایمیل را وارد کنید.")
    .email("یک ایمیل معتبر وارد کنید."),
});

const validGenders = new Set<string>(GENDER_OPTIONS.map((item) => item.value));

export const additionalInfoSchema = z.object({
  age: z
    .string()
    .trim()
    .min(1, "سن را وارد کنید.")
    .transform(toEnglishDigits)
    .refine((value) => /^\d+$/.test(value), "سن باید یک عدد صحیح باشد.")
    .transform(Number)
    .refine(
      (value) => value >= 18 && value <= 120,
      "سن باید بین ۱۸ تا ۱۲۰ سال باشد.",
    ),
  gender: z
    .string()
    .refine((value) => validGenders.has(value), "جنسیت را انتخاب کنید."),
  occupation: requiredText("شغل"),
});

const validCountries = new Set<string>(
  COUNTRY_OPTIONS.map((item) => item.value),
);

export const addressSchema = z
  .object({
    country: z
      .string()
      .refine((value) => validCountries.has(value), "کشور را انتخاب کنید."),
    city: z.string().min(1, "شهر را انتخاب کنید."),
    detailedAddress: z
      .string()
      .trim()
      .min(1, "نشانی دقیق را وارد کنید.")
      .min(10, "نشانی دقیق باید حداقل ۱۰ کاراکتر باشد.")
      .max(300, "نشانی دقیق نمی‌تواند بیشتر از ۳۰۰ کاراکتر باشد."),
  })
  .superRefine((data, context) => {
    const cityBelongsToCountry = getCities(data.country).some(
      (city) => city.value === data.city,
    );

    if (data.city && !cityBelongsToCountry) {
      context.addIssue({
        code: "custom",
        path: ["city"],
        message: "شهر انتخاب‌شده با کشور مطابقت ندارد.",
      });
    }
  });

export const completeWizardSchema = basicInfoSchema
  .and(additionalInfoSchema)
  .and(addressSchema);

export function getFieldErrors(error: z.ZodError): FieldErrors {
  const errors: FieldErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  return errors;
}
