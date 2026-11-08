import { LucideIcon } from "lucide-react";

export interface ProgramFormatCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  footer: string;
  className?: string;
}

export default function ProgramFormatCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  footer,
  className = "",
}: ProgramFormatCardProps) {
  return (
    <div
      className={`flex items-start gap-4 sm:gap-5 rounded-[24px] bg-white p-6 sm:p-7 md:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${className}`}
    >
      {/* Icon Badge */}
      <div
        className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${iconBg} ${iconColor}`}
      >
        <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2]" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111827]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-gray-500 sm:text-[14.5px]">
          {description}
        </p>
        <p className="mt-4 text-[13px] font-semibold text-[#1a73e8]">
          {footer}
        </p>
      </div>
    </div>
  );
}

