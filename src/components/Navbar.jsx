import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pointer-events-none ${scrolled
                    ? 'py-4'
                    : 'py-6 px-4'
                    }`}
            >
                <div className={`w-full transition-all duration-500 flex items-center justify-between pointer-events-auto ${scrolled
                    ? 'max-w-4xl bg-black/50 backdrop-blur-lg rounded-full px-6 py-3 shadow-[0_0_30px_rgba(168,85,247,0.15)] mx-4'
                    : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent'
                    }`}>
                    {/* Logo */}
                    <Link to="hero" smooth duration={600} className="cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm"
                                style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}>
                                NT
                            </div>
                            <span className="font-bold text-white text-lg hidden sm:block">Nabin Thakur</span>
                        </motion.div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth
                                duration={600}
                                offset={-70}
                                spy
                                onSetActive={() => setActiveSection(link.to)}
                                className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10"
                                activeClass="text-white bg-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="contact" smooth duration={600} offset={-70} className="cursor-pointer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold"
                                style={{ boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
                            >
                                Initiate Contact
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        id="mobile-menu-btn"
                    >
                        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-dark-800/95 backdrop-blur-xl border-b border-white/10 md:hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={600}
                                        offset={-70}
                                        onClick={() => setMobileOpen(false)}
                                        className="cursor-pointer block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.07 }}
                                className="mt-2 pt-2 border-t border-white/10"
                            >
                                <Link
                                    to="contact"
                                    smooth
                                    duration={600}
                                    offset={-70}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">
                                        Initiate Contact
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
