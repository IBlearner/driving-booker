import { BookingAside } from "@/components/booking/BookingAside";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingSuccess } from "@/components/booking/BookingSuccess";
import { PageHeader } from "@/components/PageHeader";
import { Seo } from "@/components/Seo";
import { useBookingForm } from "@/hooks/useBookingForm";
import { useLanguage } from "@/i18n/LanguageContext";

export function BookNowPage() {
  const { t } = useLanguage();
  const booking = useBookingForm();

  return (
    <>
      <Seo page="book" />
      <PageHeader title={t.book.headerTitle} lead={t.book.headerLead} />

      <section className="section">
        <div className="container">
          {booking.result ? (
            <BookingSuccess result={booking.result} name={booking.form.name} onReset={booking.reset} />
          ) : (
            <div className="booking__layout">
              <BookingForm booking={booking} />
              <BookingAside />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
