import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-background" data-testid="section-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" data-testid="text-story-heading">
              Rooted in Ritual,{" "}
              <span className="block">Perfected by Nature.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base" data-testid="text-story-description">
              HairQure by MissK was born from a mother's love and a relentless pursuit to find 
              a solution to a heartbreaking problem. In 2018, MissK's daughter experienced a 
              severe reaction to a hair treatment. The stylist used a product that either had 
              expired or contained harmful chemicals, causing her hair to fall out in large clumps, 
              leaving her almost bald...
            </p>

            <button
              className="text-sm uppercase tracking-[0.15em] font-medium text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
              data-testid="button-learn-more"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden">
              <img
                src="/images/missk-daughter.jpg"
                alt="MissK and her daughter wearing HairQure bonnets"
                className="w-full h-full object-cover"
                data-testid="img-story"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
