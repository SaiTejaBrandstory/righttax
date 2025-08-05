import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#010101] py-8">
      <div className="container text-center text-[#FEFCFF]">
        <p>© {new Date().getFullYear()} PurpleTax. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="text-[#FEFCFF] hover:text-[#3D8F6A] transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[#FEFCFF] hover:text-[#3D8F6A] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
