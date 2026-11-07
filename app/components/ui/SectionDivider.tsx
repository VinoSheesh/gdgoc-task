import Container from "./Container";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <Container className={className}>
      <div className="border-t border-gray-200" />
    </Container>
  );
}

