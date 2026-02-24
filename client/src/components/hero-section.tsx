import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative" data-testid="section-hero">
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/6] overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          data-testid="video-hero"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-black text-sm sm:text-base uppercase tracking-[0.2em] px-10 py-6"
              onClick={() => scrollTo("#products")}
              data-testid="button-hero-shop"
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
