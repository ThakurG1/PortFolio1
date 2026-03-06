import { motion, useScroll, useSpring } from 'framer-motion';
import { useMousePosition } from '../hooks/useAnimations';
import { useEffect, useState } from 'react';

// Scroll Progress Bar
export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <motion.div
            className="scroll-progress"
            style={{ scaleX }}
        />
    );
};

// Animated Custom Cursor
export const CustomCursor = () => {
    const mousePos = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const interactables = document.querySelectorAll('a, button, .cursor-pointer, input, textarea');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            const els = document.querySelectorAll('a, button, .cursor-pointer, input, textarea');
            els.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{ left: mousePos.x, top: mousePos.y }}
                transition={{ type: 'tween', duration: 0 }}
            />
            <motion.div
                className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
                animate={{ left: mousePos.x, top: mousePos.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </>
    );
};

// Loading Screen / Startup Page
export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!started) return;

        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setDone(true);
                        onComplete?.();
                    }, 400);
                    return 100;
                }
                return p + Math.random() * 15 + 5;
            });
        }, 80);
        return () => clearInterval(interval);
    }, [started, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
            animate={done ? { opacity: 0, scale: 1.1 } : {}}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ pointerEvents: done ? 'none' : 'all' }}
        >
            {/* Background orbs */}
            <div className="orb w-96 h-96 bg-[#0f0]/10 top-0 left-0" />
            <div className="orb w-80 h-80 bg-[#0f0]/10 bottom-0 right-0" />

            <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Logo / initials */}
                <motion.div
                    className="w-24 h-24 mx-auto mb-8 rounded-2xl glass-card flex items-center justify-center border border-[#0f0]/30"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ background: 'rgba(0, 255, 0, 0.05)' }}
                >
                    <span className="text-3xl font-black text-[#0f0]">NT</span>
                </motion.div>

                <h1 className="text-2xl font-bold text-white mb-2">System Initialized</h1>
                <p className="text-gray-400 text-sm mb-8">
                    {!started ? 'Awaiting user verification...' : (progress < 100 ? 'Decrypting files...' : 'Access Granted.')}
                </p>

                {!started ? (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,0,0.4)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setStarted(true)}
                        className="px-8 py-3 rounded-xl border border-[#0f0] text-[#0f0] font-bold tracking-widest uppercase hover:bg-[#0f0]/10 transition-all cursor-pointer"
                    >
                        Proceed To System
                    </motion.button>
                ) : (
                    <>
                        {/* Battery Container */}
                        <div className="flex items-center justify-center gap-1 mx-auto mt-4">
                            <div className="relative flex gap-1 p-1 pr-2 border-2 border-[#0f0]/30 rounded-lg bg-black box-content h-6 w-52 items-center">
                                {/* Battery Cells */}
                                {[...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="h-full flex-1 rounded-sm"
                                        style={{ background: '#0f0' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: progress >= (i + 1) * 10 ? 1 : 0.1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                ))}
                            </div>
                            {/* Battery Nub */}
                            <div className="w-1.5 h-3 bg-[#0f0]/30 rounded-r-sm" />
                        </div>
                        <p className="text-[#0f0]/60 text-xs mt-3">{Math.min(Math.round(progress), 100)}%</p>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};
