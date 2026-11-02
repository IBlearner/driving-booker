import { useCallback, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "@/config";
import { navLinks } from "@/content";
import { useEscapeKey } from "@/hooks/useDismiss";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Booking has its own prominent button, so it isn't repeated as a link.
const pageLinks = navLinks.filter((link) => link.id !== "book");

const linkClass =
  (base: string) =>
  ({ isActive }: { isActive: boolean }) =>
    `${base}${isActive ? " is-active" : ""}`;

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the mobile menu and returns focus to its toggle.
  const closeAndRefocus = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);
  useEscapeKey(open, closeAndRefocus);

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label={t.nav.primary}>
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo">
            <Icon name="directions_car" />
          </span>
          {siteConfig.businessName}
        </Link>

        <div className="navbar__links">
          {pageLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass("navbar__link")}>
              {t.nav[link.id]}
            </NavLink>
          ))}
        </div>

        <div className="navbar__right">
          <div className="navbar__lang">
            <LanguageSwitcher />
          </div>
          <Link to="/book" className="btn btn--primary navbar__cta">
            {t.nav.bookCta}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="navbar__toggle"
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="container mobile-menu__inner">
            {pageLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass("mobile-menu__link")}
                onClick={() => setOpen(false)}
              >
                <Icon name={link.icon} />
                {t.nav[link.id]}
              </NavLink>
            ))}
            <Link to="/book" className="btn btn--primary mobile-menu__cta" onClick={() => setOpen(false)}>
              {t.nav.bookCta}
            </Link>
            <div className="mobile-menu__lang">
              <LanguageSwitcher variant="inline" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
