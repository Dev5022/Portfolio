import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Works.css';

const projects = [
    {
        name: "Earth Pulse",
        description:
            "A 3D dashboard visualizing global sentiment on a globe. Analyzes Reddit data using ML to categorize posts by city (Good/Bad/Neutral) to identify 'happy cities'. Built during Hackathon 2025.",
        tags: [
            { name: "nextjs", color: "blue-text-gradient" },
            { name: "threejs", color: "green-text-gradient" },
            { name: "fastapi", color: "pink-text-gradient" },
            { name: "ai/ml", color: "orange-text-gradient" },
        ],
        image: null, // placeholder
        source_code_link: "https://github.com/Dev5022/Earths-Pulse",
        live_link: "https://github.com/Dev5022/Earths-Pulse",
    },
    {
        name: "EcoSortAI",
        description:
            "An AI-powered waste classification system built with Databricks. It identifies waste types (e.g., plastic, paper, organic) and directs users to the correct disposal bin, promoting proper recycling and waste management.",
        tags: [
            { name: "databricks", color: "blue-text-gradient" },
            { name: "machine-learning", color: "green-text-gradient" },
            { name: "python", color: "pink-text-gradient" },
        ],
        image: null,
        source_code_link: "https://github.com/Dev5022/Hacktrent2024-EcoSort",
        live_link: "https://github.com/Dev5022/Hacktrent2024-EcoSort",
    },
    {
        name: "Movie Tracker",
        description:
            "A comprehensive movie tracking web application similar to Letterboxd. Users can curate watchlists, track completed movies, and provide ratings. Features a rich user interface for managing personal movie collections.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "php", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: null,
        source_code_link: "https://github.com/Dev5022/COIS-3430-Movie-Tracker-Assignment3-",
        live_link: "https://github.com/Dev5022/COIS-3430-Movie-Tracker-Assignment3-",
    },
    {
        name: "URL Shortener",
        description:
            "A robust URL shortening service that allows users to create personalized custom URLs. Built with a focus on JavaScript logic and performance.",
        tags: [
            { name: "javascript", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "sql", color: "pink-text-gradient" },
        ],
        image: null,
        source_code_link: "https://github.com/Dev5022/url-shortener",
        live_link: "https://github.com/Dev5022/url-shortener",
    },
];

const ProjectCard = ({ index, name, description, tags, source_code_link, live_link }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.75 }}
            className="project-card"
        >
            <div className='project-card-image-content'>
                <div className='project-card-overlay'>
                    <div className='card-links'>
                        <div onClick={() => window.open(source_code_link, "_blank")} className='card-icon github'>
                            <FaGithub />
                        </div>
                        <div onClick={() => window.open(live_link, "_blank")} className='card-icon demo'>
                            <FaExternalLinkAlt />
                        </div>
                    </div>
                </div>
                {/* Placeholder for project image */}
                <div className="img-placeholder" style={{ background: `linear-gradient(45deg, #1d1836, #3d3466)` }}>
                    <span>{name}</span>
                </div>
            </div>

            <div className='project-info'>
                <h3 className='project-name'>{name}</h3>
                <p className='project-desc'>{description}</p>
            </div>

            <div className='project-tags'>
                {tags.map((tag: any) => (
                    <p key={tag.name} className={`tag ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <section className='works-section'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <p className='section-sub-text'>My work</p>
                <h2 className='section-head-text'>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 1 }}
                    className='works-text'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos.
                </motion.p>
            </div>

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Works;
