import Reveal from "./Reveal";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconClass = "h-7 w-7";

const services: Service[] = [
  {
    title: "Meta Ads Management",
    description:
      "We run Facebook & Instagram ads that bring real leads to your studio every week.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path
          d="M3 11l18-8-8 18-2-7-8-3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting one-page sites built to capture and convert visitors into leads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9h18M7 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Lead Generation Funnels",
    description: "End-to-end funnels from ad click to booked trial class.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path
          d="M3 4h18l-7 8v6l-4 2v-8L3 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Email & SMS Follow-up",
    description: "Automated sequences that nurture leads until they show up.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Content & Creatives",
    description: "Ad graphics and copy crafted for the fitness audience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M8 13s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    description:
      "Monthly packages to keep your site fast, updated, and converting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path
          d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6 2 2 6-6a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-lime">
                What We Offer
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                The Best{" "}
                <span className="rounded-lg bg-lime px-3 text-ink">Services</span>
              </h2>
            </div>
            <a
              href="#services"
              className="text-sm font-semibold text-lime transition-opacity hover:opacity-80"
            >
              See More →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-lime/40 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 text-lime">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}