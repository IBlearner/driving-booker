// Simple, deterministic availability model.
// Time slots depend on the selected date's weekday.
// (No backend required — this simulates an instructor's weekly schedule, so
// the booking form treats the chosen time as a request the instructor confirms.)

const DEFAULT_LOCALE = "en-AU";

const WEEKDAY_SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

const SATURDAY_SLOTS = ["08:00", "09:30", "11:00", "12:30"];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

// Reads yyyy-mm-dd as local midnight (a bare date string would be taken as UTC).
function parseISODate(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00`);
}

// Returns the ISO date (yyyy-mm-dd) for the given moment in local time; defaults to today.
export function toISODate(now: Date = new Date()): string {
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

export function isSunday(isoDate: string): boolean {
  return Boolean(isoDate) && parseISODate(isoDate).getDay() === 0;
}

// The timetable for a calendar day, before slots that have already started are removed.
function timetableFor(date: Date): string[] {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  if (day === 0) return []; // closed Sundays
  if (day === 6) return SATURDAY_SLOTS;

  // Pseudo-randomly remove a slot or two based on the date so different
  // days show slightly different availability, but consistently.
  const seed = date.getDate();
  return WEEKDAY_SLOTS.filter((_, i) => (seed + i) % 5 !== 0);
}

// Given an ISO date string, return available time slots.
// Sundays are closed (empty array). Slots that have already started are
// removed when the date is today.
export function getSlotsForDate(isoDate: string, now: Date = new Date()): string[] {
  if (!isoDate) return [];

  const slots = timetableFor(parseISODate(isoDate));
  if (isoDate !== toISODate(now)) return slots;

  const current = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  return slots.filter((slot) => slot > current);
}

// Format a 24h time (e.g. "14:00") into a friendly label for the locale ("2:00 pm").
export function formatTime(time: string, locale = DEFAULT_LOCALE): string {
  const [h, m] = time.split(":").map(Number);
  const date = new Date(2000, 0, 1, h, m);
  return new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit", hour12: true }).format(date);
}

// Format an ISO date (e.g. "2026-11-03") as a long, human-readable date.
export function formatDate(isoDate: string, locale = DEFAULT_LOCALE): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(parseISODate(isoDate));
}
