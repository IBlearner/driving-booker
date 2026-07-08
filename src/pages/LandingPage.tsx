import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { telHref } from "@/config";
import { Icon } from "@/components/Icon";

const heroCar = "/images/hero-car.png";

export function LandingPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "sentiment_satisfied",
      title: t.home.feature1Title,
      text: t.home.feature1Text,
    },
    {
      icon: "event",
      title: t.home.feature2Title,
      text: t.home.feature2Text,
    },
    {
      icon: "directions_car",
      title: t.home.feature3Title,
      text: t.home.feature3Text,
    },
    { icon: "map", title: t.home.feature4Title, text: t.home.feature4Text },
    {
      icon: "tune",
      title: t.home.feature5Title,
      text: t.home.feature5Text,
    },
    {
      icon: "savings",
      title: t.home.feature6Title,
      text: t.home.feature6Text,
    },
  ];

  const steps = [
    { title: t.home.step1Title, text: t.home.step1Text },
    { title: t.home.step2Title, text: t.home.step2Text },
    { title: t.home.step3Title, text: t.home.step3Text },
  ];

  return (
    <>
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

            <div className="hero__stats">
              <div className="hero__stat">
                <strong>500+</strong>
                <span>{t.home.statLearners}</span>
              </div>
              <div className="hero__stat">
                <strong>95%</strong>
                <span>{t.home.statPass}</span>
              </div>
              <div className="hero__stat">
                <strong>12+</strong>
                <span>{t.home.statYears}</span>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <img className="hero__image" src={heroCar} alt="Driving school car with a rooftop learner sign parked on a sunny street" width={640} height={460} />
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
      <section className="section features">
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
              <article className="feature-card" key={f.title}>
                <span className="feature-card__icon">
                  <Icon name={f.icon} />
                </span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__text">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">
              <Icon name="route" />
              {t.home.stepsEyebrow}
            </span>
            <h2 className="section__title">{t.home.stepsTitle}</h2>
          </div>

          <div className="steps">
            {steps.map((s, i) => (
              <article className="step" key={s.title}>
                <span className="step__num">{i + 1}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaText}</p>
            <div className="cta-band__actions">
              <Link to="/book" className="btn btn--accent">
                <Icon name="event_available" />
                {t.home.ctaBook}
              </Link>
              <Link to="/information" className="btn btn--inverse">
                {t.home.ctaLearn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
