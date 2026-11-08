import { TrackCardProps } from "../components/ui/TrackCard";

export interface ApiTrack {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
  what_you_do: string;
  explore_link: string;
  open: boolean;
}

export interface TracksApiResponse {
  success: boolean;
  count: number;
  data: ApiTrack[];
}

export interface SingleTrackApiResponse {
  success: boolean;
  data: ApiTrack;
}

export const FALLBACK_TRACKS: ApiTrack[] = [
  {
    id: "research-discovery",
    name: "Research & Discovery",
    tagline: "Explore. Analyse. Uncover.",
    description:
      "Dive into research, analysis and data-driven problem solving. Start with the interest. Grow through the process and the people around you.",
    icon: "🔍",
    color: "#4285F4",
    skills: [
      "Research methodology",
      "Data analysis",
      "User research",
      "Problem framing",
    ],
    what_you_do:
      "Turn curiosity into findings for teams that build with them.",
    explore_link: "/overview?track=research-discovery",
    open: true,
  },
  {
    id: "design-creativity",
    name: "Design & Creativity",
    tagline: "Imagine. Create. Refine.",
    description:
      "Make things that look good and feel right. Collaborate with curious people, respect each other, and help ideas become real experiences.",
    icon: "🎨",
    color: "#FBBC05",
    skills: ["UI/UX Design", "Visual design", "Prototyping", "Figma"],
    what_you_do:
      "With accessibility, function. The design shapes what comes next.",
    explore_link: "/overview?track=design-creativity",
    open: true,
  },
  {
    id: "development",
    name: "Development",
    tagline: "Build. Ship. Iterate.",
    description:
      "Write code, build tools and create solutions with a real-world impact. Take something small and make it something with a bigger canvas.",
    icon: "💻",
    color: "#34A853",
    skills: [
      "Web development",
      "Mobile development",
      "Backend systems",
      "Cloud & APIs",
    ],
    what_you_do: "A motion demo with a real codebase.",
    explore_link: "/overview?track=development",
    open: true,
  },
];

interface TrackVisualConfig {
  badge: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  bgGradient: string;
  glowColor: string;
}

const TRACK_VISUAL_MAP: Record<string, TrackVisualConfig> = {
  "research-discovery": {
    badge: "EXPLORE THE WHY",
    image: "/Research&discovery.png",
    imageWidth: 1120,
    imageHeight: 1120,
    bgGradient: "bg-gradient-to-b from-[#e9f1fe] via-[#edf4fe] to-[#f5f9ff]",
    glowColor: "bg-[#3b82f6]/25",
  },
  "design-creativity": {
    badge: "MAKE IT MEANINGFUL",
    image: "/Design%20%26%20Creativity.png",
    imageWidth: 1120,
    imageHeight: 1120,
    bgGradient: "bg-gradient-to-b from-[#fff8e3] via-[#fef6df] to-[#fefaf0]",
    glowColor: "bg-[#f59e0b]/25",
  },
  development: {
    badge: "BRING IDEAS TO LIFE",
    image: "/Development.png",
    imageWidth: 307,
    imageHeight: 307,
    bgGradient: "bg-gradient-to-b from-[#eaf5ed] via-[#edf7ee] to-[#f4faf5]",
    glowColor: "bg-[#22c55e]/25",
  },
};

/**
 * Maps an API track object into TrackCardProps for the UI component.
 */
export function mapTrackToCardProps(
  track: ApiTrack,
  defaultHref?: string,
  active?: boolean
): TrackCardProps {
  const visual = TRACK_VISUAL_MAP[track.id] || {
    badge: track.tagline ? track.tagline.toUpperCase() : "EXPLORE TRACK",
    image: "/Research&discovery.png",
    imageWidth: 1120,
    imageHeight: 1120,
    bgGradient: "bg-gradient-to-b from-[#e9f1fe] via-[#edf4fe] to-[#f5f9ff]",
    glowColor: "bg-[#3b82f6]/25",
  };

  return {
    id: track.id,
    badge: visual.badge,
    title: track.name,
    description: track.description,
    tags: Array.isArray(track.skills) ? track.skills.join(" · ") : "",
    image: visual.image,
    imageWidth: visual.imageWidth,
    imageHeight: visual.imageHeight,
    bgGradient: visual.bgGradient,
    glowColor: visual.glowColor,
    href: defaultHref || track.explore_link || "/overview",
    active,
  };
}

/**
 * Fetches all tracks from the GDGoC UGM API with automated fallback on error or offline build.
 */
export async function getTracks(): Promise<ApiTrack[]> {
  try {
    const res = await fetch("https://gdgoc-ugm-api.vercel.app/api/tracks", {
      next: { revalidate: 300 }, // ISR: Revalidate every 5 minutes
    });

    if (!res.ok) {
      console.warn(
        `Tracks API returned HTTP ${res.status}. Falling back to default tracks.`
      );
      return FALLBACK_TRACKS;
    }

    const data: TracksApiResponse = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
  } catch (err) {
    // Graceful fallback for offline, build-time, or sandbox environments
    console.warn("Could not fetch tracks API, using fallback data:", err);
  }

  return FALLBACK_TRACKS;
}

/**
 * Fetches a single track by its ID (e.g. 'research-discovery') from the specific endpoint:
 * https://gdgoc-ugm-api.vercel.app/api/tracks/:id
 */
export async function getTrackById(id: string): Promise<ApiTrack | null> {
  try {
    const res = await fetch(
      `https://gdgoc-ugm-api.vercel.app/api/tracks/${encodeURIComponent(id)}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.warn(
        `Single Track API for "${id}" returned HTTP ${res.status}. Falling back to default data.`
      );
      return FALLBACK_TRACKS.find((t) => t.id === id) || null;
    }

    const json: SingleTrackApiResponse = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn(`Could not fetch track by id "${id}":`, err);
  }

  return FALLBACK_TRACKS.find((t) => t.id === id) || null;
}
