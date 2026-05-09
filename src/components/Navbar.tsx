import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process",   label: "Process"   },
  { href: "#services",  label: "Services"  },
  { href: "#contact",   label: "Contact"   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-black/8 shadow-[0_4px_24px_rgba(28,25,22,0.10)]"
            : "bg-white/70 backdrop-blur-md border border-black/6"
        }`}>

          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="reveal-link text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/918747818089"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl border border-black/10 bg-white/80 text-[var(--foreground)] hover:border-[var(--gold)]/40 hover:text-[var(--gold)] transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,   scale: 1    }}
              exit={{   opacity: 0, y: -10, scale: 0.98  }}
              transition={{ duration: 0.22 }}
              className="md:hidden mt-2 rounded-2xl bg-white border border-black/8 shadow-lg p-5 flex flex-col gap-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleScroll(e, l.href)}
                  className="py-3 px-2 text-[var(--muted-foreground)] hover:text-[var(--gold)] text-sm font-medium border-b border-black/5 last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="https://wa.me/918747818089"
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full btn-gold px-5 py-3 text-sm w-full"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
