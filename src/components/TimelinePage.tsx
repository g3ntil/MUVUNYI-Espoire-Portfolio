import { motion } from 'motion/react';
import { Card } from './ui/card';
import { GraduationCap, Users, Trophy, Rocket, Star, Target } from 'lucide-react';

export function TimelinePage() {
  const timelineEvents = [
    {
      date: 'Aug 2019 – Mar 2022',
      title: 'Football Team Discipline Leader',
      description: 'Maintained discipline within the high school football team, ensuring laws and regulations were followed while fostering team unity and sportsmanship.',
      icon: <Users className="h-6 w-6" />,
      color: 'from-gray-700 to-gray-800'
    },
    {
      date: 'Jan 2020 – Jul 2022',
      title: 'President of Anti-Drugs Club',
      description: 'Led Anti-Drug Club activities at Gakoni Adventist College, combating school drug abuse through awareness initiatives and peer education programs.',
      icon: <Trophy className="h-6 w-6" />,
      color: 'from-gray-600 to-gray-700'
    },
    {
      date: '2024',
      title: 'Virtual Internship Simulation - Kuza Company',
      description: 'Engaged in virtual simulations to understand grassroots entrepreneurship and rural development strategies. Supported outreach planning to strengthen community networks and learned how digital tools can be leveraged to promote entrepreneurship in underserved areas.',
      icon: <Target className="h-6 w-6" />,
      color: 'from-gray-800 to-gray-900'
    },
    {
      date: '2024 – Present',
      title: 'ALU Entrepreneurial Leadership Student',
      description: 'Pursuing Bachelor\'s Degree in Entrepreneurial Leadership at African Leadership University, focusing on transformational leadership and social impact through education. Expected graduation: 2026.',
      icon: <GraduationCap className="h-6 w-6" />,
      color: 'from-gray-500 to-gray-600'
    },
    {
      date: 'Jan 2025 – Apr 2025',
      title: 'Finance Department Intern - LOMEMO Tours & Transport Ltd',
      description: 'Assisted the finance team with daily financial operations, including data entry, transaction tracking, and reconciliation. Contributed to Financial Efficiency & Reporting Improvement Project, helping streamline expense tracking and supporting invoice processing with 100% compliance.',
      icon: <Rocket className="h-6 w-6" />,
      color: 'from-gray-700 to-gray-800'
    },
    {
      date: 'May 2025',
      title: 'Uburezilink Startup Business Plan',
      description: 'Designed a blended-learning startup to serve more than 5,000 students in rural Rwanda. Developed financial projections estimating $30,000 revenue in Year 1 and applied McKinsey 7S and Blue Ocean Strategy frameworks for market positioning.',
      icon: <Star className="h-6 w-6" />,
      color: 'from-gray-900 to-black'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl text-gray-900 mb-4">
            Timeline
          </h1>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            Key milestones in my leadership and educational journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg`}>
                    {event.icon}
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="ml-8 flex-1"
                >
                  <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="font-playfair text-xl text-gray-900 mb-2 sm:mb-0">
                        {event.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${event.color} font-lato`}>
                        {event.date}
                      </span>
                    </div>
                    <p className="text-gray-600 font-lato leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}