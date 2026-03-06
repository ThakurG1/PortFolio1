import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const SectionLabel = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#0f0] border border-[#0f0]/30 mb-4"
    >
        <span className="w-1.5 h-1.5 bg-[#0f0] rounded-full" />
        {children}
    </motion.div>
);

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    };

    const slideRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    };

    const highlights = [
        { icon: '🚀', label: 'Fast Learner' },
        { icon: '💡', label: 'Problem Solver' },
        { icon: '🎯', label: 'Detail Oriented' },
        { icon: '🤝', label: 'Team Player' },
    ];

    return (
        <section id="about" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <SectionLabel>About Me</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        Who <span className="text-gradient">am I?</span>
                    </motion.h2>
                </div>

                <div ref={inViewRef} className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image column */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Floating avatar wrapper with parallax */}
                            <motion.div
                                style={{ y: imageY }}
                                className="relative z-10"
                            >
                                {/* Glow ring */}
                                <div className="absolute -inset-4 rounded-3xl opacity-60 blur-xl z-0"
                                    style={{ background: 'linear-gradient(135deg, #00ff00, #004400)' }} />
                                {/* Card */}
                                <div className="relative z-10 w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden glass-card border border-[#0f0]/20">
                                    {/* Avatar placeholder with initials */}
                                    <div className="w-full h-full flex flex-col items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg, #0d1331 0%, #1a1040 50%, #0d1331 100%)' }}>
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-black mb-4 overflow-hidden border-2 border-[#0f0] shadow-[0_0_15px_rgba(0,255,0,0.5)] bg-black"
                                        >
                                            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                                        </motion.div>
                                        <p className="text-gray-300 font-semibold text-lg">Nabin Thakur</p>
                                        <p className="text-gray-500 text-sm mt-1">Cyber Security Specialist</p>

                                        {/* Status badge */}
                                        <div className="mt-4 px-3 py-1.5 rounded-full glass-card border border-green-500/30 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                            <span className="text-green-400 text-xs font-medium">Open to Work</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    className="absolute -top-6 -right-6 glass-card border border-white/10 p-3 rounded-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">💻</span>
                                        <div>
                                            <div className="text-white text-xs font-bold">Full Stack</div>
                                            <div className="text-gray-400 text-xs">Development</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                                    className="absolute -bottom-4 -left-6 glass-card border border-white/10 p-3 rounded-2xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🔥</span>
                                        <div>
                                            <div className="text-white text-xs font-bold">Passionate</div>
                                            <div className="text-gray-400 text-xs">Developer</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <motion.div variants={slideRight}>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Passionate Developer &
                                <br />
                                <span className="text-gradient">Digital Creator</span>
                            </h3>

                            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                                <p>
                                    I am a passionate developer who enjoys building scalable web applications
                                    and modern user interfaces. I love experimenting with new technologies
                                    and creating interactive digital experiences.
                                </p>
                                <p>
                                    My journey in web development started with curiosity and evolved into
                                    a deep passion for crafting clean, performant, and visually appealing
                                    applications that solve real-world problems.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring the latest tech trends,
                                    contributing to open-source projects, or designing creative UI concepts.
                                </p>
                            </div>

                            {/* Highlight tags */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {highlights.map((h) => (
                                    <motion.div
                                        key={h.label}
                                        whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card border border-white/10 text-sm text-gray-300"
                                    >
                                        <span>{h.icon}</span>
                                        <span>{h.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Info grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { label: 'Location', value: 'Nepal 🇳🇵' },
                                    { label: 'Status', value: 'Open to Work' },
                                    { label: 'Experience', value: '1+ Years' },
                                    { label: 'Specialty', value: 'Cyber Security' },
                                ].map((item) => (
                                    <div key={item.label} className="glass-card border border-white/10 p-3 rounded-xl">
                                        <div className="text-gray-500 text-xs mb-1">{item.label}</div>
                                        <div className="text-white font-semibold text-sm">{item.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA buttons */}
                            <div className="flex flex-wrap gap-3">
                                <Link to="contact" smooth duration={600} offset={-70}>
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168,85,247,0.4)' }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
                                        style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
                                        id="about-contact-btn"
                                    >
                                        <FiMail size={16} />
                                        Get In Touch
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm border border-white/20 glass-card"
                                    id="download-resume-btn"
                                >
                                    <FiDownload size={16} />
                                    Download CV
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
