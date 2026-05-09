import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import tvGold from "@/assets/portfolio-tv-gold.png";
import tvWood from "@/assets/portfolio-tv-wood.png";
import wardrobeDisplay from "@/assets/portfolio-wardrobe-display.png";
import wardrobeWhite from "@/assets/portfolio-wardrobe-white.png";
import wardrobeOpen from "@/assets/portfolio-wardrobe-open.png";
import wardrobePink from "@/assets/portfolio-wardrobe-pink.png";

const slides = [
  { img: tvGold,          tag: "TV Unit",     title: "Marble & Gold Premium Unit", location: "Bangalore · Custom" },
  { img: tvWood,          tag: "TV Unit",     title: "Slatted Wood & Grey Panel",  location: "Bangalore · 3BHK" },
  { img: wardrobeDisplay, tag: "Wardrobe",    title: "Illuminated Glass Display",  location: "Whitefield · Villa" },
  { img: wardrobeWhite,   tag: "Wardrobe",    title: "Gloss White with Gold Trims",location: "Indiranagar · 4BHK" },
  { img: wardrobeOpen,    tag: "Wardrobe",    title: "Matte Wardrobe with Oak Open Shelves",location: "HSR Layout · Custom" },
  { img: wardrobePink,    tag: "Wardrobe",    title: "Vibrant Pink & Yellow Slider",location: "Bangalore · Custom" },
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
    <section id="portfolio" className="py-20 sm:py-28 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">The Masterpieces</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--foreground)] max-w-lg leading-tight">
              A portfolio worth{" "}
              <em
                className="font-light not-italic"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold)' }}
              >
                walking through.
              </em>
            </h2>
          </motion.div>

          <div className="flex gap-3 shrink-0">
            <button onClick={scrollPrev} className="h-11 w-11 sm:h-12 sm:w-12 rounded-full surface inline-flex items-center justify-center hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all" aria-label="Previous">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button onClick={scrollNext} className="h-11 w-11 sm:h-12 sm:w-12 rounded-full btn-gold inline-flex items-center justify-center" aria-label="Next">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-5">
            {slides.map((s) => (
              <div key={s.title} className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[44%]">
                <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={s.img} alt={s.title}
                    className="w-full h-96 sm:h-[30rem] lg:h-[42rem] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="glass text-white text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-medium">
                      {s.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <h3 className="text-lg sm:text-2xl font-display font-bold text-white">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">{s.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 sm:w-10 bg-[var(--gold)]" : "w-3 sm:w-4 bg-black/15 hover:bg-black/25"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
