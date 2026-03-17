import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Partners from "@/components/sections/Partners";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <Partners />
      <CTABanner />
    </main>
  );
}
