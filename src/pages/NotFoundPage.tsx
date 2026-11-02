import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { Seo } from "@/components/Seo";

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="notFound" />
      <PageHeader title={t.notFound.title} lead={t.notFound.text} />
      <section className="section">
        <div className="container">
          <Link to="/" className="btn btn--primary">
            <Icon name="home" />
            {t.notFound.back}
          </Link>
        </div>
      </section>
    </>
  );
}
