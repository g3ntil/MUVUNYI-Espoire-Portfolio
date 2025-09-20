import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Users, Target, Lightbulb, Heart, Star, Zap } from 'lucide-react';
import espoirAboutImage from 'figma:asset/887a9f62f1fc6ccf493537c3e18c328fe9b5bf8d.png';

export function AboutPage() {
  const traits = [
    {
      icon: <Users className="h-8 w-8 text-gray-700" />,
      title: 'Collaborative',
      description: 'Building bridges and fostering teamwork across diverse groups'
    },
    {
      icon: <Target className="h-8 w-8 text-gray-700" />,
      title: 'Visionary',
      description: 'Creating clear, inspiring visions that motivate and guide action'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-gray-700" />,
      title: 'Innovative',
      description: 'Embracing creative solutions and encouraging out-of-the-box thinking'
    },
    {
      icon: <Heart className="h-8 w-8 text-gray-700" />,
      title: 'Empathetic',
      description: 'Understanding and connecting with people on a human level'
    },
    {
      icon: <Star className="h-8 w-8 text-gray-700" />,
      title: 'Resilient',
      description: 'Persevering through challenges and learning from setbacks'
    },
    {
      icon: <Zap className="h-8 w-8 text-gray-700" />,
      title: 'Decisive',
      description: 'Making tough decisions with confidence and accountability'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl text-gray-900 mb-4">
            About
          </h1>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            My journey in leadership and commitment to educational transformation
          </p>
        </motion.div>

        {/* Personal Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <Card className="p-8 lg:p-12 bg-white shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl text-gray-900 mb-6">
                  My Leadership Journey
                </h2>
                <div className="space-y-4 text-gray-700 font-lato leading-relaxed">
                  <p>
                    I am a motivated and mission-driven student leader with experience in community outreach, 
                    finance, and education-focused projects. Through my studies at African Leadership University 
                    and various internship experiences, I've developed skills in project coordination, teamwork, 
                    and applying leadership theories in practice.
                  </p>
                  <p>
                    One of my most transformational experiences was leading my community's anti-drug 
                    group at Gakoni Adventist College. At first, I was doubtful that I could inspire 
                    others, especially when dealing with sensitive problems like addiction and peer 
                    influence. Through this role, I learnt to actively listen, create discussions, 
                    and rally young people around a common goal.
                  </p>
                  <p>
                    Currently seeking opportunities to leverage my entrepreneurial leadership and analytical 
                    skills to contribute to education and community development initiatives in Rwanda and beyond. 
                    Through projects like Uburezilink, my startup business plan to serve 5,000+ students in rural 
                    Rwanda, I've learned that leadership isn't about having all the answers, but about establishing 
                    safe spaces for others to participate and innovate together.
                  </p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl transform -rotate-2"></div>
                <img
                  src={espoirAboutImage}
                  alt="Espoir Muvunyi - Professional Portrait"
                  className="relative w-full h-80 object-cover rounded-xl shadow-xl"
                />
              </motion.div>
            </div>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-playfair text-lg text-gray-900 mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Project Management</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Problem Solving</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Critical Thinking</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Leadership & Teamwork</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Entrepreneurial Leadership</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Community Engagement</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg text-gray-900 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">Kinyarwanda (Native)</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-lato">English (Fluent)</span>
            </div>
          </div>
        </motion.section>

        {/* Quote Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
            <blockquote className="font-playfair text-2xl lg:text-3xl mb-6 italic">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </blockquote>
            <p className="text-gray-300 font-lato">
              — A principle that guides my approach to leadership
            </p>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}