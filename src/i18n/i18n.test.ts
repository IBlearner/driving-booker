import { describe, expect, it } from "vitest";
import { format } from "./format";
import { languages, translations } from "./translations";

describe("format", () => {
  it("replaces placeholders", () => {
    expect(format("Meet {name}, {years}+ years", { name: "Sam", years: 12 })).toBe("Meet Sam, 12+ years");
  });

  it("leaves unknown placeholders visible", () => {
    expect(format("Hello {who}", {})).toBe("Hello {who}");
  });
});

// Collect every "a.b.c" path to a string so translations can be compared structurally.
function paths(value: unknown, prefix = ""): string[] {
  if (typeof value === "string") return [prefix];
  if (Array.isArray(value)) return value.flatMap((v, i) => paths(v, `${prefix}[${i}]`));
  return Object.entries(value as object).flatMap(([k, v]) => paths(v, prefix ? `${prefix}.${k}` : k));
}

function placeholders(text: string): string[] {
  return [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
}

describe("translations", () => {
  const en = translations.en;

  it.each(["vi", "zh"] as const)("%s has exactly the same keys as English", (code) => {
    expect(paths(translations[code]).sort()).toEqual(paths(en).sort());
  });

  it.each(["vi", "zh"] as const)("%s uses the same {placeholders} as English", (code) => {
    for (const path of paths(en)) {
      const get = (dict: unknown) =>
        path
          .split(/[.[\]]+/)
          .filter(Boolean)
          .reduce<unknown>((acc, key) => (acc as Record<string, unknown>)[key], dict) as string;
      expect(placeholders(get(translations[code])), path).toEqual(placeholders(get(en)));
    }
  });

  it("uses valid BCP 47 tags for every language", () => {
    for (const lang of languages) {
      expect(() => new Intl.Locale(lang.htmlLang)).not.toThrow();
    }
    expect(languages.find((l) => l.code === "zh")?.htmlLang).toBe("zh-Hans");
  });
});
