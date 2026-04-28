"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/start-here", label: "Start" },
  { href: "/venture", label: "Venture" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/reading", label: "Reading" },
  { href: "/now", label: "Now" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <Link
          href="/"
          className="text-ink-soft hover:text-terracotta transition-colors flex items-baseline gap-3"
        >
          <span aria-hidden="true" className="text-terracotta">§</span>
          <span className="header-wordmark">Katalina Londoño</span>
        </Link>
        <nav className="order-last flex w-full flex-nowrap items-center justify-start gap-x-4 overflow-x-auto whitespace-nowrap pb-1 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft [scrollbar-width:none] sm:order-none sm:w-auto sm:flex-wrap sm:gap-x-6 sm:overflow-visible sm:pb-0 sm:text-[0.74rem] sm:tracking-[0.12em] [&::-webkit-scrollbar]:hidden">
          {NAV.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-terracotta transition-colors"
                    : "hover:text-terracotta transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
