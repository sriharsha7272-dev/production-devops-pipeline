import LocationSearch from "./LocationSearch";

export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-4xl font-bold tracking-tight">
        What’s around you right now?
      </h1>

      <p className="mt-4 text-[rgb(var(--muted))] max-w-xl mx-auto">
        Discover food and accommodation options in your current locality.
        No booking. No ordering.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-6 py-3 rounded-lg bg-[rgb(var(--primary))] text-white font-medium hover:opacity-90">
          Use my location
        </button>

        <LocationSearch />
      </div>
    </section>
  );
}
