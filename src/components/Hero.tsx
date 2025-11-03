import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import logo from 'figma:asset/logo.png';
import nameImage from 'figma:asset/name.png';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2023/07/25/173231-849022779_large.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16"
      >
        <div className="flex items-center gap-3">
          <img src={nameImage} alt="Shopr" className="h-[3.6rem]" />
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#mission" className="hover:text-cyan-400 transition-colors">Mission</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            The Future of
            <span className="block text-cyan-400 mt-2">Autonomous Work</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Advanced humanoid robots designed to work alongside humans, 
            transforming industries through intelligent automation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-full transition-colors"
          >
            Explore Our Technology
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
