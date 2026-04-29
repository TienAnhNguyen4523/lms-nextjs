"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  BarChart3, 
  ShieldCheck,
  Music,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth, type UserRole } from "@/lib/auth"
import { Button } from "@/components/ui/button"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
  roles: UserRole[]
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" />, roles: ["STUDENT", "TEACHER", "ADMIN"] },
  { title: "Lessons", href: "/dashboard/student", icon: <BookOpen className="w-5 h-5" />, roles: ["STUDENT"] },
  { title: "Practice", href: "/dashboard/practice", icon: <Music className="w-5 h-5" />, roles: ["STUDENT"] },
  { title: "Curriculum", href: "/dashboard/teacher", icon: <BarChart3 className="w-5 h-5" />, roles: ["TEACHER"] },
  { title: "Grading", href: "/dashboard/grading", icon: <ShieldCheck className="w-5 h-5" />, roles: ["TEACHER"] },
  { title: "Users", href: "/dashboard/admin", icon: <Users className="w-5 h-5" />, roles: ["ADMIN"] },
  { title: "System", href: "/dashboard/system", icon: <Settings className="w-5 h-5" />, roles: ["ADMIN"] },
  { title: "Schedule", href: "/dashboard/schedule", icon: <Calendar className="w-5 h-5" />, roles: ["STUDENT", "TEACHER"] },
  { title: "Profile", href: "/dashboard/profile", icon: <User className="w-5 h-5" />, roles: ["STUDENT", "TEACHER", "ADMIN"] },
]

export const DashboardShell = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const pathname = usePathname()

  if (!user) return null

  const filteredItems = SIDEBAR_ITEMS.filter(item => item.roles.includes(user.role))

  return (
    <div className={cn(
      "min-h-screen flex transition-colors duration-300",
      user.role === "TEACHER" ? "bg-black text-white" : "bg-[#f7f9fb] text-black"
    )}>
      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out border-r-2 border-black/5 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20",
        user.role === "TEACHER" ? "bg-[#121212] border-white/10" : "bg-white border-black/5"
      )}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className={cn(isSidebarOpen ? "block" : "hidden")}>DRUMBEAT</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          {filteredItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all group",
                  isActive 
                    ? "bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                    : user.role === "TEACHER" 
                      ? "text-white/40 hover:text-white hover:bg-white/5" 
                      : "text-black/40 hover:text-black hover:bg-black/5"
                )}
              >
                <div className={cn("transition-transform group-hover:scale-110", isActive && "scale-110")}>
                  {item.icon}
                </div>
                <span className={cn(isSidebarOpen ? "block" : "hidden")}>{item.title}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t-2 border-black/5">
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-bold uppercase tracking-wider text-sm text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className={cn(isSidebarOpen ? "block" : "hidden")}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className={cn(
          "h-16 border-b-2 flex items-center justify-between px-6 sticky top-0 z-30 backdrop-blur-md",
          user.role === "TEACHER" ? "bg-black/80 border-white/10" : "bg-white/80 border-black/5"
        )}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold uppercase tracking-widest">{user.name}</p>
              <p className={cn("text-xs font-medium", user.role === "TEACHER" ? "text-white/40" : "text-black/40")}>{user.role}</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-black bg-cta-gold" />
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  )
}
