import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Apple, Server, Keyboard, ArrowUpRight } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const achievements = [
  {
    icon: Keyboard,
    title: 'Wireless Keychron Vial',
    description: 'Engineered one of the first projects to successfully enable full Vial configuration support for wireless Keychron keyboards, revolutionizing their programmability over Bluetooth / wireless.',
    badge: 'Wireless QMK/Vial',
    badgeColor: '#34d399',
    link: 'https://github.com/Tymon3310/keychron-vial',
  },
  {
    icon: Apple,
    title: 'Hackintosh Build',
    description: 'Successfully deployed macOS 26 Tahoe on an AMD Ryzen 9 5950X and RX 6800XT hardware stack — a feat requiring meticulous OpenCore configuration and kernel patching.',
    badge: 'macOS 26 Tahoe',
    badgeColor: '#818cf8',
  },
  {
    icon: Server,
    title: 'Self-Hosted Infrastructure',
    description: 'Built and maintain a multi-node Proxmox setup using an HP thin client and Raspberry Pi 4, running a full suite of self-hosted services including DNS, reverse proxy, and monitoring.',
    badge: 'Proxmox HA',
    badgeColor: '#22d3ee',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="achievements"
      ref={ref}
      style={{ position: 'relative', padding: '128px 24px', background: '#080f1c', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(56,189,248,0.05) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1152px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label"><span>Achievements</span></div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#e2e8f0' }}>
            Notable <span className="gradient-text-blue">Feats</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(56,189,248,0.3) 10%, rgba(56,189,248,0.3) 90%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: EASE }}
                style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
              >
                {/* Timeline icon */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05))',
                  border: '1px solid rgba(56,189,248,0.3)',
                  boxShadow: '0 0 20px rgba(56,189,248,0.1)',
                }}>
                  <a.icon size={20} style={{ color: '#38bdf8' }} />
                </div>

                {/* Card */}
                <div className="card-glow" style={{ position: 'relative', flex: 1, borderRadius: '20px', padding: '24px' }}>
                  {a.link && (
                    <a 
                      href={a.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ position: 'absolute', top: '24px', right: '24px', color: '#64748b', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px', paddingRight: a.link ? '32px' : '0' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#e2e8f0' }}>{a.title}</h3>
                    <span className="badge" style={{
                      background: `${a.badgeColor}15`,
                      border: `1px solid ${a.badgeColor}40`,
                      color: a.badgeColor,
                    }}>{a.badge}</span>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748b' }}>{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
