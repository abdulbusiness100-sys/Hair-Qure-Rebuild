import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const testimonials = [
  {
    id: 1,
    name: "Client Feedback",
    image: "/images/testimonials/IMG_7596.PNG",
    rating: 5,
    concern: "Growth",
    product: "Hair Growth Oil",
  },
  {
    id: 2,
    name: "Client Feedback",
    image: "/images/testimonials/IMG_7701.PNG",
    rating: 5,
    concern: "Thickness",
    product: "Growth Kit",
  },
  {
    id: 3,
    name: "Client Feedback",
    image: "/images/testimonials/IMG_9870.PNG",
    rating: 5,
    concern: "Edges",
    product: "Complete Set",
  },
  {
    id: 4,
    name: "Client Feedback",
    image: "/images/testimonials/IMG_9869.PNG",
    rating: 5,
    concern: "Recovery",
    product: "Hair Growth Oil",
  },
  {
    id: 5,
    name: "Client Feedback",
    image: "/images/testimonials/IMG_7470.PNG",
    rating: 5,
    concern: "Postpartum",
    product: "Hair Growth Oil",
  },
  {
    id: 6,
    name: "Client Feedback",
    image: "/images/testimonials/IMG_7597.PNG",
    rating: 5,
    concern: "Hydration",
    product: "Herbal Hair Mist",
  },
];

const videoTestimonials = [
  { id: 1, thumbnail: "/images/products-studio.jpg", title: "Postpartum Journey" },
  { id: 2, thumbnail: "/images/butter-studio.jpg", title: "Edge Restoration" },
  { id: 3, thumbnail: "/images/products-group.jpg", title: "Daily Routine" },
];

const stats = [
  { value: "3,000+", label: "Mothers Transformed" },
  { value: "92%", label: "Saw Results in 8 Weeks" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "30-Day", label: "Money-Back Guarantee" },
];

export default function Results() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            See how HairQure is transforming hair for postpartum mothers and women of all hair types.
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

        {/* Video Testimonials Placeholder */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-2">Watch the Transformation</p>
            <h2 className="font-serif text-3xl font-bold text-[#2D5F3F]">Video Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden group cursor-pointer border border-border/50 shadow-sm">
                <img src={video.thumbnail} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt={video.title} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-black fill-black ml-1" />
                  </div>
                  <p className="mt-4 text-white font-semibold text-lg drop-shadow-md">{video.title}</p>
                  <span className="text-white/80 text-xs uppercase tracking-widest mt-1">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4816F] font-semibold mb-2">Client Results</p>
            <h2 className="font-serif text-3xl font-bold text-[#2D5F3F]">Success Gallery</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(t.image)}
                data-testid={`card-testimonial-${t.id}`}
              >
                <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                   <img src={t.image} alt={t.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-4 border-t border-border bg-white">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-[#2D5F3F]/10 text-[#2D5F3F] px-2 py-1 rounded font-medium">{t.concern}</span>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full">
              <X className="h-6 w-6" />
            </button>
            <img src={selectedImage} className="max-w-full max-h-full object-contain shadow-2xl" alt="Full size result" />
          </div>
        )}

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
      </main>
      <FooterSection />
    </div>
  );
}
