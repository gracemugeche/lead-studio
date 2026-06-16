import Image from "next/image";

const gridImages = [
  { id: "photo-1571902943202-507ec2618e8f", alt: "Weight training session" },
  { id: "photo-1518611012118-696072aa579a", alt: "Yoga class stretching" },
  { id: "photo-1599058917212-d750089bc07e", alt: "Athlete lifting weights" },
  { id: "photo-1518310383802-640c2de311b2", alt: "Pilates reformer workout" },
];

function StatBox({
  value,
  target,
  suffix,
  label,
}: {
  value: string;
  target: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="section-animate rounded-2xl border border-black/5 bg-white p-5">
      <p
        className="stat-number text-3xl font-extrabold text-night"
        data-target={target}
        data-suffix={suffix}
      >
        {value}
      </p>
      <p className="mt-1 text-sm text-night/60">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <span className="section-animate block text-xs font-semibold uppercase tracking-wider text-night/50">
            Get To Know Us
          </span>
          <h2 className="section-animate mt-3 text-3xl font-extrabold leading-tight tracking-tight text-night sm:text-4xl lg:text-5xl">
            We Fill Your Classes.
            <br />
            You Focus on{" "}
            <span className="underline decoration-lime decoration-4 underline-offset-4">
              Training.
            </span>
          </h2>
          <p className="section-animate mt-6 max-w-lg text-lg leading-relaxed text-night/70">
            We specialise in lead generation for gyms, yoga, and pilates
            studios. No fluff — just a steady flow of new trial bookings and
            memberships.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
            <StatBox
              value="500+"
              target={500}
              suffix="+"
              label="Leads Generated · Across all clients"
            />
            <StatBox
              value="89%"
              target={89}
              suffix="%"
              label="Client Retention · Avg. every year"
            />
          </div>

          <a
            href="#results"
            className="section-animate mt-8 inline-block rounded-full bg-night px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Learn More →
          </a>
        </div>

        {/* Right column: image grid */}
        <div className="section-animate relative">
          <div className="grid grid-cols-2 gap-4">
            {gridImages.map(({ id, alt }, i) => (
              <div
                key={id}
                className={`relative h-44 overflow-hidden rounded-2xl sm:h-56 ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <Image
                  src={`https://images.unsplash.com/${id}?w=500&h=600&fit=crop`}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Floating badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-lime px-6 py-4 text-center shadow-xl">
            <p className="text-2xl font-extrabold text-ink">3+</p>
            <p className="text-xs font-semibold text-ink">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}