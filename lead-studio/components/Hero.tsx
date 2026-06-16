"use client";

import { useRef } from "react";
import Image from "next/image";
import { PlayIcon } from "@radix-ui/react-icons";
import { gsap, useGSAP } from "@/hooks/useGSAP";

const pills = [
  "Meta Ads",
  "Lead Funnels",
  "Yoga Studios",
  "Gym Marketing",
  "Pilates Growth",
];

// Headline split into words up-front so GSAP can stagger each ".hero-word".
const headlineLines = [["Grow", "Your"], ["Fitness", "Studio"]];

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Headline words rise into view from behind their clipped line.
      gsap.from(".hero-word", {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.3,
      });

      // 2. Subtext + CTA fade up.
      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.9,
      });
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });

      // 3. Floating card slides in, then loops gently.
      gsap.from(".hero-card", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.4,
      });
      gsap.to(".hero-card", {
        y: -10,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.4,
      });

      // 4. Pill tags pop in with a little overshoot.
      gsap.from(".hero-pill", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 1.2,
      });

      // 5. Watermark sweeps in from the left.
      gsap.from(".watermark", {
        x: -100,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.5,
      });

      // 6. Background parallax + slow zoom while the hero scrolls past.
      gsap.to(".hero-bg", {
        y: 150,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <section
      id="home"
      ref={scope}
      className="hero relative h-screen w-full overflow-hidden bg-ink"
    >
      {/* Background image + dark overlay (animated together for parallax) */}
      <div className="hero-bg absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1280&fit=crop"
          alt="Athletes training in a fitness studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
      </div>

      {/* Oversized watermark across the bottom */}
      <span
        aria-hidden="true"
        className="watermark pointer-events-none absolute bottom-0 left-0 w-full select-none whitespace-nowrap text-[clamp(80px,15vw,200px)] font-black uppercase leading-[0.8] tracking-tighter text-white/8"
      >
        LEADFIT
      </span>

      {/* Content layer */}
      <div className="absolute inset-0 z-10 mx-auto flex max-w-7xl flex-col px-6">
        {/* Top-right floating card */}
        <div className="hero-card absolute right-4 top-20 flex w-[230px] items-center gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:right-10 sm:top-24 sm:w-[280px]">
          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=160&h=160&fit=crop"
              alt="Studio fitness class"
              fill
              sizes="64px"
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink shadow">
                <PlayIcon className="h-3.5 w-3.5" />
              </span>
            </span>
          </span>
          <p className="text-sm font-semibold leading-snug text-ink">
            LeadFit turns your studio into a lead magnet.
          </p>
        </div>

        {/* Bottom content: headline + CTA on the left, pills bottom-right */}
        <div className="mt-auto pb-20 sm:pb-28">
          <div className="max-w-2xl">
            <h1 className="text-[clamp(48px,7vw,96px)] font-extrabold leading-[1.05] text-white">
              {headlineLines.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  {line.map((word, wi) => (
                    <span
                      key={wi}
                      className="hero-word mr-[0.25em] inline-block will-change-transform"
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="hero-sub mt-6 max-w-[420px] text-base leading-relaxed text-white/80 sm:text-lg">
              We run Meta Ads and build lead funnels that fill your gym, yoga, or
              pilates studio with paying members — on autopilot.
            </p>

            <a
              href="#contact"
              className="hero-cta mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Get Free Audit →
            </a>
          </div>

          {/* Pills: wrap in-flow under the CTA on mobile, float bottom-right on desktop */}
          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:max-w-md lg:justify-end">
            {pills.map((pill) => (
              <Pill key={pill}>{pill}</Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="hero-pill whitespace-nowrap rounded-full border border-white/40 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
      {children}
    </span>
  );
}
