import { ArrowRight, Search, Code, Settings } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              GDGOC UGM • 2026/2027
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Big ideas.
            <br />
            <span className="text-gray-900">Built together.</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg">
            A place for curious minds at{" "}
            <span className="font-semibold text-gray-900">
              Universitas Gadjah Mada
            </span>{" "}
            to learn, connect, and build technology that matters.
          </p>

          {/* Buttons */}
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#tracks"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
            >
              Find your learning track
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-2 rounded-full border-2 border-blue-200 px-7 py-3.5 text-sm font-semibold text-blue-600 transition-all hover:border-blue-300 hover:bg-blue-50"
            >
              Get to know us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Colored dots tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-gray-500">
              Different backgrounds. A shared curiosity.
            </span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Background blobs */}
          <div className="absolute -top-8 -right-8 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute bottom-0 right-12 h-56 w-56 rounded-full bg-green-100/60 blur-3xl" />
          <div className="absolute bottom-8 -left-4 h-40 w-40 rounded-full bg-yellow-100/60 blur-3xl" />

          {/* Cards container */}
          <div className="relative h-[340px] w-[400px] sm:h-[380px] sm:w-[460px]">
            {/* Grid background */}
            <div className="absolute inset-0 rounded-3xl opacity-30">
              <svg
                width="100%"
                height="100%"
                className="text-blue-200"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Search Card */}
            <div className="absolute left-4 top-2 z-10 flex h-[140px] w-[160px] items-center justify-center rounded-2xl border border-white/60 bg-blue-100/40 shadow-lg backdrop-blur-sm sm:left-8 sm:top-4 sm:h-[160px] sm:w-[180px]">
              <Search className="h-16 w-16 text-blue-500/70 sm:h-20 sm:w-20" strokeWidth={1.5} />
            </div>

            {/* Code Card */}
            <div className="absolute right-2 top-6 z-10 flex h-[140px] w-[160px] items-center justify-center rounded-2xl border border-white/60 bg-green-100/40 shadow-lg backdrop-blur-sm sm:right-4 sm:top-8 sm:h-[160px] sm:w-[180px]">
              <Code className="h-16 w-16 text-green-600/70 sm:h-20 sm:w-20" strokeWidth={1.5} />
            </div>

            {/* Settings Card */}
            <div className="absolute left-20 top-16 z-20 flex h-[110px] w-[120px] items-center justify-center rounded-2xl border border-white/60 bg-purple-100/30 shadow-lg backdrop-blur-sm sm:left-24 sm:top-20 sm:h-[130px] sm:w-[140px]">
              <Settings className="h-12 w-12 text-purple-500/60 sm:h-14 sm:w-14" strokeWidth={1.5} />
            </div>

            {/* "hello, possibilities_" bubble */}
            <div className="absolute bottom-20 left-6 z-30 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-md sm:bottom-24 sm:left-10">
              <span className="font-mono text-sm text-gray-800 sm:text-base">
                hello, possibilities
                <span className="animate-pulse text-blue-500">_</span>
              </span>
            </div>

            {/* "Built on curiosity..." badge */}
            <div className="absolute bottom-4 right-2 z-30 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-md sm:right-4 sm:bottom-6">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs text-gray-600">
                Built on <span className="font-bold">curiosity</span>. Rooted
                in <span className="font-bold">UGM</span>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

