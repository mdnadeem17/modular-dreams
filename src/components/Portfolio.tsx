import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import kitchen from "@/assets/portfolio-kitchen.jpg";
import wardrobe from "@/assets/portfolio-wardrobe.jpg";
import tv from "@/assets/portfolio-tv.jpg";
import living from "@/assets/portfolio-living.jpg";

const slides = [
  { img: kitchen, tag: "Kitchen", title: "Walnut & Marble Galley", location: "Whitefield · 3BHK" },
  { img: living, tag: "Living Room", title: "Open Plan Sanctuary", location: "Indiranagar · 4BHK" },
  { img: wardrobe, tag: "Wardrobe", title: "Backlit Walk-In", location: "HSR Layout · Villa" },
  { img: tv, tag: "TV Unit", title: "Slatted Marble Wall", location: "Sarjapur · 3BHK" },
];

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs uppercase tracking-[0.25em] text-accent">The Masterpieces</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold max-w-xl">
              A portfolio worth <span className="font-serif italic font-light text-gradient">walking through.</span>
            </h2>
          </motion.div>
          <div className="flex gap-3">
            <button onClick={scrollPrev} className="h-12 w-12 rounded-full glass-strong inline-flex items-center justify-center hover:bg-card transition" aria-label="Previous">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={scrollNext} className="h-12 w-12 rounded-full glass-strong inline-flex items-center justify-center hover:bg-card transition" aria-label="Next">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((s) => (
              <div key={s.title} className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[60%] lg:basis-[48%]">
                <div className="group relative rounded-3xl overflow-hidden shadow-luxe">
                  <img src={s.img} alt={s.title} className="w-full h-[28rem] object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="glass-strong text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">{s.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-display font-semibold">{s.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{s.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-10 bg-accent" : "w-4 bg-foreground/20"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
