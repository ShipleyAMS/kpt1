
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will get back to you soon!",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800">Contact Us</h2>
          <div className="mt-2 h-1 w-20 bg-earth-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-forest-600 max-w-2xl mx-auto">
            Have questions or ready to start your next project with us? We're here to help.
            Reach out to our team using the information below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-earth-50 p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold text-earth-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-earth-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-earth-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-earth-800">Our Address</h4>
                    <p className="mt-1 text-forest-600">
                      Rm 9/F Silvercorp Int'l Tower<br />
                      707-713 Nathan Road Mongkok,<br />
                      Hong Kong
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-earth-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-earth-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-earth-800">Contact Numbers</h4>
                    <p className="mt-1 text-forest-600">
                      <strong>Andy Zhang</strong><br />
                      Tel: +86 150 1316 9618<br />
                      WhatsApp: +86 150 1316 9618<br />
                      WeChat: AndyKingTai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-earth-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-earth-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-earth-800">Email</h4>
                    <p className="mt-1 text-forest-600">
                      info@kingtaipp.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-earth-800 mb-3">Factory Locations</h4>
                <p className="text-forest-600 mb-2">
                  Our state-of-the-art facilities are strategically located in:
                </p>
                <ul className="list-disc list-inside text-forest-600 space-y-1">
                  <li>Dongguan, China</li>
                  <li>Guangzhou, China</li>
                  <li>Foshan, China (New Plant)</li>
                </ul>
                <p className="mt-3 text-forest-600">
                  Just 1.5 hours from Guangzhou Baiyun International Airport and Shenzhen Bao'an International Airport.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-forest-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-forest-800 mb-6">Send Us a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-forest-200 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-forest-200 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-forest-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-forest-200 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-forest-200 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-forest-600 text-white font-medium py-3 px-4 rounded-md hover:bg-forest-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
