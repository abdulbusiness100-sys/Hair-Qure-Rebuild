import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Droplets, Leaf, Zap, Shield, Sun, Heart } from "lucide-react";

const ingredients = [
  {
    name: "Jamaican Black Castor Oil",
    benefit: "Stimulates follicles and promotes thicker growth",
    icon: Droplets,
  },
  {
    name: "Rosemary Extract",
    benefit: "Improves circulation to the scalp for faster growth",
    icon: Leaf,
  },
  {
    name: "Argan Oil",
    benefit: "Deep hydration and shine without weighing hair down",
    icon: Sun,
  },
  {
    name: "Peppermint Oil",
    benefit: "Invigorates the scalp and encourages new hair growth",
    icon: Zap,
  },
  {
    name: "Jojoba Oil",
    benefit: "Mimics natural oils to balance and nourish the scalp",
    icon: Shield,
  },
  {
    name: "Coconut Oil",
    benefit: "Penetrates deeply to reduce protein loss and breakage",
    icon: Heart,
  },
];

export function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 sm:py-28 relative" data-testid="section-ingredients">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3" data-testid="text-ingredients-label">Key Ingredients</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-ingredients-heading">
            Powered by Nature's Finest
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-ingredients-description">
            Every ingredient in our proprietary blend is carefully selected for its
            proven benefits in promoting healthy hair growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, i) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group hover-elevate" data-testid={`card-ingredient-${i}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                    <ingredient.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-ingredient-name-${i}`}>{ingredient.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-ingredient-benefit-${i}`}>{ingredient.benefit}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground" data-testid="text-ingredients-disclaimer">
            All ingredients are ethically sourced and rigorously tested for quality and purity.
            <br />
            No parabens. No sulfates. No artificial fragrances.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
