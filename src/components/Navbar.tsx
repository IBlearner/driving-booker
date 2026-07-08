import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { siteConfig } from "@/config";
import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t.nav.home, icon: "home" },
    { to: "/information", label: t.nav.info, icon: "info" },
    { to: "/book", label: t.nav.book, icon: "event_available" },
  ];

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Primary">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo">
            <Icon name="directions_car" />
          </span>
          {siteConfig.businessName}
        </Link>

        <div className="navbar__links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `navbar__link${isActive ? " is-active" : ""}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__right">
          <LanguageSwitcher />
          <Link to="/book" className="btn btn--primary navbar__cta">
            {t.nav.bookCta}
          </Link>
          <button type="button" className="navbar__toggle" aria-label={t.nav.menu} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <div className="container mobile-menu__inner">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `mobile-menu__link${isActive ? " is-active" : ""}`}>
                <Icon name={link.icon} />
                {link.label}
              </NavLink>
            ))}
            <Link to="/book" className="btn btn--primary mobile-menu__cta">
              {t.nav.bookCta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
