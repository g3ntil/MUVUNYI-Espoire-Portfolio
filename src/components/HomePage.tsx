import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import espoirHeroImage from 'figma:asset/2ae5b25666d8d701154d8bf9c4d95aedf390273f.png';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-sm text-gray-500 font-lato tracking-wide">
                  ENTREPRENEURIAL LEADERSHIP STUDENT
                </div>
                <h1 className="font-playfair text-5xl lg:text-6xl text-gray-900 leading-tight">
                  Espoir Muvunyi
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 font-lato leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Motivated and mission-driven student leader leveraging entrepreneurial leadership 
                and analytical skills to contribute to education and community development initiatives 
                in Rwanda and beyond.
              </motion.p>

              <motion.div
                className="flex items-center space-x-6 text-sm text-gray-500 font-lato"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>📍 Kigali, Rwanda</span>
                <span>🎓 ALU Class of 2026</span>
                <span>💼 Finance Intern</span>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="bg-gray-900 text-white px-8 py-3 font-lato transition-all duration-300 flex items-center space-x-2 hover:bg-gray-800"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                onClick={() => onNavigate?.('about')}
              >
                <span>About Me</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="border border-gray-300 text-gray-700 px-8 py-3 font-lato hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                onClick={() => onNavigate?.('contact')}
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl transform rotate-2"></div>
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <img
                  src={espoirHeroImage}
                  alt="Espoir Muvunyi - Professional Portrait"
                  className="w-full h-full object-cover grayscale rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}