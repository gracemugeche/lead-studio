"use client";

import { gsap, ScrollTrigger, useGSAP } from "@/hooks/useGSAP";

/**
 * Page-level animation controller. Renders nothing — it drives the
 * scroll-triggered reveals for every `.section-animate` element below the hero
 * and the count-up effect for every `.stat-number`. Keeping this in one place
 * lets the section components stay server-rendered (they only add classes).
 */
export default function ScrollAnimations() {
  useGSAP(() => {
    // Flag the document so the initial-hidden CSS only applies when JS runs
    // (no-JS visitors still see all content).
    document.documentElement.classList.add("gsap-ready");

    // 7. Reveal each tagged element as it scrolls into view, batched so groups
    // (cards in a row, stat boxes) stagger together.
    gsap.set(".section-animate", { y: 60 });
    ScrollTrigger.batch(".section-animate", {
      start: "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          overwrite: true,
        }),
    });

    // 8. Count the stat numbers up from zero the first time they appear.
    gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
      const target = parseFloat(el.dataset.target ?? "0");
      const suffix = el.dataset.suffix ?? "";
      const counter = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () =>
          gsap.to(counter, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.ceil(counter.val) + suffix;
            },
          }),
      });
    });

    // Recalculate trigger positions once images/fonts settle the layout.
    ScrollTrigger.refresh();
  });

  return null;
}
