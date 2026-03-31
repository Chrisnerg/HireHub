import axios from "axios"

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""

  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`
  }

  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()
  if (configuredBaseUrl && !configuredBaseUrl.includes("localhost")) {
    return configuredBaseUrl.replace(/\/$/, "")
  }

  return configuredBaseUrl || "http://localhost:3000"
}

const serverInternalRequestConfig =
  typeof window === "undefined"
    ? {
        proxy: false as const,
      }
    : undefined

export type Company = {
  id: string
  name: string
  industry: string | null
  description: string | null
  logoUrl: string | null
  location: string | null
  size: string | null
  websiteUrl: string | null
  createdAt: string
}

export async function getCompanies(): Promise<Company[]> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/companies`, serverInternalRequestConfig)
    return data.companies ?? []
  } catch (error) {
    console.error("getCompanies failed", error)
    return []
  }
}

export async function getCompanyById(id: string): Promise<Company | null> {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/companies/${id}`, serverInternalRequestConfig)
    return data.company ?? null
  } catch (error) {
    console.error(`getCompanyById failed for ${id}`, error)
    return null
  }
}

export async function createCompany(payload: {
  name: string
  industry?: string
  description?: string
  logoUrl?: string
  location?: string
  size?: string
  websiteUrl?: string
}) {
  try {
    const { data } = await axios.post(`/api/companies`, payload)
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data
    }

    return { error: "Failed creating company." }
  }
}
