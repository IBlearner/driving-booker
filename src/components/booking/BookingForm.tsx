import { experienceIds, lessons } from "@/content";
import { useLanguage } from "@/i18n/LanguageContext";
import type { BookingController } from "@/hooks/useBookingForm";
import { toISODate } from "@/lib/availability";
import type { FormState } from "@/lib/validation";
import { Field } from "../Field";
import { Icon } from "../Icon";
import { ChoiceGroup } from "./ChoiceGroup";
import { TimeSlotPicker } from "./TimeSlotPicker";

// Contact fields share one layout; labels and placeholders are looked up by name
// (t.book.<name> and t.book.<name>Placeholder).
const textFields: { name: "name" | "phone" | "email"; type: string; autoComplete: string; full?: boolean }[] = [
  { name: "name", type: "text", autoComplete: "name" },
  { name: "phone", type: "tel", autoComplete: "tel" },
  { name: "email", type: "email", autoComplete: "email", full: true },
];

export function BookingForm({ booking }: { booking: BookingController }) {
  const { t } = useLanguage();
  const { form, errors, status, slots, trap, setTrap, update, updateDate, submit } = booking;

  const errorText = (key: keyof FormState) => (errors[key] ? t.book.errors[errors[key]] : undefined);

  return (
    <div className="form-card">
      <h2 className="form-card__title">{t.book.formTitle}</h2>

      {status === "error" && (
        <div className="alert alert--error alert--spaced" role="alert">
          <Icon name="error" />
          <span>{t.book.errorText}</span>
        </div>
      )}

      <form className="form" onSubmit={submit} noValidate>
        <div className="form__grid">
          {textFields.map(({ name, type, autoComplete, full }) => (
            <Field key={name} name={name} label={t.book[name]} required error={errorText(name)} full={full}>
              {(control) => (
                <input
                  {...control}
                  type={type}
                  autoComplete={autoComplete}
                  placeholder={t.book[`${name}Placeholder` as const]}
                  value={form[name]}
                  onChange={(e) => update(name, e.target.value)}
                />
              )}
            </Field>
          ))}
        </div>

        <Field name="lesson" label={t.book.lesson} full>
          {(control) => (
            <select {...control} value={form.lesson} onChange={(e) => update("lesson", e.target.value)}>
              <option value="">{t.book.lessonNone}</option>
              {lessons.map((lesson) => (
                <option key={lesson.id} value={lesson.id}>
                  {t.info.lessons[lesson.id].name} (${lesson.price} {t.info.lessons[lesson.id].unit})
                </option>
              ))}
            </select>
          )}
        </Field>

        <Field name="experience" label={t.book.experience} required error={errorText("experience")} full>
          {(control) => (
            <select {...control} value={form.experience} onChange={(e) => update("experience", e.target.value)}>
              <option value="" disabled>
                {t.book.experienceSelect}
              </option>
              {experienceIds.map((id) => (
                <option key={id} value={id}>
                  {t.book.experiences[id]}
                </option>
              ))}
            </select>
          )}
        </Field>

        <Field name="hasCar" label={t.book.hasCar} required error={errorText("hasCar")} full group>
          {(control) => (
            <ChoiceGroup
              control={control}
              name="hasCar"
              options={[
                { value: "yes", label: t.book.hasCarYes, icon: "check" },
                { value: "no", label: t.book.hasCarNo, icon: "close" },
              ]}
              value={form.hasCar}
              onChange={(value) => update("hasCar", value)}
            />
          )}
        </Field>

        <Field name="date" label={t.book.date} required error={errorText("date")} hint={t.book.dateHint} full>
          {(control) => (
            <input
              {...control}
              type="date"
              min={toISODate()}
              value={form.date}
              onChange={(e) => updateDate(e.target.value)}
            />
          )}
        </Field>

        <Field name="time" label={t.book.time} required error={errorText("time")} full group>
          {(control) => (
            <TimeSlotPicker
              control={control}
              date={form.date}
              slots={slots}
              value={form.time}
              onSelect={(slot) => update("time", slot)}
            />
          )}
        </Field>

        <Field name="notes" label={t.book.notes} full>
          {(control) => (
            <textarea
              {...control}
              placeholder={t.book.notesPlaceholder}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
            />
          )}
        </Field>

        {/* Honeypot, hidden from people and assistive technology. */}
        <div className="hp" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={trap}
              onChange={(e) => setTrap(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="btn btn--primary btn--block" disabled={status === "submitting"}>
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
  );
}
