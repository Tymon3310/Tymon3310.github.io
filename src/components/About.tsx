import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Wifi, Cpu, HardDrive, Terminal } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const techItems = [
  { icon: Terminal, label: 'Arch Linux', sub: 'Daily Driver' },
  { icon: Server, label: 'Proxmox', sub: 'HA & HomeAssistant' },
  { icon: Wifi, label: 'Chateau Pro ax', sub: 'MikroTik Networking' },
  { icon: Cpu, label: 'Hyprland', sub: 'WM / DE' },
  { icon: HardDrive, label: 'Bambu P1S', sub: 'AMS 2 Pro Printing' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{ position: 'relative', padding: '128px 24px', background: '#080f1c', overflow: 'hidden' }}
    >
      {/* BG accent */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(56,189,248,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1152px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="section-label"
          style={{ marginBottom: '64px' }}
        >
          <span>About Me</span>
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.15, color: '#e2e8f0' }}>
              Code, servers,{' '}
              <span className="gradient-text-blue">and hardware.</span>
            </h2>

            <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#94a3b8' }}>
              <p>
                I am an <strong style={{ color: '#e2e8f0' }}>IT student and developer</strong> passionate about{' '}
                <span style={{ color: '#38bdf8' }}>open-source</span>, system administration, and networking.
              </p>
              <br />
              <p>
                My daily driver is <strong style={{ color: '#e2e8f0' }}>Arch Linux with Hyprland</strong> running on an{' '}
                <span style={{ color: '#e2e8f0' }}>AMD Ryzen 9 5950X, 96GB RAM, and RX 6800XT</span>. 
                When I'm not writing code, I'm usually managing my{' '}
                <span style={{ color: '#38bdf8' }}>MikroTik Chateau Pro ax</span>, or overseeing my{' '}
                <span style={{ color: '#38bdf8' }}>Proxmox cluster</span>—notably running <strong style={{ color: '#e2e8f0' }}>HomeAssistant</strong> with various custom <span style={{ color: '#38bdf8' }}>ESP modules</span>. 
                I also run high-precision prints on my{' '}
                <strong style={{ color: '#e2e8f0' }}>Bambu P1S with AMS 2 Pro</strong>.
              </p>
            </div>

            {/* Status bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 16px', borderRadius: '10px',
              background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.15)',
            }}>
              <div className="pulse-dot" />
              <span className="mono" style={{ fontSize: '13px', color: '#94a3b8' }}>
                <span style={{ color: '#38bdf8' }}>status</span>: Open to collaborations &amp; cool projects
              </span>
            </div>
          </motion.div>

          {/* Right: Tech grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            {techItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: EASE }}
                className="card-glow"
                style={{
                  borderRadius: '14px', padding: '20px',
                  gridColumn: i === techItems.length - 1 && techItems.length % 2 !== 0 ? 'span 2' : 'span 1',
                }}
              >
                <item.icon size={22} style={{ color: '#38bdf8', marginBottom: '12px' }} />
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#e2e8f0' }}>{item.label}</div>
                <div className="mono" style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
