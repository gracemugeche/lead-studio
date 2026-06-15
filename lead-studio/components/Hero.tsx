import Image from "next/image";
import Reveal from "./Reveal";

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-amber-400"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* Left: copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-night/70">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Welcome to LeadFit
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-night sm:text-5xl lg:text-6xl">
            More Clients For Your
            <br />
            <span className="text-lime">Fitness Studio</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-night/70">
            We run targeted Meta Ads and build lead funnels that fill your gym,
            yoga, or pilates studio with paying members — consistently.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-lime px-7 py-3.5 text-base font-semibold text-night transition-transform hover:scale-[1.03]"
            >
              Get Started →
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-base font-semibold text-night"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night text-white">
                ▶
              </span>
              Watch How It Works
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "photo-1517836357463-d25dfeac3438",
                "photo-1534438327276-14e5300c3a48",
                "photo-1571019613454-1cb2f99b2d8b",
              ].map((id) => (
                <span
                  key={id}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cream"
                >
                  <Image
                    src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=faces`}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="text-sm font-semibold text-night">
              50+ Fitness Studios Served
            </p>
          </div>
        </Reveal>

        {/* Right: image + floating card */}
        <Reveal delay={0.15} className="relative">
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=1100&fit=crop"
              alt="Members training in a fitness studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating testimonial card */}
          <div className="absolute -left-4 top-8 w-64 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:-left-8">
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=88&h=88&fit=crop&crop=faces"
                  alt="Sarah M."
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="text-sm font-bold text-night">Sarah M.</p>
                <Stars />
              </div>
            </div>
            <p className="mt-3 text-sm leading-snug text-night/70">
              “Gained 40 new members in 30 days.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
