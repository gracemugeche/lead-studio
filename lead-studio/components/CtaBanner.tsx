import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-ink py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Grow Your Studio?
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Let&apos;s build your lead machine together.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-lime px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
        >
          Book a Free Call
        </a>
      </Reveal>
    </section>
  );
}