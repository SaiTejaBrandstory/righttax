import { Star } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#2E073F] py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#FFF2FF] hover:scale-110 transition-transform duration-300">
            Testimonials
          </h1>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-[#682bd7]">
              "We asked our clients to provide testimonials, and they were so blown away by our amazing service that
              they were rendered speechless! We're not sure when they'll recover, but we'll keep you posted."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#682bd7] rounded-full flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Client {index + 1}</p>
                    <p className="text-sm text-gray-500">Satisfied Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF2FF]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Experience the PurpleTax difference and see why our clients are consistently impressed with our services.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current text-yellow-500" />
              ))}
            </div>
            <p className="ml-2 font-medium">4.9/5 average rating</p>
          </div>
        </div>
      </section>
    </div>
  )
}
