"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "../icon";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
];

export default function Links() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 mr-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:block">
        <Button asChild className="px-6 font-semibold">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 z-50"
        aria-label="Toggle menu"
        variant={"ghost"}
      >
        {isOpen ? (
          <Icon name="X" className="size-6" />
        ) : (
          <Icon name="Menu" className="size-6" />
        )}
      </Button>

      {/* Mobile Menu Overlay & Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-xl md:hidden overflow-hidden animate-in slide-in-from-top-4 duration-300 ease-out">
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors animate-in slide-in-from-left-4 fade-in fill-mode-both`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span
                      className={isActive ? "text-primary" : "text-slate-600"}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <div
                className="mt-2 p-4 animate-in slide-in-from-bottom-4 fade-in fill-mode-both"
                style={{ animationDelay: `${navLinks.length * 50}ms` }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full font-bold shadow-md shadow-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
