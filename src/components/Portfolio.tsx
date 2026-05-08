import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import marbleTv from "@/assets/upload-marble-tv.jpg";
import wardrobeGlass from "@/assets/upload-wardrobe-glass.jpg";
import kitchen from "@/assets/upload-kitchen.jpg";
import wardrobePink from "@/assets/upload-wardrobe-pink.jpg";
import marbleTv2 from "@/assets/upload-marble-tv2.jpg";
import wardrobeBlue from "@/assets/upload-wardrobe-blue.jpg";
import brassDoors from "@/assets/upload-brass-doors.jpg";
import tvWood from "@/assets/upload-tv-wood.jpg";

const slides = [
  { img: marbleTv, tag: "TV Unit", title: "Marble & Brass Feature Wall", location: "Whitefield · 3BHK" },
  { img: wardrobeGlass, tag: "Wardrobe", title: "Backlit Glass Walk-In", location: "Indiranagar · 4BHK" },
  { img: tvWood, tag: "TV Unit", title: "Slatted Wood Accent Wall", location: "HSR Layout · 3BHK" },
  { img: kitchen, tag: "Kitchen", title: "Two-Tone Modular Kitchen", location: "Sarjapur · 3BHK" },
  { img: wardrobePink, tag: "Wardrobe", title: "Sliding Statement Wardrobe", location: "JP Nagar · 2BHK" },
  { img: marbleTv2, tag: "TV Unit", title: "Backlit Marble Console", location: "Koramangala · 3BHK" },
  { img: wardrobeBlue, tag: "Wardrobe", title: "Tall Storage Bedroom Set", location: "Hebbal · Villa" },
  { img: brassDoors, tag: "Detailing", title: "Frosted Glass & Brass Doors", location: "MG Road · Apartment" },
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
    <section id="portfolio" className="py-20 sm:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs uppercase tracking-[0.25em] text-accent">The Masterpieces</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-xl">
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
          <div className="flex gap-4 sm:gap-6">
            {slides.map((s) => (
              <div key={s.title} className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[60%] lg:basis-[48%]">
                <div className="group relative rounded-3xl overflow-hidden shadow-luxe">
                  <img src={s.img} alt={s.title} className="w-full h-[22rem] sm:h-[26rem] lg:h-[28rem] object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="glass-strong text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">{s.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-display font-semibold">{s.title}</h3>
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
