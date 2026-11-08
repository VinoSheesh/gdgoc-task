import { ReactNode } from "react";

interface ValueCardProps {
  accentColor: string;
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ValueCard({
  accentColor,
  icon,
  title,
  description,
  className = "",
}: ValueCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-gray-300 hover:shadow-sm ${className}`}
    >
      {/* 4-Color Accent Line */}
      <div className={`h-1 w-8 rounded-full ${accentColor}`} />

      {/* Icon */}
      <div className="mt-5 text-[#1a73e8]">{icon}</div>

      {/* Title */}
      <h3 className="mt-5 text-[18px] font-bold text-[#111827]">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-[14px] leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  );
}

