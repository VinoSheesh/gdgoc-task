export interface ApiFormat {
  id: string;
  name: string;
  description: string;
  icon: string;
  cta: string;
}

export interface FormatsApiResponse {
  success: boolean;
  count: number;
  data: ApiFormat[];
}

export const FALLBACK_FORMATS: ApiFormat[] = [
  {
    id: "study-groups",
    name: "Study groups",
    description:
      "A collaborative group of peers. Not to get it right — just to learn the thing together.",
    icon: "📚",
    cta: "join-a-group",
  },
  {
    id: "hands-on-workshops",
    name: "Hands-on workshops",
    description:
      "Short, practical sessions led by community members for exploring a specific method, tool, or concept.",
    icon: "🛠️",
    cta: "see-upcoming",
  },
  {
    id: "project-circles",
    name: "Project circles",
    description:
      "Start a research, design, or development project. Work with a small group, ship something real.",
    icon: "⭕",
    cta: "start-a-circle",
  },
  {
    id: "knowledge-sharing",
    name: "Knowledge sharing",
    description:
      "Host your idea, share a short talk, or run a session on something you've already learned.",
    icon: "💡",
    cta: "propose-a-session",
  },
];

/**
 * Fetches program formats from the GDGoC UGM API with automated fallback.
 */
export async function getFormats(): Promise<ApiFormat[]> {
  try {
    const res = await fetch("https://gdgoc-ugm-api.vercel.app/api/formats", {
      next: { revalidate: 300 }, // ISR: 5 minutes
    });

    if (!res.ok) {
      console.warn(
        `Formats API returned HTTP ${res.status}. Falling back to default formats.`
      );
      return FALLBACK_FORMATS;
    }

    const data: FormatsApiResponse = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
  } catch (err) {
    console.warn("Could not fetch formats API, using fallback data:", err);
  }

  return FALLBACK_FORMATS;
}

