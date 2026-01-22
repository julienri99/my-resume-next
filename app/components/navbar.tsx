import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-2
      rounded-full backdrop-blur-md bg-white/70 border border-gray-300
      shadow-lg flex gap-6 text-gray-800">
      <NavLink href="#home" text="Home" />
      <NavLink href="#about" text="About" />
      <NavLink href="#skills" text="Skills" />
      <NavLink href="#projects" text="Projects" />
      <NavLink href="#contact" text="Contact" />
    </nav>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="relative font-medium hover:text-blue-600 transition">
      {text}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
