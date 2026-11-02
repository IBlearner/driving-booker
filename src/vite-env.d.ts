/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTRUCTOR_NAME?: string;
  readonly VITE_CONTACT_PHONE?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_SERVICE_AREA?: string;
  readonly VITE_YEARS_EXPERIENCE?: string;
  readonly VITE_STUDENTS_PASSED?: string;
  readonly VITE_PASS_RATE?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
