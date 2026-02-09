import { motion } from 'framer-motion';
import './About.css';
import bgImage from './assets/images/about_me_bg.png';

function About() {
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <div className="about-container">
            <div className="about-left">
                <motion.div
                    className="about-title-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="about-word">About</h1>
                    <h1 className="me-word">me</h1>
                </motion.div>
            </div>

            <div className="about-right">
                <motion.div
                    className="image-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <img src={bgImage} alt="Portrait of Interior Designer" className="profile-image" />
                </motion.div>

                <div className="about-text-columns">
                    <motion.div
                        className="about-col"
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.3 }}
                    >
                        <p>
                            I graduated from De Loureigh University's Interior Architecture and Design program.
                        </p>
                        <p>
                            I worked as an Interior Designer at top firms Jeffries and Madison Co. and Davis Thorne and Partners before starting my own practice.
                        </p>
                    </motion.div>
                    <motion.div
                        className="about-col"
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.5 }}
                    >
                        <p>
                            My personal passion lies in sustainable interior design, but I have extensive experience in residential interior design, commercial interior design, retail design and space planning.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;
