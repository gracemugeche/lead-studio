import Image from "next/image";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Sarah M.",
    studio: "FlexGym Lagos",
    avatar: "photo-1544005313-94ddf0286df2",
    quote:
      "LeadFit filled our trial slots within the first week. We gained 40 new members in a single month — the best ROI we've ever had on ads.",
  },
  {
    name: "David O.",
    studio: "ZenYoga Studio",
    avatar: "photo-1507003211169-0a1dd7228f2d",
    quote:
      "Their landing pages convert. We went from a trickle of bookings to a consistent, predictable flow of new students every week.",
  },
  {
    name: "Amara N.",
    studio: "CorePilates",
    avatar: "photo-1438761681033-6461ffad8d80",
    quote:
      "The automated follow-ups are a game changer. Leads actually show up to class now. Genuinely hands-off growth for our studio.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-night/50">
            What Our Clients Say
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-night sm:text-4xl lg:text-5xl">
            Loved by Studio Owners
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-night/70">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image
                      src={`https://images.unsplash.com/${t.avatar}?w=88&h=88&fit=crop&crop=faces`}
                      alt={t.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-night">{t.name}</p>
                    <p className="text-xs text-night/50">{t.studio}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
