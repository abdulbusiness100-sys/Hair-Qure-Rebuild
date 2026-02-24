import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { SpotlightSection } from "@/components/spotlight-section";
import { StorySection } from "@/components/story-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <SpotlightSection />
        <StorySection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
}
