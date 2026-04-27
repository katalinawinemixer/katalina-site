import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-[68rem] px-6 md:px-10 py-12 grid gap-8 md:grid-cols-12 font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-soft">
        <div className="md:col-span-4">
          <p className="text-ink not-italic">Katalina Londoño</p>
          <p className="mt-2 normal-case tracking-[0.04em] text-ink-mute">
            San Francisco, CA
          </p>
          <p className="mt-1 normal-case tracking-[0.04em] text-ink-mute">
            Remote with the heme-onc program at UW Seattle
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-ink-mute">Contact</p>
          <p className="mt-2 normal-case tracking-[0.04em]">
            <a
              href="mailto:Katalina@katalinalondono.com"
              className="hover:text-terracotta transition-colors"
            >
              Katalina@katalinalondono.com
            </a>
          </p>
          <p className="mt-1 normal-case tracking-[0.04em]">
            <a
              href="https://linkedin.com/in/katalinalondono"
              className="hover:text-terracotta transition-colors"
              rel="me"
            >
              linkedin.com/in/katalinalondono
            </a>
          </p>
          <p className="mt-1 normal-case tracking-[0.04em]">
            <a
              href="https://x.com/kat_winemixer"
              className="hover:text-terracotta transition-colors"
              rel="me"
            >
              x.com/kat_winemixer
            </a>
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-ink-mute">Small doors</p>
          <p className="mt-2 normal-case tracking-[0.04em]">
            <Link href="/start-here" className="hover:text-terracotta transition-colors">
              Start here
            </Link>
          </p>
          <p className="mt-1 normal-case tracking-[0.04em]">
            <Link href="/archive" className="hover:text-terracotta transition-colors">
              Archive
            </Link>
          </p>
          <p className="mt-1 normal-case tracking-[0.04em]">
            <Link href="/now" className="hover:text-terracotta transition-colors">
              Now
            </Link>
          </p>
        </div>
        <div className="md:col-span-3 md:text-right">
          <p className="font-display italic normal-case tracking-normal text-[1rem] text-ink">
            Hecho con cuidado.
          </p>
          <p className="mt-2 normal-case tracking-[0.04em] text-ink-mute">
            Built with Bun, Next.js, too much coffee, and a suspiciously strong
            attachment to clean documents.
          </p>
          <p className="mt-3 text-ink-mute oldstyle">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
