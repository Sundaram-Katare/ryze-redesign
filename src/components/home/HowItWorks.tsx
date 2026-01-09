import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Connect Your Accounts",
    description: "Link your Google Ads, Meta, TikTok, and other ad platforms in seconds. No code required.",
  },
  {
    icon: Brain,
    title: "AI Analyzes Everything",
    description: "Our AI audits your campaigns, identifies inefficiencies, and builds optimization strategies.",
  },
  {
    icon: TrendingUp,
    title: "Watch Performance Soar",
    description: "Ryze automatically applies changes and continuously learns to maximize your ROAS.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three steps to better ads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Set up in minutes, see results in hours. No learning curve, no manual work.
          </p>
        </motion.div>

        <div className="relative">
          <svg
            className="absolute top-24 left-0 right-0 hidden lg:block"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 200 50 Q 400 50 600 50 T 1000 50"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.2, type: "spring" }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center text-sm font-bold z-10"
                >
                  {index + 1}
                </motion.div>

                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-card rounded-2xl shadow-card mb-6 mt-6"
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
