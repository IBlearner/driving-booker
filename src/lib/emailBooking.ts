import emailjs from "@emailjs/browser";
import { emailConfig, isEmailConfigured, siteConfig } from "@/config";

// Values are always in English so the instructor can read them, whichever
// language the visitor used. `language` says which one to reply in.
export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  lesson: string;
  experience: string;
  hasCar: string;
  date: string;
  time: string;
  notes: string;
  language: string;
}

export type BookingResult = "sent" | "fallback";

// Sends the booking request via EmailJS.
// Without EmailJS configured, development builds resolve as "fallback" so the
// UI can still be reviewed. Production builds fail instead, so a visitor is
// never told their request was sent when nothing was delivered.
export async function sendBooking(payload: BookingPayload): Promise<BookingResult> {
  if (!isEmailConfigured) {
    if (import.meta.env.DEV) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return "fallback";
    }
    throw new Error("EmailJS is not configured (VITE_EMAILJS_* variables are missing).");
  }

  await emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    {
      to_name: siteConfig.instructorName,
      from_name: payload.name,
      reply_to: payload.email,
      phone: payload.phone,
      lesson: payload.lesson,
      experience: payload.experience,
      has_car: payload.hasCar,
      preferred_date: payload.date,
      preferred_time: payload.time,
      notes: payload.notes || "-",
      language: payload.language,
    },
    { publicKey: emailConfig.publicKey }
  );

  return "sent";
}
