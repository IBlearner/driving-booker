import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { format } from "@/i18n/format";
import { siteConfig, telHref, textVars } from "@/config";
import { aboutTags, lessons } from "@/content";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { Seo } from "@/components/Seo";
import { Stats } from "@/components/Stats";

export function InformationPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="info" />
      <PageHeader title={t.info.headerTitle} lead={t.info.headerLead} />

      {/* About the instructor */}
      <section className="section">
        <div className="container">
          <div className="about">
            <div className="about__body">
              <h2 className="section__title">{format(t.info.aboutTitle, textVars)}</h2>
              {t.info.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{format(paragraph, textVars)}</p>
              ))}
            </div>
            <aside className="about__card">
              <h3 className="about__card-title">{t.info.glanceTitle}</h3>
              <ul className="tag-list">
                {aboutTags.map((tag) => (
                  <li className="tag-list__item" key={tag.id}>
                    <Icon name={tag.icon} />
                    {t.info.tags[tag.id]}
                  </li>
                ))}
              </ul>
              <Stats />
            </aside>
          </div>
        </div>
      </section>

      {/* Lessons offered */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">{t.info.lessonsEyebrow}</span>
            <h2 className="section__title">{t.info.lessonsTitle}</h2>
            <p className="section__subtitle">{t.info.lessonsSubtitle}</p>
          </div>
          <div className="lessons-grid">
            {lessons.map((lesson) => {
              const copy = t.info.lessons[lesson.id];
              return (
                <article className={`lesson-card${lesson.featured ? " lesson-card--featured" : ""}`} key={lesson.id}>
                  {lesson.featured && <span className="lesson-card__badge">{t.info.bestValue}</span>}
                  <span className="lesson-card__icon">
                    <Icon name={lesson.icon} />
                  </span>
                  <h3 className="lesson-card__title">{copy.name}</h3>
                  <p className="lesson-card__price">
                    ${lesson.price} <span>{copy.unit}</span>
                  </p>
                  <p className="lesson-card__text">{copy.text}</p>
                  <Link to={`/book?lesson=${lesson.id}`} className="lesson-card__link">
                    {t.info.bookLesson}
                    <Icon name="arrow_forward" />
                  </Link>
                </article>
              );
            })}
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
            {t.info.faqs.map((item) => (
              <details className="faq__item" key={item.q}>
                <summary className="faq__q">
                  {item.q}
                  <Icon name="expand_more" />
                </summary>
                <p className="faq__a">{format(item.a, textVars)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t.info.ctaTitle} text={t.info.ctaText}>
        <Link to="/book" className="btn btn--accent">
          <Icon name="event" />
          {t.info.ctaBook}
        </Link>
        <a href={telHref} className="btn btn--inverse" aria-label={`${t.info.ctaCall} ${siteConfig.phone}`}>
          <Icon name="call" />
          {t.info.ctaCall}
        </a>
      </CtaBand>
    </>
  );
}
