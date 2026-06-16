import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { ComponentType } from "react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

function Social({
  label,
  href,
  Icon,
}: {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-lime hover:text-lime"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

const socials = [
  { label: "Instagram", href: "#", Icon: InstagramLogoIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInLogoIcon },
  { label: "Twitter", href: "#", Icon: TwitterLogoIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              LEADFIT<span className="text-lime">.</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Lead generation for gyms, yoga, and pilates studios. We fill your
              classes so you can focus on training.
            </p>
          </div>

          <nav className="md:justify-self-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3 md:justify-self-end">
            {socials.map((s) => (
              <Social key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/40">
            © 2025 LeadFit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}