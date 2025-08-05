"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#682bd7]">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
                      <span className="text-xl font-bold text-[#FEFCFF]">PurpleTax</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#FEFCFF] hover:text-[#010101] transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-[#FEFCFF] hover:text-[#010101] transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Login button */}
        <Button className="hidden md:inline-flex bg-[#010101] text-[#FEFCFF] hover:bg-[#3D8F6A] transition-colors">
          Login
        </Button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 bg-[#682bd7] md:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <nav className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#FEFCFF] text-lg font-medium hover:text-[#010101] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#010101] text-[#FEFCFF] hover:bg-[#3D8F6A] transition-colors w-full">Login</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
