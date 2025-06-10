import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ scrollToSection }) => (
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
);

export default Contact;