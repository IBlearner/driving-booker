import { describe, expect, it } from "vitest";
import { formatDate, formatTime, getSlotsForDate, isSunday, toISODate } from "./availability";

describe("getSlotsForDate", () => {
  it("returns nothing without a date", () => {
    expect(getSlotsForDate("")).toEqual([]);
  });

  it("is closed on Sundays", () => {
    expect(isSunday("2030-01-06")).toBe(true);
    expect(getSlotsForDate("2030-01-06")).toEqual([]);
  });

  it("offers the Saturday timetable on Saturdays", () => {
    expect(isSunday("2030-01-05")).toBe(false);
    expect(getSlotsForDate("2030-01-05")).toEqual(["08:00", "09:30", "11:00", "12:30"]);
  });

  it("is deterministic for a given weekday", () => {
    expect(getSlotsForDate("2030-01-08")).toEqual(getSlotsForDate("2030-01-08"));
    expect(getSlotsForDate("2030-01-08").length).toBeGreaterThan(0);
  });

  it("hides slots that have already started when the date is today", () => {
    const now = new Date(2030, 0, 5, 10, 0); // Saturday 10:00
    expect(getSlotsForDate("2030-01-05", now)).toEqual(["11:00", "12:30"]);
  });

  it("keeps every slot for a future date", () => {
    const now = new Date(2030, 0, 4, 23, 0);
    expect(getSlotsForDate("2030-01-05", now)).toHaveLength(4);
  });
});

describe("toISODate", () => {
  it("uses the local calendar date, not UTC", () => {
    expect(toISODate(new Date(2030, 0, 5, 23, 30))).toBe("2030-01-05");
    expect(toISODate(new Date(2030, 11, 9, 0, 5))).toBe("2030-12-09");
  });
});

describe("formatTime", () => {
  it("formats afternoon times in 12-hour style", () => {
    expect(formatTime("14:00")).toMatch(/^2:00\s?pm$/i);
  });

  it("formats midnight-hour and noon correctly", () => {
    expect(formatTime("12:30")).toMatch(/^12:30\s?pm$/i);
    expect(formatTime("08:00")).toMatch(/^8:00\s?am$/i);
  });
});

describe("formatDate", () => {
  it("includes the weekday and the year", () => {
    const text = formatDate("2030-01-05");
    expect(text).toContain("Saturday");
    expect(text).toContain("2030");
  });
});
