import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 flex items-center bg-[#161519]/90 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/deestincts.png"
            alt="Deestincts Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            Contact Us
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex border-[#C3122B] bg-[#161519] text-white hover:bg-[#C3122B] hover:text-white"
        >
          Get in Touch
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  );
}
