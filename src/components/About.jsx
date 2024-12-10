import { motion, spring } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="flex items-center py-10 bg-zinc-50 min-h-96">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly px-6">
        <motion.div
          className="text-center md:text-left md:ml-8"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, duration: 2, stiffness: 20 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Nikhil Pannala</h2>
          <p className="text-sm text-gray-600 mb-4">Full Stack Developer</p>
          <p className="text-lg text-gray-600 mb-4 text-wrap max-w-96">
            Hello there! If you're looking to build a new product or enhance an 
            existing one, I’m here to turn your ideas into reality. Explore my work, and feel free to reach out to discuss how I can help 
            bring your next project to life!
            </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/nikhil88/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-500" />
            </a>
            <a href="https://github.com/Nikhilreddy012" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-800 hover:text-gray-600" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1l63vuUF_5DB71Hz6TUBlobRQNZdq-pKj/view?usp=sharing"
            download
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
        <motion.div
          className="w-80 h-80 rounded-full bg-gray-300 mb-6 md:mb-0"
          initial={{ opacity: 0, x: 1600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, duration: 2, stiffness: 25 }}
        >
          <img src="/images/n.png" alt="A" className="w-full h-full object-cover rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
