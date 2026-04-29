"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  children: React.ReactNode
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === DropdownMenuTrigger) {
            return React.cloneElement(child as React.ReactElement<any>, { 
              onClick: () => setIsOpen(!isOpen),
              isOpen 
            })
          }
          if (child.type === DropdownMenuContent) {
            return (
              <AnimatePresence>
                {isOpen && React.cloneElement(child as React.ReactElement<any>, { 
                  onClose: () => setIsOpen(false) 
                })}
              </AnimatePresence>
            )
          }
        }
        return child
      })}
    </div>
  )
}

interface TriggerProps {
  children: React.ReactNode
  onClick?: () => void
  isOpen?: boolean
  className?: string
}

const DropdownMenuTrigger = ({ children, onClick, className }: TriggerProps) => {
  return (
    <div onClick={onClick} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  )
}

interface ContentProps {
  children: React.ReactNode
  onClose?: () => void
  className?: string
}

const DropdownMenuContent = ({ children, onClose, className }: ContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 5, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border-2 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ring-1 ring-black ring-opacity-5 focus:outline-none",
        className
      )}
    >
      <div onClick={onClose}>{children}</div>
    </motion.div>
  )
}

interface ItemProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const DropdownMenuItem = ({ children, onClick, className, disabled }: ItemProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-primary hover:text-white disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
    >
      {children}
    </button>
  )
}

const DropdownMenuLabel = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("px-3 py-2 text-xs font-black uppercase tracking-widest text-black/40", className)}>
    {children}
  </div>
)

const DropdownMenuSeparator = () => (
  <div className="my-1 h-0.5 bg-black/10 mx-1" />
)

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
}
