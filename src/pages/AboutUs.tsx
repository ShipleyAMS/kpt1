import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Users, Award, Briefcase, Factory, BookOpen, Globe, Shield } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - King Tai Printing & Packaging';
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
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
    if (facilitiesRef.current) observer.observe(facilitiesRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (facilitiesRef.current) observer.unobserve(facilitiesRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-forest-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-forest-800">About King Tai</h1>
              <div className="mt-2 h-1 w-24 bg-earth-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-forest-700 text-center">
                Founded in 1995, King Tai has grown to become a leader in premium printing and packaging solutions, 
                serving clients in over 30 countries worldwide with a commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div 
              ref={sectionRef} 
              className="grid md:grid-cols-2 gap-8 items-center opacity-0"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-forest-800 mb-4">
                  Excellence in Printing & Packaging Since 1995
                </h2>
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
                  <img 
                    src="/lovable-uploads/39f4a228-54bb-478d-88b0-8aee496d9ba5.png" 
                    alt="King Tai Headquarters" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div 
              ref={statsRef} 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 opacity-0"
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
                <h4 className="text-lg font-semibold text-earth-800">25+</h4>
                <p className="text-earth-600 mt-1 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Facilities */}
        <section className="py-12 bg-forest-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-forest-800">Our Facilities</h2>
              <div className="mt-2 h-1 w-20 bg-earth-400 mx-auto rounded-full"></div>
            </div>
            
            <div 
              ref={facilitiesRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img src="/lovable-uploads/76ccac21-9322-444d-a4a8-0f9aec6648eb.png" alt="Printing Equipment" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-forest-800 mb-2">State-of-the-art Printing Technology</h3>
                  <p className="text-forest-600">
                    Our production facilities feature the latest printing technology, allowing us to deliver superior quality for all your printing needs.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img src="/lovable-uploads/3378fe16-1274-470f-b7b2-d12d3a9db1c3.png" alt="Production Floor" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-forest-800 mb-2">Expansive Production Capacity</h3>
                  <p className="text-forest-600">
                    With extensive floor space and modern machinery, we can handle large-scale orders efficiently without compromising on quality.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img src="/lovable-uploads/ea2c85f9-a101-4483-913c-0a8e6c692485.png" alt="Product Showcase" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-forest-800 mb-2">Product Innovation Center</h3>
                  <p className="text-forest-600">
                    Our dedicated showroom displays our diverse range of packaging and printing solutions, inspiring new ideas for our clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-forest-800 mb-3">Product Showcase</h3>
                  <p className="text-forest-600 mb-4">
                    Our facilities include extensive showrooms where clients can explore our diverse range of products and get inspired for their own projects.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="/lovable-uploads/6b7b0ad3-3051-4870-be9f-134c83377098.png" alt="Product Collection" className="rounded-lg w-full h-48 object-cover" />
                    <img src="/lovable-uploads/455a92e6-b221-406a-b6e8-432e4a680f64.png" alt="Product Display" className="rounded-lg w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-forest-800 mb-3">Advanced Manufacturing</h3>
                  <p className="text-forest-600 mb-4">
                    From raw materials to finished products, our advanced manufacturing processes ensure precision, consistency, and superior quality.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <img src="/lovable-uploads/39f4a228-54bb-478d-88b0-8aee496d9ba5.png" alt="Company Headquarters" className="rounded-lg w-full h-32 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-forest-800">Our Core Values</h2>
              <div className="mt-2 h-1 w-20 bg-earth-400 mx-auto rounded-full"></div>
            </div>
            
            <div 
              ref={valuesRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0"
            >
              <div className="bg-forest-50 p-6 rounded-lg text-center hover:bg-forest-100 transition-colors">
                <div className="h-16 w-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-forest-600" />
                </div>
                <h3 className="text-lg font-semibold text-forest-800 mb-2">Quality First</h3>
                <p className="text-forest-600 text-sm">
                  We never compromise on quality, ensuring each product meets our exacting standards.
                </p>
              </div>
              
              <div className="bg-earth-50 p-6 rounded-lg text-center hover:bg-earth-100 transition-colors">
                <div className="h-16 w-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-earth-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-800 mb-2">Customer First</h3>
                <p className="text-earth-600 text-sm">
                  Our clients' needs drive our operations, and we strive to exceed their expectations.
                </p>
              </div>
              
              <div className="bg-forest-50 p-6 rounded-lg text-center hover:bg-forest-100 transition-colors">
                <div className="h-16 w-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-forest-600" />
                </div>
                <h3 className="text-lg font-semibold text-forest-800 mb-2">High-Quality Service</h3>
                <p className="text-forest-600 text-sm">
                  We provide attentive, responsive service throughout every stage of the production process.
                </p>
              </div>
              
              <div className="bg-earth-50 p-6 rounded-lg text-center hover:bg-earth-100 transition-colors">
                <div className="h-16 w-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-earth-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-800 mb-2">Integrity</h3>
                <p className="text-earth-600 text-sm">
                  We conduct business ethically and transparently, building trust with our stakeholders.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="/#contact" 
                className="inline-flex items-center px-6 py-3 bg-earth-500 text-white rounded-md font-medium hover:bg-earth-600 transition-colors"
              >
                Contact Us to Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
