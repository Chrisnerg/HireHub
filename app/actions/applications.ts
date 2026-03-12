import axios from "axios"

export type Application = {
  id: string
  userId: string
  jobId: string
  status: "applied" | "reviewing" | "interview" | "offer" | "rejected"
  appliedAt: string
  updatedAt: string
}

export async function applyToJob(token: string, jobId: string) {
  try {
    const { data } = await axios.post(
      `/api/jobs/${jobId}/apply`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return data as { success?: boolean; applicationId?: string; error?: string }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data as { success?: boolean; applicationId?: string; error?: string }
    }

    return { error: "Failed to apply to job." }
  }
}

export async function getUserApplications(token: string): Promise<Application[]> {
  try {
    const { data } = await axios.get(`/api/applications`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.userApplications ?? []
  } catch {
    return []
  }
}

export async function getAdminApplications(token: string): Promise<Application[]> {
  try {
    const { data } = await axios.get(`/api/admin/applications`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.allApplications ?? []
  } catch {
    return []
  }
}

export async function updateAdminApplicationStatus(
  token: string,
  applicationId: string,
  status: Application["status"]
) {
  try {
    const { data } = await axios.patch(
      `/api/admin/applications`,
      { applicationId, status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return data as { applicationId?: string; error?: string }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data as { applicationId?: string; error?: string }
    }

    return { error: "Failed to update application status." }
  }
}
