import axios from "axios"

export type DashboardStats = {
  totalApplied: number
  inInterview: number
  offers: number
  savedCount: number
}

export type DashboardStatsResult = {
  data: DashboardStats
  error?: string
}

export async function getDashboardStats(token: string): Promise<DashboardStatsResult> {
  try {
    const { data } = await axios.get(`/api/dashboard/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return { data }
  } catch {
    return {
      data: { totalApplied: 0, inInterview: 0, offers: 0, savedCount: 0 },
      error: "Failed to load dashboard stats.",
    }
  }
}
