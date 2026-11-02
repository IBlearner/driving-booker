import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { isLessonId } from "@/content";
import { useLanguage } from "@/i18n/LanguageContext";
import { getSlotsForDate } from "@/lib/availability";
import { buildPayload } from "@/lib/bookingPayload";
import { sendBooking, type BookingResult } from "@/lib/emailBooking";
import { emptyForm, fieldOrder, validate, type Errors, type FormState } from "@/lib/validation";

type Status = "idle" | "submitting" | "error";

// Moves focus to a field so keyboard and screen-reader users land on it.
// Groups (radios, time slots) focus their first button or input instead.
function focusField(key: keyof FormState) {
  const el = document.getElementById(`field-${key}`);
  if (!el) return;
  const isControl = el.matches("input, select, textarea, button");
  (isControl ? el : (el.querySelector<HTMLElement>("input, button") ?? el)).focus();
}

// All state and behaviour of the booking form; the page and its components only render.
export function useBookingForm() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormState>(() => {
    // The information page links here with ?lesson=<id> to preselect a lesson.
    const lesson = searchParams.get("lesson");
    return { ...emptyForm, lesson: isLessonId(lesson) ? lesson : "" };
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<BookingResult | null>(null);
  // Honeypot: real visitors never see or fill this; bots often do.
  const [trap, setTrap] = useState("");

  const slots = useMemo(() => getSlotsForDate(form.date), [form.date]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function updateDate(date: string) {
    // A different date means different slots, so the chosen time no longer applies.
    setForm((prev) => ({ ...prev, date, time: "" }));
    setErrors((prev) => ({ ...prev, date: undefined, time: undefined }));
  }

  function showProblems(problems: Errors) {
    setErrors(problems);
    const first = fieldOrder.find((key) => problems[key]);
    if (first) requestAnimationFrame(() => focusField(first));
  }

  async function send() {
    setStatus("submitting");
    try {
      setResult(await sendBooking(buildPayload(form, language)));
      setStatus("idle");
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch (err) {
      console.error("Booking submission failed:", err);
      setStatus("error");
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    if (trap) {
      // A bot filled the hidden field: look like success so it moves on, but send nothing.
      setResult("sent");
      return;
    }

    const problems = validate(form);
    if (Object.keys(problems).length > 0) {
      showProblems(problems);
      return;
    }

    await send();
  }

  function reset() {
    setForm(emptyForm);
    setErrors({});
    setResult(null);
    setStatus("idle");
  }

  return { form, errors, status, result, trap, slots, setTrap, update, updateDate, submit, reset };
}

export type BookingController = ReturnType<typeof useBookingForm>;
