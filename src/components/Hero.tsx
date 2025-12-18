import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas/index';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-head">
                    <div className="hero-line-container">
                        <div className="hero-dot" />
                        <div className="hero-line" />
                    </div>

                    <div className='hero-text'>
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-accent">Dev</span>
                        </h1>
                        <p className="hero-subtitle">
                            I solve complex problems through logic and DSA, <br className='hidden-mobile' />
                            developing 3D visuals and web applications.
                        </p>
                    </div>
                </div>
            </div>

            <ComputersCanvas />

            <div className="scroll-indicator">
                <a href="#about">
                    <div className="scroll-btn">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="scroll-dot"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
