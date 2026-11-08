export interface ApiValue {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ValuesApiResponse {
  success: boolean;
  count: number;
  data: ApiValue[];
}

export const FALLBACK_VALUES: ApiValue[] = [
  {
    id: "stay-curious",
    title: "Stay curious",
    description:
      "Ask the extra question. Be willing to learn something outside your comfort zone.",
    icon: "🔭",
    color: "#4285F4",
  },
  {
    id: "make-room",
    title: "Make room",
    description:
      "Welcome different perspectives, respect each other, and help people find their voice.",
    icon: "🤝",
    color: "#EA4335",
  },
  {
    id: "learn-by-building",
    title: "Learn by building",
    description:
      "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
    icon: "🔧",
    color: "#FBBC05",
  },
  {
    id: "give-something-back",
    title: "Give something back",
    description:
      "Share a resource, explain what clicked, or help someone take their next step.",
    icon: "💚",
    color: "#34A853",
  },
];

/**
 * Fetches community values from the GDGoC UGM API with automated fallback.
 */
export async function getValues(): Promise<ApiValue[]> {
  try {
    const res = await fetch("https://gdgoc-ugm-api.vercel.app/api/values", {
      next: { revalidate: 300 }, // ISR: 5 minutes
    });

    if (!res.ok) {
      console.warn(
        `Values API returned HTTP ${res.status}. Falling back to default values.`
      );
      return FALLBACK_VALUES;
    }

    const data: ValuesApiResponse = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
  } catch (err) {
    console.warn("Could not fetch values API, using fallback data:", err);
  }

  return FALLBACK_VALUES;
}

