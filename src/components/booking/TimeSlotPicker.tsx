import { useLanguage } from "@/i18n/LanguageContext";
import { formatTime } from "@/lib/availability";
import type { ControlProps } from "../Field";

interface TimeSlotPickerProps {
  control: ControlProps;
  // The chosen date; only used to pick the right hint when there are no slots.
  date: string;
  slots: string[];
  value: string;
  onSelect: (slot: string) => void;
}

// The group is only focused programmatically (tabIndex -1), to land on a validation error.
export function TimeSlotPicker({ control, date, slots, value, onSelect }: TimeSlotPickerProps) {
  const { t, locale } = useLanguage();

  return (
    <div {...control} role="group" tabIndex={-1}>
      {slots.length > 0 ? (
        <div className="time-grid">
          {slots.map((slot) => (
            <button
              type="button"
              key={slot}
              className={`time-slot${value === slot ? " is-selected" : ""}`}
              onClick={() => onSelect(slot)}
              aria-pressed={value === slot}
            >
              {formatTime(slot, locale)}
            </button>
          ))}
        </div>
      ) : (
        <p className="time-empty">{date ? t.book.timeHintNone : t.book.timeHintSelect}</p>
      )}
    </div>
  );
}
