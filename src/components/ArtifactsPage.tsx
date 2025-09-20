import { motion } from 'motion/react';
import { Card } from './ui/card';
import uburezilinkImage from 'figma:asset/5032e6e81c1e6a79e61ad1aca4efad792528920d.png';
import quantitativeResearchImage from 'figma:asset/282b14286c167754cbb49adaf9f42a3e499c115c.png';
import financeProjectImage from 'figma:asset/ce95f6f4edffb2ada320f69f2f969ba5c9aac997.png';

export function ArtifactsPage() {
  const projects = [
    {
      title: 'Uburezilink Startup Business Plan',
      description: 'ALU Course Project (May 2025): Designed a blended-learning startup to serve more than 5,000 students in rural Rwanda. Developed financial projections estimating $30,000 revenue in Year 1 and applied McKinsey 7S and Blue Ocean Strategy frameworks for market positioning.',
      image: uburezilinkImage,
      type: 'Business Plan'
    },
    {
      title: 'Quantitative Research Project',
      description: 'ALU Quantitative Reasoning Course (May 2025 - July 2025): Collected and analyzed survey data from more than 100 participants on communication and productivity. Used statistical analysis to identify a positive correlation between communication and team output, presenting findings in a professional research report with charts and recommendations.',
      image: quantitativeResearchImage,
      type: 'Research Report'
    },
    {
      title: 'Financial Efficiency & Reporting Improvement Project',
      description: 'LOMEMO Tours & Transport Ltd (Jan 2025 – April 2025): Contributed to streamlining expense tracking and reporting, assisted in preparing monthly budgets and analyzing costs leading to a 5% reduction in unnecessary expenses. Supported invoice processing with 100% compliance with deadlines.',
      image: financeProjectImage,
      type: 'Finance Project'
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
            Selected Works
          </h1>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            Key projects and research demonstrating leadership impact and strategic thinking
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-gray-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 font-lato">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="space-y-4">
                      <h3 className="font-playfair text-2xl text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 font-lato leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}