interface SectionBadgeProps {
  label: string;
  className?: string;
  dotColor?: string;
  textColor?: string;
}

export default function SectionBadge({
  label,
  className = "mb-5",
  dotColor = "bg-[#1a73e8]",
  textColor = "text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400",
}: SectionBadgeProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      <span className={textColor}>{label}</span>
    </div>
  );
}

