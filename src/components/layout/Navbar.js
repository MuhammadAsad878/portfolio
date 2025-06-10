'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from '../ui/NavLink';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Muhammad Asad</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <NavLink 
                  key={section}
                  href={section}
                  activeSection={activeSection}
                  scrollToSection={scrollToSection}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <NavLink 
                key={section}
                href={section}
                mobile
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;