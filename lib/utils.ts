import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string, Date object, or timestamp safely into a human-readable format
 */
export function formatDate(date: string | Date | number): string {
  const d = new Date(date);
  
  if (isNaN(d.getTime())) {
    return "";
  }

  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC", // Prevents timezone-based day shifting for ISO strings
  });
}

/**
 * Truncates text to a maximum length with an ellipsis
 */
export function truncateText(
  text: string | null | undefined,
  length: number
): string {
  if (!text) return "";
  if (text.length <= length) return text;
  return `${text.substring(0, Math.max(0, length))}...`;
}
