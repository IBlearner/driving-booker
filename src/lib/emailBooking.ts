import emailjs from "@emailjs/browser";
import { emailConfig, isEmailConfigured, siteConfig } from "@/config";

export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  experience: string;
  hasCar: string;
  date: string;
  time: string;
  notes: string;
}

export type BookingResult = "sent" | "fallback";

// Sends the booking request via EmailJS when configured.
// If EmailJS env vars are missing, resolves as "fallback" so the UI can
// still show a confirmation (useful for local review without a provider).
export async function sendBooking(payload: BookingPayload): Promise<BookingResult> {
  if (!isEmailConfigured) {
    // Simulate a short network delay for a realistic UX.
    await new Promise((resolve) => setTimeout(resolve, 600));
    return "fallback";
  }

  await emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    {
      to_name: siteConfig.instructorName,
      from_name: payload.name,
      reply_to: payload.email,
      phone: payload.phone,
      experience: payload.experience,
      has_car: payload.hasCar,
      preferred_date: payload.date,
      preferred_time: payload.time,
      notes: payload.notes || "-",
    },
    { publicKey: emailConfig.publicKey }
  );

  return "sent";
}
