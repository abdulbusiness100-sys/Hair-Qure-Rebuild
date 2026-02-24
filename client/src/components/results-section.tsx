import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "93%", label: "Saw Visible Growth", description: "of users reported thicker, healthier hair" },
  { icon: Clock, value: "8", label: "Weeks Average", description: "to see noticeable improvement" },
  { icon: Users, value: "500+", label: "Happy Customers", description: "trust HairQure for their hair care" },
];

const timelineSteps = [
  { week: "Week 2", title: "Scalp Nourishment", description: "Oil penetrates and nourishes follicles. Scalp feels healthier and less dry." },
  { week: "Week 4", title: "Reduced Breakage", description: "Hair strands strengthen. Noticeably less hair fall during washing and brushing." },
  { week: "Week 6", title: "New Growth Visible", description: "Baby hairs emerge along hairline and thinning areas become less noticeable." },
  { week: "Week 8", title: "Fuller, Thicker Hair", description: "Visible increase in volume and density. Hair looks and feels healthier overall." },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-20 sm:py-28 bg-card/50" data-testid="section-results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3" data-testid="text-results-label">Real Results</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-results-heading">
            See the Transformation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-results-description">
            Our customers experience real, visible results. Here's what you can expect
            on your hair growth journey with HairQure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card data-testid={`card-stat-${i}`}>
                <CardContent className="text-center p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-1" data-testid={`text-stat-value-${i}`}>{stat.value}</p>
                  <p className="font-semibold text-lg mb-1" data-testid={`text-stat-label-${i}`}>{stat.label}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-stat-desc-${i}`}>{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3" data-testid="text-timeline-heading">
              Your Growth Timeline
            </h3>
            <p className="text-muted-foreground" data-testid="text-timeline-description">
              What to expect when you start your HairQure journey
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-primary/20 sm:-translate-x-px" />

            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`hidden sm:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <Card data-testid={`card-timeline-${i}`}>
                    <CardContent className="p-6">
                      <p className="text-primary font-bold text-sm mb-1" data-testid={`text-timeline-week-${i}`}>{step.week}</p>
                      <h4 className="font-semibold text-lg mb-1" data-testid={`text-timeline-title-${i}`}>{step.title}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-timeline-desc-${i}`}>{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold" data-testid={`badge-timeline-step-${i}`}>
                    {i + 1}
                  </div>
                </div>

                <div className="flex-1 sm:hidden">
                  <Card data-testid={`card-timeline-mobile-${i}`}>
                    <CardContent className="p-5">
                      <p className="text-primary font-bold text-sm mb-1">{step.week}</p>
                      <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
