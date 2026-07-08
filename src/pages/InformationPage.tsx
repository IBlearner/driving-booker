import { Link } from "react-router-dom";
import { useLanguage, format } from "@/i18n/LanguageContext";
import { siteConfig, telHref, mailHref } from "@/config";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";

export function InformationPage() {
  const { t } = useLanguage();
  const vars = {
    name: siteConfig.instructorName,
    area: siteConfig.serviceArea,
  };

  const tags = [
    { icon: "verified_user", label: t.info.tagLicensed },
    { icon: "shield", label: t.info.tagInsured },
    { icon: "directions_car", label: t.info.tagDual },
    { icon: "sentiment_satisfied", label: t.info.tagFriendly },
  ];

  const lessons = [
    {
      icon: "school",
      name: t.info.lesson1Name,
      price: t.info.lesson1Price,
      text: t.info.lesson1Text,
    },
    {
      icon: "workspace_premium",
      name: t.info.lesson2Name,
      price: t.info.lesson2Price,
      text: t.info.lesson2Text,
    },
    {
      icon: "event_available",
      name: t.info.lesson3Name,
      price: t.info.lesson3Price,
      text: t.info.lesson3Text,
    },
    {
      icon: "autorenew",
      name: t.info.lesson4Name,
      price: t.info.lesson4Price,
      text: t.info.lesson4Text,
    },
  ];

  const faqs = [
    { q: t.info.faq1Q, a: format(t.info.faq1A, vars) },
    { q: t.info.faq2Q, a: format(t.info.faq2A, vars) },
    { q: t.info.faq3Q, a: format(t.info.faq3A, vars) },
    { q: t.info.faq4Q, a: format(t.info.faq4A, vars) },
  ];

  const stats = [
    { value: `${siteConfig.yearsExperience}+`, label: t.home.statYears },
    { value: `${siteConfig.studentsPassed}+`, label: t.home.statLearners },
    { value: `${siteConfig.passRate}%`, label: t.home.statPass },
  ];

  return (
    <>
      <PageHeader title={t.info.headerTitle} lead={t.info.headerLead} />

      {/* About the instructor */}
      <section className="section">
        <div className="container">
          <div className="about">
            <div className="about__media">
              <img src="/images/hero-car.png" alt={t.info.aboutTitle} loading="lazy" />
            </div>
            <div className="about__body">
              <h2 className="section__title">{format(t.info.aboutTitle, vars)}</h2>
              <p>{format(t.info.aboutP1, vars)}</p>
              <p>{format(t.info.aboutP2, vars)}</p>
              <p>{format(t.info.aboutP3, vars)}</p>
              <ul className="tag-list">
                {tags.map((tag, i) => (
                  <li className="tag-list__item" key={i}>
                    <Icon name={tag.icon} />
                    {tag.label}
                  </li>
                ))}
              </ul>
              <div className="stat-row">
                {stats.map((stat, i) => (
                  <div className="stat" key={i}>
                    <span className="stat__value">{stat.value}</span>
                    <span className="stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons offered */}
      <section className="section section--muted">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">{t.info.lessonsEyebrow}</span>
            <h2 className="section__title">{t.info.lessonsTitle}</h2>
            <p className="section__subtitle">{t.info.lessonsSubtitle}</p>
          </div>
          <div className="lessons-grid">
            {lessons.map((lesson, i) => (
              <article className="lesson-card" key={i}>
                <span className="lesson-card__icon">
                  <Icon name={lesson.icon} />
                </span>
                <h3 className="lesson-card__title">{lesson.name}</h3>
                <p className="lesson-card__price">{lesson.price}</p>
                <p className="lesson-card__text">{lesson.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">{t.info.faqEyebrow}</span>
            <h2 className="section__title">{t.info.faqTitle}</h2>
          </div>
          <div className="faq">
            {faqs.map((item, i) => (
              <details className="faq__item" key={i}>
                <summary className="faq__q">
                  {item.q}
                  <Icon name="expand_more" />
                </summary>
                <p className="faq__a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2 className="cta-band__title">{t.info.ctaTitle}</h2>
          <p className="cta-band__text">{t.info.ctaText}</p>
          <div className="cta-band__contacts">
            <a href={telHref} className="cta-band__contact">
              <Icon name="call" />
              {siteConfig.phone}
            </a>
            <a href={mailHref} className="cta-band__contact">
              <Icon name="mail" />
              {siteConfig.email}
            </a>
          </div>
          <div className="cta-band__actions">
            <Link to="/book" className="btn btn--light">
              <Icon name="event" />
              {t.info.ctaBook}
            </Link>
            <a href={telHref} className="btn btn--inverse">
              <Icon name="call" />
              {t.info.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
