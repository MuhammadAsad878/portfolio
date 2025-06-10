const Experience = () => (
  <section id="experience" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience & Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
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
          </ul>
        </div>

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
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;