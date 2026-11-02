import type { BookErrorKey } from "@/i18n/types";
import { isSunday } from "./availability";

export interface FormState {
  name: string;
  email: string;
  phone: string;
  lesson: string;
  experience: string;
  hasCar: string;
  date: string;
  time: string;
  notes: string;
}

export const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  lesson: "",
  experience: "",
  hasCar: "",
  date: "",
  time: "",
  notes: "",
};

// Maps each invalid field to an error key; the key is translated at render time
// so errors follow the visitor's language if they switch it.
export type Errors = Partial<Record<keyof FormState, BookErrorKey>>;

// Fields in the order they appear on the page (used to focus the first error).
export const fieldOrder: (keyof FormState)[] = ["name", "phone", "email", "experience", "hasCar", "date", "time"];

export function validate(form: FormState): Errors {
  const next: Errors = {};
  if (!form.name.trim()) next.name = "name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "email";
  if (form.phone.replace(/[^\d]/g, "").length < 7) next.phone = "phone";
  if (!form.experience) next.experience = "experience";
  if (!form.hasCar) next.hasCar = "hasCar";
  if (!form.date) next.date = "date";
  else if (isSunday(form.date)) next.date = "closed";
  if (!form.time) next.time = "time";
  return next;
}
