import Image from "next/image"

export default function WhyUsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#FFF2FF] py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#010101] hover:text-[#682bd7] transition-colors">
            Why Us
          </h1>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Tax professionals at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 group">
              <h2 className="text-2xl font-bold text-[#010101] group-hover:scale-110 transition-transform duration-300">
                Your path to tax empowerment.
              </h2>
              <p className="text-[#010101] group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#682bd7] font-semibold">PurpleTax</span> is a tax consultation service founded by
                experienced tax professionals. We aim to simplify complex tax laws and procedures, empowering
                individuals and businesses to make informed financial decisions.
              </p>
              <p className="text-[#010101] group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#682bd7] font-semibold">PurpleTax</span> offers clear, accurate, and practical tax
                solutions through a single platform, enabling users to get answers, understand procedures, and receive
                tailored expert advice.
              </p>
              <p className="text-[#010101] group-hover:scale-110 transition-transform duration-300">
                Tax systems are meant to be Progressive rather than Regressive, we are committed to educating people,
                resolving tax issues efficiently, and continuously improving their services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in complete transparency in all our dealings with clients.",
              },
              {
                title: "Expertise",
                description: "Our team consists of highly qualified tax professionals with years of experience.",
              },
              {
                title: "Client-Centered",
                description: "We put our clients' needs first and work tirelessly to achieve the best outcomes.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:border-[#682bd7] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-[#682bd7]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2E073F]">
        <div className="container text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-[#F5F1E3] max-w-3xl mx-auto">
            "The hardest thing in the world to understand is income tax" - Albert Einstein
            <p className="mt-4">But we make it easy, for you.</p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
