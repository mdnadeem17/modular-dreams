import { motion } from "framer-motion";
import { MessageSquare, PenTool, FileText, Hammer, Truck, HeartHandshake } from "lucide-react";

const steps = [
  { icon: MessageSquare,  title: "Consult",  desc: "We listen, measure, and understand how you live." },
  { icon: PenTool,        title: "Design",   desc: "3D walkthroughs and material palettes—until it's perfect." },
  { icon: FileText,       title: "Quote",    desc: "Transparent, line-item pricing. No hidden surprises." },
  { icon: Hammer,         title: "Craft",    desc: "Cut, edge-banded, and finished in our owned factory." },
  { icon: Truck,          title: "Install",  desc: "Site-ready modules, installed in days—not months." },
  { icon: HeartHandshake, title: "Care",     desc: "10-year warranty and a service team that picks up." },
];

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="section-label">The Journey</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--foreground)] leading-tight">
            Factory to home,{" "}
            <em className="font-light not-italic" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold)' }}>
              in six steps.
            </em>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            Every module is engineered in a controlled environment, then installed with
            surgical precision—backed by a 10-year warranty.
          </p>
        </motion.div>

        <div className="divider-gold my-8 max-w-xs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="light-sweep surface rounded-2xl sm:rounded-3xl p-6 sm:p-7 relative hover:border-[var(--gold)]/20 hover:shadow-md transition-all duration-400"
            >
              {/* Step watermark */}
              <div className="absolute top-4 right-5 font-display text-5xl sm:text-6xl font-bold text-black/4 select-none pointer-events-none">
                0{i + 1}
              </div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl surface-warm border border-[var(--gold)]/15 text-[var(--gold)]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[var(--gold)] text-[10px] font-semibold tracking-[0.2em] uppercase">
                Step {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-1 text-lg sm:text-xl font-display font-bold text-[var(--foreground)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
