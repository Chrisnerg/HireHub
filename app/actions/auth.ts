import axios from "axios"
import { handleApiError } from "@/lib/utils"

const TOKEN_KEY = "hirehub_token"

export type AuthTokenPayload = {
  id?: string
  role?: "user" | "admin"
  email?: string
}

export async function login(email: string, password: string) {
  try {
    const { data } = await axios.post(`/api/auth/login`, { email, password })
    return data as { success?: boolean; token?: string; error?: string }
  } catch (error) {
    return handleApiError(error, { error: "Failed to sign in." }) as {
      success?: boolean
      token?: string
      error?: string
    }
  }
}

export async function signup(name: string, email: string, password: string, role?: string) {
  try {
    const { data } = await axios.post(`/api/users`, { name, email, password, role })
    return data as { userId?: string; error?: string }
  } catch (error) {
    return handleApiError(error, { error: "Failed to create account." }) as {
      userId?: string
      error?: string
    }
  }
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(TOKEN_KEY)
}

export function decodeToken(token: string): AuthTokenPayload | null {
  try {
    const base64Url = token.split(".")[1]
    if (!base64Url) return null

    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=")
    return JSON.parse(atob(padded)) as AuthTokenPayload
  } catch {
    return null
  }
}

export function getCurrentUser() {
  const token = getToken()
  if (!token) return null

  return decodeToken(token)
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}
