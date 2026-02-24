import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Leaf, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-background dark:from-amber-950/30 dark:via-background dark:to-background" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/10 dark:bg-amber-800/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium" data-testid="badge-hero-natural">
              <Leaf className="h-4 w-4" />
              <span>100% Natural Ingredients</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight" data-testid="text-hero-heading">
              Healthier Hair,{" "}
              <span className="text-primary italic">Naturally</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed" data-testid="text-hero-description">
              Clinically-inspired natural hair oil with a proprietary blend for faster,
              healthier hair growth. See visible results in as little as 8 weeks.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo("#products")}
                data-testid="button-hero-shop"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#results")}
                data-testid="button-hero-results"
              >
                See Results
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2" data-testid="text-hero-rating">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-hero-chemical-free">
                <Shield className="h-4 w-4 text-primary" />
                <span>No Harsh Chemicals</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
              <img
                src="/images/hero-oil.png"
                alt="HairQure Natural Hair Growth Oil"
                className="w-full h-full object-cover rounded-2xl"
                data-testid="img-hero-product"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8"
            >
              <Card data-testid="card-hero-blend">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" data-testid="text-hero-blend-title">Proprietary Blend</p>
                      <p className="text-xs text-muted-foreground" data-testid="text-hero-blend-count">7+ Natural Oils</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-8 -right-4 sm:top-12 sm:-right-8"
            >
              <Card data-testid="card-hero-weeks">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary" data-testid="text-hero-weeks-number">8</p>
                  <p className="text-xs text-muted-foreground" data-testid="text-hero-weeks-label">Weeks to<br/>Visible Results</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
