import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ryze transformed how we manage ads. We cut our CPA by 40% in the first month while actually spending less time in the platform.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "TechFlow",
    metric: "40% lower CPA",
    avatar: "SC",
  },
  {
    quote: "The AI recommendations are incredibly accurate. It's like having a senior media buyer working 24/7 on our campaigns.",
    author: "Marcus Johnson",
    role: "Marketing Director",
    company: "Elevate",
    metric: "3.8x ROAS",
    avatar: "MJ",
  },
  {
    quote: "We scaled from $50k to $500k monthly ad spend without adding headcount. Ryze handles the optimization automatically.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "GrowthLabs",
    metric: "10x scale",
    avatar: "ER",
  },
  {
    quote: "Finally, a tool that actually delivers on its promises. Our team saves 20+ hours per week on campaign management.",
    author: "David Park",
    role: "Performance Lead",
    company: "Velocity",
    metric: "20hrs saved/week",
    avatar: "DP",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary/30" ref={containerRef}>
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by marketing teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with Ryze.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border p-8 lg:p-12 overflow-hidden">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote */}
                <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role} at {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Metric highlight */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 bg-primary/10 rounded-full"
                  >
                    <span className="text-primary font-semibold">
                      {testimonials[current].metric}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-primary w-6" 
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
