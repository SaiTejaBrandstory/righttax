import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy - PurpleTax",
  description: "Learn about how PurpleTax collects, uses, and protects your personal information. Our privacy policy ensures your data security and transparency in our tax consultation services.",
  keywords: "privacy policy, data protection, personal information, tax consultation privacy, PurpleTax privacy",
  openGraph: {
    title: "Privacy Policy - PurpleTax",
    description: "Learn about how PurpleTax collects, uses, and protects your personal information. Our privacy policy ensures your data security and transparency in our tax consultation services.",
    url: 'https://purpletax.com/privacy-policy',
  },
  twitter: {
    title: "Privacy Policy - PurpleTax",
    description: "Learn about how PurpleTax collects, uses, and protects your personal information. Our privacy policy ensures your data security and transparency in our tax consultation services.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E3]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#682bd7] bg-opacity-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#682bd7]">PurpleTax</span>
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
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">1. Information We Collect</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                submit tax-related questions, or contact our support team. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Tax-related documents and information you submit</li>
                <li>Communication history with our tax professionals</li>
                <li>Account credentials and preferences</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">2. How We Use Your Information</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Provide tax consultation services and answer your questions</li>
                <li>Process your requests and transactions</li>
                <li>Send you important updates about our services</li>
                <li>Improve our platform and user experience</li>
                <li>Comply with legal obligations and tax regulations</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">3. Information Sharing</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">4. Data Security</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">5. Your Rights</h2>
              <p className="text-[#2E073F] leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">6. Cookies and Tracking</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We use cookies and similar technologies to enhance your experience on our platform. 
                These technologies help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#2E073F] ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">7. Changes to This Policy</h2>
              <p className="text-[#2E073F] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last Updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#682bd7]">8. Contact Us</h2>
              <p className="text-[#2E073F] leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-[#F5F1E3] p-4 rounded-lg">
                <p className="text-[#2E073F] font-medium">
                  <a href="mailto:purpletaxcare@gmail.com" className="text-[#2E073F] hover:text-[#2e073f] transition-colors">Mail: purpletaxcare@gmail.com</a>
                </p>
                <p className="text-[#2E073F] font-medium">
                  <a href="tel:+917404596409" className="text-[#2E073F] hover:text-[#2e073f] transition-colors">Call: +91 74045 96409</a>
                </p>
                <p className="text-[#2E073F] font-medium">Hours: MON-SUN: 24 X 7</p>
              </div>
            </div>


          </div>
        </div>
      </main>

      <footer className="bg-[#2E073F] py-8 mt-20">
        <div className="container text-center text-[#F5F1E3]">
          <p>© {new Date().getFullYear()} PurpleTax. All rights reserved.</p>
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