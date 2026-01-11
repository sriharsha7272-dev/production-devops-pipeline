import TypingText from "../components/TypingText";

export default function Home() {
  return (
    <div className="page">
      <TypingText
        text="Farm-Fresh Food. Ethically Sourced. Thoughtfully Delivered."
        speed={40}
      />

      <p style={{ maxWidth: "640px", fontSize: "16px" }}>
        We bring carefully selected produce directly from dedicated farmers to
        discerning homes in cities and towns. Every order supports sustainable
        farming, fair pricing, and uncompromising quality.
      </p>

      <p style={{ fontStyle: "italic", color: "#64748b" }}>
        Eat clean. Eat consciously. Know your farmer.
      </p>

      <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
        <button style={{ width: "auto", padding: "12px 24px" }}>
          Discover Our Produce
        </button>

        <button
          style={{
            width: "auto",
            padding: "12px 24px",
            background: "white",
            color: "#2563eb",
            border: "1px solid #2563eb",
          }}
        >
          Meet Our Farmers
        </button>

        <button
          style={{
            width: "auto",
            padding: "12px 24px",
            background: "#0f172a",
          }}
        >
          Shop Farm-Fresh
        </button>
      </div>
    </div>
  );
}
