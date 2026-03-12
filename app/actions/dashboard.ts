import axios from "axios"

export type DashboardStats = {
  totalApplied: number
  inInterview: number
  offers: number
  savedCount: number
}

export async function getDashboardStats(token: string): Promise<DashboardStats> {
  try {
    const { data } = await axios.get(`/api/dashboard/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch {
    return { totalApplied: 0, inInterview: 0, offers: 0, savedCount: 0 }
  }
}
