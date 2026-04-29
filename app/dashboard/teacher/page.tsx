"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { motion } from "framer-motion"
import { Users, BookCheck, LineChart, Star, Mail, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TeacherDashboard() {
  return (
    <DashboardShell>
      <div className="space-y-10 font-bricolage text-white">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase tracking-tighter">Instructor Command</h1>
            <p className="text-white/40 font-medium">Monitoring 24 active students across 4 modules.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="yellow">Create Lesson</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">Announcements</Button>
          </div>
        </header>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Active Students", value: "24", change: "+4 this week", icon: <Users className="text-primary" /> },
            { label: "Pending Grades", value: "12", change: "3 urgent", icon: <BookCheck className="text-yellow-500" /> },
            { label: "Avg. Completion", value: "78%", change: "+5% avg", icon: <LineChart className="text-green-500" /> },
            { label: "Student Rating", value: "4.9", change: "128 reviews", icon: <Star className="text-purple-500" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-[#121212] border-2 border-white/10 rounded-3xl space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Student Activity */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase tracking-tight">Student Activity</h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input className="pl-10 bg-white/5 border-white/10 text-white h-10 rounded-xl" placeholder="Find student..." />
              </div>
            </div>
            
            <div className="bg-[#121212] border-2 border-white/10 rounded-3xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-white/10">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">Student</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">Lesson</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">Status</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-white/10">
                  {[
                    { name: "John Mayer", lesson: "Blues Rhythm Basics", status: "Needs Review", color: "text-yellow-500" },
                    { name: "Cindy Blackman", lesson: "Jazz Fusion Mastery", status: "Completed", color: "text-green-500" },
                    { name: "Travis Barker", lesson: "Double Bass Speed", status: "In Progress", color: "text-primary" },
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cta-gold border border-white/20" />
                          <span className="font-bold">{student.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-white/60">{student.lesson}</td>
                      <td className="px-6 py-5">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${student.color}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <Button variant="ghost" size="sm" className="hover:bg-white/10 text-white">Grade</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Grading */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight">Assignment Queue</h2>
            <div className="space-y-4">
              {[
                { student: "Dave Grohl", assignment: "Module 1 Quiz", time: "2h ago" },
                { student: "Lars Ulrich", assignment: "Rudiment Video", time: "5h ago" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border-2 border-white/10 rounded-3xl group hover:border-primary transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <p className="font-black">{item.student}</p>
                    <span className="text-[10px] font-bold text-white/30 uppercase">{item.time}</span>
                  </div>
                  <p className="text-sm text-white/60 font-medium mb-4">{item.assignment}</p>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest">
                    Open Submission
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
