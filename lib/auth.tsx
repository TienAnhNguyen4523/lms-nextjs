"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export type UserRole = "STUDENT" | "TEACHER" | "ADMIN"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  setRole: (role: UserRole) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const MOCK_USERS: Record<UserRole, User> = {
  STUDENT: { id: "1", name: "Alex Rhythm", email: "alex@drumbeat.com", role: "STUDENT", avatar: "/images/mock.jpg" },
  TEACHER: { id: "2", name: "Sarah Beat", email: "sarah@drumbeat.com", role: "TEACHER", avatar: "/images/mock.jpg" },
  ADMIN: { id: "3", name: "Admin Core", email: "admin@drumbeat.com", role: "ADMIN", avatar: "/images/mock.jpg" },
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Mocking a session check
    const savedRole = localStorage.getItem("mock_role") as UserRole || "STUDENT"
    setUser(MOCK_USERS[savedRole])
    setIsLoading(false)
  }, [])

  const setRole = (role: UserRole) => {
    localStorage.setItem("mock_role", role)
    setUser(MOCK_USERS[role])
    router.push(`/dashboard/${role.toLowerCase()}`)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("mock_role")
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
