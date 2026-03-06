import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward, FiBriefcase } from 'react-icons/fi';

const timeline = [
    {
        year: '2024 – Present',
        type: 'education',
        icon: FiBookOpen,
        color: '#a855f7',
        title: 'B.Tech in Computer Science',
        org: 'Assam Down Town University (ADTU)',
        description: 'Pursuing Bachelor of Technology in Computer Science & Engineering. Specializing in Full Stack Web Development and modern software engineering practices.',
        tags: ['CGPA: 8.5+', 'CSE Branch'],
    },
    {
        year: '2024',
        type: 'certification',
        icon: FiAward,
        color: '#3b82f6',
        title: 'Full Stack Web Development',
        org: 'Online Certification',
        description: 'Completed comprehensive full stack development bootcamp covering React, Node.js, Express, databases, and deployment strategies.',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        year: '2023',
        type: 'project',
        icon: FiBriefcase,
        color: '#06b6d4',
        title: 'ADTU Scheduling System',
        org: 'University Project',
        description: 'Led development of an automated scheduling system for ADTU. Reduced manual scheduling time by 70% and eliminated time conflicts across departments.',
        tags: ['React', 'MySQL', 'Node.js'],
    },
    {
        year: '2023',
        type: 'certification',
        icon: FiAward,
        color: '#10b981',
        title: 'React & Modern JavaScript',
        org: 'Udemy / freeCodeCamp',
        description: 'Advanced React patterns, hooks, context API, Redux, and modern ES6+ JavaScript fundamentals with hands-on project experience.',
        tags: ['React Hooks', 'Redux', 'ES6+'],
    },
    {
        year: '2022',
        type: 'education',
        icon: FiBookOpen,
        color: '#f59e0b',
        title: 'Higher Secondary Education',
        org: 'Science Stream – Class XII',
        description: 'Completed higher secondary education with Science stream (PCM). Developed foundational programming skills and passion for technology.',
        tags: ['Science', 'Mathematics', '85%+'],
    },
    {
        year: '2022',
        type: 'achievement',
        icon: FiAward,
        color: '#ec4899',
        title: 'Web Development Enthusiast',
        org: 'Self Learning',
        description: 'Started the web development journey with HTML, CSS, and JavaScript. Built first projects including a portfolio site and calculator app.',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
];

const typeLabels = {
    education: 'Education',
    certification: 'Certification',
    project: 'Project',
    achievement: 'Achievement',
};

const TimelineItem = ({ item, index, isLast }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const Icon = item.icon;
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className="relative flex items-start gap-4 md:gap-0">
            {/* Desktop: left side */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`hidden md:flex md:w-1/2 ${isLeft ? 'md:pr-12 md:justify-end' : 'md:pr-0'}`}
            >
                {isLeft && (
                    <TimelineCard item={item} Icon={Icon} typeLabels={typeLabels} />
                )}
            </motion.div>

            {/* Center dot */}
            <div className="relative flex flex-col items-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: `${item.color}20`, border: `2px solid ${item.color}60` }}
                >
                    <Icon size={20} style={{ color: item.color }} />
                </motion.div>
                {!isLast && <div className="timeline-line w-0.5 flex-1 min-h-[60px] md:min-h-[80px]" />}
            </div>

            {/* Desktop: right side */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`hidden md:flex md:w-1/2 ${!isLeft ? 'md:pl-12 md:justify-start' : ''}`}
            >
                {!isLeft && (
                    <TimelineCard item={item} Icon={Icon} typeLabels={typeLabels} />
                )}
            </motion.div>

            {/* Mobile: always right card */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="flex-1 pb-8 md:hidden"
            >
                <TimelineCard item={item} Icon={Icon} typeLabels={typeLabels} />
            </motion.div>
        </div>
    );
};

const TimelineCard = ({ item, typeLabels }) => (
    <div className="glass-card border border-white/10 p-5 rounded-2xl max-w-xs w-full hover:border-white/20 transition-all duration-300 group"
        style={{ '--c': item.color }}>
        <div className="flex items-center justify-between mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>
                {typeLabels[item.type]}
            </span>
            <span className="text-gray-500 text-xs font-mono">{item.year}</span>
        </div>
        <h3 className="text-white font-bold mb-1 group-hover:text-gradient transition-all">{item.title}</h3>
        <p className="text-sm mb-3" style={{ color: item.color }}>{item.org}</p>
        <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-1">
            {item.tags.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-lg bg-white/5 text-gray-400">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

const Experience = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="experience" className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 border border-purple-500/30 mb-4"
                    >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        Journey
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        Education & <span className="text-gradient">Experience</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle mt-4"
                    >
                        My academic journey, certifications, and key milestones
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line (desktop only) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
                        style={{ background: 'linear-gradient(to bottom, #a855f7, #3b82f6, #06b6d4)' }} />

                    <div className="space-y-0">
                        {timeline.map((item, i) => (
                            <TimelineItem key={i} item={item} index={i} isLast={i === timeline.length - 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
