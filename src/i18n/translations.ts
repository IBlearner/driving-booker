import { en } from "./en";
import { vi } from "./vi";
import { zh } from "./zh";
import type { Dict, Language } from "./types";

export type { Dict, Language } from "./types";

export const languages: {
  code: Language;
  label: string;
  native: string;
  // BCP 47 tag for <html lang> and Intl formatting.
  htmlLang: string;
}[] = [
  { code: "en", label: "English", native: "English", htmlLang: "en-AU" },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt", htmlLang: "vi" },
  { code: "zh", label: "Chinese (Simplified)", native: "简体中文", htmlLang: "zh-Hans" },
];

export const translations: Record<Language, Dict> = { en, vi, zh };

// Shown to first-time visitors; a saved choice from the language switcher overrides it.
export const defaultLanguage: Language = "vi";
