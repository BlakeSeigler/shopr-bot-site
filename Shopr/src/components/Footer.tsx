import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import logo from 'figma:asset/2e800e477c644945c682bf26420a57041cb5edad.png';
import nameImage from 'figma:asset/c347bf2c0727e7cf2a95ac3ecc67f92bf491e88e.png';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-cyan-500/20 py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shopr Logo" className="h-8 w-8" />
              <img src={nameImage} alt="Shopr" className="h-5" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of autonomous work through advanced humanoid robotics.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-cyan-400">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Research
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Partnerships
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-cyan-400">Get in Touch</h3>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contact@shopr.com"
              className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-colors inline-flex"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Shopr. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
