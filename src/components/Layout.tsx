import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ContactBar } from "./ContactBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StructuredData } from "./StructuredData";

export function Layout() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  // Scroll to top on route change (instantly, not the page-wide smooth scroll).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <ContactBar />
      <Navbar />
      <main className="main" id="main">
        <Outlet />
      </main>
      <Footer />
      <StructuredData />
    </div>
  );
}
