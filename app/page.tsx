"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Play, CheckCircle2, User, Settings, LogOut, Heart } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Combobox } from "@/components/ui/combobox";
import { useState } from "react";

const Page = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-bricolage">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
               <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
            DRUMBEAT
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#curriculum" className="hover:text-primary transition-colors">Curriculum</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex btn-signin">
              Join the Rhythm
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-cta-gold flex items-center justify-center hover:scale-105 transition-transform">
                  <User className="w-6 h-6" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" /> Favorites
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fccc41]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 skew-x-12 translate-x-20" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-bold w-fit">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              NOW ENROLLING FOR 2024
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter text-black uppercase">
              Master the <br />
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Rhythm</span>
            </h1>
            <p className="text-xl text-black/80 max-w-lg font-medium">
              Experience the world's most immersive drum learning platform. Real-time feedback, professional instructors, and a community that hits the right beat.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform group">
                Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold border-2 border-black flex items-center gap-2 hover:bg-black hover:text-white transition-all">
                <Play className="w-5 h-5 fill-current" /> Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-black rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-black">
              <Image 
                src="/images/mock.jpg" 
                alt="Drummer in action" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Float Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border-2 border-black font-bold hidden lg:block"
            >
              100% Online
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-primary text-white p-4 rounded-2xl shadow-xl border-2 border-black font-bold hidden lg:block"
            >
              Expert Tutors
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter">Why Choose Drumbeat?</h2>
            <div className="w-24 h-2 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Real-time Feedback", 
                desc: "Our AI listens to your practice and provides instant correction on timing and technique.",
                icon: <CheckCircle2 className="w-10 h-10 text-primary" />
              },
              { 
                title: "World-Class Curriculum", 
                desc: "From basic rudiments to complex jazz polyrhythms, learned at your own pace.",
                icon: <Play className="w-10 h-10 text-primary" />
              },
              { 
                title: "Live Workshops", 
                desc: "Join weekly live sessions with legendary drummers from around the globe.",
                icon: <Mail className="w-10 h-10 text-primary" />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6"
              >
                <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black uppercase">{feature.title}</h3>
                <p className="text-black/70 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section id="curriculum" className="py-24 bg-[#f9f9f9]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="bg-black rounded-3xl p-8 aspect-video flex flex-col justify-end gap-4 overflow-hidden group">
                <Image 
                  src="/images/mock.jpg" 
                  alt="Lesson preview" 
                  fill 
                  className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current translate-x-1" />
                  </div>
                  <h4 className="text-white text-2xl font-black mt-4">Module 4: Funky Grooves 101</h4>
                </div>
             </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter">Your Path to Mastery</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Fundamentals & Rudiments", active: true },
                { step: "02", title: "Rhythm & Coordination", active: false },
                { step: "03", title: "Advanced Techniques", active: false },
                { step: "04", title: "Genre Mastery", active: false }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`p-6 rounded-2xl border-2 border-black flex items-center justify-between transition-all cursor-pointer ${item.active ? 'bg-black text-white' : 'bg-white hover:bg-black/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl font-black ${item.active ? 'text-primary' : 'text-black/30'}`}>{item.step}</span>
                    <span className="text-xl font-bold">{item.title}</span>
                  </div>
                  <ArrowRight className={`w-6 h-6 ${item.active ? 'text-primary' : 'text-black/30'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#fccc41] rounded-full blur-[100px] opacity-30" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">Let's Jam!</h2>
                <p className="text-xl text-black/70 font-medium">Have questions about our programs? Our rhythm experts are here to help.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black/50 uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-black">hello@drumbeat.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black/50 uppercase tracking-widest">Call Us</p>
                    <p className="text-xl font-black">+1 (555) RHYTHM-1</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black/50 uppercase tracking-widest">Studio</p>
                    <p className="text-xl font-black">Beat Street, San Francisco</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black rounded-[40px] p-8 lg:p-12 shadow-2xl relative"
            >
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Preferred Module</label>
                    <Combobox 
                      options={[
                        { value: "rudiments", label: "Drum Rudiments" },
                        { value: "grooves", label: "Funk Grooves" },
                        { value: "jazz", label: "Jazz Improv" },
                        { value: "metal", label: "Heavy Metal Beats" },
                        { value: "production", label: "Studio Production" },
                      ]}
                      placeholder="Select a module..."
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your drumming journey..." 
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/80 transition-colors group">
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white text-2xl font-black tracking-tighter">DRUMBEAT</div>
          <div className="flex gap-8 text-white/60 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Discord</Link>
          </div>
          <p className="text-white/40 font-medium">© 2024 DRUMBEAT. All rhythms reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;