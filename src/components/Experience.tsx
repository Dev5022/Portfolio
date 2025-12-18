import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        title: "Bachelor of Science Honors Computer Science",
        company_name: "Trent University",
        icon: "🎓",
        iconBg: "#383E56",
        date: "Sept 2023 – April 2026",
        points: [
            "Majoring in Computer Science, Specializing in Software Engineering.",
            "GPA: 8.97/10",
            "Dean’s Honor Roll Awardee (2023-2026)",
            "Relevant Coursework: Data Structures and Algorithms, Data Analytics, Database Management Systems, Software Engineering, Artificial Intelligence, Web Application Development"
        ],
    },
];

const ExperienceCard = ({ experience }: { experience: any }) => {
    return (
        <div className='vertical-timeline-element'>
            <div className="timeline-dot" style={{ background: experience.iconBg }}>{experience.icon}</div>
            <div className='timeline-content'>
                <div>
                    <h3 className='timeline-title'>{experience.title}</h3>
                    <p className='timeline-company'>{experience.company_name}</p>
                </div>

                <ul className='timeline-points'>
                    {experience.points.map((point: string, index: number) => (
                        <li
                            key={`experience-point-${index}`}
                            className='timeline-point'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
                <span className='timeline-date'>{experience.date}</span>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="work" className='experience-section'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p className='section-sub-text'>My Academic Journey</p>
                <h2 className='section-head-text'>Education.</h2>
            </motion.div>

            <div className='timeline-container'>
                <div className="timeline-line"></div>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
