import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with AI optimization.",
    price: 299,
    period: "/month",
    features: [
      "Up to $10k monthly ad spend",
      "2 ad platforms",
      "Basic AI optimization",
      "Weekly reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams that need advanced optimization features.",
    price: 599,
    period: "/month",
    features: [
      "Up to $50k monthly ad spend",
      "5 ad platforms",
      "Advanced AI optimization",
      "Daily reports & alerts",
      "Creative recommendations",
      "Priority support",
      "Custom dashboards",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Scale",
    description: "For established teams managing significant ad budgets.",
    price: 1299,
    period: "/month",
    features: [
      "Up to $250k monthly ad spend",
      "Unlimited ad platforms",
      "Enterprise AI features",
      "Real-time optimization",
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantee",
      "White-label reports",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="pb-16">
          <div className="container-narrow text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Simple, transparent pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the plan that fits your ad spend. All plans include a 14-day free trial.
            </motion.p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="section-padding pt-8" ref={containerRef}>
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`h-full bg-card rounded-2xl p-8 border transition-all duration-500 ${
                    plan.popular 
                      ? "border-primary shadow-glow" 
                      : "border-border hover:border-primary/30 hover:shadow-card-hover"
                  }`}>
                    {/* Plan header */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    {/* CTA */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/get-started"
                        className={`block text-center py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                          plan.popular
                            ? "bg-primary text-primary-foreground hover:shadow-glow"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </motion.div>
                    
                    {/* Features */}
                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
            </motion.div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Can I switch plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
                },
                {
                  q: "What happens if I exceed my ad spend limit?",
                  a: "We'll notify you when you're approaching your limit. You can choose to upgrade or continue on your current plan with reduced optimization."
                },
                {
                  q: "Do you offer annual billing?",
                  a: "Yes, annual billing is available with a 20% discount. Contact our sales team for details."
                },
                {
                  q: "Is there a setup fee?",
                  a: "No, there are no setup fees. You can start your free trial immediately after signing up."
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you find the right plan for your needs.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
