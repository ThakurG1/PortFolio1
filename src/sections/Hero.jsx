import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiCode, FiGlobe } from 'react-icons/fi';
import bgImage from '../assets/bg/bg.png';

const TypeWriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const current = words[index % words.length];
        let timeout;

        if (!isDeleting && charIndex < current.length) {
            timeout = setTimeout(() => {
                setText(current.slice(0, charIndex + 1));
                setCharIndex(c => c + 1);
            }, 80);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(current.slice(0, charIndex - 1));
                setCharIndex(c => c - 1);
            }, 40);
        } else if (!isDeleting && charIndex === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex(i => (i + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, words]);

    return (
        <span>
            {text}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-purple-400 ml-1 align-middle"
            />
        </span>
    );
};

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    };

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
        >
            {/* Content layer */}

            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                style={{ y: yText, opacity }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2">
                        <div className="px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 border border-purple-500/30">
                            <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2 animate-pulse" />
                            Available for opportunities
                        </div>
                    </motion.div>

                    {/* Main name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 leading-tight"
                    >
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-gradient">Nabin</span>
                        <br />
                        <span className="text-white">Thakur</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl sm:text-2xl text-gray-400 mb-6 font-light tracking-wide"
                    >
                        Cyber Security Specialist &nbsp;|&nbsp; Ethical Hacker &nbsp;|&nbsp; Tech Enthusiast
                    </motion.p>

                    {/* Typewriter */}
                    <motion.div
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl font-bold text-transparent mb-10"
                        style={{ background: 'linear-gradient(90deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        <TypeWriter words={[
                            'Securing digital infrastructure',
                            'Ethical hacking & penetration testing',
                            'Protecting systems from threats',
                            'Turning vulnerabilities into strength',
                        ]} />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="projects" smooth duration={700} offset={-70}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-xl text-white font-bold text-base w-48"
                                style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
                                id="view-projects-btn"
                            >
                                View Projects
                            </motion.button>
                        </Link>
                        <Link to="contact" smooth duration={600} offset={-70}>
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: '#a855f7', backgroundColor: 'rgba(168,85,247,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-xl text-white font-bold text-base w-48 border border-white/20 backdrop-blur-sm"
                                id="contact-me-btn"
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 flex flex-wrap justify-center gap-8"
                    >
                        {[
                            { label: 'Projects Built', value: '10+' },
                            { label: 'Technologies', value: '8+' },
                            { label: 'Cups of Coffee', value: '∞' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-black text-gradient">{stat.value}</div>
                                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <p className="text-gray-500 text-xs tracking-widest uppercase">Scroll</p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FiArrowDown className="text-purple-400" size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
