import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const bundles = [
  {
    id: "starter",
    name: "Growth Starter",
    description: "Perfect for getting started on your hair growth journey",
    price: "110.99",
    currency: "AED",
    includes: [
      "Hair Qure Growth Oil (100ml)",
      "Usage guide & growth timeline",
      "Free shipping",
    ],
    popular: false,
  },
  {
    id: "combo",
    name: "Growth Combo",
    description: "Our most popular bundle - complete growth system for maximum results",
    price: "213.99",
    originalPrice: "220.99",
    currency: "AED",
    savings: "Save AED 7",
    includes: [
      "Hair Qure Growth Oil (100ml)",
      "Herbal Mist Spray",
      "Whipped Shea Butter",
      "Complete growth guide",
      "Free shipping",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate Bundle",
    description: "Everything you need for the complete HairQure experience",
    price: "325.99",
    originalPrice: "375.96",
    currency: "AED",
    savings: "Save AED 50",
    includes: [
      "Hair Qure Growth Oil (100ml)",
      "Herbal Mist Spray",
      "Whipped Shea Butter",
      "Adult Silk Bonnet",
      "Complete growth guide",
      "Free express shipping",
      "VIP support",
    ],
    popular: false,
  },
];

export function BundleSection() {
  return (
    <section className="py-20 sm:py-28 bg-background" data-testid="section-bundles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3" data-testid="text-bundles-label">Bundles & Savings</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-bundles-heading">
            Start Your Growth Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-bundles-description">
            Choose the bundle that's right for you. Save more when you bundle
            and get everything you need for healthier, thicker hair.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`relative flex flex-col h-full ${
                  bundle.popular ? "border-2 border-primary bg-primary/5" : ""
                }`}
                data-testid={`card-bundle-${bundle.id}`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge data-testid={`badge-bundle-${bundle.id}`}>
                      <Sparkles className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-6 pt-2">
                    <h3 className="font-semibold text-xl mb-1" data-testid={`text-bundle-name-${bundle.id}`}>{bundle.name}</h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-bundle-desc-${bundle.id}`}>{bundle.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold" data-testid={`text-bundle-price-${bundle.id}`}>{bundle.currency} {bundle.price}</span>
                    </div>
                    {bundle.originalPrice && (
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-sm text-muted-foreground line-through" data-testid={`text-bundle-original-${bundle.id}`}>
                          {bundle.currency} {bundle.originalPrice}
                        </span>
                        <Badge variant="secondary" data-testid={`badge-bundle-savings-${bundle.id}`}>
                          {bundle.savings}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {bundle.includes.map((item, idx) => (
                      <li key={item} className="flex items-start gap-2 text-sm" data-testid={`text-bundle-item-${bundle.id}-${idx}`}>
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={bundle.popular ? "default" : "outline"}
                    data-testid={`button-bundle-${bundle.id}`}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Get {bundle.name}
                  </Button>
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
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground" data-testid="text-bundles-guarantee">
            Free shipping on all orders over AED 50. 30-day satisfaction guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
