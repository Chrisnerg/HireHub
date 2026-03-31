import axios from "axios"
import type { ExperienceLevel, JobStatus, JobType } from "@/lib/constants"

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""

  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()
  if (configuredBaseUrl && !configuredBaseUrl.includes("localhost")) {
    return configuredBaseUrl.replace(/\/$/, "")
  }

  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`
  }

  return configuredBaseUrl || "http://localhost:3000"
}

const serverInternalRequestConfig =
  typeof window === "undefined"
    ? {
        proxy: false as const,
      }
    : undefined

export type Job = {
  id: string
  companyId: string
  title: string
  description: string
  requirements: string | null
  skills: string[] | null
  type: JobType
  experienceLevel: ExperienceLevel
  location: string
  salaryMin: number | null
  salaryMax: number | null
  status: JobStatus
  isFeatured: boolean
  deadline: string | null
  postedAt: string
  updatedAt: string
  applicantsCount?: number
}

export type CreateJobPayload = {
  companyId: string
  title: string
  description: string
  requirements?: string
  skills?: string[]
  type: Job["type"]
  experienceLevel: Job["experienceLevel"]
  location: string
  salaryMin?: number
  salaryMax?: number
  status?: Job["status"]
  isFeatured?: boolean
  deadline?: string
}

export async function getJobs(): Promise<Job[]> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/jobs`, serverInternalRequestConfig)
    return data.jobs ?? []
  } catch (error) {
    console.error("getJobs failed", error)
    return []
  }
}

export async function getFeaturedJobs(): Promise<Job[]> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/jobs?featured=true`, serverInternalRequestConfig)
    return data.featuredJobs ?? []
  } catch (error) {
    console.error("getFeaturedJobs failed", error)
    return []
  }
}

export async function getJobById(id: string): Promise<Job | null> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/jobs/${id}`, serverInternalRequestConfig)
    return data.job ?? null
  } catch (error) {
    console.error(`getJobById failed for ${id}`, error)
    return null
  }
}

export async function createJob(token: string, payload: CreateJobPayload) {
  try {
    const { data } = await axios.post(`/api/jobs`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data
    }

    return { error: "Failed to create job." }
  }
}

export async function updateJob(token: string, id: string, payload: Partial<CreateJobPayload>) {
  try {
    const { data } = await axios.patch(`/api/jobs/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data
    }

    return { error: "Failed to update job." }
  }
}

export async function deleteJob(token: string, id: string) {
  try {
    const { data } = await axios.delete(`/api/jobs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data
    }

    return { error: "Failed to delete job." }
  }
}
