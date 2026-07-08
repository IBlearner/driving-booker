import { useLanguage } from "@/i18n/LanguageContext";
import { siteConfig, telHref, mailHref } from "@/config";
import { Icon } from "./Icon";

// Prominent contact details displayed at the very top of every page.
export function ContactBar() {
  const { t } = useLanguage();

  return (
    <div className="contactbar">
      <div className="container">
        <div className="contactbar__inner">
          <div className="contactbar__group">
            <a className="contactbar__item" href={telHref}>
              <Icon name="call" />
              <span>{siteConfig.phone}</span>
            </a>
            <a className="contactbar__item" href={mailHref}>
              <Icon name="mail" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <span className="contactbar__area">
            <Icon name="location_on" />
            {t.contact.area} {siteConfig.serviceArea}
          </span>
        </div>
      </div>
    </div>
  );
}
