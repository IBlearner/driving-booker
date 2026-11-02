// Language-independent page content (ids, icons, prices).
// The wording for each id lives in src/i18n/*.ts.
import type { ExperienceId, FeatureId, LessonId, NavId, TagId } from "@/i18n/types";

// The site's pages, in menu order. Labels come from t.nav[id].
export const navLinks: { to: string; id: NavId; icon: string }[] = [
  { to: "/", id: "home", icon: "home" },
  { to: "/information", id: "info", icon: "info" },
  { to: "/book", id: "book", icon: "event_available" },
];

export const features: { id: FeatureId; icon: string }[] = [
  { id: "patient", icon: "sentiment_satisfied" },
  { id: "flexible", icon: "event" },
  { id: "dualControl", icon: "directions_car" },
  { id: "testRoutes", icon: "map" },
  { id: "tailored", icon: "tune" },
  { id: "value", icon: "savings" },
];

// Prices are in dollars. Change them here only.
export const lessons: { id: LessonId; icon: string; price: number; featured?: boolean }[] = [
  { id: "single", icon: "school", price: 70 },
  { id: "package", icon: "workspace_premium", price: 650, featured: true },
  { id: "test", icon: "event_available", price: 95 },
  { id: "refresher", icon: "autorenew", price: 70 },
];

export const aboutTags: { id: TagId; icon: string }[] = [
  { id: "licensed", icon: "verified_user" },
  { id: "insured", icon: "shield" },
  { id: "dual", icon: "directions_car" },
  { id: "friendly", icon: "sentiment_satisfied" },
];

export const experienceIds: ExperienceId[] = ["none", "some", "refresher", "test"];

export function isLessonId(value: string | null): value is LessonId {
  return lessons.some((l) => l.id === value);
}
