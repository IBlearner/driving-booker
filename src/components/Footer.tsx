import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { siteConfig, telHref, mailHref } from "@/config";
import { Icon } from "./Icon";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <span className="footer__brand">
            <span className="footer__logo">
              <Icon name="directions_car" />
            </span>
            {siteConfig.businessName}
          </span>
          <p className="footer__desc">{t.footer.tagline}</p>
        </div>

        <div>
          <h2 className="footer__title">{t.footer.quickLinks}</h2>
          <ul className="footer__list">
            <li>
              <Link className="footer__link" to="/">
                <Icon name="chevron_right" />
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/information">
                <Icon name="chevron_right" />
                {t.nav.info}
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/book">
                <Icon name="chevron_right" />
                {t.nav.book}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">{t.footer.contactTitle}</h2>
          <ul className="footer__list">
            <li>
              <a className="footer__link" href={telHref}>
                <Icon name="call" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a className="footer__link" href={mailHref}>
                <Icon name="mail" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="footer__link">
                <Icon name="location_on" />
                {siteConfig.serviceArea}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} {siteConfig.businessName}.{" "}
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
