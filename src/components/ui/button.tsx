"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  className?: string;
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  className = "",
  children,
  href,
}: ButtonProps) {
  const baseClasses =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "bg-accent-500 text-white hover:bg-accent-600",
    secondary:
      "border border-neutral-600 text-neutral-200 hover:border-neutral-400 hover:text-neutral-100",
    outline:
      "border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-primary-600",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
