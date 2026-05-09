export function Logo() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a href="#top" onClick={(e) => handleScroll(e, "#top")} className="flex items-center gap-2.5 group select-none shrink-0">
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--gold)] animate-logo-dot" />
      <div className="flex items-baseline gap-1 font-display leading-none">
        <span className="text-[1.1rem] font-bold tracking-tight text-sheen">Modular</span>
        <span
          className="text-[0.95rem] font-light italic text-[var(--gold)]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Interiors
        </span>
      </div>
    </a>
  );
}
