import Image from "next/image";
import ArrowLink from "./ArrowLink";

export interface TrackCardProps {
  badge: string;
  title: string;
  description: string;
  tags: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  bgGradient: string;
  glowColor: string;
  href?: string;
}

export default function TrackCard({
  badge,
  title,
  description,
  tags,
  image,
  imageWidth,
  imageHeight,
  bgGradient,
  glowColor,
  href = "#tracks",
}: TrackCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
      {/* ── Image Area (Header Card with 3D Illustration) ── */}
      <div className="relative w-full aspect-[1.42/1] overflow-hidden rounded-t-[24px]">
        {/* Background pastel gradient */}
        <div className={`absolute inset-0 ${bgGradient}`} />

        {/* Ambient colorful glow at bottom */}
        <div
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 h-20 w-3/4 rounded-full blur-2xl ${glowColor}`}
        />

        {/* Centered 3D Illustration */}
        <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-5">
          <div className="relative aspect-square h-full max-h-[190px] sm:max-h-[210px] md:max-h-[225px] w-full flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              priority
              quality={95}
              className="h-full w-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      {/* ── Card Content ── */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">
        {/* Track Badge (Google Blue) */}
        <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a73e8]">
          {badge}
        </span>

        {/* Track Title */}
        <h3 className="mb-2.5 text-[20px] font-bold leading-snug text-[#111827] sm:text-[22px]">
          {title}
        </h3>

        {/* Track Description */}
        <p className="flex-1 text-[13.5px] leading-[1.65] text-gray-500">
          {description}
        </p>

        {/* Subtle Divider Line */}
        <div className="my-4 w-full border-t border-gray-100" />

        {/* Track Tags */}
        <p className="mb-4 text-[12px] text-gray-400">
          {tags}
        </p>

        {/* Explore Link */}
        <ArrowLink
          href={href}
          groupClass="group/link"
          arrowAnimationClass="group-hover/link:translate-x-0.5"
        >
          Explore this track
        </ArrowLink>
      </div>
    </div>
  );
}

