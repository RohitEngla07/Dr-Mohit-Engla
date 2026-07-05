/**
 * Site-wide configuration. Update placeholders when assets/details are available.
 */
export const siteConfig = {
  name: "Dr. Mohit Engla",
  title: "Dr. Mohit Engla — General Surgeon, Indore",
  description:
    "General Surgeon in Indore specializing in laparoscopic and open surgery, emergency care, and patient-centered treatment. Book a consultation today.",
  url: "https://drmohitengla.com", // placeholder — update when domain is purchased
  locale: "en-IN",
  language: "English",

  credentials: {
    degrees: ["MBBS", "MS (General Surgery)"],
    registrationNo: "MP-29624",
    specialty: "General Surgery",
  },

  contact: {
    phone: "+917415414554",
    phoneDisplay: "7415414554",
    email: "englamohit442@gmail.com",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    whatsappMessage:
      "Hello Dr. Mohit Engla, I would like to book a consultation.",
  },

  /** Replace with actual headshot path when available, e.g. "/images/dr-mohit-engla.jpg" */
  headshot: null as string | null,

  /** Social / professional profile URLs for schema sameAs — add when available */
  profiles: {
    linkedin: null as string | null,
    researchgate: null as string | null,
    googleScholar: null as string | null,
    practo: null as string | null,
  },

  clinic: {
    name: "D21 Clinic",
    address:
      "85, SarvSuvidha Nagar, Bicholi Road, Begali, Indore, Madhya Pradesh",
    addressLines: [
      "D21 Clinic",
      "85, SarvSuvidha Nagar",
      "Bicholi Road, Begali",
      "Indore, Madhya Pradesh",
    ],
    hours: "By appointment — contact via phone or WhatsApp",
    mapsUrl: "https://maps.app.goo.gl/qtsce26jsbTzpGTV6",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=D21+Clinic,+85+SarvSuvidha+Nagar,+Bicholi+Road,+Begali,+Indore,+Madhya+Pradesh&output=embed",
    /** Practo profile URL — add when available */
    practoUrl: null as string | null,
  },

  appointment: {
    methods: ["phone", "whatsapp", "form"] as const,
    /** Shown after a successful form submission */
    confirmationMessage:
      "Our team will call you within 24 hours to confirm your appointment.",
    /** Web3Forms access key — set PUBLIC_WEB3FORMS_ACCESS_KEY in .env (free at web3forms.com) */
    web3formsAccessKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
