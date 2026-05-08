import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-cta p-10 sm:p-16 text-primary-foreground shadow-luxe"
        >
          <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] opacity-80">Ready when you are</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
                Let's design <span className="font-serif italic font-light">the home you'll come back to.</span>
              </h2>
              <p className="mt-5 opacity-85 max-w-lg">
                Free 60-minute consultation. Bring your floor plan, leave with a vision and a clear next step.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 font-medium hover:opacity-90 transition shadow-glow">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a href="tel:+919999999999"
                 className="inline-flex items-center justify-center gap-2 rounded-full glass-strong text-primary-foreground border-white/20 px-7 py-4 font-medium hover:bg-white/10 transition">
                <Phone className="h-5 w-5" /> +91 99999 99999
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
