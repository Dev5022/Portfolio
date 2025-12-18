import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFastapi, SiThreedotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Tech.css';

const technologies = [
    { name: "HTML 5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS 3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "React JS", icon: <FaReact color="#61DAFB" /> },
    { name: "Three JS", icon: <SiThreedotjs color="white" /> }, // updated icon
    { name: "Node JS", icon: <FaNodeJs color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
];

const Tech = () => {
    return (
        <section className='tech-section'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='tech-container'
            >
                {technologies.map((tech) => (
                    <div className='tech-icon-wrapper' key={tech.name} title={tech.name}>
                        <div className='tech-icon'>
                            {tech.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Tech;
