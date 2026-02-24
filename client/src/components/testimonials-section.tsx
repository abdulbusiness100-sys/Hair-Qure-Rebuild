import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    quote: "8 weeks after having my baby, my hair was falling out in clumps. After 6 weeks using HairQure oil, I have baby hairs everywhere!",
    rating: 5,
    tag: "Postpartum Recovery",
  },
  {
    id: 2,
    name: "Aisha K.",
    quote: "My edges are BACK. I thought they were gone forever.",
    rating: 5,
    tag: "Edge Restoration",
  },
  {
    id: 3,
    name: "Fatima R.",
    quote: "Finally, halal hair care that actually works.",
    rating: 5,
    tag: "Halal Certified",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#2D5F3F] text-white" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold">
            Real Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8"
              data-testid={`card-testimonial-${t.id}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">— {t.name}</p>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">{t.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
