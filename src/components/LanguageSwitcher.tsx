import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";
import { Icon } from "./Icon";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
      >
        <Icon name="translate" />
        <span className="lang__current">{current?.native}</span>
        <Icon name="expand_more" className="lang__chevron" />
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label={t.nav.language}>
          {languages.map((lang) => (
            <li key={lang.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={lang.code === language}
                className={`lang__option${
                  lang.code === language ? " is-active" : ""
                }`}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
              >
                {lang.label}
                <span className="lang__native">{lang.native}</span>
                {lang.code === language && <Icon name="check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
