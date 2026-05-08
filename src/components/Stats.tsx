import { motion } from "framer-motion";

const stats = [
  { value: "320+", label: "Homes Delivered" },
  { value: "12 yrs", label: "Of Craftsmanship" },
  { value: "45 days", label: "Avg. Delivery" },
  { value: "4.9★", label: "Client Rating" },
];

export function Stats() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 sm:p-8 text-center light-sweep"
            >
              <div className="text-3xl sm:text-5xl font-display font-semibold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
