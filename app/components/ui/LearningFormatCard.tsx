import { LucideIcon } from "lucide-react";

export interface LearningFormatCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  footer: string;
}

export default function LearningFormatCard({
  icon: Icon,
  title,
  description,
  footer,
}: LearningFormatCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        {/* Icon */}
        <div className="mb-6 flex items-center">
          <Icon className="h-6 w-6 text-[#1a73e8] stroke-[2]" />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#111827]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] leading-[1.65] text-gray-500">
          {description}
        </p>
      </div>

      {/* Bottom area */}
      <div>
        {/* Divider line */}
        <div className="my-5 w-full border-t border-gray-100" />

        {/* Footer link/text */}
        <span className="text-[13px] font-semibold text-[#1a73e8]">
          {footer}
        </span>
      </div>
    </div>
  );
}

