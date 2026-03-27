import { motion } from 'framer-motion';
import { Terminal, ChevronDown } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const floatVariant = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(56,189,248,0.3)',
      '0 0 50px rgba(56,189,248,0.6)',
      '0 0 20px rgba(56,189,248,0.3)',
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050B14',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(56,189,248,0.08) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '384px', height: '384px', pointerEvents: 'none',
        background: 'radial-gradient(circle at top right, rgba(34,211,238,0.12) 0%, transparent 60%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        gap: '64px', padding: '0 24px', maxWidth: '1152px', width: '100%', margin: '0 auto',
        flexWrap: 'wrap',
      }}>
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px', flex: '1 1 320px' }}
        >
          {/* Terminal badge */}
          <motion.div variants={slideUp} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <span className="mono" style={{ color: '#38bdf8', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              tymon3310 ~ portfolio
            </span>
            <span className="blink-cursor" />
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={slideUp} style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Hi, I'm{' '}
            <span className="gradient-text">Tymon</span>
          </motion.h1>

          {/* Handle */}
          <motion.div variants={slideUp}>
            <span className="mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 700, color: 'rgba(56,189,248,0.7)' }}>
              @Tymon3310
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={slideUp} style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#94a3b8', fontWeight: 300, lineHeight: 1.7 }}>
            <span style={{ color: '#e2e8f0' }}>Programmer</span>
            <span style={{ color: '#38bdf8', margin: '0 8px' }}>/</span>
            <span style={{ color: '#e2e8f0' }}>Open-Source Contributor</span>
            <span style={{ color: '#38bdf8', margin: '0 8px' }}>/</span>
            <span style={{ color: '#e2e8f0' }}>Homelab Enthusiast</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={slideUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#about" className="btn-secondary">About Me</a>
          </motion.div>
        </motion.div>

        {/* Right: Floating avatar */}
        <motion.div variants={floatVariant} animate="animate" style={{ flexShrink: 0 }}>
          <motion.div
            variants={glowPulse}
            animate="animate"
            style={{
              width: '256px', height: '256px', borderRadius: '20px',
              background: 'linear-gradient(135deg, #0a1628, #0f172a)',
              border: '1px solid rgba(56,189,248,0.3)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Dot pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.6) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.3,
            }} />
            {/* Avatar Image */}
            <div style={{
              position: 'absolute', inset: 3, borderRadius: '17px',
              overflow: 'hidden', background: '#0a1628',
            }}>
              <img
                src="/avatar.jpg"
                alt="Tymon3310 Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, mixBlendMode: 'luminosity' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(56,189,248,0.2) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />
            </div>
            {/* Status dot */}
            <div className="pulse-dot" style={{ position: 'absolute', top: '12px', right: '12px' }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
      >
        <span className="mono" style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(56,189,248,0.4)' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} style={{ color: 'rgba(56,189,248,0.5)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
