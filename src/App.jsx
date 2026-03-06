import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { CustomCursor, LoadingScreen, ScrollProgress } from './components/GlobalComponents';
import LiquidEther from './components/LiquidEther';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent body scroll during loading
    if (loading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <div className="relative bg-dark-900 min-h-screen">
      {/* Liquid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          isViscous
          autoDemo
        />
      </div>

      {/* Custom cursor (hidden on touch devices via CSS) */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Loading overlay */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Sticky navbar */}
            <Navbar />

            {/* Page sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
