import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-interior.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y     = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.10]);

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
    <section ref={ref} id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">

      {/* Parallax background */}
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium modular interior — Modular Interiors Bengaluru"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        {/* Light overlay for text readability, removing dark brown */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Main copy */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 surface rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-6 font-semibold shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
              Bengaluru · Est. 2013
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="font-display leading-[1.0] tracking-tight"
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--foreground)]">
                Modular Interiors
              </span>
              <span
                className="block mt-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light italic text-[var(--gold)]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                at Home.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-5 max-w-xl text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed"
            >
              Modular kitchens, wardrobes & turnkey interiors—engineered in our factory,
              finished in your home. Crafted for families who value the details.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="group inline-flex items-center gap-2 rounded-full btn-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm"
              >
                Explore Your Vision
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleScroll(e, "#portfolio")}
                className="inline-flex items-center gap-2 rounded-full surface border-[var(--border)] text-[var(--foreground)] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium hover:bg-black/5 transition"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {["320+ Homes Delivered", "10-Year Warranty", "4.9 ★ Rating"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Feature card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, type: "spring" }}
            className="lg:col-span-5 lg:justify-self-end w-full"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="surface rounded-3xl p-6 sm:p-7 w-full max-w-sm mx-auto lg:mx-0 shadow-lg border border-[var(--border)] bg-white/90 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--gold)] font-bold">
                <ShieldCheck className="h-4 w-4" /> Built to Last
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-display font-bold text-[var(--foreground)]">
                Premium Finish
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                Acrylic & PU lacquer surfaces with edge-to-edge precision—matched only by
                our German hardware.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[var(--background)] border border-[var(--border)] p-3.5">
                  <div className="font-display text-base font-bold text-[var(--foreground)]">Hettich®</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">German Hardware</div>
                </div>
                <div className="rounded-2xl bg-[var(--background)] border border-[var(--border)] p-3.5">
                  <div className="font-display text-base font-bold text-[var(--foreground)]">10 yrs</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">Warranty</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-5 w-px bg-[var(--border)]"
        />
      </motion.div>
    </section>
  );
}
