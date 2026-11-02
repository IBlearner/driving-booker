import { isLessonId } from "@/content";
import { languages, translations } from "@/i18n/translations";
import type { ExperienceId, Language } from "@/i18n/types";
import { formatDate, formatTime } from "./availability";
import type { BookingPayload } from "./emailBooking";
import type { FormState } from "./validation";

// Turns a validated form into the email payload. The instructor reads the email
// in English whatever language the form was in, so every label comes from the
// English dictionary; `language` tells them which one to reply in.
export function buildPayload(form: FormState, language: Language): BookingPayload {
  const en = translations.en;

  return {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    lesson: isLessonId(form.lesson) ? en.info.lessons[form.lesson].name : "Not specified",
    experience: en.book.experiences[form.experience as ExperienceId],
    hasCar: form.hasCar === "yes" ? en.book.hasCarYes : en.book.hasCarNo,
    date: `${formatDate(form.date)} (${form.date})`,
    time: formatTime(form.time),
    notes: form.notes.trim(),
    language: languages.find((l) => l.code === language)?.label ?? language,
  };
}
