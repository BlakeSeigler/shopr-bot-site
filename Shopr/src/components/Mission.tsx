import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="py-32 px-8 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-6xl mb-6">
              Building Tomorrow's
              <span className="block text-cyan-400 mt-2">Workforce</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              At Nexus Robotics, we're pioneering the next generation of humanoid robots 
              that seamlessly integrate into human environments. Our mission is to augment 
              human capabilities, not replace them—creating a future where humans and robots 
              work side by side to solve the world's most challenging problems.
            </p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
              <div className="p-12 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4 text-cyan-400">01</div>
                  <p className="text-xl">Years in Development</p>
                  <div className="mt-8 text-5xl text-cyan-400">5</div>
                  <p className="text-sm text-gray-400 mt-2">Active Prototypes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
