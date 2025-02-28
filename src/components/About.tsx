
import React, { useEffect, useRef } from 'react';
import { MapPin, Users, Award, Briefcase } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800">About King Tai</h2>
          <div className="mt-2 h-1 w-20 bg-earth-400 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={sectionRef} 
          className="grid md:grid-cols-2 gap-8 items-center opacity-0"
        >
          <div>
            <h3 className="text-xl font-semibold text-forest-700 mb-3">
              Excellence in Printing & Packaging Since 1995
            </h3>
            <p className="text-forest-600 mb-4 text-sm md:text-base">
              Based in Hong Kong with state-of-the-art factories in Dongguan, Guangzhou and New plant in 
              Foshan, Mainland China, King Tai is strategically located just an hour and half away from 
              Guangzhou Baiyun International Airport and Shenzhen Bao'an International Airport. 
              Our facilities span over 18,000 square meters and are staffed by a dedicated team of more 
              than 300 professionals.
            </p>
            <p className="text-forest-600 mb-4 text-sm md:text-base">
              King Tai specializes in high-quality book printing and packaging products, serving a diverse 
              range of international clients across the US, UK, Canada, France, Singapore, Australia, 
              New Zealand, China, and beyond.
            </p>
            <p className="text-forest-600 text-sm md:text-base">
              At King Tai, quality is our top priority. Our core values—"Quality first, customer first, 
              high-quality service, and integrity"—guide our operations. Thanks to our commitment to excellence, 
              our products are trusted in over 30 countries worldwide.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-forest-100 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-earth-100 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-forest-200">
                <div className="flex items-center justify-center h-full p-6">
                  <img 
                    src="/lovable-uploads/a7c499a9-3110-4ce1-a120-a25d5afce1c0.png" 
                    alt="King Tai Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={statsRef} 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 opacity-0"
        >
          <div className="bg-forest-50 rounded-lg p-4 text-center transform transition-transform hover:scale-105">
            <MapPin className="h-8 w-8 mx-auto text-forest-600 mb-2" />
            <h4 className="text-lg font-semibold text-forest-800">18,000+</h4>
            <p className="text-forest-600 mt-1 text-sm">Square Meters Facility</p>
          </div>
          
          <div className="bg-earth-50 rounded-lg p-4 text-center transform transition-transform hover:scale-105">
            <Users className="h-8 w-8 mx-auto text-earth-600 mb-2" />
            <h4 className="text-lg font-semibold text-earth-800">300+</h4>
            <p className="text-earth-600 mt-1 text-sm">Dedicated Professionals</p>
          </div>
          
          <div className="bg-forest-50 rounded-lg p-4 text-center transform transition-transform hover:scale-105">
            <Briefcase className="h-8 w-8 mx-auto text-forest-600 mb-2" />
            <h4 className="text-lg font-semibold text-forest-800">30+</h4>
            <p className="text-forest-600 mt-1 text-sm">Countries Served</p>
          </div>
          
          <div className="bg-earth-50 rounded-lg p-4 text-center transform transition-transform hover:scale-105">
            <Award className="h-8 w-8 mx-auto text-earth-600 mb-2" />
            <h4 className="text-lg font-semibold text-earth-800">Quality</h4>
            <p className="text-earth-600 mt-1 text-sm">Our Top Priority</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
