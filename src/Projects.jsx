import { motion } from 'framer-motion';
import './Projects.css';
import bedroomImg from './assets/images/bedroom.png';
import diningImg from './assets/images/dining.png';
import kitchenImg from './assets/images/kitchen.png';

function Projects() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.2
            }
        },
        viewport: { once: true }
    };

    const projectItem = {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <div className="projects-container">
            <motion.div
                className="projects-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
            >
                <motion.div className="project-image project-img-1" variants={projectItem}>
                    <img src={bedroomImg} alt="Bedroom Project" />
                </motion.div>
                <motion.div className="project-image project-img-2" variants={projectItem}>
                    <img src={diningImg} alt="Dining Area Project" />
                </motion.div>
                <motion.div className="project-image project-img-3" variants={projectItem}>
                    <img src={kitchenImg} alt="Kitchen Project" />
                </motion.div>
            </motion.div>

            <motion.div
                className="project-text"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
                <p>The theme was contemporary with dark color accents.</p>
            </motion.div>
        </div>
    );
}

export default Projects;
