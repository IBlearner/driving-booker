import { useLanguage } from "@/i18n/LanguageContext";
import { siteConfig } from "@/config";

// Headline numbers, always read from siteConfig so every page agrees.
export function Stats({ className }: { className?: string }) {
  const { t } = useLanguage();

  const stats = [
    { value: `${siteConfig.studentsPassed}+`, label: t.stats.learners },
    { value: `${siteConfig.passRate}%`, label: t.stats.pass },
    { value: `${siteConfig.yearsExperience}+`, label: t.stats.years },
  ];

  return (
    <dl className={`stats${className ? ` ${className}` : ""}`}>
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <dt className="stat__label">{stat.label}</dt>
          <dd className="stat__value">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
