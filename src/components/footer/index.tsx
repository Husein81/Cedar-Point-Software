import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "./config";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm9.15 1.35a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.2225 0h.003z" />
  </svg>
);

const GmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2 6.75v10.5C2 18.216 2.784 19 3.75 19H6V9.879l6 4.5 6-4.5V19h2.25c.966 0 1.75-.784 1.75-1.75V6.75c0-.663-.37-1.27-.96-1.575a1.74 1.74 0 0 0-1.83.135L12 10.629 4.79 5.31a1.74 1.74 0 0 0-1.83-.135A1.77 1.77 0 0 0 2 6.75z" />
  </svg>
);

export default function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 lg:col-span-1.5">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/favicon.ico"
                width={32}
                height={32}
                alt="Cedar Point Software Logo"
                className="rounded"
              />
              <span className="text-xl font-bold text-slate-900">
                Cedar Point Software
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xs">
              We build powerful, scalable software solutions to help modern
              businesses operate efficiently and grow seamlessly.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/cedarpoint.lb?igsh=MWhmY3BpMXd4a2Z3dA=="
                target="_blank"
                aria-label="Instagram"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <InstagramIcon className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/cedar-point-lb/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <LinkedInIcon className="size-5" />
              </Link>
              <Link
                href="mailto:@cedarpoint.tech"
                aria-label="Email Cedar Point Software"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <GmailIcon className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-6">
              Products
            </h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary text-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-xs">
            © {fullYear} Cedar Point Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
