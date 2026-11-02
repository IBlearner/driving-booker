import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "./App";
import { navLinks } from "./content";
import { LanguageProvider } from "./i18n/LanguageContext";
import { defaultLanguage, translations } from "./i18n/translations";

// Server-renders the whole app at a URL. There is no browser here, so this checks
// what each route renders first, not what happens after a click.
function renderAt(url: string): string {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[url]}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>
  );
}

const t = translations[defaultLanguage];

// The renderer escapes text, so "A & B" appears as "A &amp; B" in the markup.
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

describe("routes", () => {
  it.each([
    ["/", t.home.heroTitle],
    ["/information", t.info.headerTitle],
    ["/book", t.book.headerTitle],
    ["/no-such-page", t.notFound.title],
  ])("%s renders its page in the default language", (url, heading) => {
    expect(renderAt(url)).toContain(escapeHtml(heading));
  });

  it("starts in Vietnamese", () => {
    expect(defaultLanguage).toBe("vi");
  });

  it("links every page from the footer, and every page except booking from the navbar", () => {
    const html = renderAt("/");
    for (const link of navLinks) {
      expect(html).toContain(`href="${link.to}"`);
      expect(html).toContain(escapeHtml(t.nav[link.id]));
    }
  });
});

describe("booking form", () => {
  const html = renderAt("/book?lesson=package");

  it("labels each field and ties it to its control", () => {
    for (const name of ["name", "phone", "email", "lesson", "experience", "date", "notes"]) {
      expect(html).toContain(`for="field-${name}"`);
      expect(html).toContain(`id="field-${name}"`);
    }
  });

  it("names the radio and time groups with aria-labelledby", () => {
    expect(html).toContain('aria-labelledby="field-hasCar-label"');
    expect(html).toContain('aria-labelledby="field-time-label"');
  });

  it("shows a placeholder on each contact field", () => {
    for (const text of [t.book.namePlaceholder, t.book.phonePlaceholder, t.book.emailPlaceholder]) {
      expect(html).toContain(`placeholder="${escapeHtml(text)}"`);
    }
  });

  it("marks required fields for screen readers", () => {
    expect(html).toContain(escapeHtml(`(${t.book.required})`));
  });

  it("starts without any error showing", () => {
    expect(html).not.toContain('aria-invalid="true"');
    expect(html).not.toContain("has-error");
    expect(html).not.toContain('role="alert"');
  });

  it("preselects the lesson from ?lesson=", () => {
    expect(html).toMatch(/<option[^>]*value="package"[^>]*selected/);
  });

  it("asks for a date before offering times", () => {
    expect(html).toContain(escapeHtml(t.book.timeHintSelect));
  });

  it("keeps the honeypot out of sight and out of the accessibility tree", () => {
    expect(html).toMatch(/class="hp"[^>]*aria-hidden="true"/);
  });
});
