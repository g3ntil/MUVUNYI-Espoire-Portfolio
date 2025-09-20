import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            I'm always open to discussing leadership opportunities, collaborations, or sharing insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="font-playfair text-2xl text-gray-900 mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="font-playfair text-2xl text-gray-900 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-lato text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 font-lato">muvunyiespoir17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-lato text-gray-900 mb-1">LinkedIn</h3>
                    <p className="text-gray-600 font-lato">linkedin.com/in/espoir-muvunyi</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-lato text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 font-lato">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-lato text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 font-lato">+250 780 626 636</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-gray-50 border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div>
                  <h4 className="font-lato text-gray-800">Available for Opportunities</h4>
                  <p className="text-gray-600 text-sm font-lato">
                    Open to leadership roles, consulting projects, and speaking engagements
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>


      </div>
    </div>
  );
}