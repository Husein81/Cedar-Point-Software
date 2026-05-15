import Link from "next/link";
import Links from "./links";
import Logo from "./logo";

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Logo />
        </Link>

        <Links />
      </div>
    </nav>
  );
}
