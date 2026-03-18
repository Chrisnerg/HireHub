import axios from "axios"
import { handleApiError } from "@/lib/utils"

export type AdminStats = {
  activeJobs: number
  totalApplicants: number
  inInterview: number
  offersExtended: number
}

export type AdminUser = {
  id: string
  name: string
  email: string
  role: "user" | "admin"
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
}

export type AdminStatsResult = {
  data: AdminStats
  error?: string
}

export async function getAdminStats(token: string): Promise<AdminStatsResult> {
  try {
    const { data } = await axios.get(`/api/admin/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return { data }
  } catch {
    return {
      data: { activeJobs: 0, totalApplicants: 0, inInterview: 0, offersExtended: 0 },
      error: "Failed to load admin stats.",
    }
  }
}

export async function getAdminUsers(token: string): Promise<AdminUser[]> {
  try {
    const { data } = await axios.get(`/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.allUsers ?? []
  } catch {
    return []
  }
}

export async function deleteAdminUser(token: string, userId: string) {
  try {
    const { data } = await axios.delete(`/api/admin/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data as { success?: boolean; error?: string }
  } catch (error) {
    return handleApiError(error, { error: "Failed to delete user." }) as {
      success?: boolean
      error?: string
    }
  }
}
