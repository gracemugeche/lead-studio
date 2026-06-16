"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/useGSAP";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

// Lime underline that wipes in from the left on hover at a relaxed pace.
const underline =
  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left " +
  "after:scale-x-0 after:rounded-full after:bg-lime after:transition-transform after:duration-700 " +
  "after:ease-out after:content-[''] hover:after:scale-x-100";

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a
      href="#home"
      className={`text-xl font-extrabold tracking-tight transition-colors ${
        scrolled
          ? "text-night"
          : "text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.3)]"
      }`}
    >
      LEADFIT<span className="text-lime">.</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Transparent (white links) while over the hero; solid white with dark links
  // once scrolled past it, so links stay legible over any section behind.
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = `group relative text-sm font-medium transition-colors ${
    scrolled ? "text-night hover:text-night/60" : "text-white/80 hover:text-white"
  } ${underline}`;

  // 9. Hide the navbar when scrolling down past the fold, reveal on scroll up.
  useGSAP(() => {
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => {
        gsap.to(headerRef.current, {
          y: self.direction === -1 ? 0 : -100,
          duration: self.direction === -1 ? 0.4 : 0.3,
          ease: self.direction === -1 ? "power2.out" : "power2.in",
        });
      },
    });
  });

  return (
    <header
      ref={headerRef}
      className={`navbar fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/90 backdrop-blur-md"
          : ""
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 ${
          scrolled ? "" : "drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)]"
        }`}
      >
        <Logo scrolled={scrolled} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-night transition-transform hover:scale-[1.03] md:inline-block"
        >
          Get Free Audit
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border md:hidden ${
            scrolled ? "border-black/15" : "border-white/30"
          }`}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 transition-transform ${
                scrolled ? "bg-night" : "bg-white"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 transition-opacity ${
                scrolled ? "bg-night" : "bg-white"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 transition-transform ${
                scrolled ? "bg-night" : "bg-white"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-white/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-lime px-5 py-3 text-center text-sm font-semibold text-night"
              >
                Get Free Audit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
