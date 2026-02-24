import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "hair-oil",
    name: "Hair Qure Oil",
    description: "Concentrated blend of nutrient-rich oils for healthy, natural hair growth",
    price: "110.99",
    currency: "AED",
    image: "/images/product-oil.png",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: "herbal-mist",
    name: "Herbal Mist",
    description: "Refreshing botanical spray to nourish and hydrate your hair throughout the day",
    price: "51.99",
    currency: "AED",
    image: "/images/product-mist.png",
    badge: null,
    rating: 4.7,
    reviews: 128,
  },
  {
    id: "shea-butter",
    name: "Whipped Shea Butter",
    description: "Rich, creamy formula that locks in moisture and strengthens from root to tip",
    price: "58.99",
    currency: "AED",
    image: "/images/product-butter.png",
    badge: null,
    rating: 4.8,
    reviews: 156,
  },
  {
    id: "growth-combo",
    name: "Hair Growth Combo",
    description: "Complete growth system with oil, mist, and butter for maximum results",
    price: "213.99",
    originalPrice: "220.99",
    currency: "AED",
    image: "/images/product-combo.png",
    badge: "Save 3%",
    rating: 5.0,
    reviews: 89,
  },
  {
    id: "adult-bonnet",
    name: "Adult Bonnet",
    description: "Premium silk bonnet to protect your hair while you sleep",
    price: "102.99",
    currency: "AED",
    image: "/images/product-bonnet.png",
    badge: null,
    rating: 4.6,
    reviews: 67,
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-background" data-testid="section-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3" data-testid="text-products-label">Our Collection</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-products-heading">
            Nature's Best for Your Hair
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-products-description">
            Each product in our collection is carefully formulated with natural, plant-based
            ingredients to nourish, protect, and transform your hair.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className="group"
                data-testid={`card-product-${product.id}`}
              >
                <CardContent className="p-4">
                  <div className="relative aspect-square rounded-lg bg-muted/30 mb-4">
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 z-10" data-testid={`badge-product-${product.id}`}>
                        {product.badge}
                      </Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                      data-testid={`img-product-${product.id}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1" data-testid={`rating-product-${product.id}`}>
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-3.5 w-3.5 ${
                            idx < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>

                    <h3 className="font-semibold text-lg" data-testid={`text-product-name-${product.id}`}>
                      {product.name}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-product-desc-${product.id}`}>
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between gap-2 pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold" data-testid={`text-price-${product.id}`}>
                          {product.currency} {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through" data-testid={`text-original-price-${product.id}`}>
                            {product.currency} {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button size="sm" data-testid={`button-add-${product.id}`}>
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Add
                      </Button>
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
