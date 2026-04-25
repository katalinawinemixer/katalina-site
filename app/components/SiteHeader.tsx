import Link from "next/link";

const NAV = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/reading", label: "Reading" },
  { href: "/now", label: "Now" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft hover:text-terracotta transition-colors flex items-baseline gap-3"
        >
          <span aria-hidden="true" className="text-terracotta">§</span>
          <span>Katalina Londoño</span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-soft">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-terracotta transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
