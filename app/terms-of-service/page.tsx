"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E3]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#682bd7] bg-opacity-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#682bd7]">RightTax</span>
          </Link>
          <Link href="/">
            <Button className="bg-[#2E073F] text-[#F5F1E3] hover:bg-[#3D8F6A] hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#2E073F] hover:text-[#682bd7] transition-colors">
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">1. Acceptance of Terms</h2>
              <p className="text-[#2E073F] leading-relaxed">
                By accessing and using RightTax's tax consultation services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">2. Description of Service</h2>
              <p className="text-[#2E073F] leading-relaxed">
                RightTax provides tax consultation services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Income tax planning and optimization advice</li>
                <li>Guidance on tax notices and procedural difficulties</li>
                <li>Assistance with long-pending refunds</li>
                <li>NRI tax consultation services</li>
                <li>Personal consultation sessions</li>
                <li>Educational resources and tax guidance</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">3. User Responsibilities</h2>
              <p className="text-[#2E073F] leading-relaxed">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all applicable fees for services rendered</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">4. Professional Advice Disclaimer</h2>
              <p className="text-[#2E073F] leading-relaxed">
                The information provided through our services is for general informational purposes only and 
                should not be considered as professional tax advice. While we strive to provide accurate and 
                up-to-date information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Tax laws and regulations change frequently</li>
                <li>Individual circumstances may vary significantly</li>
                <li>We recommend consulting with a qualified tax professional for specific advice</li>
                <li>We are not responsible for decisions made based on our general guidance</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">5. Payment Terms</h2>
              <p className="text-[#2E073F] leading-relaxed">
                Payment for our services is due at the time of service or as otherwise agreed upon. 
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Set and modify pricing for our services</li>
                <li>Require payment before providing certain services</li>
                <li>Suspend services for non-payment</li>
                <li>Charge late fees for overdue payments</li>
                <li>Use collection services for unpaid accounts</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">6. Intellectual Property</h2>
              <p className="text-[#2E073F] leading-relaxed">
                All content, features, and functionality of our service, including but not limited to text, 
                graphics, logos, and software, are owned by RightTax and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">7. Limitation of Liability</h2>
              <p className="text-[#2E073F] leading-relaxed">
                RightTax shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including but not limited to loss of profits, data, or use, arising out 
                of or relating to your use of our services.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">8. Indemnification</h2>
              <p className="text-[#2E073F] leading-relaxed">
                You agree to indemnify and hold harmless RightTax, its officers, directors, employees, 
                and agents from and against any claims, damages, obligations, losses, liabilities, costs, 
                or debt arising from your use of our services.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">9. Termination</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">10. Governing Law</h2>
              <p className="text-[#2E073F] leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
                RightTax operates, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">11. Changes to Terms</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">12. Contact Information</h2>
              <p className="text-[#2E073F] leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-[#F5F1E3] p-4 rounded-lg">
                <p className="text-[#2E073F] font-medium">Email: legal@righttax.com</p>
                <p className="text-[#2E073F] font-medium">Phone: +91 (80) 1234-5678</p>
                <p className="text-[#2E073F] font-medium">Address: 123 MG Road, Koramangala, Bengaluru 560034</p>
              </div>
            </div>


          </div>
        </div>
      </main>

      <footer className="bg-[#2E073F] py-8 mt-20">
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