"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/start-here", label: "Start" },
  { href: "/writing", label: "Writing" },
  { href: "/archive", label: "Archive" },
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
        <nav className="order-last flex w-full flex-wrap items-center justify-start gap-x-5 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-soft sm:order-none sm:w-auto sm:gap-x-6 sm:text-[0.74rem]">
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
