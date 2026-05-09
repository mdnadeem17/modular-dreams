import { motion } from "framer-motion";
import { ChefHat, Shirt, Tv, Home } from "lucide-react";

const services = [
  { icon: ChefHat, title: "Modular Kitchens",  tag: "Popular", desc: "Acrylic, laminate, and PU finishes engineered around how your family cooks and gathers." },
  { icon: Shirt,   title: "Wardrobes",          tag: "",        desc: "Hinged, sliding, and walk-in wardrobes with intelligent internal storage and ambient lighting." },
  { icon: Tv,      title: "TV Units",           tag: "",        desc: "Statement entertainment walls in marble, veneer, and wood-slat compositions." },
  { icon: Home,    title: "Turnkey Interiors",  tag: "Premium", desc: "Full-home design, civil work, false ceiling, and furniture—handled end-to-end." },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="section-label">What We Craft</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--foreground)] leading-tight">
            Spaces,{" "}
            <em className="font-light not-italic" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold)' }}>
              tailored
            </em>{" "}
            to your rhythm.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            From a single statement wardrobe to your entire home—every project receives
            the same factory-grade precision and care.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group light-sweep surface rounded-2xl sm:rounded-3xl p-6 sm:p-7 cursor-pointer hover:border-[var(--gold)]/25 hover:shadow-md transition-all duration-400 relative"
            >
              {s.tag && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-[var(--gold)] surface-warm px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl surface-warm border border-[var(--gold)]/15 text-[var(--gold)] group-hover:bg-[var(--gold)]/12 transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-display font-bold text-[var(--foreground)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-[var(--gold)] group-hover:gap-2.5 transition-all duration-300">
                <span>Explore</span><span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
