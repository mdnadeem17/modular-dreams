import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { AmbientOrbs } from "@/components/AmbientOrbs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modular Interiors — Premium Modular Kitchens & Turnkey Homes in Bengaluru" },
      { name: "description", content: "Bengaluru's premium modular interiors studio. Factory-finished kitchens, wardrobes, and turnkey homes with German hardware and a 10-year warranty." },
      { property: "og:title", content: "Modular Interiors — Design that speaks volumes." },
      { property: "og:description", content: "Premium modular kitchens, wardrobes & turnkey interiors in Bengaluru. 320+ homes, 12 years of craftsmanship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AmbientOrbs />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
