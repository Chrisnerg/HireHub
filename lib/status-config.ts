import type { ApplicationStatus } from "@/lib/constants"

export type ApplicationStatusDisplay = {
  value: ApplicationStatus
  label: string
  textClass: string
  badgeClass: string
  chipClass: string
}

export const APPLICATION_STATUS_OPTIONS: ApplicationStatusDisplay[] = [
  {
    value: "applied",
    label: "Applied",
    textClass: "text-blue-700",
    badgeClass: "badge-outline badge-info text-blue-700",
    chipClass: "bg-blue-100 text-blue-700",
  },
  {
    value: "reviewing",
    label: "Reviewing",
    textClass: "text-yellow-700",
    badgeClass: "badge-outline badge-warning text-yellow-700",
    chipClass: "bg-orange-100 text-orange-700",
  },
  {
    value: "interview",
    label: "Interview",
    textClass: "text-purple-700",
    badgeClass: "badge-outline text-purple-700",
    chipClass: "bg-purple-100 text-purple-700",
  },
  {
    value: "offer",
    label: "Offer",
    textClass: "text-green-700",
    badgeClass: "badge-outline badge-success text-green-700",
    chipClass: "bg-green-100 text-green-700",
  },
  {
    value: "rejected",
    label: "Rejected",
    textClass: "text-red-600",
    badgeClass: "badge-outline badge-error text-red-600",
    chipClass: "bg-red-100 text-red-700",
  },
]

export const APPLICATION_STATUS_MAP: Record<ApplicationStatus, ApplicationStatusDisplay> = {
  applied: APPLICATION_STATUS_OPTIONS[0],
  reviewing: APPLICATION_STATUS_OPTIONS[1],
  interview: APPLICATION_STATUS_OPTIONS[2],
  offer: APPLICATION_STATUS_OPTIONS[3],
  rejected: APPLICATION_STATUS_OPTIONS[4],
}