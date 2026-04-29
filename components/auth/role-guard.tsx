"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { UserRole } from "@/types/auth"

interface RoleGuardProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

export const RoleGuard = ({ children, allowedRoles }: RoleGuardProps) => {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.replace("/sign-in")
        return
      }

      if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to their respective dashboard if they don't have access
        router.replace(`/dashboard/${user.role.toLowerCase()}`)
      }
    }
  }, [user, isLoading, allowedRoles, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bricolage">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#fe5933] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-black uppercase tracking-widest animate-pulse">Checking credentials...</p>
        </div>
      </div>
    )
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}
