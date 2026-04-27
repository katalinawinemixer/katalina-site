import Link from "next/link";

type Props = {
  variant?: "hero" | "compact";
  asLink?: boolean;
};

export default function Wordmark({ variant = "hero", asLink = false }: Props) {
  const inner = <span className="wordmark-text">Katalina Londoño</span>;

  if (variant === "compact") {
    return asLink ? (
      <Link
        href="/"
        className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-ink-soft hover:text-terracotta transition-colors"
      >
        Katalina Londoño
      </Link>
    ) : (
      <span className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-ink-soft">
        Katalina Londoño
      </span>
    );
  }

  return <h1 className="wordmark wordmark-hero">{inner}</h1>;
}
