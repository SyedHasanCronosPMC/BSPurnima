import { ArrowRight, Rocket } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [isRocketAnimated, setIsRocketAnimated] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8 max-w-3xl">
          <div 
            className="w-20 h-20 mb-8 cursor-pointer"
            onMouseEnter={() => setIsRocketAnimated(true)}
            onMouseLeave={() => setIsRocketAnimated(false)}
          >
            <Rocket 
              className={`w-full h-full text-blue-400 transform transition-all duration-500 ${
                isRocketAnimated ? 'translate-y-[-8px] rotate-12' : ''
              }`}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Have you had an idea you've been dying to bring to life?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Do you feel you need a big team and big budget?
          </p>
          <p className="text-lg text-gray-400">
            Think again. At BuildSchool, we turn your vision into reality with our expert guidance and proven methodology.
          </p>
          <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}