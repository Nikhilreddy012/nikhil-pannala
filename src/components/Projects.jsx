import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="min-h-96 bg-zinc-50 py-10">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="project-item bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl">Project 1: E-Commerce</h3>
            <p>A full-stack e-commerce platform built with React, Node.js, and AWS.</p>
          </div>
          <div className="project-item bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl">Project 2: Real-time Chat</h3>
            <p>A real-time chat application using React and WebSocket.</p>
          </div>
          <div className="project-item bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl">Project 3: Portfolio</h3>
            <p>This personal portfolio website built with React and Tailwind CSS.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
