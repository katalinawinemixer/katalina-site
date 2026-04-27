import Link from "next/link";
import {
  type EssayMeta,
  formatDateShort,
  getTagLabel,
} from "@/lib/essays";

type EssayListItemProps = {
  essay: EssayMeta;
  index?: number;
};

export default function EssayListItem({ essay, index }: EssayListItemProps) {
  return (
    <li className="border-b border-rule-soft last:border-b-0">
      <Link
        href={`/writing/${essay.slug}`}
        className="group block py-7 md:py-9 -mx-2 px-2 transition-colors hover:bg-paper-soft/40"
      >
        <div className="flex items-baseline gap-5 md:gap-7">
          {typeof index === "number" ? (
            <span
              aria-hidden="true"
              className="font-mono text-[0.74rem] tracking-[0.06em] text-ink-mute oldstyle pt-2 select-none w-7 shrink-0"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : null}
          <div className="flex-1">
            <h3 className="font-display text-[1.48rem] md:text-[1.95rem] leading-[1.08] tracking-[-0.018em] md:tracking-[-0.02em] text-ink group-hover:text-terracotta transition-colors">
              {essay.title}
            </h3>
            <p className="mt-3 text-ink-soft leading-snug max-w-[52ch]">
              {essay.dek}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute">
              <span className="oldstyle normal-case tracking-[0.04em]">
                {formatDateShort(essay.date)}
              </span>
              <span aria-hidden="true">·</span>
              <span>{essay.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span className="text-terracotta/80">
                {essay.tags.slice(0, 2).map(getTagLabel).join(" / ")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
