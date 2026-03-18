export const JOB_TYPES = ["full-time", "part-time", "contract", "internship"] as const

export const EXPERIENCE_LEVELS = ["intern", "junior", "mid", "senior", "lead"] as const

export const JOB_STATUSES = ["active", "closed"] as const

export const APPLICATION_STATUSES = ["applied", "reviewing", "interview", "offer", "rejected"] as const

export const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export type JobType = (typeof JOB_TYPES)[number]
export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number]
export type JobStatus = (typeof JOB_STATUSES)[number]
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number]