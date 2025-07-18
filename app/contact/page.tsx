import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#682bd7] py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#FEFCFF] hover:text-[#3D8F6A] transition-colors">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#FEFCFF] p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#682bd7]">Get in Touch</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="border-[#a37cf0]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="border-[#a37cf0]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" className="border-[#a37cf0]" />
                </div>
                <Button className="w-full bg-[#3D8F6A] hover:bg-[#2D6A4F] text-white">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#a37cf0] p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#FEFCFF]">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#3D8F6A]" />
                    <span className="text-[#FEFCFF]">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#3D8F6A]" />
                    <span className="text-[#FEFCFF]">contact@righttax.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#3D8F6A]" />
                    <span className="text-[#FEFCFF]">Mon-Fri: 9AM-5PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#3D8F6A]" />
                    <span className="text-[#FEFCFF]">123 Tax Street, Finance City, FC 12345</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#a37cf0] p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#FEFCFF]">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#3D8F6A] hover:text-[#FEFCFF] transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-[#3D8F6A] hover:text-[#FEFCFF] transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-[#3D8F6A] hover:text-[#FEFCFF] transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-[#3D8F6A] hover:text-[#FEFCFF] transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF2FF]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">We're Here to Help</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Have questions about our services or need tax advice? Our team of experts is ready to assist you.
          </p>
          <Button className="bg-[#3D8F6A] hover:bg-[#2D6A4F] text-white">Schedule a Consultation</Button>
        </div>
      </section>
    </div>
  )
}
