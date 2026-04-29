"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { motion } from "framer-motion"
import { Music, Clock, Trophy, Play, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentDashboard() {
  return (
    <DashboardShell>
      <div className="space-y-10 font-bricolage">
        <header className="space-y-2">
          <h1 className="text-4xl font-black uppercase tracking-tighter">Welcome back, Alex!</h1>
          <p className="text-black/60 font-medium">You've reached your practice goal 4 days in a row. Keep the rhythm going!</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Practice Streak", value: "4 Days", icon: <Trophy className="text-primary" />, color: "bg-primary/10" },
            { label: "Total Practice", value: "12.5 hrs", icon: <Clock className="text-blue-500" />, color: "bg-blue-500/10" },
            { label: "Lessons Completed", value: "18", icon: <Music className="text-green-500" />, color: "bg-green-500/10" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-black/40 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Active Lessons */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase tracking-tight">Active Lessons</h2>
              <Button variant="ghost" size="sm">View All <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
            <div className="space-y-4">
              {[
                { title: "Linear Phrasing Essentials", progress: 65, duration: "45m left", level: "Intermediate" },
                { title: "Complex Time Signatures", progress: 30, duration: "1h 20m left", level: "Advanced" },
              ].map((lesson, i) => (
                <div key={i} className="p-6 bg-white border-2 border-black rounded-3xl hover:translate-y-[-4px] transition-transform cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-black bg-black text-white px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
                        {lesson.level}
                      </span>
                      <h3 className="text-xl font-black">{lesson.title}</h3>
                    </div>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-black/40">
                      <span>Progress</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <div className="h-3 bg-black/5 rounded-full overflow-hidden border border-black/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${lesson.progress}%` }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight">Today's Schedule</h2>
            <div className="space-y-4">
              {[
                { time: "14:00", title: "Jazz Improvisation", instructor: "Sarah K.", type: "Live Session" },
                { time: "16:30", title: "Double Bass Mastery", instructor: "Mike Ross", type: "Workshop" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-cta-gold border-2 border-black rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Calendar className="w-12 h-12" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest mb-1">{item.time}</p>
                  <h3 className="text-lg font-black leading-tight mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-bold text-black/60">
                    <span className="w-2 h-2 bg-black rounded-full" />
                    {item.instructor}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full h-16 rounded-3xl border-dashed">
                Book New Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
