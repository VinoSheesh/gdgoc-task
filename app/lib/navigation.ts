export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationApiResponse {
  success: boolean;
  count: number;
  data: NavItem[];
}

export const DEFAULT_NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

/**
 * Fetches navigation items from the GDGoC UGM API with automatic fallback.
 */
export async function getNavLinks(): Promise<NavItem[]> {
  try {
    const res = await fetch("https://gdgoc-ugm-api.vercel.app/api/navigation", {
      next: { revalidate: 300 }, // ISR: 5 minutes
    });

    if (!res.ok) {
      console.warn(
        `Navigation API returned HTTP ${res.status}. Using default navigation.`
      );
      return DEFAULT_NAV_LINKS;
    }

    const json: NavigationApiResponse = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data;
    }
  } catch (err) {
    console.warn("Could not fetch navigation API, using default data:", err);
  }

  return DEFAULT_NAV_LINKS;
}

