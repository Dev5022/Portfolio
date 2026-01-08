import { motion } from 'framer-motion';
import './About.css';

const services = [
    { title: "Web Developer", icon: "🌐" },
    { title: "React Native Developer", icon: "📱" },
    { title: "Backend Developer", icon: "⚙️" },
    { title: "3D Visuals", icon: "🧊" },
];

const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: string }) => {
    return (
        <motion.div
            className='service-card-wrapper'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className='service-card'>
                <div className='service-icon'>{icon}</div>
                <h3 className='service-title'>{title}</h3>
            </div>
        </motion.div>
    )
}

const About = () => {
    return (
        <section id="about" className='about-section'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className='section-sub-text'>Introduction</p>
                <h2 className='section-head-text'>Overview.</h2>
            </motion.div>

            <motion.p
                className='about-text'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                I'm a skilled Software Engineer with a strong algorithmic and analytical foundation,
                focused on building interactive 3D visuals, scalable web applications, and AI-driven solutions.
                Passionate about solving complex problems through data structures, algorithms, and mathematical reasoning,
                while creating seamless user experiences.
            </motion.p>

            <div className='services-container'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default About
