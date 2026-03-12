import axios from "axios"

const getBaseUrl = () =>
  typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export type Job = {
  id: string
  companyId: string
  title: string
  description: string
  requirements: string | null
  skills: string[] | null
  type: "full-time" | "part-time" | "contract" | "internship"
  experienceLevel: "intern" | "junior" | "mid" | "senior" | "lead"
  location: string
  salaryMin: number | null
  salaryMax: number | null
  status: "active" | "closed"
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
    const { data } = await axios.get(`${getBaseUrl()}/api/jobs`)
    return data.jobs ?? []
  } catch {
    return []
  }
}

export async function getFeaturedJobs(): Promise<Job[]> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/jobs?featured=true`)
    return data.featuredJobs ?? []
  } catch {
    return []
  }
}

export async function getJobById(id: string): Promise<Job | null> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/jobs/${id}`)
    return data.job ?? null
  } catch {
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
