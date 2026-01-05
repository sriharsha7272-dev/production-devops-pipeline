interface Props {
  text: string;
  variant?: "primary" | "dark";
}

export default function AuthButton({ text, variant = "primary" }: Props) {
  const styles =
    variant === "primary"
      ? "bg-emerald-500 hover:bg-emerald-600"
      : "bg-slate-900 hover:bg-slate-800";

  return (
    <button
      className={`w-full text-white font-semibold py-3 rounded-lg transition ${styles}`}
    >
      {text}
    </button>
  );
}
