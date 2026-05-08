import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium modular interiors—designed in Bengaluru, built to last a decade.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="h-9 w-9 rounded-full glass inline-flex items-center justify-center hover:text-accent transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-full glass inline-flex items-center justify-center hover:text-accent transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-widest">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#portfolio" className="hover:text-foreground reveal-link">Portfolio</a></li>
            <li><a href="#services" className="hover:text-foreground reveal-link">Services</a></li>
            <li><a href="#process" className="hover:text-foreground reveal-link">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground reveal-link">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-widest">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Indiranagar, Bengaluru 560038</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@modularinteriors.in</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-widest">Visit Studio</h4>
          <div className="mt-4 rounded-2xl overflow-hidden border border-border group">
            <iframe
              title="Studio Map"
              src="https://www.google.com/maps?q=Indiranagar%20Bengaluru&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Modular Interiors. All rights reserved.</p>
          <p>Crafted with care in Bengaluru.</p>
        </div>
      </div>
    </footer>
  );
}
