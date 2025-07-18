"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  FileQuestion,
  RefreshCw,
  HelpCircle,
  Shield,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AosInit from "@/components/aos-init"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <AosInit />

      {/* Header & Navigation */}
      <header className="fixed top-0 z-50 w-full border-b bg-[#682bd7] bg-opacity-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#682bd7]">RightTax</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-[#2E073F] hover:text-[#F5F1E3] hover:scale-120 transition-all">
              Home
            </Link>
            <Link href="#services" className="text-[#2E073F] hover:text-[#F5F1E3] hover:scale-120 transition-all">
              Services
            </Link>
            <Link href="#why-us" className="text-[#2E073F] hover:text-[#F5F1E3] hover:scale-120 transition-all">
              Why Us
            </Link>
            <Link href="#how-it-works" className="text-[#2E073F] hover:text-[#F5F1E3] hover:scale-120 transition-all">
              How it Works
            </Link>
            <Link href="#testimonials" className="text-[#2E073F] hover:text-[#F5F1E3] hover:scale-120 transition-all">
              Testimonials
            </Link>
            <Link href="#contact" className="text-[#2E073F] hover:text-[#F5F1E3] hover:scale-120 transition-all">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex bg-[#2E073F] text-[#F5F1E3] hover:bg-[#3D8F6A] hover:text-white transition-colors">
              Login
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden pt-16">
        {/* Home Section */}
        <section id="home" className="bg-[#F5F1E3] py-20">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/tax-consultation-services.jpg"
                alt="Tax consultation services"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-[#2E073F] hover:text-[#682bd7] transition-colors hover:scale-110 transition-transform duration-300 overflow-hidden">TAILORED TAX</span>
            <br />
            <span className="text-[#682bd7] hover:text-[#3D8F6A] transition-colors hover:scale-110 transition-transform duration-300 overflow-hidden">SOLUTION</span>
          </h1>
              <p className="text-lg text-gray-700">
                Professional tax consultation services tailored to your unique financial situation.
              </p>
              <Button 
                className="bg-[#3D8F6A] hover:bg-[#2D6A4F] text-white"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-[#682bd7] py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#F5F1E3] hover:scale-110 transition-transform duration-300 overflow-hidden">What we Do</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Income Tax Planning & Optimization",
                  description: "Strategic planning to minimize tax liability and maximize returns.",
                  icon: <CheckCircle className="h-6 w-6" />,
                },
                {
                  title: "Guide to Your Tax Notices",
                  description: "Clear explanations and guidance for handling tax notices.",
                  icon: <FileQuestion className="h-6 w-6" />,
                },
                {
                  title: "Resolving Long Pending Refunds",
                  description: "Expedite and resolve delayed tax refunds efficiently.",
                  icon: <RefreshCw className="h-6 w-6" />,
                },
                {
                  title: "Procedural Difficulties with Income Tax",
                  description: "Navigate complex tax procedures with expert assistance.",
                  icon: <HelpCircle className="h-6 w-6" />,
                },
                {
                  title: "NRIs Tax Confusion",
                  description: "Specialized solutions for Non-Resident Indians' tax concerns.",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: "Personal Consultation",
                  description: "One-on-one expert consultation for your specific tax needs.",
                  icon: <MessageSquare className="h-6 w-6" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-[#682bd7] p-6 rounded-lg border border-[#a37cf0] hover:bg-[#E1A6F7]/10 transition-colors transform hover:translate-y-[-5px] duration-300 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border border-[#a37cf0] bg-gradient-to-r from-[#a37cf0] to-[#682bd7]">
                      <div className="text-[#F5F1E3] hover:text-[#2E073F] hover:scale-120 transition-all">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-[#F5F1E3]">{service.title}</h3>
                  <p className="text-[#F5F1E3] text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="bg-[#F5F1E3] py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#2E073F] hover:scale-110 transition-transform duration-300 overflow-hidden">
              Why Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/tax-professionals-at-work.jpg"
                  alt="Tax professionals at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h3 className="text-2xl font-bold text-[#682bd7]">Your path to tax empowerment</h3>
                </div>
                <p className="text-[#2E073F]">
                  RightTax is a tax consultation service founded by experienced tax professionals. We aim to simplify
                  complex tax laws and procedures, empowering individuals and businesses to make informed financial
                  decisions.
                </p>
                <p className="text-[#2E073F]">
                  RightTax offers clear, accurate, and practical tax solutions through a single platform, enabling users
                  to get answers, understand procedures, and receive tailored expert advice.
                </p>
                <p className="text-[#2E073F]">
                  Tax systems are meant to be Progressive rather than Regressive, Our Team is committed to educating
                  people, resolving tax issues efficiently, and continuously improving their services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section id="quote" className="bg-[#2E073F] py-16">
          <div className="container text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-[#F5F1E3] max-w-3xl mx-auto hover:scale-110 transition-transform duration-300 overflow-hidden">
              "The hardest thing in the world to understand is income tax" - Albert Einstein
              <p className="mt-4">But RightTax makes it easy, for you.</p>
            </blockquote>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="bg-[#F5F1E3] py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#2E073F] hover:scale-110 transition-transform duration-300 overflow-hidden">
              How it Works
            </h2>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden animate-fade-in">
                <Image
                  src="/tax-consultation-process.jpg"
                  alt="Tax consultation process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <h3 className="text-2xl font-bold text-[#2E073F]">Transforming Your Tax Experience</h3>
                </div>
                <ol className="space-y-6">
                  {[
                    "Easy Access: Log in to your secure account to get started.",
                    "Ask Away: Submit your tax-related questions or concerns through our user-friendly platform.",
                    "We Handle the Details: Our team of qualified tax professionals will review your submission and get to work on finding the best solution for you.",
                    "Get Clear Answers: We'll provide you with clear, concise answers and guidance with minimum time.",
                    "Your Satisfaction is Our Priority: We'll work with you until you're confident that your tax needs are met.",
                  ].map((step, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold hover:bg-[#682bd7] transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-[#2E073F]">{step}</p>
                    </li>
                  ))}
                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold hover:bg-[#682bd7] transition-colors">
                      6
                    </div>
                    <p className="text-[#682bd7] font-medium">
                      HELP US IMPROVE WITH YOUR FEEDBACK
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-[#2E073F] py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#F5F1E3] hover:scale-110 transition-transform duration-300 overflow-hidden">
              Testimonials
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-[#F5F1E3] hover:scale-110 transition-transform">
                "We asked our clients to provide testimonials, and they were so blown away by our amazing service that
                they were rendered speechless! We're not sure when they'll recover, but we'll keep you posted."
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="bg-[#F5F1E3] py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#682bd7] hover:text-[#2E073F] hover:scale-110 transition-transform duration-300 overflow-hidden">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#682bd7]">Get in Touch</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-[#682bd7]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="border-[#682bd7]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="border-[#682bd7]" />
                  </div>
                  <Button className="w-full bg-[#3D8F6A] hover:bg-[#2D6A4F] text-white">Send Message</Button>
                </form>
              </div>
              <div className="space-y-8">
                <div className="bg-[#682bd7] p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-[#F5F1E3]">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#F5F1E3]" />
                      <span className="text-[#F5F1E3]">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#F5F1E3]" />
                      <span className="text-[#F5F1E3]">contact@righttax.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#F5F1E3]" />
                      <span className="text-[#F5F1E3]">Mon-Fri: 9AM-5PM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#682bd7] p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-[#F5F1E3]">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#F5F1E3] hover:text-[#3D8F6A] transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-[#F5F1E3] hover:text-[#3D8F6A] transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-[#F5F1E3] hover:text-[#3D8F6A] transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-[#F5F1E3] hover:text-[#3D8F6A] transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2E073F] py-8">
        <div className="container text-center text-[#F5F1E3]">
          <p>© {new Date().getFullYear()} RightTax. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/privacy-policy" className="text-[#F5F1E3] hover:text-[#3D8F6A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#F5F1E3] hover:text-[#3D8F6A] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
