"use client";

import { useRef } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/useGSAP";

const items = [
  "Gyms",
  "Yoga Studios",
  "Pilates",
  "Lead Generation",
  "Meta Ads",
  "More Members",
  "Landing Pages",
  "Fitness Marketing",
];

export default function Ticker() {
  // Render the list twice so the -50% loop is seamless.
  const loop = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);

  // 10. Drive the marquee with GSAP and speed it up with scroll velocity,
  // easing back to its resting speed when scrolling stops.
  useGSAP(
    () => {
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      ScrollTrigger.create({
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 200, 8);
          // `timeScale` is a method, so GSAP tweens it via its getter/setter.
          gsap.to(tween, {
            timeScale: boost,
            duration: 0.2,
            overwrite: true,
            onComplete: () =>
              gsap.to(tween, { timeScale: 1, duration: 1, ease: "power2.out" }),
          });
        },
      });
    },
    { scope: trackRef }
  );

  return (
    <div className="overflow-hidden bg-lime py-4">
      <div ref={trackRef} className="flex w-max items-center will-change-transform">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-6 text-lg font-bold text-ink"
            aria-hidden={i >= items.length}
          >
            <StarFilledIcon className="h-4 w-4" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
