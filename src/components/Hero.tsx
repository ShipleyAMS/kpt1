
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #EAF3E8 0%, #EAF3E8 50%, #F8F7F2 100%)'
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTQwIDBDMTcuOTEgMCAwIDE3LjkxIDAgNDBzMTcuOTEgNDAgNDAgNDAgNDAtMTcuOTEgNDAtNDBTNjIuMDkgMCA0MCAwem0wIDEyYy0xNS40NiAwLTI4IDEyLjU0LTI4IDI4czEyLjU0IDI4IDI4IDI4IDI4LTEyLjU0IDI4LTI4LTEyLjU0LTI4LTI4LTI4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-800 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            <span className="text-[#007041]">Premium</span> Printing & Packaging Solutions
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-4 text-md md:text-lg text-forest-700 opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out"
          >
            Crafting exceptional quality books and packaging products 
            for international clients across over 30 countries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
