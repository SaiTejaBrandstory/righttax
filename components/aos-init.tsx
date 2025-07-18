"use client"

import { useEffect } from "react"

export default function AosInit() {
  useEffect(() => {
    // Initialize AOS
    const initAos = async () => {
      const AOS = (await import("aos")).default
      AOS.init({
        duration: 800,
        once: true,
      })
    }

    initAos()

    // Add scroll event listener to trigger animations
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-aos]")
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("aos-animate")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
