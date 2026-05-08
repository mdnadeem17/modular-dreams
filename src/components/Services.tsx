import { motion } from "framer-motion";
import { ChefHat, Shirt, Tv, Home } from "lucide-react";

const services = [
  { icon: ChefHat, title: "Modular Kitchens", desc: "Acrylic, laminate, and PU finishes engineered around how your family cooks and gathers." },
  { icon: Shirt, title: "Wardrobes", desc: "Hinged, sliding, and walk-in wardrobes with intelligent internal storage and ambient lighting." },
  { icon: Tv, title: "TV Units", desc: "Statement entertainment walls in marble, veneer, and wood-slat compositions." },
  { icon: Home, title: "Turnkey Interiors", desc: "Full-home design, civil work, false ceiling, and furniture—handled end-to-end." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-accent">What we craft</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">
            Spaces, <span className="font-serif italic font-light text-gradient">tailored</span> to your rhythm.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single statement wardrobe to your entire home—every project receives the same factory-grade precision.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group light-sweep glass rounded-3xl p-7 hover:shadow-luxe transition-all duration-500 cursor-pointer"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-sm text-accent reveal-link inline-block">Explore →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
