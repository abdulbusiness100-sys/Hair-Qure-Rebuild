import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { ResultsSection } from "@/components/results-section";
import { StorySection } from "@/components/story-section";
import { IngredientsSection } from "@/components/ingredients-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BundleSection } from "@/components/bundle-section";
import { FaqSection } from "@/components/faq-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <ResultsSection />
        <StorySection />
        <IngredientsSection />
        <TestimonialsSection />
        <BundleSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
}
