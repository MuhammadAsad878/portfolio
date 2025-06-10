import Image from 'next/image';
import { Linkedin, Github, Mail } from 'lucide-react';

const Hero = ({ scrollToSection }) => (
  <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Muhammad Asad Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Muhammad Asad
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Full-Stack JavaScript Developer | Backend Focused | MERN | Next.js & React.js
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Certified IBM Full-Stack JavaScript Developer experienced in scalable web applications, 
          RESTful APIs, and modern technologies like GraphQL, Redis, Tailwind etc.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Get In Touch
          </button>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://linkedin.com/in/m-muhammad-asad" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/MuhammadAsad878" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:muhammadasad4041@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;