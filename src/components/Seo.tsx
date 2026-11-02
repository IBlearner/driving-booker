import { useLanguage } from "@/i18n/LanguageContext";
import { format } from "@/i18n/format";
import { textVars } from "@/config";
import type { Dict } from "@/i18n/translations";

// Sets the document title and description for the current page and language.
// React 19 hoists <title> and <meta> rendered anywhere into <head>.
export function Seo({ page }: { page: keyof Dict["meta"] }) {
  const { t } = useLanguage();
  const meta = t.meta[page];

  return (
    <>
      <title>{format(meta.title, textVars)}</title>
      <meta name="description" content={format(meta.description, textVars)} />
    </>
  );
}
