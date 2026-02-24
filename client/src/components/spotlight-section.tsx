import { motion } from "framer-motion";

export function SpotlightSection() {
  return (
    <section className="py-16 sm:py-24 bg-card/50" data-testid="section-spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2" data-testid="text-spotlight-label">
            Spotlight
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-1" data-testid="text-spotlight-brand">
                Hair Qure
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" data-testid="text-spotlight-heading">
                Hair Growth Oil
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base" data-testid="text-spotlight-description">
              Hair Qure Hair Growth Oil is a concentrated blend of nutrient-rich oils and 
              plant-based extracts formulated to support healthy, natural hair growth. Packed 
              with essential fatty acids, antioxidants, and strengthening botanicals, it helps 
              nourish the scalp, reduce breakage, and improve overall hair density.
            </p>

            <p className="text-sm text-muted-foreground" data-testid="text-spotlight-size">
              100ml
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden">
              <img
                src="/images/product-oil-hero.jpg"
                alt="Hair Qure Hair Growth Oil"
                className="w-full h-full object-cover"
                data-testid="img-spotlight-product"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
