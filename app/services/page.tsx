import { CheckCircle, FileQuestion, RefreshCw, HelpCircle, Shield, MessageSquare } from "lucide-react"

export default function ServicesPage() {
  const services = [
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
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-[#682bd7] py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#F5F1E3]">What We Do</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#682bd7] p-6 rounded-lg border border-[#a37cf0] hover:bg-[#E1A6F7]/10 transition-colors transform hover:translate-y-[-5px] duration-300 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border border-[#a37cf0] bg-gradient-to-r from-[#a37cf0] to-[#682bd7]">
                    <div className="text-[#F5F1E3] hover:text-[#2E073F] transition-colors">{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-[#F5F1E3]">{service.title}</h3>
                <p className="text-[#F5F1E3] text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF2FF]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#010101]">Our Approach</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-700 mb-6">
              At RightTax, we believe in a client-centered approach to tax consultation. We take the time to understand
              your unique financial situation and provide tailored solutions that meet your specific needs.
            </p>
            <p className="text-center text-gray-700">
              Our team of experienced tax professionals stays up-to-date with the latest tax laws and regulations to
              ensure you receive the most accurate and beneficial advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
