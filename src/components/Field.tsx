import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "./Icon";

// Attributes the wrapped control must spread so label, hint and error are announced.
// `className` is only set for single controls (input, select, textarea), not for groups.
export interface ControlProps {
  id: string;
  className?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-labelledby"?: string;
}

interface FieldProps {
  // Used to build element ids: field-<name>.
  name: string;
  label: string;
  children: (control: ControlProps) => ReactNode;
  required?: boolean;
  error?: string;
  hint?: string;
  full?: boolean;
  // For radio/button groups: the label names the group instead of a single input.
  group?: boolean;
}

export function Field({ name, label, children, required, error, hint, full, group }: FieldProps) {
  const { t } = useLanguage();
  const id = `field-${name}`;
  const labelId = `${id}-label`;
  const messageId = `${id}-message`;
  const hasMessage = Boolean(error || hint);
  const describedBy = hasMessage ? messageId : undefined;

  const control: ControlProps = group
    ? { id, "aria-describedby": describedBy, "aria-labelledby": labelId }
    : {
        id,
        className: `field__control${error ? " has-error" : ""}`,
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error),
      };

  const labelContent = (
    <>
      {label}
      {required && (
        <>
          <span className="req" aria-hidden="true">
            *
          </span>
          <span className="sr-only"> ({t.book.required})</span>
        </>
      )}
    </>
  );

  return (
    <div className={`field${full ? " field--full" : ""}`}>
      {group ? (
        <span className="field__label" id={labelId}>
          {labelContent}
        </span>
      ) : (
        <label className="field__label" htmlFor={id}>
          {labelContent}
        </label>
      )}
      {children(control)}
      {hasMessage &&
        (error ? (
          <span className="field__error" id={messageId} role="alert">
            <Icon name="error_outline" />
            {error}
          </span>
        ) : (
          <span className="field__hint" id={messageId}>
            {hint}
          </span>
        ))}
    </div>
  );
}
