import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase,
} from 'react-icons/fa';
import { SiFirebase, SiMysql, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 88, category: 'Frontend' },
    { name: 'React', icon: FaReact, color: '#61DAFB', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 88, category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 78, category: 'Backend' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 80, category: 'Database' },
    { name: 'Firebase', icon: SiFirebase, color: '#FF6F00', level: 75, category: 'Database' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85, category: 'Tools' },
];

const SkillCard = ({ skill, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const Icon = skill.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.08)',
                boxShadow: `0 0 30px ${skill.color}33`,
            }}
            className="glass-card border border-white/10 p-6 rounded-2xl cursor-pointer transition-all duration-300 group"
            id={`skill-card-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
        >
            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
            >
                <Icon size={28} style={{ color: skill.color }} />
            </motion.div>

            {/* Name */}
            <h3 className="text-white font-bold text-center mb-1">{skill.name}</h3>
            <p className="text-gray-500 text-xs text-center mb-4">{skill.category}</p>

            {/* Progress bar */}
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.08 + 0.4, ease: 'easeOut' }}
                />
            </div>
            <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 border border-purple-500/30 mb-4"
                    >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        Technical Expertise
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="section-title"
                    >
                        My <span className="text-gradient">Skills</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-subtitle mt-4"
                    >
                        Technologies and tools I work with to bring ideas to life
                    </motion.p>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} />
                    ))}

                    {/* Extra card: Currently Learning */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: skills.length * 0.08 }}
                        className="glass-card border border-dashed border-purple-500/40 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 col-span-2 sm:col-span-1"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            className="text-3xl"
                        >
                            ✨
                        </motion.div>
                        <p className="text-gray-400 text-sm text-center font-medium">Currently<br />Learning More</p>
                        <div className="flex gap-1 flex-wrap justify-center">
                            {['TypeScript', 'Next.js', 'Docker'].map(t => (
                                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
