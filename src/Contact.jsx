import { motion } from 'framer-motion';
import './Contact.css';
import portraitImg from './assets/images/contact_portrait.png';

function Contact() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <div className="contact-container">
            <div className="contact-content-wrapper">
                <div className="contact-left">
                    <motion.div
                        className="contact-title-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="line-one">Lets work</h1>
                        <h1 className="line-two">together</h1>
                    </motion.div>
                </div>

                <div className="contact-right">
                    <motion.div
                        className="contact-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    >
                        <img src={portraitImg} alt="Mo Khalifa Portrait" className="contact-portrait" />
                    </motion.div>

                    <div className="contact-details">
                        <motion.div
                            className="contact-row"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.5 }}
                        >
                            <span className="contact-label">PHONE</span>
                            <a href="tel:+46735570241" className="contact-value">+46735570241</a>
                        </motion.div>
                        <motion.div
                            className="contact-row"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.6 }}
                        >
                            <span className="contact-label">EMAIL</span>
                            <a href="mailto:mokhalifa83@outlook.com" className="contact-value">mokhalifa83@outlook.com</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
