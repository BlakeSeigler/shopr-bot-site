import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Package, Cpu, Zap, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const capabilities = [
  {
    icon: Package,
    title: 'Warehouse Operations',
    description: 'Autonomous picking, packing, and inventory management with 99.9% accuracy.',
  },
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'Real-time decision making powered by cutting-edge neural networks.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Seamless integration into existing workflows with minimal downtime.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Multi-spectrum perception for navigation and object recognition.',
  },
];

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-8 md:px-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl mb-4 text-center"
        >
          About <span className="text-cyan-400">Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto"
        >
          Engineered to excel in demanding industrial environments with unmatched precision and reliability.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-xl border border-cyan-500/20 bg-black/40 hover:border-cyan-500/50 transition-colors"
            >
              <capability.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl mb-2">{capability.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
