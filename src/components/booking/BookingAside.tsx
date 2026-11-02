import { mailHref, siteConfig, telHref } from "@/config";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "../Icon";

// Contact details and what happens after a request is sent.
export function BookingAside() {
  const { t } = useLanguage();

  return (
    <aside className="booking-aside">
      <div className="info-card info-card--primary">
        <h2 className="info-card__title">{t.book.asideTitle}</h2>
        <p className="info-card__text">{t.book.asideText}</p>
        <div className="info-card__list">
          <p className="info-card__row">
            <Icon name="person" />
            {siteConfig.instructorName}
          </p>
          <p className="info-card__row">
            <Icon name="call" />
            <a href={telHref}>{siteConfig.phone}</a>
          </p>
          <p className="info-card__row">
            <Icon name="mail" />
            <a href={mailHref}>{siteConfig.email}</a>
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2 className="info-card__title">{t.book.summaryTitle}</h2>
        <div className="info-card__list">
          <p className="info-card__row">
            <Icon name="mark_email_read" />
            {t.book.summary.confirm}
          </p>
          <p className="info-card__row">
            <Icon name="pin_drop" />
            {t.book.summary.pickup}
          </p>
          <p className="info-card__row">
            <Icon name="money_off" />
            {t.book.summary.payment}
          </p>
        </div>
      </div>
    </aside>
  );
}
