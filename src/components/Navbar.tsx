import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-luxe" : "bg-transparent"
          }`}
        >
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="reveal-link text-foreground/80 hover:text-foreground transition">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/919999999999"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition shadow-glow"
          >
            <MessageCircle className="h-4 w-4" /> Let's Talk
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg glass" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 py-1">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-sm font-medium">
              <MessageCircle className="h-4 w-4" /> Let's Talk
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
