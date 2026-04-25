import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function PullQuote({ children }: { children: ReactNode }) {
  return <p className="pullquote">{children}</p>;
}

function SideNote({ children, n }: { children: ReactNode; n?: number | string }) {
  return (
    <aside className="sidenote my-6 pl-4 border-l border-rule">
      {n !== undefined ? (
        <span className="text-terracotta mr-1.5">[{n}]</span>
      ) : null}
      {children}
    </aside>
  );
}

function Aside({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 py-5 px-6 bg-paper-soft/50 border-l-2 border-terracotta/60 font-display italic text-[1.05rem] leading-relaxed text-ink">
      {children}
    </aside>
  );
}

const components: MDXComponents = {
  PullQuote,
  SideNote,
  Aside,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
