'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, Code, Database, Server, Globe } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

 const projects = [
  {
    title: "HomeEase – Rental Listings Application",
    description: "Full-stack rental platform with secure authentication, file uploads, and interactive maps",
    tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "Mapbox", "Docker"],
    github: "https://github.com/MuhammadAsad878/mern-final-project",
    features: ["MVC Architecture", "Passport.js Auth", "File Upload System", "Docker Deployment"],
    image: "homeease-rental-listings.png"
  },
  {
    title: "GiftLink – Gift Recommendation Platform",
    description: "AI-powered gift suggestion platform with sentiment analysis and secure user authentication",
    tech: ["Node.js", "Express.js", "React.js", "JWT", "MongoDB"],
    github: "https://github.com/MuhammadAsad878/Full-Stack-Capstone-Project-GiftLink-Web-Application-",
    features: ["JWT Authentication", "Sentiment Analysis", "RESTful APIs", "IBM Capstone Project"],
    image: "giftlink-recommendation.png"
  },
  {
    title: "Real-time Chat Application",
    description: "Socket.io based chat application with real-time messaging and MongoDB storage",
    tech: ["Node.js", "Express.js", "Next.js", "Socket.io", "MongoDB"],
    github: "https://github.com/MuhammadAsad878/realtime-group-chat-application-backend",
    features: ["Real-time Messaging", "RESTful Endpoints", "Message Storage", "Modern UI"],
    image: "chat-application.png"
  },
  {
    title: "Campus Lost & Found System",
    description: "Desktop application for campus lost and found items with role-based access control",
    tech: ["C#", ".NET", "WinForms", "MSSQL"],
    github: "https://github.com/MuhammadAsad878/CSharp-Based-Campus-Lost-and-Found-Desktop-Application",
    features: ["Role-based Access", "Image Storage", "CRUD Operations", "Admin Dashboard","Item List & Found"],
    image: "campus-lost-found.jpg"
  },
  {
    title: "Todo App",
    description: "Modern todo application with clean UI and responsive design",
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/MuhammadAsad878/todo-app-react-tailwind",
    live: "https://todo-app-react-tailwind-two.vercel.app",
    features: ["Responsive Design", "Date Management", "Clean UI", "Modern Frontend"],
    image: "todo-app.png"
  },
    {
    title: "Portfolio Website",
    description: "Personal portfolio site built using modern web stack to showcase projects and skills",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/MuhammadAsad878/portfolio", // replace if needed
    live: "https://portfolio-muhammadasad878.vercel.app",   // replace with your actual Vercel link
    features: ["Responsive Design", "Project Showcase", "Smooth Scrolling"],
    image: "portfolio-site.png" // Add this image to your /public folder
  },
    {
    title: "Tic-Tac-Toe Game ",
    description: "Tic Tac Toe game built with HTML, CSS, and JavaScript for fun purpose ",
    tech: ["HTML5", "CSS", "JavaScript","Github Pages"],
    github: "https://github.com/MuhammadAsad878/Tic-Tac-Toe-Game-in-HTML-CSS-JS", // replace if needed
    live: "https://muhammadasad878.github.io/Tic-Tac-Toe-Game-in-HTML-CSS-JS/",   // replace with your actual Vercel link
    features: ["Tic Tac Toe Game"],
    image: "tic-tac-toe.png" // Add this image to your /public folder
  },
    {
    title: "Django Based Ecommerce Store",
    description: "Responsive store with Django Admin for managing products, carts, and user auth. Bootstrap UI, deployed on Railway.",
    tech: ["HTML5", "CSS", "JavaScript","Bootstrap","Python","Django","Railway.com"],
    github: "https://github.com/MuhammadAsad878/Django-Based-Ecommerce-Shoes-Store", // replace if needed
    // live: "https://muhammadasad878.github.io/Tic-Tac-Toe-Game-in-HTML-CSS-JS/",   // replace with your actual Vercel link
    features: ["Auth","Login","Signup", "Cart Management", "Admin Product Management", "Bootstrap UI"],
    image: "django.png" // Add this image to your /public folder
  }
];


  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "Django", "Python", "RESTful APIs", "GraphQL", "JWT Auth", "Socket.io"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["Git & GitHub", "Docker", "Postman", "VS Code", "Kubernetes & CI/CD (fundamentals)"],
    image:"home.jpeg",
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile ? 'block w-full text-left px-4 py-2' : 'px-4 py-2'
      } text-gray-700 hover:text-blue-600 transition-colors font-medium ${
        activeSection === href ? 'text-blue-600 border-b-2 border-blue-600' : ''
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Muhammad Asad</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="experience">Experience</NavLink>
                <NavLink href="projects">Projects</NavLink>
                <NavLink href="skills">Skills</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="home" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="experience" mobile>Experience</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
     <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
              <Image
                src="/profile.jpeg" // Make sure this file is in your /public folder
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
            {/* <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button> */}
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
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Full-Stack Developer with a Passion for Learning & Innovatioin</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a self-driven Full-Stack Web Developer with expertise in Node.js, Express.js, React.js, 
                MongoDB, Python & Django specializing in scalable web applications, backend optimization, with fundamental understanding of cloud-based technologies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a passion for building high-performance, user-centric applications, I focus on delivering 
                clean, efficient, and maintainable code using modern technologies. Currently pursuing my final 
                year of BSCS at The Islamia University of Bahawalpur.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Code className="text-blue-600 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900">Clean Code</h4>
                  <p className="text-sm text-gray-600">Writing maintainable and efficient code</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <Database className="text-green-600 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900">Database Design</h4>
                  <p className="text-sm text-gray-600">Efficient CRUD Operations and database designs</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <Server className="text-purple-600 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900">Backend Architecture</h4>
                  <p className="text-sm text-gray-600">Scalable and secure server solutions</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <Globe className="text-orange-600 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900">Fundamentals of Cloud Deployment</h4>
                  <p className="text-sm text-gray-600">CI/CD, Docker, Kubernetes etc</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Lahore, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">muhammadasad4041@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span className="text-gray-700">+92 313 6460591</span>
                </div>
              </div>
              
             <div className="mt-8">
  <h5 className="font-semibold text-gray-900 mb-4">Certifications</h5>
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h6 className="font-medium text-gray-900">IBM Full-Stack JavaScript Developer</h6>
    <p className="text-sm text-gray-600">Professional Certificate • Feb 2025</p>
    <p className="text-xs text-gray-500 mt-1">
      12-course specialization covering MERN stack, DevOps, and cloud technologies
    </p>
    <a
      href="https://coursera.org/share/e1320253480447226141599a0f35eeef" // Replace with your actual certificate URL
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 text-sm text-blue-600 hover:underline font-semibold"
    >
      Verify Certification →
    </a>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* {Experience } */}
       <section id="experience" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience & Projects</h2>
    <div className="grid gap-10 md:grid-cols-2">

      {/* Freelance Work & Learning Projects */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Freelance & Self-Driven Projects</h3>
        <p className="text-blue-600 font-semibold">Independent</p>
        <p className="text-gray-500">Punjab, Pakistan • Hybrid</p>
        <div className="text-gray-500 mt-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Jan 2023 - Jun 2025
          </span>
        </div>
        <ul className="text-gray-600 space-y-4 mt-4">
          <li>
            <strong>Shoes Store (E-commerce)</strong> – <a href="https://github.com/MuhammadAsad878/sk-store-production" target="_blank" className="text-blue-600 underline">GitHub</a><br />
            Django-based store with user auth, cart, admin product management, Bootstrap UI. Deployed on Railway (expired free tier).
          </li>
          <li>
            <strong>HomeEase – Rental Listings App</strong> – <a href="https://github.com/MuhammadAsad878/mern-final-project" target="_blank" className="text-blue-600 underline">GitHub</a><br />
            Node.js, Express, MongoDB, Passport.js auth, MVC pattern, Cloudinary image uploads, Mapbox integration, Docker deployment.Deployed on Railway (expired free tier).
          </li>
          <li>
            <strong>GiftLink – Gift Recommendation Platform</strong> – 
            <a href="https://github.com/MuhammadAsad878/Full-Stack-Capstone-Project-GiftLink-Web-Application-" target="_blank" className="text-blue-600 underline ml-1">GitHub</a> | 
            <a href="https://www.coursera.org/account/accomplishments/certificate/C0W0IR3VK1I3" className="text-blue-600 underline ml-1">Verify</a><br />
            Node.js, Express, React, JWT auth, MongoDB, and sentiment-based gift recommendation (IBM Capstone).
          </li>
          <li>
            <strong>Socket.io Chat Application</strong> – <a href="https://github.com/MuhammadAsad878/realtime-group-chat-application-backend" target="_blank" className="text-blue-600 underline">GitHub</a><br />
            Built with Next.js, Socket.io, MongoDB, and Express. Includes REST API and real-time messaging.
          </li>
          <li>
            <strong>Student Registration App</strong> (MongoDB + Express) – <a href="https://github.com/MuhammadAsad878/crud-app-react-express-mongodb-mern" target="_blank" className="text-blue-600 underline">GitHub</a>
          </li>
          <li>
            <strong>CRUD App with SQL & Express</strong> – <a href="https://github.com/MuhammadAsad878/CRUD-operations-using-node-express-and-SQL" target="_blank" className="text-blue-600 underline">GitHub</a>
          </li>
          <li>
            <strong>Plant Nursery App</strong> – <a href="https://github.com/MuhammadAsad878/React-Based-Plant-Nursery-Application" target="_blank" className="text-blue-600 underline">GitHub</a>
          </li>
          <li>
            <strong>Todo App (React + Tailwind)</strong> – <span className="text-green-600"><a href='https://todo-app-react-tailwind-two.vercel.app/' target='_blank'> LIVE</a></span>
          </li>
          <li>
            <strong>Tic-Tac-Toe</strong> – <span className="text-green-600"><a href='https://muhammadasad878.github.io/Tic-Tac-Toe-Game-in-HTML-CSS-JS/'> LIVE</a></span>
          </li>
        </ul>
      </div>

      {/* University + Team Collaborations */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Academic & Collaborative Projects</h3>
        <p className="text-blue-600 font-semibold">University & Team Work</p>
        <p className="text-gray-500">Remote + On-Campus</p>
        <div className="text-gray-500 mt-2">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">2022–Present</span>
        </div>
        <ul className="text-gray-600 space-y-4 mt-4">
          <li>Collaborated with peers to integrate GraphQL, Redis, MongoDB, and Express in backend systems.</li>
          <li>Contributed to full-stack development and deployment of academic tools and utilities.</li>
          <li>
            <strong>Library Management System (.NET Desktop)</strong> – SQL inventory, transaction records, metadata and auto-invoicing.
          </li>
          <li>
            <strong>Campus Lost & Found System (.NET Desktop)</strong> – Role-based features for item claims and admin verification.
          </li>
          <li>
            <strong>Day Care Management System (.NET Desktop)</strong> – Structured child-parent record tracking with admin dashboards.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>




{/* Projects Section */}
<section id="projects" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200">
          {/* Project Image Preview */}
          <div className="relative h-48 bg-gray-100 overflow-hidden">
            <Image
             src={"/"+project.image} width={300} height={200} alt="Profile" 
             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
           
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-1">
                    <span className="text-blue-600 mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                <Github size={16} />
                Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

</section>

      {/* Skills Section */}
<section id="skills" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Programming Languages */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-blue-600 mb-4">
          <Code size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "C#", "JavaScript (ES6+)"].map((skill, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-green-600 mb-4">
          <Globe size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Frameworks & Libraries</h3>
        <div className="flex flex-wrap gap-2">
          {["Reactjs","Next.js", "Node.js", "Express.js", "Django", ".Net Winforms", "Passport.js"].map((skill, index) => (
            <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-purple-600 mb-4">
          <Database size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Databases</h3>
        <div className="flex flex-wrap gap-2">
          {["MongoDB", "MSSQL", "MySQL"].map((skill, index) => (
            <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-orange-600 mb-4">
          <Server size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Git & GitHub", "Postman", "Hopscotch", "Docker", "VS Code", 
            "Visual Studio", "Redis", "IntelliJ", "CI/CD Basics"
          ].map((skill, index) => (
            <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Others */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-pink-600 mb-4">
          <Code size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "RESTful APIs","GraphQL API's","Redis", "JWT", "Socket.io", "MVC", 
            "OOP", "Agile Practices"
          ].map((skill, index) => (
            <span key={index} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Whether you're looking for a 
              skilled developer or want to discuss a project, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">muhammadasad4041@gmail.com</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+92 313 6460591</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Lahore, Punjab, Pakistan</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/in/m-muhammad-asad"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/MuhammadAsad878"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:muhammadasad4041@gmail.com"
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Currently seeking opportunities as a Full-Stack Developer, Frontend Developer, 
              Backend Developer, or JavaScript Developer
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Muhammad Asad. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;