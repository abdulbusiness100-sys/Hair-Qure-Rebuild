import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-background" data-testid="section-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/hero-model.png"
                alt="HairQure founder's inspiration"
                className="w-full h-full object-cover"
                data-testid="img-story"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-card border border-card-border rounded-xl p-5 shadow-lg max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                <span className="text-sm font-semibold">Made with Love</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Born from a mother's love for her daughter
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Our Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Rooted in Ritual,{" "}
              <span className="text-primary italic">Perfected by Nature</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HairQure by MissK was born from a mother's love and a relentless pursuit to find
                a solution to a heartbreaking problem.
              </p>
              <p>
                In 2018, MissK's daughter experienced a severe reaction to a hair treatment.
                The stylist used a product that either had expired or contained harmful chemicals,
                causing her hair to fall out in large clumps, leaving her almost bald.
              </p>
              <p>
                Determined to help her daughter, MissK spent years researching and experimenting
                with natural ingredients, creating formulations that were gentle yet effective.
                What started as a personal mission became HairQure - a line of products that
                harnesses the power of nature to restore and grow hair safely.
              </p>
              <p className="font-medium text-foreground">
                Today, HairQure's proprietary blend of 7+ natural oils has helped hundreds
                of men and women achieve healthier, thicker, more vibrant hair - without
                a single harsh chemical.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">7+</p>
                <p className="text-sm text-muted-foreground">Years of Research</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Natural Ingredients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">0</p>
                <p className="text-sm text-muted-foreground">Harsh Chemicals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
