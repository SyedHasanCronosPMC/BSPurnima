import { Brain, Rocket, Users, Zap } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Brain,
    title: 'How We Think',
    description: 'We believe in innovative problem-solving and creative approaches to bring your ideas to life.',
  },
  {
    icon: Rocket,
    title: 'How We Do It',
    description: 'Our proven methodology combines hands-on learning with expert guidance to accelerate your progress.',
  },
  {
    icon: Users,
    title: 'Why We Handpick Resources',
    description: 'We carefully select the best tools and mentors to ensure you receive top-quality education and support.',
  },
  {
    icon: Zap,
    title: 'Our Approach',
    description: 'Fast-paced, practical learning that focuses on building real-world projects from day one.',
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <feature.icon className={`w-12 h-12 text-blue-400 mb-4 transition-transform duration-300 ${
                hoveredIndex === index ? 'scale-110 rotate-12' : ''
              }`} />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}