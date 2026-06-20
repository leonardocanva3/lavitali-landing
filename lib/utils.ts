import { type ClassValue, clsx } from "clsx";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition duration-300 ease-out hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0f6f61] text-white shadow-[0_12px_30px_rgba(15,111,97,0.16)] hover:bg-[#0b5d52] hover:shadow-[0_18px_42px_rgba(15,111,97,0.2)] focus-visible:outline-[#0f6f61]",
        petroleum:
          "bg-[#123d46] text-white shadow-[0_12px_30px_rgba(18,61,70,0.14)] hover:bg-[#0d3138] hover:shadow-[0_18px_42px_rgba(18,61,70,0.18)] focus-visible:outline-[#123d46]",
        outline:
          "border border-gray-100 bg-white/92 text-[#123d46] shadow-[0_10px_28px_rgba(18,61,70,0.05)] hover:border-[#0f6f61]/25 hover:text-[#0f6f61] hover:shadow-[0_18px_40px_rgba(18,61,70,0.08)] focus-visible:outline-[#0f6f61]",
        light:
          "bg-white text-[#123d46] shadow-[0_14px_38px_rgba(255,255,255,0.16)] hover:bg-[#f7fbfa] hover:shadow-[0_20px_52px_rgba(255,255,255,0.22)] focus-visible:outline-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
