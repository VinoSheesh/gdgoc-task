"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "About", href: "/about", active: pathname === "/about" },
    { label: "Overview", href: "/#overview", active: pathname === "/overview" },
    { label: "Contact", href: "/#contact", active: pathname === "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:py-4 lg:px-12">
        {/* GDG Logo + Text */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
        >
          {!imageError ? (
            <Image
              src="/GDGoC%20UGM%20identity.png"
              alt="Google Developer Groups On Campus - Universitas Gadjah Mada"
              width={1383}
              height={155}
              priority
              quality={95}
              onError={() => setImageError(true)}
              className="h-6.5 w-auto sm:h-8 md:h-9 max-w-[210px] sm:max-w-[280px] md:max-w-none object-contain select-none"
            />
          ) : (
            /* Fallback jika gambar logo belum ditemukan / diganti */
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 shrink-0">
                <svg
                  viewBox="0 0 64 40"
                  className="w-8 h-5.5 sm:w-9 sm:h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Google Developer Groups Logo"
                >
                  <path d="M16 6 L26 16 L20 22 L10 12 Z" fill="#EA4335" />
                  <circle cx="13" cy="9" r="4.5" fill="#EA4335" />
                  <path d="M10 22 L20 12 L26 18 L16 28 Z" fill="#4285F4" transform="translate(0, 6)" />
                  <circle cx="13" cy="31" r="4.5" fill="#4285F4" />
                  <path d="M48 6 L38 16 L44 22 L54 12 Z" fill="#34A853" />
                  <circle cx="51" cy="9" r="4.5" fill="#34A853" />
                  <path d="M54 22 L44 12 L38 18 L48 28 Z" fill="#FBBC04" transform="translate(0, 6)" />
                  <circle cx="51" cy="31" r="4.5" fill="#FBBC04" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] sm:text-[16px] font-semibold text-gray-900 tracking-tight">
                  Google Developer Groups
                </span>
                <span className="text-[11px] sm:text-[12px] font-medium text-[#1a73e8]">
                  On Campus{" "}
                  <span className="text-gray-400 font-normal">
                    • Universitas Gadjah Mada
                  </span>
                </span>
              </div>
            </div>
          )}
        </Link>

        {/* Center Nav Links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-5 py-1.5 text-[14px] font-medium transition-all ${
                link.active
                  ? "bg-[#e8f0fe] text-[#1a73e8]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#track"
            className="flex items-center gap-2 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-all active:scale-[0.98]"
          >
            <span>Find your track</span>
            <ArrowRight className="h-4 w-4 stroke-[2.2]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-[#e8f0fe] text-[#1a73e8]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#track"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1557b0]"
            >
              <span>Find your track</span>
              <ArrowRight className="h-4 w-4 stroke-[2.2]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
