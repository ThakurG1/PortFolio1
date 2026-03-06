import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        id: 1,
        title: 'Neon Tic Tac Toe',
        description: 'Neon Tic Tac Toe is an interactive browser-based game with a glowing neon-themed UI. Players can compete in a classic tic-tac-toe game with real-time win detection and game reset functionality. The project focuses on JavaScript logic implementation and modern UI styling.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        color: '#a855f7',
        emoji: '❌⭕',
        github: 'https://github.com/ThakurG1?tab=repositories',
        live: 'https://thakurg1.github.io/Neon-Tic-Tac-Toe/',
        category: 'Full Stack',
    },
    {
        id: 2,
        title: 'QR Code Generator',
        description: 'QR Code Generator is a web application that allows users to generate QR codes instantly by entering text or URLs. The application converts the input into a scannable QR code using a QR API/library and displays it dynamically on the webpage.',
        tech: ['HTML', 'CSS', 'JavaScript', 'QR Code API'],
        color: '#3b82f6',
        emoji: '📱',
        github: 'https://github.com/ThakurG1?tab=repositories',
        live: 'https://thakurg1.github.io/QR-Code-Gen/',
        category: 'Frontend',
    },
    {
        id: 3,
        title: 'Firebase Auth App',
        description: 'A full-featured authentication application using Firebase with Google sign-in, email/password auth, protected routes, and user profile management.',
        tech: ['React', 'Firebase', 'Tailwind CSS', 'React Router'],
        color: '#06b6d4',
        emoji: '🔐',
        github: 'https://github.com/ThakurG1?tab=repositories',
        live: '#',
        category: 'Full Stack',
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'A real-time weather dashboard with location-based forecasts, beautiful UI with weather animations, and 7-day forecast using OpenWeatherMap API.',
        tech: ['JavaScript', 'REST API', 'CSS3', 'HTML5'],
        color: '#f59e0b',
        emoji: '🌤️',
        github: 'https://github.com/ThakurG1?tab=repositories',
        live: '#',
        category: 'Frontend',
    },
    {
        id: 5,
        title: 'Task Management App',
        description: 'A Kanban-style task management application with drag-and-drop functionality, real-time collaboration, and Firebase backend for data persistence.',
        tech: ['React', 'Firebase', 'DnD Kit', 'Tailwind CSS'],
        color: '#10b981',
        emoji: '✅',
        github: 'https://github.com/ThakurG1?tab=repositories',
        live: '#',
        category: 'Full Stack',
    },
    {
        id: 6,
        title: 'E-Commerce UI',
        description: 'A modern e-commerce product page UI with product galleries, cart functionality, animations, and a clean checkout flow built with React.',
        tech: ['React', 'CSS Modules', 'JavaScript', 'Git'],
        color: '#ec4899',
        emoji: '🛍️',
        github: 'https://github.com/ThakurG1?tab=repositories',
        live: '#',
        category: 'Frontend',
    },
];

const ProjectCard = ({ project, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: (index % 3) * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: `0 20px 40px -10px ${project.color}80`,
                borderColor: `${project.color}60`
            }}
            className="relative glass-card border border-white/10 rounded-2xl overflow-hidden group transition-all duration-500"
            style={{ '--accent-color': project.color }}
            id={`project-card-${project.id}`}
        >
            {/* Continuous Pulse Glow */}
            <motion.div
                animate={{
                    boxShadow: [`inset 0 0 0px ${project.color}00`, `inset 0 0 20px ${project.color}40`, `inset 0 0 0px ${project.color}00`]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
            />

            {/* Image / Preview area */}
            <div className="relative h-48 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)` }}>
                {/* Grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                    <span className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}>
                        {project.category}
                    </span>
                </div>

                {/* Emoji / Icon */}
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                >
                    {project.emoji}
                </motion.div>

                {/* Hover overlay with links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium transition-all hover:bg-white/20"
                        >
                            <FiGithub size={16} /> GitHub
                        </motion.button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium"
                            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}88)` }}
                        >
                            <FiExternalLink size={16} /> Live Demo
                        </motion.button>
                    </a>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-lg font-medium"
                            style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 border border-purple-500/30 mb-4"
                    >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        My Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle mt-4"
                    >
                        A showcase of my recent work and passion projects
                    </motion.p>
                </div>

                {/* Project grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* View more */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <a href="https://github.com/ThakurG1?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168,85,247,0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-purple-500/40 text-purple-300 font-medium hover:bg-purple-500/10 transition-all"
                            id="view-all-projects-btn"
                        >
                            <FiGithub size={18} />
                            View All On GitHub
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
