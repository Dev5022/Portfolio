import { motion } from 'framer-motion';
import './Extracurricular.css';

const activities = [
    {
        title: "Mathematics & English Competitions",
        icon: "🏆",
        description: "Secured 2nd Runner-Up positions in Aloha competitions at Chennai. Solved approximately 70 questions in just 5 minutes, demonstrating exceptional speed, accuracy, and problem-solving skills under pressure."
    },
    {
        title: "School Cricket Team",
        icon: "🏏",
        description: "Played as a key member of the school’s cricket team in regional tournaments. Developed strong teamwork, leadership, and strategic thinking skills while contributing to the team’s success."
    },
];

const ActivityCard = ({ index, title, icon, description }: { index: number, title: string, icon: string, description: string }) => {
    return (
        <motion.div
            className='activity-card-wrapper'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className='activity-card'>
                <div className='activity-icon'>{icon}</div>
                <h3 className='activity-title'>{title}</h3>
                <p className='activity-description'>{description}</p>
            </div>
        </motion.div>
    )
}

const Extracurricular = () => {
    return (
        <section className='extracurricular-section'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className='section-sub-text'>Beyond the Classroom</p>
                <h2 className='section-head-text'>Extracurricular Activities.</h2>
            </motion.div>

            <div className='activities-container'>
                {activities.map((activity, index) => (
                    <ActivityCard key={activity.title} index={index} {...activity} />
                ))}
            </div>
        </section>
    )
}

export default Extracurricular;
