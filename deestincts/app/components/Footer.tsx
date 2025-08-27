import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/images/deestincts.png"
                alt="Deestincts Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-white/70">
              Crafting exceptional digital experiences that inspire and drive results.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm text-white/70 font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-white/70">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Connect</h3>
            <div className="flex flex-col gap-x-4 gap-y-2 text-sm">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">Facebook</Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src="/images/svglogo.svg"
            alt="Deestincts logo"
            width={1600}
            height={400}
            className="mx-auto h-16 sm:h-20 md:h-24 lg:h-28 w-auto opacity-30"
            priority={false}
          />
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Deestincts Design Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
