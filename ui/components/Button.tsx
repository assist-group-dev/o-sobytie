import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 dark:bg-[var(--color-golden)] dark:text-[var(--background)]":
              variant === "primary",
            "bg-[var(--color-cream)] text-[var(--foreground)] hover:bg-[var(--color-cream-light)] dark:bg-[var(--color-cream)] dark:text-[var(--foreground)] dark:hover:bg-[var(--color-cream-light)]":
              variant === "secondary",
            "border border-[var(--foreground)] bg-transparent hover:bg-[var(--color-cream)] text-[var(--foreground)] dark:hover:bg-[var(--color-cream)]":
              variant === "outline",
            "bg-transparent text-[var(--foreground)] hover:opacity-70 p-0":
              variant === "text",
            "px-3 py-1.5 text-sm": size === "sm" && variant !== "text",
            "px-5 py-2.5 text-base": size === "md" && variant !== "text",
            "px-8 py-4 text-lg": size === "lg" && variant !== "text",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
