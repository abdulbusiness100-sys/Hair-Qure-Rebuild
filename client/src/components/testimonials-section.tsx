import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Amira K.",
    location: "Dubai, UAE",
    rating: 5,
    text: "I've been using HairQure Oil for 3 months and my hairline has filled in so much. I was skeptical at first, but the results speak for themselves. My hairdresser even noticed the difference!",
    timeUsed: "3 months",
    avatar: "A",
  },
  {
    id: 2,
    name: "Marcus T.",
    location: "Abu Dhabi, UAE",
    rating: 5,
    text: "As a man dealing with early thinning, I was embarrassed to try hair products. HairQure changed that. Simple routine, no greasy residue, and I can actually see new growth at my temples.",
    timeUsed: "2 months",
    avatar: "M",
  },
  {
    id: 3,
    name: "Fatima R.",
    location: "Sharjah, UAE",
    rating: 5,
    text: "The whole combo set is incredible. The oil, mist, and butter work together beautifully. My natural curls have never looked this healthy and defined. Worth every dirham.",
    timeUsed: "4 months",
    avatar: "F",
  },
  {
    id: 4,
    name: "Sarah M.",
    location: "Dubai, UAE",
    rating: 4,
    text: "I started seeing less breakage within the first 2 weeks. By week 6, I had visible baby hairs growing in. The natural ingredients give me peace of mind that I'm not putting anything harmful on my scalp.",
    timeUsed: "6 weeks",
    avatar: "S",
  },
  {
    id: 5,
    name: "James O.",
    location: "Dubai, UAE",
    rating: 5,
    text: "My wife bought this for me and I'm glad she did. Easy to use, smells great, and my barber commented on how much thicker my hair looked. Definitely reordering.",
    timeUsed: "8 weeks",
    avatar: "J",
  },
  {
    id: 6,
    name: "Nadia H.",
    location: "Ajman, UAE",
    rating: 5,
    text: "After years of heat damage and coloring, my hair was thin and brittle. HairQure has brought it back to life. I can't believe how much new growth I have. This is the real deal.",
    timeUsed: "3 months",
    avatar: "N",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-card/50" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3" data-testid="text-testimonials-label">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-testimonials-heading">
            Loved by Our Customers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Real stories from real people who transformed their hair with HairQure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full" data-testid={`card-testimonial-${testimonial.id}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <div className="flex gap-0.5 mb-3" data-testid={`rating-testimonial-${testimonial.id}`}>
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-testimonial-${testimonial.id}`}>
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm" data-testid={`avatar-testimonial-${testimonial.id}`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${testimonial.id}`}>{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground" data-testid={`text-testimonial-info-${testimonial.id}`}>
                        {testimonial.location} · Used for {testimonial.timeUsed}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
