import { useState } from 'react';
import { 
  Rocket, 
  Users, 
  Code2, 
  Target, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function WhyBuildSchool() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  const reasons = [
    {
      icon: Rocket,
      title: "Launch Your Ideas Faster",
      description: "Go from concept to MVP in weeks, not months. Our accelerated learning approach helps you build and ship products quickly.",
      color: "from-blue-500 to-purple-500",
      bgImage: "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&q=80"
    },
    {
      icon: Users,
      title: "1-on-1 Expert Mentorship",
      description: "Work directly with industry veterans who've built and scaled successful products. Get personalized guidance tailored to your goals.",
      color: "from-purple-500 to-pink-500",
      bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
    },
    {
      icon: Code2,
      title: "Learn By Building",
      description: "No theoretical fluff. Build real products from day one. Our hands-on approach ensures you learn skills that matter.",
      color: "from-pink-500 to-red-500",
      bgImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
    },
    {
      icon: Target,
      title: "Industry-Ready Skills",
      description: "Master the latest tools and best practices used by top tech companies. Graduate with a portfolio of real projects.",
      color: "from-red-500 to-orange-500",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      icon: Sparkles,
      title: "Community & Network",
      description: "Join a vibrant community of builders. Connect with fellow entrepreneurs, developers, and industry experts.",
      color: "from-orange-500 to-yellow-500",
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    }
  ];

  const handleCardClick = (index: number) => {
    if (activeIndex === index) {
      setIsExiting(true);
      setTimeout(() => {
        setActiveIndex(null);
        setIsExiting(false);
      }, 300);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Why Choose BuildSchool?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`
                relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500
                ${activeIndex === index ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${activeIndex !== null && activeIndex !== index ? 'scale-95 opacity-75' : ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br bg-opacity-90 z-10" />
              <div
                className={`
                  relative z-20 p-8 h-full bg-gradient-to-br ${reason.color} 
                  transition-all duration-500 group hover:shadow-lg
                  ${activeIndex === index ? 'bg-opacity-90' : 'bg-opacity-75 hover:bg-opacity-85'}
                `}
              >
                <div className="flex items-start gap-4">
                  <reason.icon 
                    className={`
                      w-8 h-8 text-white transition-all duration-500
                      ${activeIndex === index ? 'scale-150' : 'group-hover:scale-110'}
                    `}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className={`
                      text-white/80 transition-all duration-500
                      ${activeIndex === index ? 'text-lg' : 'text-sm'}
                    `}>
                      {reason.description}
                    </p>
                    
                    {activeIndex === index && (
                      <button 
                        className={`
                          mt-6 flex items-center gap-2 text-white border border-white/30 
                          px-4 py-2 rounded-full group/btn hover:bg-white/10 transition-all
                          ${isExiting ? 'opacity-0' : 'opacity-100'}
                        `}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}