"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-[#2E073F]">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#682bd7] bg-opacity-95 flex flex-col p-6">
          <nav className="flex flex-col space-y-6">
            <Link
              href="#home"
              onClick={closeMenu}
              className="text-[#F5F1E3] text-xl font-medium hover:text-[#F5F1E3] hover:scale-110 transition-all"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={closeMenu}
              className="text-[#F5F1E3] text-xl font-medium hover:text-[#F5F1E3] hover:scale-110 transition-all"
            >
              Services
            </Link>
            <Link
              href="#why-us"
              onClick={closeMenu}
              className="text-[#F5F1E3] text-xl font-medium hover:text-[#F5F1E3] hover:scale-110 transition-all"
            >
              Why Us
            </Link>
            <Link
              href="#how-it-works"
              onClick={closeMenu}
              className="text-[#F5F1E3] text-xl font-medium hover:text-[#F5F1E3] hover:scale-110 transition-all"
            >
              How it Works
            </Link>
            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="text-[#F5F1E3] text-xl font-medium hover:text-[#F5F1E3] hover:scale-110 transition-all"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="text-[#F5F1E3] text-xl font-medium hover:text-[#F5F1E3] hover:scale-110 transition-all"
            >
              Contact Us
            </Link>
          </nav>
          <div className="mt-8">
            <Button className="w-full bg-[#2E073F] text-[#F5F1E3] hover:bg-[#3D8F6A] hover:text-white transition-colors">
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
