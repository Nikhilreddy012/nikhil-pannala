import { motion } from 'framer-motion';
import { FaJs, FaNode, FaReact, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <FaJs size={40} className='fill-amber-300' />, delay: 0.2 },
  { name: 'TypeScript', icon: <SiTypescript size={40} className='fill-sky-600' />, delay: 0.3 },
  { name: 'React', icon: <FaReact size={40} className='fill-sky-500'/>, delay: 0.4 },
  { name: 'Node.js', icon: <FaNode size={40} />, delay: 0.5 },
  { name: 'AWS', icon: <FaAws size={40} className='fill-orange-400' />, delay: 0.6 },
  { name: 'GraphQL', icon: <SiGraphql size={40} className='fill-pink-400' />, delay: 0.7 },
  { name: 'MySQL', icon: <SiMysql size={40} className='fill-sky-400' />, delay: 0.8 },
  { name: 'Git', icon: <FaGitAlt size={40} className='fill-red-800' />, delay: 0.9  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-96 bg-zinc-50 py-10">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: skill.delay, duration: 0.6 }}
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
