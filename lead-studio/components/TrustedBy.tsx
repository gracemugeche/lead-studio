import Reveal from "./Reveal";

const logos = [
  "FlexGym",
  "ZenYoga",
  "CorePilates",
  "PowerHouse",
  "PulseFit",
  "StudioOne",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-black/5 bg-cream py-14">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-night/50">
            Trusted By Fitness Studios Worldwide
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <span
                key={logo}
                className="cursor-default text-xl font-extrabold tracking-tight text-night/30 grayscale transition-all hover:text-night hover:grayscale-0"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}