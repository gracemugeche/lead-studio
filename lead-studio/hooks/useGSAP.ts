"use client";

/**
 * Single entry point for GSAP in the app.
 *
 * Registers all plugins once (guarded so it never runs during SSR), then
 * re-exports the configured `gsap` core, `ScrollTrigger`, and the `useGSAP`
 * hook from `@gsap/react`. Components should import GSAP from here so the
 * plugins are guaranteed to be registered before any animation runs.
 *
 * `useGSAP` runs its callback inside `useLayoutEffect` and automatically
 * reverts (`ctx.revert()`) every animation/ScrollTrigger created in the scope
 * on cleanup, so there is no manual teardown to write in each component.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export { gsap, ScrollTrigger, useGSAP };
