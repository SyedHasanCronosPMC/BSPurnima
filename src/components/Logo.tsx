import { Rocket } from 'lucide-react';
import { useState } from 'react';

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center gap-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transform transition-all duration-300 ${isHovered ? 'translate-y-[-4px] rotate-12' : ''}`}>
        <Rocket className="w-8 h-8 text-blue-400" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        BuildSchool
      </span>
    </div>
  );
}