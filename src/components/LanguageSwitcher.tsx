import { useCallback, useRef, useState } from "react";
import { useClickOutside, useEscapeKey } from "@/hooks/useDismiss";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";
import { Icon } from "./Icon";

// "dropdown" is a compact menu for the navbar; "inline" lists every language
// as a button row (used inside the mobile menu).
export function LanguageSwitcher({ variant = "dropdown" }: { variant?: "dropdown" | "inline" }) {
  return variant === "inline" ? <InlineSwitcher /> : <DropdownSwitcher />;
}

function InlineSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="lang-inline" role="group" aria-label={t.nav.language}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          lang={lang.htmlLang}
          className={`lang-inline__button${lang.code === language ? " is-active" : ""}`}
          aria-pressed={lang.code === language}
          onClick={() => setLanguage(lang.code)}
        >
          {lang.native}
        </button>
      ))}
    </div>
  );
}

function DropdownSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const current = languages.find((l) => l.code === language);

  const close = useCallback(() => setOpen(false), []);
  const closeAndRefocus = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);
  useClickOutside(open, ref, close);
  useEscapeKey(open, closeAndRefocus);

  return (
    <div className="lang" ref={ref}>
      <button
        ref={buttonRef}
        type="button"
        className="lang__button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={t.nav.language}
      >
        <Icon name="translate" />
        <span className="lang__current">{current?.native}</span>
        <Icon name="expand_more" className="lang__chevron" />
      </button>

      {open && (
        <ul className="lang__menu" id="language-menu">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                lang={lang.htmlLang}
                aria-current={lang.code === language ? "true" : undefined}
                className={`lang__option${lang.code === language ? " is-active" : ""}`}
                onClick={() => {
                  setLanguage(lang.code);
                  closeAndRefocus();
                }}
              >
                {lang.native}
                <span className="lang__native">{lang.label}</span>
                {lang.code === language && <Icon name="check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
