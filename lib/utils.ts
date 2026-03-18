import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeAgo(input: string | Date): string {
  const time = new Date(input).getTime()

  if (Number.isNaN(time)) return "unknown"

  const diff = Date.now() - time
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24

  if (diff < minute) return "just now"

  if (diff < hour) {
    const minutes = Math.floor(diff / minute)
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`
  }

  if (diff < day) {
    const hours = Math.floor(diff / hour)
    return `${hours} hour${hours === 1 ? "" : "s"} ago`
  }

  const days = Math.floor(diff / day)
  return `${days} day${days === 1 ? "" : "s"} ago`
}

export function capitalize(value: string): string {
  if (!value) return value
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function handleApiError<T extends Record<string, unknown>>(error: unknown, fallback: T): T {
  if (axios.isAxiosError(error) && error.response?.data) {
    return error.response.data as T
  }

  return fallback
}
