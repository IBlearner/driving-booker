export type Language = "en" | "vi" | "zh";

export type NavId = "home" | "info" | "book";
export type FeatureId = "patient" | "flexible" | "dualControl" | "testRoutes" | "tailored" | "value";
export type LessonId = "single" | "package" | "test" | "refresher";
export type ExperienceId = "none" | "some" | "refresher" | "test";
export type TagId = "licensed" | "insured" | "dual" | "friendly";
export type BookErrorKey = "name" | "email" | "phone" | "experience" | "hasCar" | "date" | "closed" | "time";

interface Titled {
  title: string;
  text: string;
}

interface PageMeta {
  title: string;
  description: string;
}

// Every language must satisfy this shape, so a missing key is a compile error.
export interface Dict {
  meta: Record<"home" | "book" | "info" | "notFound", PageMeta>;
  nav: Record<NavId, string> & {
    bookCta: string;
    menu: string;
    language: string;
    primary: string;
    skip: string;
  };
  contact: { area: string };
  stats: { years: string; learners: string; pass: string };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    heroBook: string;
    heroCall: string;
    heroImageAlt: string;
    badgeTitle: string;
    badgeText: string;
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    features: Record<FeatureId, Titled>;
    stepsEyebrow: string;
    stepsTitle: string;
    steps: Titled[];
    ctaTitle: string;
    ctaText: string;
    ctaBook: string;
    ctaLearn: string;
  };
  book: {
    headerTitle: string;
    headerLead: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    lesson: string;
    lessonNone: string;
    experience: string;
    experienceSelect: string;
    experiences: Record<ExperienceId, string>;
    hasCar: string;
    hasCarYes: string;
    hasCarNo: string;
    date: string;
    dateHint: string;
    time: string;
    timeHintSelect: string;
    timeHintNone: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    successFallback: string;
    errorText: string;
    another: string;
    asideTitle: string;
    asideText: string;
    summaryTitle: string;
    summary: Record<"confirm" | "pickup" | "payment", string>;
    required: string;
    errors: Record<BookErrorKey, string>;
  };
  info: {
    headerTitle: string;
    headerLead: string;
    aboutTitle: string;
    aboutParagraphs: string[];
    glanceTitle: string;
    tags: Record<TagId, string>;
    lessonsEyebrow: string;
    lessonsTitle: string;
    lessonsSubtitle: string;
    lessons: Record<LessonId, { name: string; unit: string; text: string }>;
    bestValue: string;
    bookLesson: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaBook: string;
    ctaCall: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
  };
  notFound: { title: string; text: string; back: string };
}
