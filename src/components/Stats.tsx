import { motion } from "framer-motion";

const stats = [
  { value: "320+", suffix: "",      label: "Homes Delivered" },
  { value: "12",   suffix: " yrs",  label: "Years of Craft"  },
  { value: "45",   suffix: " days", label: "Avg. Delivery"   },
  { value: "4.9",  suffix: "★",     label: "Client Rating"   },
];

export function Stats() {
  return (
    <section className="py-10 sm:py-14 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="light-sweep surface rounded-2xl p-5 sm:p-7 text-center hover:shadow-md hover:border-[var(--gold)]/20 transition-all duration-300"
            >
              <div className="font-display text-2xl sm:text-4xl font-bold text-[var(--foreground)]">
                {s.value}<span className="text-[var(--gold)]">{s.suffix}</span>
              </div>
              <div className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
