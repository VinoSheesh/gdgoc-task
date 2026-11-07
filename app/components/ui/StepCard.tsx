export interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export default function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="flex flex-col">
      {/* Number */}
      <span className="text-[36px] sm:text-[40px] font-bold tracking-tight text-[#1a73e8] leading-none">
        {number}
      </span>

      {/* Horizontal divider line under number */}
      <div className="my-5 w-full border-t border-gray-200" />

      {/* Title */}
      <h3 className="mb-3 text-[18px] sm:text-[20px] font-bold text-[#111827] tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  );
}

