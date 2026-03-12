import axios from "axios"

export type SavedJob = {
  id: string
  userId: string
  jobId: string
  savedAt: string
}

export async function getSavedJobs(token: string): Promise<SavedJob[]> {
  try {
    const { data } = await axios.get(`/api/saved-jobs`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.userSavedJobs ?? []
  } catch {
    return []
  }
}

export async function toggleSaveJob(token: string, jobId: string) {
  try {
    const { data } = await axios.post(
      `/api/jobs/${jobId}/save`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return data as { success?: boolean; action?: "saved" | "unsaved"; error?: string }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data as { success?: boolean; action?: "saved" | "unsaved"; error?: string }
    }

    return { error: "Failed to update saved job." }
  }
}
