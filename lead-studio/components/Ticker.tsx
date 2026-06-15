const items = [
  "Gyms",
  "Yoga Studios",
  "Pilates",
  "Lead Generation",
  "Meta Ads",
  "More Members",
  "Landing Pages",
  "Fitness Marketing",
];

export default function Ticker() {
  // Render the list twice so the -50% keyframe loop is seamless.
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden bg-lime py-4">
      <div className="ticker-track flex w-max animate-ticker items-center">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-6 text-lg font-bold text-ink"
            aria-hidden={i >= items.length}
          >
            <span aria-hidden="true">⭐</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
