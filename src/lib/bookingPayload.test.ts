import { describe, expect, it } from "vitest";
import { buildPayload } from "./bookingPayload";
import { emptyForm, type FormState } from "./validation";

const form: FormState = {
  ...emptyForm,
  name: "  Jamie Smith ",
  email: " jamie@example.com ",
  phone: " 0400 123 456 ",
  lesson: "package",
  experience: "none",
  hasCar: "yes",
  date: "2030-01-05", // a Saturday
  time: "09:30",
  notes: "  Pick me up at the station ",
};

describe("buildPayload", () => {
  it("trims the text fields", () => {
    const payload = buildPayload(form, "en");
    expect(payload.name).toBe("Jamie Smith");
    expect(payload.email).toBe("jamie@example.com");
    expect(payload.phone).toBe("0400 123 456");
    expect(payload.notes).toBe("Pick me up at the station");
  });

  it("describes the answers in English whatever language the form used", () => {
    const payload = buildPayload(form, "vi");
    expect(payload.lesson).toBe("Beginner package");
    expect(payload.experience).toBe("Complete beginner");
    expect(payload.hasCar).toBe("Yes");
    expect(payload.date).toContain("Saturday");
    expect(payload.date).toContain("(2030-01-05)");
    expect(payload.time).toMatch(/^9:30\s?am$/i);
  });

  it("names the language the visitor used so the instructor can reply in it", () => {
    expect(buildPayload(form, "vi").language).toBe("Vietnamese");
    expect(buildPayload(form, "zh").language).toBe("Chinese (Simplified)");
  });

  it("handles an unspecified lesson and no car", () => {
    const payload = buildPayload({ ...form, lesson: "", hasCar: "no" }, "en");
    expect(payload.lesson).toBe("Not specified");
    expect(payload.hasCar).toBe("No");
  });
});
