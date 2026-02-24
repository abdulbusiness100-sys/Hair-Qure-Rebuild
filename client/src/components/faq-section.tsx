import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most customers begin to notice reduced hair fall within 2-4 weeks. Visible new growth typically appears around weeks 6-8. For best results, we recommend consistent daily use for at least 8-12 weeks.",
  },
  {
    question: "Is HairQure safe for all hair types?",
    answer: "Yes! HairQure is formulated with 100% natural ingredients and is safe for all hair types, textures, and ethnicities. It works beautifully on natural hair, relaxed hair, locs, braids, and everything in between.",
  },
  {
    question: "How do I use HairQure Hair Growth Oil?",
    answer: "Apply a small amount to your scalp and massage gently for 2-3 minutes. Use daily for best results. You can apply it before bed and sleep with a bonnet, or use it in the morning as part of your routine. The oil is non-greasy and absorbs quickly.",
  },
  {
    question: "Can men use HairQure?",
    answer: "Absolutely! HairQure is designed for both men and women. Many of our male customers have seen excellent results, particularly with temple and crown thinning. The formula is lightweight and won't interfere with styling.",
  },
  {
    question: "What makes HairQure different from other hair growth products?",
    answer: "HairQure uses a proprietary blend of 7+ natural oils, developed over 7 years of research. Unlike many products on the market, we use zero harsh chemicals, sulfates, or parabens. Our formula is clinically-inspired and based on proven botanical ingredients.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship throughout the UAE with free shipping on orders over AED 50. We also offer international shipping to select countries. Standard shipping typically takes 3-5 business days within the UAE.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact us within 30 days of delivery for a full refund. We believe in our products and want you to love them as much as we do.",
  },
  {
    question: "Are HairQure products tested on animals?",
    answer: "Never. HairQure is 100% cruelty-free. We are committed to ethical practices and never test our products on animals. All our ingredients are ethically sourced and sustainably produced.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-card/50" data-testid="section-faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about HairQure and our products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-card-border rounded-xl px-6 data-[state=open]:border-primary/30"
                data-testid={`accordion-faq-${i}`}
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline" data-testid={`button-faq-${i}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
