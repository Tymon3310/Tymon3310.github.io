import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Gamepad2 } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const plans = [
  {
    icon: Code2,
    title: 'Master Python & C#',
    description: 'Deep-dive into Python for automation, scripting, and AI tooling, and C# for game and application development.',
    num: '01',
  },
  {
    icon: Server,
    title: 'NixOS Deep Dive',
    description: 'Fully transition server infrastructure to NixOS to leverage declarative configuration and reproducible builds for the entire homelab.',
    num: '02',
  },
  {
    icon: Gamepad2,
    title: 'Indie Game',
    description: 'Build an indie game from scratch. The full pipeline — game design, engine, sound, and art. No shortcuts.',
    num: '03',
  },
];

export default function FuturePlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="future"
      ref={ref}
      style={{ position: 'relative', padding: '128px 24px', background: '#050B14', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(56,189,248,0.07) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1152px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label"><span>Future Plans</span></div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#e2e8f0' }}>
            What's <span className="gradient-text-blue">Next</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: EASE }}
              className="card-glow"
              style={{ borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Watermark number */}
              <span style={{
                position: 'absolute', top: '-16px', right: '-8px',
                fontSize: '8rem', fontWeight: 900, lineHeight: 1,
                color: 'rgba(56,189,248,0.04)', userSelect: 'none', pointerEvents: 'none',
              }}>{plan.num}</span>

              <div className="icon-box">
                <plan.icon size={22} style={{ color: '#38bdf8' }} />
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#e2e8f0' }}>{plan.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748b' }}>{plan.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
