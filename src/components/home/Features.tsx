import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Layers, 
  RefreshCw,
  Target,
  LineChart
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track every metric that matters with live dashboards and instant insights across all platforms.",
  },
  {
    icon: Shield,
    title: "Budget Protection",
    description: "AI-powered spending guards prevent wasted ad spend and automatically pause underperforming ads.",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "Automatic bid adjustments, audience refinements, and creative recommendations in real-time.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description: "Manage Google, Meta, TikTok, LinkedIn, and more from a single unified dashboard.",
  },
  {
    icon: Layers,
    title: "Creative Intelligence",
    description: "AI analyzes ad creative performance and suggests improvements for higher engagement.",
  },
  {
    icon: RefreshCw,
    title: "Automated A/B Testing",
    description: "Continuously test variations and automatically scale winners across campaigns.",
  },
  {
    icon: Target,
    title: "Audience Discovery",
    description: "Find new high-value audiences using AI-powered lookalike modeling and insights.",
  },
  {
    icon: LineChart,
    title: "Predictive Forecasting",
    description: "See projected performance and get recommendations before you commit budget.",
  },
];

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to scale ads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools that work together to maximize your advertising performance.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 border border-border transition-all duration-500 hover:shadow-card-hover hover:border-primary/20">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
