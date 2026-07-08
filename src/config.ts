// Central place for env-driven configuration.
// Values come from Vite env vars (see .env / .env.example).

export const siteConfig = {
  instructorName: import.meta.env.VITE_INSTRUCTOR_NAME ?? "David Nguyen",
  phone: import.meta.env.VITE_CONTACT_PHONE ?? "+61 400 123 456",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "hello@drivewise.example",
  serviceArea: import.meta.env.VITE_SERVICE_AREA ?? "Greater Sydney, NSW",
  businessName: "DriveWise Driving School",
  yearsExperience: Number(import.meta.env.VITE_YEARS_EXPERIENCE ?? 12),
  studentsPassed: Number(import.meta.env.VITE_STUDENTS_PASSED ?? 1200),
  passRate: Number(import.meta.env.VITE_PASS_RATE ?? 95),
};

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

// Only send real emails when all three EmailJS values are provided.
export const isEmailConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
);

// Phone/email formatted for tel:/mailto: links
export const telHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
export const mailHref = `mailto:${siteConfig.email}`;
