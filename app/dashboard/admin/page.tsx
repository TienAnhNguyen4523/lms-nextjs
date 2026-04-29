"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { motion } from "framer-motion"
import { Users, ShieldAlert, Globe, Server, UserPlus, MoreHorizontal, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function AdminDashboard() {
  return (
    <DashboardShell>
      <div className="space-y-10 font-bricolage">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase tracking-tighter text-black">System Administration</h1>
            <p className="text-black/60 font-medium">Global control panel for HCD Drum Learning System.</p>
          </div>
          <Button variant="secondary" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> Add New User
          </Button>
        </header>

        {/* Global Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Total Users", value: "1,284", icon: <Users className="text-blue-500" /> },
            { label: "Security Alerts", value: "0", icon: <ShieldAlert className="text-green-500" /> },
            { label: "Server Load", value: "14%", icon: <Server className="text-primary" /> },
            { label: "Active Nodes", value: "3", icon: <Globe className="text-purple-500" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
              <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* User Management */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase tracking-tight">User Directory</h2>
            <Input className="max-w-sm" placeholder="Search by name, email or role..." />
          </div>

          <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">User</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">Role</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">Joined</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black/5">
                {[
                  { name: "Alex Rhythm", email: "alex@drumbeat.com", role: "STUDENT", status: "Active", date: "Apr 24, 2024" },
                  { name: "Sarah Beat", email: "sarah@drumbeat.com", role: "TEACHER", status: "Active", date: "Apr 20, 2024" },
                  { name: "John Admin", email: "john@admin.com", role: "ADMIN", status: "Active", date: "Jan 12, 2024" },
                  { name: "Mike Ross", email: "mike@ross.com", role: "TEACHER", status: "Paused", date: "Feb 05, 2024" },
                ].map((user, i) => (
                  <tr key={i} className="hover:bg-black/[0.02] transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-black bg-cta-gold flex items-center justify-center font-black">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{user.name}</p>
                          <p className="text-xs text-black/40 font-medium">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md",
                        user.role === "ADMIN" ? "bg-purple-100 text-purple-700" :
                          user.role === "TEACHER" ? "bg-blue-100 text-blue-700" :
                            "bg-green-100 text-green-700"
                      )}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        {user.status === "Active" ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-black/20" />}
                        <span className="text-sm font-bold">{user.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-black/40">{user.date}</td>
                    <td className="px-6 py-5 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button variant="ghost" size="icon" className="hover:bg-black/5">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem>Reset Password</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
