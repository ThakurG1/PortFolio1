import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ThakurG1?tab=repositories', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/nabinthakur', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://instagram.com/nabinthakur', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:thakutnabin.adtu@gmail.com', label: 'Email' },
];

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' },
];

const Footer = () => {
    return (
        <footer className="relative py-12 border-t border-white/5 overflow-hidden bg-black">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black"
                                style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}>
                                NT
                            </div>
                            <span className="text-white font-bold text-lg">Nabin Thakur</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            A passionate web developer building modern, scalable, and beautiful
                            digital experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth
                                    duration={600}
                                    offset={-70}
                                    className="text-gray-500 text-sm hover:text-purple-300 transition-colors cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
                        <div className="flex gap-3 mb-4">
                            {socialLinks.map(social => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={social.label}
                                    className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
                                    id={`footer-social-${social.label.toLowerCase()}`}
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-gray-600 text-xs">thakutnabin.adtu@gmail.com</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1.5">
                        © 2024 Nabin Thakur. Made with{' '}
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <FiHeart className="text-red-500 inline" size={14} />
                        </motion.span>{' '}
                        & React
                    </p>

                    {/* Back to top */}
                    <Link to="hero" smooth duration={700}>
                        <motion.button
                            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-500/10 transition-all cursor-pointer"
                            id="back-to-top-btn"
                        >
                            <FiArrowUp size={16} />
                            Back to Top
                        </motion.button>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
