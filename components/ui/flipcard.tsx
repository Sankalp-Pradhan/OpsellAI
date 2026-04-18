import { ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  backTitle?: string;
  backDescription: string;
  className?: string;
}

const FlipCard = ({
  front,
  backTitle,
  backDescription,
  className = "",
}: FlipCardProps) => {
  return (
    <div
      className={`group relative inline-block [perspective:1200px] ${className}`}
    >
      <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="[backface-visibility:hidden] h-full w-full">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex-col justify-center rounded-2xl border border-border/50 bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-xl">
          {backTitle && (
            <h3 className="mb-2 text-base font-semibold">{backTitle}</h3>
          )}
          <p className="text-sm leading-relaxed opacity-90">
            {backDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;