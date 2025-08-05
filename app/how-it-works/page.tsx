import Image from "next/image"

export default function HowItWorksPage() {
  const steps = [
    "Easy Access: Log in to your secure account to get started.",
    "Ask Away: Submit your tax-related questions or concerns through our user-friendly platform.",
    "We Handle the Details: Our team of qualified tax professionals will review your submission and get to work on finding the best solution for you.",
    "Get Clear Answers: We'll provide you with clear, concise answers and guidance.",
    "Your Satisfaction is Our Priority: We'll work with you until you're confident that your tax needs are met.",
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-[#FEFCFF] py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#010101] hover:text-[#010101] hover:scale-110 transition-transform duration-300">
            How It Works
          </h1>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden animate-fade-in">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Tax consultation process"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#010101]">Transforming Your Tax Experience</h2>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold group-hover:bg-[#682bd7] transition-colors">
                      {index + 1}
                    </div>
                    <p className="text-[#010101]">{step}</p>
                  </li>
                ))}
                <li className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold group-hover:bg-[#682bd7] transition-colors">
                    6
                  </div>
                  <p className="text-[#682bd7] font-medium">HELP US IMPROVE WITH YOUR FEEDBACK</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF2FF]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does the consultation process take?",
                answer:
                  "The initial consultation typically takes 30-45 minutes. After that, the time required depends on the complexity of your tax situation.",
              },
              {
                question: "Do you offer virtual consultations?",
                answer:
                  "Yes, we offer both in-person and virtual consultations to accommodate your preferences and schedule.",
              },
              {
                question: "What documents should I prepare for my consultation?",
                answer:
                  "It's helpful to have your previous tax returns, income statements, expense receipts, and any tax notices you've received.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-[#682bd7]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
