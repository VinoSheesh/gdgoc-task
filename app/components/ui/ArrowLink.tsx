import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  groupClass?: string;
  arrowAnimationClass?: string;
}

export default function ArrowLink({
  href,
  children,
  className = "",
  groupClass = "group",
  arrowAnimationClass = "group-hover:translate-x-0.5",
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`${groupClass} flex items-center gap-1.5 text-[14px] font-semibold text-[#1a73e8] transition-colors hover:text-[#1557b0] ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        className={`h-4 w-4 stroke-[2.5] transition-transform ${arrowAnimationClass}`}
      />
    </Link>
  );
}

