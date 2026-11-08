export interface ApiFaq {
  id: string;
  question: string;
  answer: string;
  category: "joining-learning" | "collaboration" | "speaking-sharing" | string;
}

export interface FaqsApiResponse {
  success: boolean;
  count: number;
  filter: string | null;
  data: ApiFaq[];
}

export const FALLBACK_FAQS: ApiFaq[] = [
  {
    id: "major-requirement",
    question: "Do I need to be a Computer Science or IT major to join?",
    answer:
      "No. GDGoC UGM is open to all students from any faculty or department. Different majors and different starting points — that's the point.",
    category: "joining-learning",
  },
  {
    id: "first-year",
    question: "Is this only for first-year students?",
    answer:
      "No, it's open to anyone currently enrolled at Universitas Gadjah Mada. Whether you're a first-year student, a senior, or even a postgraduate — you're welcome to join.",
    category: "joining-learning",
  },
  {
    id: "find-track",
    question: "How do I find the right track for me?",
    answer:
      "Start by exploring the overview page. Each track has a description of what you'll do and what skills you'll grow. Pick the one that makes you curious — you don't need to have experience first.",
    category: "joining-learning",
  },
  {
    id: "time-commitment",
    question: "How much time commitment is expected per week?",
    answer:
      "It varies by format. Study groups and project circles usually take 2–4 hours per week. Workshops are one-time events. You decide the pace.",
    category: "joining-learning",
  },
  {
    id: "no-experience",
    question: "I have no tech experience. Can I still join?",
    answer:
      "Absolutely. You don't need to be a coding prodigy or have technical skills. You just need curiosity. We'll take it from there.",
    category: "joining-learning",
  },
  {
    id: "collaboration-idea",
    question: "I have a project idea. How can I collaborate with GDGoC?",
    answer:
      "Use the contact form and select 'Collaboration'. Share the idea, who it's for, and how you imagine working with the community.",
    category: "collaboration",
  },
  {
    id: "host-workshop",
    question: "Can I host a workshop or knowledge-sharing session?",
    answer:
      "Yes! If you have something you've learned that others might find useful, reach out via the contact form and select 'Speaking & sharing'.",
    category: "speaking-sharing",
  },
];

/**
 * Fetches FAQs from the GDGoC UGM API with automated fallback on error or offline build.
 * Optionally filter by category: 'joining-learning' | 'collaboration' | 'speaking-sharing'.
 */
export async function getFaqs(category?: string): Promise<ApiFaq[]> {
  try {
    const url = category
      ? `https://gdgoc-ugm-api.vercel.app/api/faqs?category=${encodeURIComponent(category)}`
      : "https://gdgoc-ugm-api.vercel.app/api/faqs";

    const res = await fetch(url, {
      next: { revalidate: 300 }, // ISR: Revalidate every 5 minutes
    });

    if (!res.ok) {
      console.warn(
        `FAQs API returned HTTP ${res.status}. Falling back to default FAQs.`
      );
      return filterFallbackFaqs(category);
    }

    const data: FaqsApiResponse = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
  } catch (err) {
    // Graceful fallback for offline, build-time, or sandbox environments
    console.warn("Could not fetch FAQs API, using fallback data:", err);
  }

  return filterFallbackFaqs(category);
}

function filterFallbackFaqs(category?: string): ApiFaq[] {
  if (!category) return FALLBACK_FAQS;
  return FALLBACK_FAQS.filter((faq) => faq.category === category);
}

