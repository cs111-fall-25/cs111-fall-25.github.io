import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const toTitleCase = (name: string): string => {
  return name.split(" ").map((val) => val.charAt(0).toUpperCase() + val.substring(1)).join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const to_date_string = (date: string) : string => {
  let dateObj = new Date(date);
  return dateObj.toLocaleString();
}
