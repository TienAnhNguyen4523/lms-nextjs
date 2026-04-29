"use client"

import { Button } from "@/components/ui/button"
import { Input, Search } from "@/components/ui/input"
import { Checkbox, Label } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Combobox } from "@/components/ui/combobox"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Play, Search as SearchIcon, User, Settings, LogOut } from "lucide-react"
import { useState } from "react"

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] p-8 lg:p-14 font-bricolage">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Component Showcase</h1>
          <p className="text-black/60 font-medium">Testing the reusable UI library with Neobrutalist styling.</p>
        </div>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="yellow">Yellow Accent</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default Size</Button>
            <Button size="lg">Large Button</Button>
            <Button size="icon"><Play className="fill-current" /></Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Inputs & Search</h2>
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your name..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search Products</Label>
              <Search id="search" placeholder="Search anything..." />
            </div>
          </div>
        </section>

        {/* Dropdown & Combobox */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Dropdown</h2>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" /> Exit
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Combobox</h2>
            <div className="space-y-2">
              <Label>Searchable Selection</Label>
              <Combobox 
                options={[
                  { value: "next", label: "Next.js" },
                  { value: "react", label: "React" },
                  { value: "tailwind", label: "Tailwind" },
                  { value: "framer", label: "Framer Motion" },
                  { value: "lucide", label: "Lucide Icons" },
                ]}
                placeholder="Find a tool..."
              />
            </div>
          </div>
        </section>

        {/* Motion Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Interactive Cards</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-black text-white rounded-[32px] space-y-6"
          >
            <h3 className="text-3xl font-black uppercase">Ready to join?</h3>
            <p className="text-white/70 font-medium">Experience the rhythm with our community of 10,000+ drummers.</p>
            <Button variant="yellow" className="w-full md:w-fit">
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
