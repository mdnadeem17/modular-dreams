import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import kitchen from "@/assets/portfolio-kitchen.jpg";

export function CTASection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-luxe"
        >
          {/* Image Background */}
          <div className="absolute inset-0">
            <img 
              src={kitchen} 
              alt="Beautiful interior kitchen" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay to ensure text remains readable */}
            <div className="absolute inset-0 bg-black/75" />
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--gold-light)]/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--gold-light)]/15 blur-[100px] pointer-events-none" />
          {/* Gold top border */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-light)]/70 to-transparent" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">

              {/* Left */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-light)] font-semibold drop-shadow-sm">
                  Ready When You Are
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight drop-shadow-sm">
                  Let's design{" "}
                  <em className="font-light not-italic" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#e8c87a' }}>
                    the home you'll love.
                  </em>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg drop-shadow-sm">
                  Free 60-minute consultation. Bring your floor plan, leave with a vision and a clear next step.
                </p>

                <div className="mt-7 space-y-3.5">
                  <div className="flex items-start gap-3 text-sm text-white/80 drop-shadow-sm">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#e8c87a' }} />
                    <span>21, 10th Main, 2nd Cross, Vijayanagar, Near Sunkadakatte, Naagarabhaavi, Bengaluru 560072</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80 drop-shadow-sm">
                    <Phone className="h-4 w-4 shrink-0" style={{ color: '#e8c87a' }} />
                    <a href="tel:08747818089" className="hover:text-white transition-colors">087478 18089</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80 drop-shadow-sm">
                    <Clock className="h-4 w-4 shrink-0" style={{ color: '#e8c87a' }} />
                    <span>Mon – Sat, 10 AM – 7 PM</span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-3.5">
                <a
                  href="https://wa.me/918747818089"
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm sm:text-base font-semibold text-white transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:08747818089"
                  className="flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm sm:text-base font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                >
                  <Phone className="h-5 w-5" />
                  Call 087478 18089
                </a>
                <p className="text-xs text-white/50 text-center mt-1 drop-shadow-sm">
                  ✦ We respond within 2 hours. No spam.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
