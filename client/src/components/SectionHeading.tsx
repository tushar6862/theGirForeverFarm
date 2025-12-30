import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-sm md:text-base font-medium tracking-widest uppercase mb-3 block ${
            light ? "text-white/80" : "text-accent"
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 w-24 bg-accent mt-4 rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
