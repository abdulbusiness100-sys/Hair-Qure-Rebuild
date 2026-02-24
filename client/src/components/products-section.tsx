import { motion } from "framer-motion";

const products = [
  {
    id: "hair-oil",
    name: "Hair Qure Oil",
    price: "AED 110.99",
    image: "/images/product-oil.jpg",
  },
  {
    id: "herbal-mist",
    name: "Herbal Mist",
    price: "AED 51.99",
    image: "/images/product-mist-oil.jpg",
  },
  {
    id: "shea-butter",
    name: "Whipped Shea Butter",
    price: "AED 58.99",
    image: "/images/product-butter.jpg",
  },
  {
    id: "growth-combo",
    name: "Hair Growth Combo",
    price: "AED 213.99",
    originalPrice: "AED 220.99",
    image: "/images/products-group.jpg",
  },
  {
    id: "adult-bonnet",
    name: "Adult Bonnet",
    price: "AED 102.99",
    image: "/images/bonnet-black.jpg",
  },
  {
    id: "baby-bonnet",
    name: "Baby Bonnet",
    price: "AED 102.99",
    image: "/images/missk-daughter.jpg",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-background" data-testid="section-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
              data-testid={`card-product-${product.id}`}
            >
              <div className="relative aspect-square overflow-hidden bg-muted/20 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-testid={`img-product-${product.id}`}
                />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-sm sm:text-base font-medium" data-testid={`text-product-name-${product.id}`}>
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-muted-foreground" data-testid={`text-price-${product.id}`}>
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-muted-foreground/60 line-through" data-testid={`text-original-price-${product.id}`}>
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            className="text-sm uppercase tracking-[0.15em] font-medium text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
            data-testid="button-view-collection"
          >
            View Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
