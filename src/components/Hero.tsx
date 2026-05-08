import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-interior.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img src={heroImg} alt="Premium modular interior" className="w-full h-[120%] object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Bengaluru · Since 2013
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]"
          >
            Design that <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-gradient">speaks volumes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            Modular kitchens, wardrobes & turnkey interiors—engineered in our factory, finished in your home. Crafted for families who value the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary-foreground px-7 py-3.5 font-medium shadow-luxe hover:shadow-glow transition">
              Explore Your Vision
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 font-medium hover:bg-card transition">
              View Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
          className="lg:col-span-5 lg:justify-self-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong rounded-3xl p-6 sm:p-7 max-w-sm shadow-luxe"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
              <ShieldCheck className="h-4 w-4" /> Built to last
            </div>
            <h3 className="mt-3 text-2xl font-display font-semibold">Premium Finish</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Acrylic & PU lacquer surfaces with edge-to-edge precision—matched only by our German hardware.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-background/40 p-3">
                <div className="font-display text-lg">Hettich®</div>
                <div className="text-xs text-muted-foreground">German Hardware</div>
              </div>
              <div className="rounded-xl bg-background/40 p-3">
                <div className="font-display text-lg">10 yrs</div>
                <div className="text-xs text-muted-foreground">Warranty</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
