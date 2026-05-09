import { Mail, MapPin, Phone, Instagram, Facebook, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
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
    <footer className="bg-[var(--background)] border-t border-[var(--border)] mt-0">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Premium modular kitchens, wardrobes & turnkey interiors—crafted in Bengaluru since 2013.
            </p>
            <div className="mt-5 flex gap-3">
              {[{ icon: Instagram, label: "Instagram" }, { icon: Facebook, label: "Facebook" }].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="https://instagram.com"
                  target="_blank" rel="noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-[var(--border)] inline-flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted-foreground)]">
              {["Portfolio", "Services", "Process", "Contact"].map(l => (
                <li key={l}>
                  <a 
                    href={`#${l.toLowerCase()}`} 
                    onClick={(e) => handleScroll(e, `#${l.toLowerCase()}`)}
                    className="hover:text-[var(--foreground)] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-[var(--muted-foreground)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <span className="leading-relaxed">
                  21, 10th Main, 2nd Cross,<br />
                  Vijayanagar, Near Sunkadakatte,<br />
                  Naagarabhaavi, Bengaluru 560072
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="tel:08747818089" className="hover:text-[var(--foreground)] transition-colors">087478 18089</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="mailto:hello@modularinteriors.in" className="hover:text-[var(--foreground)] transition-colors break-all">
                  hello@modularinteriors.in
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Visit Studio</h4>
            <div className="mt-5 rounded-2xl overflow-hidden border border-[var(--border)] group">
              <iframe
                title="Modular Interiors Studio"
                src="https://www.google.com/maps?q=21+10th+Main+2nd+Cross+Vijayanagar+Naagarabhaavi+Bengaluru+560072&output=embed"
                width="100%" height="160"
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=XGF3+CJ+Bengaluru+Karnataka"
              target="_blank" rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-[var(--gold)] hover:underline"
            >
              <ExternalLink className="h-3 w-3" /> Open in Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-wrap justify-between items-center gap-3 text-xs text-[var(--muted-foreground)]">
          <p>© {new Date().getFullYear()} <span className="text-[var(--foreground)]">Modular Interiors</span>. All rights reserved.</p>
          <p>Crafted with care in Bengaluru, Karnataka.</p>
        </div>
      </div>
    </footer>
  );
}
