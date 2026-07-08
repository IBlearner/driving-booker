// Simple, deterministic availability model.
// Time slots depend on the selected date's weekday.
// (No backend required — this simulates an instructor's weekly schedule.)

const WEEKDAY_SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

const SATURDAY_SLOTS = ["08:00", "09:30", "11:00", "12:30"];

// Returns the ISO date (yyyy-mm-dd) for today, used as the date picker min.
export function todayISO(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

// Given an ISO date string, return available time slots.
// Sundays are closed (empty array).
export function getSlotsForDate(isoDate: string): string[] {
  if (!isoDate) return [];
  const date = new Date(`${isoDate}T00:00:00`);
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday

  if (day === 0) return []; // closed Sundays
  if (day === 6) return SATURDAY_SLOTS;

  // Pseudo-randomly remove a slot or two based on the date so different
  // days show slightly different availability, but consistently.
  const seed = date.getDate();
  return WEEKDAY_SLOTS.filter((_, i) => (seed + i) % 5 !== 0);
}

// Format a 24h time (e.g. "14:00") into a friendly label ("2:00 PM").
export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}
