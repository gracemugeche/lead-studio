import {
  PaperPlaneIcon,
  LayoutIcon,
  RocketIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
} from "@radix-ui/react-icons";

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
    icon: <PaperPlaneIcon className={iconClass} />,
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting one-page sites built to capture and convert visitors into leads.",
    icon: <LayoutIcon className={iconClass} />,
  },
  {
    title: "Lead Generation Funnels",
    description: "End-to-end funnels from ad click to booked trial class.",
    icon: <RocketIcon className={iconClass} />,
  },
  {
    title: "Email & SMS Follow-up",
    description: "Automated sequences that nurture leads until they show up.",
    icon: <EnvelopeClosedIcon className={iconClass} />,
  },
  {
    title: "Content & Creatives",
    description: "Ad graphics and copy crafted for the fitness audience.",
    icon: <FaceIcon className={iconClass} />,
  },
  {
    title: "Website Maintenance",
    description:
      "Monthly packages to keep your site fast, updated, and converting.",
    icon: <GearIcon className={iconClass} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-animate flex flex-wrap items-end justify-between gap-6">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="section-animate group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-lime/40 hover:bg-white/[0.06]"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}