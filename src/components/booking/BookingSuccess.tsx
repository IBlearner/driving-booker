import { format } from "@/i18n/format";
import { useLanguage } from "@/i18n/LanguageContext";
import type { BookingResult } from "@/lib/emailBooking";
import { Icon } from "../Icon";

interface BookingSuccessProps {
  result: BookingResult;
  name: string;
  onReset: () => void;
}

// Shown after a request goes through. "fallback" means a development build with no EmailJS config.
export function BookingSuccess({ result, name, onReset }: BookingSuccessProps) {
  const { t } = useLanguage();
  const template = result === "sent" ? t.book.successText : t.book.successFallback;

  return (
    <div className="form-card form-card--narrow">
      <div className="alert alert--success alert--spaced" role="status">
        <Icon name="check_circle" />
        <div>
          <strong className="alert__title">{t.book.successTitle}</strong>
          {format(template, { name })}
        </div>
      </div>
      <button type="button" className="btn btn--primary" onClick={onReset}>
        <Icon name="add" />
        {t.book.another}
      </button>
    </div>
  );
}
