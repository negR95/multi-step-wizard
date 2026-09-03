import type { WizardData } from "@/types/wizard";

export const COUNTRY_OPTIONS = [
  {
    value: "iran",
    label: "ایران",
    cities: [
      { value: "tehran", label: "تهران" },
      { value: "mashhad", label: "مشهد" },
      { value: "isfahan", label: "اصفهان" },
      { value: "shiraz", label: "شیراز" },
      { value: "tabriz", label: "تبریز" },
    ],
  },
  {
    value: "turkey",
    label: "ترکیه",
    cities: [
      { value: "istanbul", label: "استانبول" },
      { value: "ankara", label: "آنکارا" },
      { value: "izmir", label: "ازمیر" },
      { value: "antalya", label: "آنتالیا" },
    ],
  },
  {
    value: "uae",
    label: "امارات متحده عربی",
    cities: [
      { value: "dubai", label: "دبی" },
      { value: "abu-dhabi", label: "ابوظبی" },
      { value: "sharjah", label: "شارجه" },
    ],
  },
] as const;

export const GENDER_OPTIONS = [
  { value: "female", label: "زن" },
  { value: "male", label: "مرد" },
] as const;

export const EMPTY_WIZARD_DATA: WizardData = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  gender: "",
  occupation: "",
  country: "",
  city: "",
  detailedAddress: "",
};

export const WIZARD_DATA_KEYS = Object.keys(
  EMPTY_WIZARD_DATA,
) as (keyof WizardData)[];

export function getCities(countryValue: string) {
  return (
    COUNTRY_OPTIONS.find((country) => country.value === countryValue)?.cities ??
    []
  );
}
