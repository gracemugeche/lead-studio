import Image from "next/image";

const caseStudies = [
  {
    tag: "GYM",
    image: "photo-1534438327276-14e5300c3a48",
    headline: "62 leads in 3 weeks for a Lagos gym",
    description:
      "A targeted Meta Ads campaign plus a trial-class funnel booked the gym solid through the launch month.",
  },
  {
    tag: "YOGA",
    image: "photo-1545205597-3d9d02c29597",
    headline: "Sold-out classes for a boutique yoga studio",
    description:
      "We rebuilt the landing page and ran retargeting, doubling weekly trial sign-ups in 30 days.",
  },
  {
    tag: "PILATES",
    image: "photo-1518611012118-696072aa579a",
    headline: "118 memberships for a pilates chain",
    description:
      "A multi-location funnel with SMS follow-up turned cold traffic into paying members.",
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-animate">
          <span className="text-xs font-semibold uppercase tracking-wider text-night/50">
            Case Studies
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-night sm:text-4xl lg:text-5xl">
            Some Recent <span className="text-lime">Results</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.headline}
              className="section-animate group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white"
            >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${study.image}?w=600&h=400&fit=crop`}
                    alt={study.headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                    {study.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-night">
                    {study.headline}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-night/60">
                    {study.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 text-sm font-semibold text-night transition-colors hover:text-lime"
                  >
                    View Case Study →
                  </a>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}