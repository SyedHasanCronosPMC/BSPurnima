import { useState } from 'react';
import { Star, Sparkles, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function JoinCohort() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Star,
      title: "Handpicked Excellence",
      description: "We carefully select industry experts and cutting-edge resources to ensure you receive nothing but the best."
    },
    {
      icon: Trophy,
      title: "Limited Spots",
      description: "We maintain small cohort sizes to guarantee personalized attention and maximize your growth potential."
    },
    {
      icon: Users,
      title: "Elite Network",
      description: "Join a carefully curated group of ambitious builders and gain lifetime access to our alumni network."
    },
    {
      icon: Sparkles,
      title: "Premium Resources",
      description: "Get exclusive access to our carefully selected tools, frameworks, and learning materials worth thousands."
    }
  ];

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Join Our Next Elite Cohort
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just teach - we cultivate excellence. Our handpicked resources and selective admission process ensure you're part of something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <benefit.icon 
                  className={`w-12 h-12 mb-4 text-blue-400 transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110 rotate-12' : ''
                  }`}
                />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/apply"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Apply Now
          </Link>
          <p className="mt-4 text-gray-400">
            Only {Math.floor(Math.random() * 5) + 2} spots remaining for our next cohort
          </p>
        </div>
      </div>
    </section>
  );
}