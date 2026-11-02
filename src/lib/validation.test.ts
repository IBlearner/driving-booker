import { describe, expect, it } from "vitest";
import { emptyForm, validate, type FormState } from "./validation";

const valid: FormState = {
  ...emptyForm,
  name: "Jamie Smith",
  email: "jamie@example.com",
  phone: "0400 123 456",
  experience: "none",
  hasCar: "yes",
  date: "2030-01-05", // a Saturday
  time: "09:30",
};

describe("validate", () => {
  it("accepts a complete form", () => {
    expect(validate(valid)).toEqual({});
  });

  it("flags every required field on an empty form", () => {
    expect(Object.keys(validate(emptyForm)).sort()).toEqual([
      "date",
      "email",
      "experience",
      "hasCar",
      "name",
      "phone",
      "time",
    ]);
  });

  it("does not require the optional fields", () => {
    expect(validate({ ...valid, lesson: "", notes: "" })).toEqual({});
  });

  it("rejects malformed emails and short phone numbers", () => {
    expect(validate({ ...valid, email: "jamie@" }).email).toBe("email");
    expect(validate({ ...valid, phone: "123" }).phone).toBe("phone");
  });

  it("ignores whitespace-only names and surrounding email whitespace", () => {
    expect(validate({ ...valid, name: "   " }).name).toBe("name");
    expect(validate({ ...valid, email: " jamie@example.com " }).email).toBeUndefined();
  });

  it("reports Sundays as closed rather than as a missing date", () => {
    expect(validate({ ...valid, date: "2030-01-06" }).date).toBe("closed");
  });
});
