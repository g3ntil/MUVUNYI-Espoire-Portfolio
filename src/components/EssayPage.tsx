import { motion } from 'motion/react';
import { Card } from './ui/card';
import { BookOpen, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

export function EssayPage() {
  const sections = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Transformative Learning Experiences',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Leadership Theories Applied',
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Skills & Mindset Growth Evaluation',
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: 'Post-Graduation Connection',
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
            Leadership Reflection Essay
          </h1>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            A deep dive into my leadership journey, growth, and vision for the future
          </p>
        </motion.div>

        {/* Essay Sections */}
        <div className="space-y-12">
          {/* Section 1: Transformative Learning Experiences */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sections[0].color} flex items-center justify-center text-white mr-4`}>
                  {sections[0].icon}
                </div>
                <h2 className="font-playfair text-2xl text-gray-900">
                  {sections[0].title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-lato leading-relaxed">
                <p>
                  One of the most transformational experiences I've had was leading my community's anti-drug 
                  group at Gakoni Adventist College. At first, I was doubtful that I could inspire others, 
                  especially when dealing with sensitive problems like addiction and peer influence. Through 
                  this role, I learnt to actively listen, create discussions, and rally young people around 
                  a common goal. This taught me that leadership isn't about having all the answers, but about 
                  establishing safe spaces for others to participate.
                </p>
                <p>
                  Another turning moment came when I interned in the Finance Department of LOMEMO Tours & Transport. 
                  Working in a professional atmosphere changed my outlook on discipline, teamwork, and accountability. 
                  I had to strike a balance between correctness and efficiency, and I learnt how to adapt to 
                  organizational culture while still bringing original ideas.
                </p>
                <p>
                  The Uburezilink startup project was also a milestone. Our mission was to make education more 
                  accessible in rural Rwanda, in some Nyabihu and Rubavu Sectors. Coordinating the team, designing 
                  solutions, and presenting the business plan pushed me to think like both a problem-solver and an 
                  innovator. The process required resilience, creativity, and humility—skills that I continue to refine.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Section 2: Leadership Theories Applied */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sections[1].color} flex items-center justify-center text-white mr-4`}>
                  {sections[1].icon}
                </div>
                <h2 className="font-playfair text-2xl text-gray-900">
                  {sections[1].title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-lato leading-relaxed">
                <p>
                  Throughout my leadership journey, I have applied several key leadership theories that have 
                  guided my actions and decision-making. The Transformational Leadership theory influenced 
                  how I approached the anti-drugs club. By focusing on inspiring rather than commanding, 
                  I encouraged members to take ownership of our mission, which built trust and strengthened 
                  commitment to our cause.
                </p>
                <p>
                  The Servant Leadership model guided my role in the Uburezilink project. By prioritizing 
                  the growth of team members and valuing their contributions, we fostered unity and collective 
                  responsibility. This approach helped us develop solutions that truly served our target 
                  communities in rural Rwanda, rather than imposing external ideas.
                </p>
                <p>
                  In my finance internship at LOMEMO Tours & Transport, I applied principles of adaptive 
                  leadership, learning to balance accuracy with efficiency while adapting to organizational 
                  culture. This experience taught me that effective leadership requires flexibility and 
                  the ability to learn continuously while maintaining core values and standards.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Section 3: Skills & Mindset Growth */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sections[2].color} flex items-center justify-center text-white mr-4`}>
                  {sections[2].icon}
                </div>
                <h2 className="font-playfair text-2xl text-gray-900">
                  {sections[2].title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-lato leading-relaxed">
                <p>
                  Looking back, I can see a clear transformation in my skills, knowledge, and mindset. My 
                  leadership skills have developed significantly - I now have stronger communication, project 
                  management, and problem-solving abilities. I am more confident in leading discussions, 
                  coordinating tasks, and making decisions under pressure, as demonstrated through my various 
                  roles from the anti-drug club to the Uburezilink project.
                </p>
                <p>
                  My knowledge base has expanded considerably through exposure to leadership theories, business 
                  planning, and internship practice. I now see leadership not just as practice but as a 
                  discipline rooted in research and strategy. The quantitative research project taught me 
                  to use evidence-based reasoning, while my finance internship showed me how to apply 
                  theoretical knowledge in professional environments.
                </p>
                <p>
                  Perhaps most significantly, my mindset has shifted from self-doubt to confidence. I embrace 
                  mistakes as opportunities, value diverse perspectives, and remain resilient in setbacks. 
                  The biggest transformation has been moving from viewing leadership as simply guiding others 
                  to understanding it as self-awareness, cooperation, and applying knowledge to effect 
                  significant change. This journey has helped me grow not only into a better leader but 
                  also into a continuous learner.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Section 4: Post-Graduation Connection */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sections[3].color} flex items-center justify-center text-white mr-4`}>
                  {sections[3].icon}
                </div>
                <h2 className="font-playfair text-2xl text-gray-900">
                  {sections[3].title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 font-lato leading-relaxed">
                <p>
                  All of these experiences are directly related to my mission: to improve Rwanda's educational 
                  systems by delivering high-quality and easily accessible learning opportunities. The artifacts 
                  in my portfolio, including the Uburezilink business plan, internship records, and leadership 
                  activities, illustrate progress toward this goal. My post-graduation objectives include 
                  continuing to establish education-focused companies that address accessibility and equality issues.
                </p>
                <p>
                  Looking ahead, I plan to leverage the leadership frameworks I've applied, combined with 
                  real-world experience, to build solutions that empower students, particularly in marginalized 
                  communities. The skills I've developed in project coordination, teamwork, and applying 
                  leadership theories will be essential as I work to create sustainable educational initiatives 
                  across Rwanda and beyond.
                </p>
                <p>
                  My vision extends beyond individual projects to creating systemic change in how educational 
                  opportunities are delivered in rural areas. By combining the servant leadership principles 
                  I've practiced with the transformational approaches I've learned, I aim to develop educational 
                  enterprises that not only serve students but also empower local communities to become 
                  self-sustaining centers of learning and growth.
                </p>
              </div>
            </Card>
          </motion.section>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
            <h3 className="font-playfair text-2xl mb-4">
              Leadership as a Continuous Journey
            </h3>
            <p className="text-gray-300 font-lato leading-relaxed max-w-2xl mx-auto">
              This reflection represents not an endpoint, but a milestone in an ongoing journey of 
              leadership development. Each experience continues to shape my understanding of what 
              it means to lead with authenticity, cultural sensitivity, and transformational impact.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}