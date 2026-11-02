import type { ReactNode } from "react";

// Closing call-to-action card shared by the home and information pages.
export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{text}</p>
          <div className="cta-band__actions">{children}</div>
        </div>
      </div>
    </section>
  );
}
