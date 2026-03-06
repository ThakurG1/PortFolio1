import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram,
} from 'react-icons/fi';

const socialLinks = [
    {
        icon: FiGithub,
        label: 'GitHub',
        href: 'https://github.com/ThakurG1?tab=repositories',
        color: '#fff',
        bgColor: 'rgba(255,255,255,0.1)',
    },
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/nabinthakur',
        color: '#0A66C2',
        bgColor: 'rgba(10,102,194,0.15)',
    },
    {
        icon: FiInstagram,
        label: 'Instagram',
        href: 'https://instagram.com/nabinthakur',
        color: '#E1306C',
        bgColor: 'rgba(225,48,108,0.15)',
    },
    {
        icon: FiMail,
        label: 'Email',
        href: 'mailto:thakutnabin.adtu@gmail.com',
        color: '#a855f7',
        bgColor: 'rgba(168,85,247,0.15)',
    },
];

const inputClass = `
  w-full px-4 py-3 rounded-xl 
  bg-white/5 border border-white/10 
  text-white placeholder-gray-500 
  transition-all duration-300
  focus:outline-none focus:border-purple-500 focus:bg-white/8
  input-glow
`;

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        // Simulate sending
        await new Promise(r => setTimeout(r, 1800));
        setSending(false);
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 border border-purple-500/30 mb-4"
                    >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        Get In Touch
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        Contact <span className="text-gradient">Me</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle mt-4"
                    >
                        Got a project in mind? Let's build something amazing together!
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left: Info */}
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-white mb-4">Let's Talk 👋</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm always open to discussing new opportunities, interesting projects,
                                or just chatting about technology. Feel free to reach out!
                            </p>
                        </motion.div>

                        {/* Contact info */}
                        {[
                            { icon: FiMail, label: 'Email', value: 'thakutnabin.adtu@gmail.com', href: 'mailto:thakutnabin.adtu@gmail.com' },
                            { icon: FiMapPin, label: 'Location', value: 'Nepal 🇳🇵', href: null },
                        ].map((item) => (
                            <motion.div key={item.label} variants={itemVariants}>
                                <a href={item.href || '#'} className="flex items-center gap-4 glass-card border border-white/10 p-4 rounded-xl hover:border-purple-500/40 transition-all group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}>
                                        <item.icon size={18} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs">{item.label}</div>
                                        <div className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">{item.value}</div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}

                        {/* Social links */}
                        <motion.div variants={itemVariants}>
                            <p className="text-gray-500 text-sm mb-3">Connect with me:</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={social.label}
                                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300"
                                        style={{ background: social.bgColor }}
                                        id={`social-${social.label.toLowerCase()}`}
                                    >
                                        <social.icon size={18} style={{ color: social.color }} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability card */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-card border border-green-500/20 p-4 rounded-xl"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-green-400 font-semibold text-sm">Available for Work</span>
                            </div>
                            <p className="text-gray-400 text-xs">Currently open to freelance projects and full-time opportunities.</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card border border-white/10 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                            {sent && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-4 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-2"
                                >
                                    ✅ Message sent! I'll get back to you soon.
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                        <label className="block text-gray-400 text-sm mb-2">Name *</label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className={inputClass}
                                        />
                                    </motion.div>
                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                        <label className="block text-gray-400 text-sm mb-2">Email *</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className={inputClass}
                                        />
                                    </motion.div>
                                </div>

                                <motion.div whileFocus={{ scale: 1.01 }}>
                                    <label className="block text-gray-400 text-sm mb-2">Subject *</label>
                                    <input
                                        id="contact-subject"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project inquiry, collaboration, etc."
                                        className={inputClass}
                                    />
                                </motion.div>

                                <motion.div whileFocus={{ scale: 1.01 }}>
                                    <label className="block text-gray-400 text-sm mb-2">Message *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project or idea..."
                                        className={`${inputClass} resize-none`}
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={sending}
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70"
                                    style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
                                    id="send-message-btn"
                                >
                                    {sending ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
