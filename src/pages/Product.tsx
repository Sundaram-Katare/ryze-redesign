import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BarChart3, Brain, Shield, Zap, Target, Layers, LineChart, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const productFeatures = [
  {
    icon: Brain,
    title: "AI Campaign Optimization",
    description: "Our machine learning models analyze millions of data points to make real-time bidding and targeting decisions that maximize your ROAS.",
    benefits: ["Automated bid adjustments", "Audience optimization", "Budget reallocation"],
  },
  {
    icon: BarChart3,
    title: "Unified Analytics Dashboard",
    description: "See all your ad platforms in one place with real-time metrics, custom reports, and actionable insights powered by AI.",
    benefits: ["Cross-platform reporting", "Custom dashboards", "Automated insights"],
  },
  {
    icon: Shield,
    title: "Budget Protection",
    description: "Set spending limits and let AI automatically pause underperforming campaigns before they drain your budget.",
    benefits: ["Spending alerts", "Auto-pause rules", "Fraud detection"],
  },
  {
    icon: Layers,
    title: "Creative Intelligence",
    description: "Get AI-powered recommendations for your ad creatives based on performance data and industry benchmarks.",
    benefits: ["Creative scoring", "A/B test automation", "Performance predictions"],
  },
];

const Product = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="pb-16">
          <div className="container-narrow">
            <div className="text-center max-w-4xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Product
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                The complete AI platform for{" "}
                <span className="text-gradient">paid advertising</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Ryze connects to your ad accounts, analyzes performance in real-time, 
                and automatically makes optimizations that improve your results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/get-started"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium hover:shadow-glow transition-all"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <Link
                  to="/pricing"
                  className="px-8 py-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features deep dive */}
        <section className="section-padding bg-secondary/30" ref={containerRef}>
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Powerful features, zero complexity
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to run world-class ad campaigns, powered by AI.
              </p>
            </motion.div>

            <div className="space-y-24">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-card rounded-3xl border border-border p-8 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="aspect-video bg-secondary/50 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-primary/30" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="section-padding">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Integrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Connect all your ad platforms
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Ryze integrates with all major advertising platforms in minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Twitter Ads", "Pinterest Ads", "Snapchat Ads", "Amazon Ads"].map((platform, i) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all"
                >
                  <p className="font-medium text-foreground">{platform}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to transform your ad performance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of marketing teams using Ryze to drive better results.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/get-started"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium hover:shadow-glow transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
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

export default Product;
