import { useMemo, useState, type FormEvent } from "react";
import { useLanguage, format } from "@/i18n/LanguageContext";
import { siteConfig, telHref, mailHref } from "@/config";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { getSlotsForDate, todayISO, formatTime } from "@/lib/availability";
import { sendBooking, type BookingResult } from "@/lib/emailBooking";

interface FormState {
  name: string;
  email: string;
  phone: string;
  experience: string;
  hasCar: string;
  date: string;
  time: string;
  notes: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  hasCar: "",
  date: "",
  time: "",
  notes: "",
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "error";

export function BookNowPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<BookingResult | null>(null);

  const slots = useMemo(() => getSlotsForDate(form.date), [form.date]);

  const experienceOptions = [
    { value: "none", label: t.book.expNone },
    { value: "some", label: t.book.expSome },
    { value: "refresher", label: t.book.expRefresher },
    { value: "test", label: t.book.expTest },
  ];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.name.trim()) next.name = t.book.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = t.book.errEmail;
    if (form.phone.replace(/[^\d]/g, "").length < 7)
      next.phone = t.book.errPhone;
    if (!form.experience) next.experience = t.book.errExperience;
    if (!form.hasCar) next.hasCar = t.book.errHasCar;
    if (!form.date) next.date = t.book.errDate;
    if (!form.time) next.time = t.book.errTime;
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("submitting");
    try {
      const experienceLabel =
        experienceOptions.find((o) => o.value === form.experience)?.label ??
        form.experience;
      const res = await sendBooking({
        name: form.name,
        email: form.email,
        phone: form.phone,
        experience: experienceLabel,
        hasCar: form.hasCar === "yes" ? t.book.hasCarYes : t.book.hasCarNo,
        date: form.date,
        time: formatTime(form.time),
        notes: form.notes,
      });
      setResult(res);
      setStatus("idle");
    } catch (err) {
      console.log("[v0] Booking submission failed:", err);
      setStatus("error");
    }
  }

  function reset() {
    setForm(emptyForm);
    setErrors({});
    setResult(null);
    setStatus("idle");
  }

  // Success screen
  if (result) {
    const message =
      result === "sent"
        ? format(t.book.successText, { name: form.name })
        : format(t.book.successFallback, { name: form.name });
    return (
      <>
        <PageHeader title={t.book.headerTitle} lead={t.book.headerLead} />
        <section className="section">
          <div className="container">
            <div
              className="form-card"
              style={{ maxWidth: 640, margin: "0 auto" }}
            >
              <div
                className="alert alert--success"
                style={{ marginBottom: "1.25rem" }}
              >
                <Icon name="check_circle" />
                <div>
                  <strong style={{ display: "block", marginBottom: 4 }}>
                    {t.book.successTitle}
                  </strong>
                  {message}
                </div>
              </div>
              <button
                type="button"
                className="btn btn--primary"
                onClick={reset}
              >
                <Icon name="add" />
                {t.book.another}
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={t.book.headerTitle} lead={t.book.headerLead} />

      <section className="section">
        <div className="container">
          <div className="booking__layout">
            {/* Form */}
            <div className="form-card">
              <h2
                className="section__title"
                style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}
              >
                {t.book.formTitle}
              </h2>

              {status === "error" && (
                <div
                  className="alert alert--error"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <Icon name="error" />
                  <span>{t.book.errorText}</span>
                </div>
              )}

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__grid">
                  <Field
                    label={t.book.name}
                    required
                    requiredLabel={t.book.required}
                    error={errors.name}
                  >
                    <input
                      className={`field__control${
                        errors.name ? " has-error" : ""
                      }`}
                      type="text"
                      autoComplete="name"
                      placeholder={t.book.namePlaceholder}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </Field>

                  <Field
                    label={t.book.phone}
                    required
                    requiredLabel={t.book.required}
                    error={errors.phone}
                  >
                    <input
                      className={`field__control${
                        errors.phone ? " has-error" : ""
                      }`}
                      type="tel"
                      autoComplete="tel"
                      placeholder={t.book.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </Field>
                </div>

                <Field
                  label={t.book.email}
                  required
                  requiredLabel={t.book.required}
                  error={errors.email}
                  full
                >
                  <input
                    className={`field__control${
                      errors.email ? " has-error" : ""
                    }`}
                    type="email"
                    autoComplete="email"
                    placeholder={t.book.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </Field>

                <Field
                  label={t.book.experience}
                  required
                  requiredLabel={t.book.required}
                  error={errors.experience}
                  full
                >
                  <select
                    className={`field__control${
                      errors.experience ? " has-error" : ""
                    }`}
                    value={form.experience}
                    onChange={(e) => update("experience", e.target.value)}
                  >
                    <option value="" disabled>
                      {t.book.experienceSelect}
                    </option>
                    {experienceOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Access to a car */}
                <Field
                  label={t.book.hasCar}
                  required
                  requiredLabel={t.book.required}
                  error={errors.hasCar}
                  full
                >
                  <div className="choice-group">
                    {[
                      { value: "yes", label: t.book.hasCarYes, icon: "check" },
                      { value: "no", label: t.book.hasCarNo, icon: "close" },
                    ].map((opt) => (
                      <label className="choice" key={opt.value}>
                        <input
                          type="radio"
                          name="hasCar"
                          value={opt.value}
                          checked={form.hasCar === opt.value}
                          onChange={(e) => update("hasCar", e.target.value)}
                        />
                        <span className="choice__box">
                          <Icon name={opt.icon} />
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </Field>

                {/* Date */}
                <Field
                  label={t.book.date}
                  required
                  requiredLabel={t.book.required}
                  error={errors.date}
                  hint={t.book.dateHint}
                  full
                >
                  <input
                    className={`field__control${
                      errors.date ? " has-error" : ""
                    }`}
                    type="date"
                    min={todayISO()}
                    value={form.date}
                    onChange={(e) => {
                      update("date", e.target.value);
                      update("time", ""); // reset time when date changes
                    }}
                  />
                </Field>

                {/* Time slots */}
                <Field
                  label={t.book.time}
                  required
                  requiredLabel={t.book.required}
                  error={errors.time}
                  full
                >
                  {!form.date ? (
                    <p className="time-empty">{t.book.timeHintSelect}</p>
                  ) : slots.length === 0 ? (
                    <p className="time-empty">{t.book.timeHintNone}</p>
                  ) : (
                    <div className="time-grid">
                      {slots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          className={`time-slot${
                            form.time === slot ? " is-selected" : ""
                          }`}
                          onClick={() => update("time", slot)}
                          aria-pressed={form.time === slot}
                        >
                          {formatTime(slot)}
                        </button>
                      ))}
                    </div>
                  )}
                </Field>

                <Field label={t.book.notes} full>
                  <textarea
                    className="field__control"
                    placeholder={t.book.notesPlaceholder}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                  />
                </Field>

                <button
                  type="submit"
                  className="btn btn--primary btn--block"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    t.book.submitting
                  ) : (
                    <>
                      <Icon name="send" />
                      {t.book.submit}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Aside */}
            <aside className="booking-aside">
              <div className="info-card info-card--primary">
                <h2 className="info-card__title">{t.book.asideTitle}</h2>
                <p style={{ opacity: 0.9, marginBottom: "1.1rem" }}>
                  {t.book.asideText}
                </p>
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
                    {t.book.summary1}
                  </p>
                  <p className="info-card__row">
                    <Icon name="pin_drop" />
                    {t.book.summary2}
                  </p>
                  <p className="info-card__row">
                    <Icon name="money_off" />
                    {t.book.summary3}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  requiredLabel?: string;
  error?: string;
  hint?: string;
  full?: boolean;
}

function Field({
  label,
  children,
  required,
  requiredLabel,
  error,
  hint,
  full,
}: FieldProps) {
  return (
    <div className={`field${full ? " field--full" : ""}`}>
      <label className="field__label">
        {label}
        {required && (
          <span className="req" title={requiredLabel} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <span className="field__hint">{hint}</span>}
      {error && (
        <span className="field__error" role="alert">
          <Icon name="error_outline" />
          {error}
        </span>
      )}
    </div>
  );
}
