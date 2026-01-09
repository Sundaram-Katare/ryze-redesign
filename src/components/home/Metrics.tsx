import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const AnimatedNumber = ({ value, suffix = "", prefix = "", decimals = 0 }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => 
    decimals > 0 ? current.toFixed(decimals) : Math.floor(current)
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setDisplayValue(Number(v));
    });
    return unsubscribe;
  }, [display]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const metrics = [
  {
    value: 4.2,
    suffix: "x",
    label: "Average ROAS",
    description: "Return on ad spend improvement",
    color: "text-primary",
  },
  {
    value: 47,
    suffix: "%",
    label: "CTR Increase",
    description: "Click-through rate improvement",
    color: "text-green-500",
  },
  {
    value: 32,
    suffix: "%",
    label: "Lower CPA",
    description: "Cost per acquisition reduction",
    color: "text-blue-500",
  },
  {
    value: 15,
    suffix: "hrs",
    label: "Saved Weekly",
    description: "Time saved on campaign management",
    color: "text-purple-500",
  },
];

const Metrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-50/30 to-background pointer-events-none" />
      
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            AI-powered results you can measure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our customers see measurable improvements within the first week of using Ryze.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border text-center h-full transition-all duration-500 hover:shadow-card-hover hover:border-primary/20">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: "spring" }}
                  className={`text-5xl lg:text-6xl font-bold mb-3 ${metric.color}`}
                >
                  <AnimatedNumber 
                    value={metric.value} 
                    suffix={metric.suffix}
                    decimals={metric.suffix === "x" ? 1 : 0}
                  />
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full origin-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-card rounded-3xl border border-border p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                AI decisions in real-time
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ryze continuously monitors your campaigns and makes intelligent adjustments 
                to maximize performance. Every decision is logged and explained.
              </p>
              
              <div className="space-y-3">
                {[
                  { action: "Paused underperforming ad", impact: "Saved $340/day" },
                  { action: "Increased bid on high-intent audience", impact: "+23% conversions" },
                  { action: "Reallocated budget to winning creative", impact: "+18% ROAS" },
                ].map((decision, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-foreground">{decision.action}</span>
                    <span className="text-primary font-medium ml-auto">{decision.impact}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: "Campaign Health", value: 94, color: "bg-green-500" },
                { label: "Budget Efficiency", value: 87, color: "bg-primary" },
                { label: "Audience Relevance", value: 91, color: "bg-blue-500" },
              ].map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{bar.label}</span>
                    <span className="text-sm text-muted-foreground">{bar.value}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${bar.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                      className={`h-full ${bar.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
