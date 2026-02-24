import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "London, UK",
    quote: "8 weeks after having my baby, my hair was falling out in clumps. After 6 weeks using HairQure oil, I have baby hairs everywhere!",
    rating: 5,
    concern: "Postpartum",
    product: "Hair Growth Oil",
  },
  {
    id: 2,
    name: "Aisha K.",
    location: "Dubai, UAE",
    quote: "My edges are BACK. I thought they were gone forever. The oil and butter combination is incredible.",
    rating: 5,
    concern: "Edges",
    product: "Growth Kit",
  },
  {
    id: 3,
    name: "Fatima R.",
    location: "New York, USA",
    quote: "Finally, halal hair care that actually works. I've tried everything and HairQure is the only thing that's made a real difference.",
    rating: 5,
    concern: "Halal",
    product: "Complete Set",
  },
  {
    id: 4,
    name: "Nadia S.",
    location: "Toronto, Canada",
    quote: "The whipped butter is a game changer. My curls have never been more defined and moisturized. I use it every wash day.",
    rating: 5,
    concern: "Thickness",
    product: "Whipped Hair Butter",
  },
  {
    id: 5,
    name: "Layla M.",
    location: "Manchester, UK",
    quote: "I started using HairQure after my second baby. Within 8 weeks, the hair fall stopped completely and I can see new growth along my hairline.",
    rating: 5,
    concern: "Postpartum",
    product: "Hair Growth Oil",
  },
  {
    id: 6,
    name: "Zahra H.",
    location: "Dubai, UAE",
    quote: "The herbal mist is perfect for refreshing my hair under hijab. Light, hydrating, and smells amazing. No buildup at all.",
    rating: 5,
    concern: "Hijab Hair",
    product: "Herbal Hair Mist",
  },
];

const stats = [
  { value: "3,000+", label: "Mothers Transformed" },
  { value: "92%", label: "Saw Results in 8 Weeks" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "30-Day", label: "Money-Back Guarantee" },
];

export default function Results() {
  useEffect(() => {
    document.title = "Customer Results — HairQure";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="bg-[#2D5F3F] py-12 sm:py-16 text-center text-white">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-results-heading">
            Real Results, Real Women
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto px-4">
            See how HairQure is transforming hair for postpartum mothers and women of faith.
          </p>
        </div>

        <section className="bg-[#F5F1E8] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="section-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2D5F3F]">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-2">Community Stories</p>
            <h2 className="font-serif text-3xl font-bold text-[#2D5F3F]">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-lg p-6 border border-border"
                data-testid={`card-testimonial-${t.id}`}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold">— {t.name}</p>
                    <p className="text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-[#2D5F3F]/10 text-[#2D5F3F] px-2 py-1 rounded text-xs">{t.concern}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                  Used: {t.product}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 text-center bg-[#2D5F3F] text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-white/70 mb-8">
              Join thousands of women who have reclaimed their hair and their confidence.
            </p>
            <Link href="/shop">
              <Button className="bg-[#D4AF37] hover:bg-[#B8962F] text-black uppercase tracking-wider font-semibold px-10 py-6 text-base" data-testid="button-results-shop">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
}
