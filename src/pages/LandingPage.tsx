import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { telHref } from "@/config";
import { features } from "@/content";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { Seo } from "@/components/Seo";
import { Stats } from "@/components/Stats";

const heroImage = "/images/driving.png";

export function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="home" />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">
              <Icon name="verified" />
              {t.home.heroEyebrow}
            </span>
            <h1 className="hero__title">
              {t.home.heroTitle} <span>{t.home.heroTitleAccent}</span>
            </h1>
            <p className="hero__lead">{t.home.heroLead}</p>
            <div className="hero__actions">
              <Link to="/book" className="btn btn--primary">
                <Icon name="event_available" />
                {t.home.heroBook}
              </Link>
              <a href={telHref} className="btn btn--outline">
                <Icon name="call" />
                {t.home.heroCall}
              </a>
            </div>

            <Stats className="hero__stats" />
          </div>

          <div className="hero__media">
            <img className="hero__image" src={heroImage} alt={t.home.heroImageAlt} width={352} height={345} />
            <div className="hero__badge">
              <Icon name="verified_user" />
              <div>
                <strong>{t.home.badgeTitle}</strong>
                <span>{t.home.badgeText}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">
              <Icon name="star" />
              {t.home.whyEyebrow}
            </span>
            <h2 className="section__title">{t.home.whyTitle}</h2>
            <p className="section__subtitle">{t.home.whySubtitle}</p>
          </div>

          <div className="card-grid">
            {features.map((f) => (
              <article className="feature-card" key={f.id}>
                <span className="feature-card__icon">
                  <Icon name={f.icon} />
                </span>
                <h3 className="feature-card__title">{t.home.features[f.id].title}</h3>
                <p className="feature-card__text">{t.home.features[f.id].text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">
              <Icon name="route" />
              {t.home.stepsEyebrow}
            </span>
            <h2 className="section__title">{t.home.stepsTitle}</h2>
          </div>

          <ol className="steps">
            {t.home.steps.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title={t.home.ctaTitle} text={t.home.ctaText}>
        <Link to="/book" className="btn btn--accent">
          <Icon name="event_available" />
          {t.home.ctaBook}
        </Link>
        <Link to="/information" className="btn btn--inverse">
          {t.home.ctaLearn}
        </Link>
      </CtaBand>
    </>
  );
}
