import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Gallery', href: '/gallery' },
    { title: 'Testimonials', href: '/testimonials' },
    { title: 'Newsfeed', href: '/newsfeed' },
    { title: 'Schedule an Interview', href: '/schedule' },
  ];

  return (
    <header className="fixed w-full z-50 bg-opacity-90 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`text-gray-300 hover:text-white transition-colors relative group ${
                  location.pathname === item.href ? 'text-white' : ''
                }`}
              >
                {item.title}
                <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-blue-400 transition-all ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`block px-3 py-2 rounded-lg transition-all ${
                  location.pathname === item.href
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}