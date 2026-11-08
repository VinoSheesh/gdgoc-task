"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./ui/Container";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  className?: string;
  exploreLinks?: FooterLink[];
  handle?: string;
  handleUrl?: string;
  year?: string;
}

const defaultExploreLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Overview", href: "#overview" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({
  className = "",
  exploreLinks = defaultExploreLinks,
  handle = "@gdgoc.ugm",
  handleUrl = "https://instagram.com/gdgoc.ugm",
  year = "2026/2027",
}: FooterProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <footer className={`bg-[#f1f3f4] pt-14 pb-8 md:pt-16 md:pb-10 ${className}`}>
      <Container>
        {/* Top section: 3 columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand & Description */}
          <div className="md:col-span-6 lg:col-span-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              {!imageError ? (
                <Image
                  src="/GDGoC%20UGM%20identity.png"
                  alt="Google Developer Groups On Campus - Universitas Gadjah Mada"
                  width={1383}
                  height={155}
                  priority
                  quality={95}
                  onError={() => setImageError(true)}
                  className="h-9 w-auto max-w-[280px] sm:max-w-[320px] object-contain select-none"
                />
              ) : (
                /* Fallback jika gambar logo tidak ter-load */
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                    <svg
                      viewBox="0 0 64 40"
                      className="w-8 h-5.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Google Developer Groups Logo"
                    >
                      <path d="M16 6 L26 16 L20 22 L10 12 Z" fill="#EA4335" />
                      <circle cx="13" cy="9" r="4.5" fill="#EA4335" />
                      <path d="M48 6 L38 16 L44 22 L54 12 Z" fill="#4285F4" />
                      <circle cx="51" cy="9" r="4.5" fill="#4285F4" />
                      <path d="M22 28 L32 38 L26 44 L16 34 Z" fill="#0F9D58" transform="translate(0, -6)" />
                      <circle cx="19" cy="25" r="4.5" fill="#0F9D58" />
                      <path d="M54 22 L44 12 L38 18 L48 28 Z" fill="#FBBC04" transform="translate(0, 6)" />
                      <circle cx="51" cy="31" r="4.5" fill="#FBBC04" />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[15px] font-semibold text-gray-900 tracking-tight">
                      Google Developer Groups
                    </span>
                    <span className="text-[11px] font-medium text-[#1a73e8]">
                      On Campus{" "}
                      <span className="text-gray-400 font-normal">
                        • Universitas Gadjah Mada
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </Link>

            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-gray-500">
              A student community for curious minds, shared learning, and technology
              with purpose.
            </p>
          </div>

          {/* Middle Column: Explore */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-[14px] font-bold text-[#111827]">Explore</h3>
            <ul className="mt-3.5 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Keep in the loop */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-[14px] font-bold text-[#111827]">
              Keep in the loop
            </h3>
            <div className="mt-3.5">
              <a
                href={handleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-[#1a73e8] transition-colors hover:text-[#1557b0] hover:underline"
              >
                {handle}
              </a>
            </div>

            {/* Social Icons (Instagram & YouTube) */}
            <div className="mt-3.5 flex items-center gap-3 text-gray-500">
              <a
                href={handleUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-gray-900"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@gdgocugm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-colors hover:text-gray-900"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>

            <p className="mt-3.5 text-[13px] text-gray-500">
              Learn together. Build together.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#dadce0]" />

        {/* Bottom row: Copyright & Tagline */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[12px] text-gray-500">
          <p>© GDGoC Universitas Gadjah Mada • {year}</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        {/* 4-Color Google Segmented Bar */}
        <div className="mt-6 flex h-1 w-28 overflow-hidden rounded-full">
          <span className="h-full w-1/4 bg-[#4285f4]" />
          <span className="h-full w-1/4 bg-[#ea4335]" />
          <span className="h-full w-1/4 bg-[#fbbc04]" />
          <span className="h-full w-1/4 bg-[#34a853]" />
        </div>
      </Container>
    </footer>
  );
}

