import { motion } from 'framer-motion';
import arrowIcon from './assets/images/arrow.png';
import './Home.css';

function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <div className="home-container">
            <header>
                <motion.h1
                    className="title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    Mo Khalifa
                </motion.h1>
            </header>

            <div className="content-bottom">
                <div className="text-content">
                    <motion.h2
                        className="subtitle"
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.5 }}
                    >
                        I am an interior designer.
                    </motion.h2>
                    <motion.p
                        className="description"
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.7 }}
                    >
                        I use elements of style and design to transform interiors into healthy and pleasing spaces.
                    </motion.p>
                </div>

                <motion.div
                    className="arrow-container"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <motion.img
                        src={arrowIcon}
                        alt="Enter Site"
                        className="arrow-icon"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
