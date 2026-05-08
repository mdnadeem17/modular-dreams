import { motion } from "framer-motion";
import { MessageSquare, PenTool, FileText, Hammer, Truck, HeartHandshake } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consult", desc: "We listen, measure, and understand how you live." },
  { icon: PenTool, title: "Design", desc: "3D walkthroughs and material palettes—until it's perfect." },
  { icon: FileText, title: "Quote", desc: "Transparent, line-item pricing. No hidden surprises." },
  { icon: Hammer, title: "Craft", desc: "Cut, edge-banded, and finished in our owned factory." },
  { icon: Truck, title: "Install", desc: "Site-ready modules, installed in days—not months." },
  { icon: HeartHandshake, title: "Care", desc: "10-year warranty and a service team that picks up." },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">The Journey</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">
            Factory to home, <span className="font-serif italic font-light text-gradient">in six steps.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every module is engineered in a controlled environment, then installed with surgical precision—backed by a 10-year warranty.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="relative glass rounded-3xl p-7 light-sweep"
            >
              <div className="absolute top-5 right-6 font-display text-5xl font-semibold text-foreground/5">
                0{i + 1}
              </div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
