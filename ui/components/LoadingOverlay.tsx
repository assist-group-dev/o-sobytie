"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/utils/cn";

interface LoadingOverlayProps {
  isLoading: boolean;
  onAnimationEnd?: () => void;
}

export function LoadingOverlay({ isLoading, onAnimationEnd }: LoadingOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onAnimationEnd) {
          setTimeout(onAnimationEnd, 300);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center transition-opacity duration-300",
        !isLoading && "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-[var(--color-peach-light)] rounded-full animate-ping opacity-20" />
          <div className="absolute inset-0 border-4 border-[var(--color-peach)] rounded-full opacity-40" />
          <div className="absolute inset-0 border-t-4 border-r-4 border-[var(--color-golden)] rounded-full animate-spin-slow" />
          <div className="absolute inset-2 border-b-4 border-l-4 border-[var(--color-golden)] rounded-full animate-spin-slow-reverse opacity-60" />
        </div>
        <div
          style={{
            animation: isLoading ? "fadeInDown 0.6s ease-out" : "none",
          }}
        >
          <Logo className="text-4xl" />
        </div>
      </div>
    </div>
  );
}

