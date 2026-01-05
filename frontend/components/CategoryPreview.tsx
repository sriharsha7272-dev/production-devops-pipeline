export default function CategoryPreview() {
  return (
    <section className="pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[rgb(var(--border))] p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-[rgb(var(--primary))]">
            🍽 Food
          </h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Restaurants, cafés, street food, messes.
          </p>
        </div>

        <div className="rounded-xl border border-[rgb(var(--border))] p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-[rgb(var(--primary))]">
            🏨 Accommodation
          </h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Hotels, PGs, hostels, service apartments.
          </p>
        </div>
      </div>
    </section>
  );
}
