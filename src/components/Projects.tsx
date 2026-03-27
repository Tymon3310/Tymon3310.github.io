import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Bot, House, ArrowUpRight, MonitorPlay } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Project {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    icon: Package,
    title: 'Prefixer',
    description: 'Contributed tweaks and improvements to Prefixer, enhancing the functionality and usability of the application.',
    tags: ['AUR', 'Packaging', 'Linux'],
    link: 'https://github.com/wojtmic/prefixer',
  },
  {
    icon: Package,
    title: 'AUR Package Maintainer',
    description: 'Actively maintain several packages in the Arch User Repository (AUR), including vial-keychron, pipette-desktop, prefixer, and vortex.',
    tags: ['Arch Linux', 'PKGBUILD', 'AUR', 'Shell'],
    link: 'https://aur.archlinux.org/packages?K=Tymon3310&SeB=m',
  },
  {
    icon: Bot,
    title: 'Compot Discord Bot',
    description: 'Contributed to the frontend web dashboard and website for the Compot Discord bot. Built interactive UI components and improved the overall UX.',
    tags: ['TypeScript', 'React', 'Frontend', 'Discord'],
    link: 'https://compot.wojtmic.dev',
  },
  {
    icon: House,
    title: 'Smart Home Infrastructure',
    description: 'Custom bash scripts and IFTTT automations integrated with a dedicated Home Assistant server. Automated lighting, climate, and device management.',
    tags: ['Home Assistant', 'Bash', 'IFTTT', 'IoT'],
  },
  {
    icon: MonitorPlay,
    title: 'Hyprland Dotfiles',
    description: 'Personal dotfiles for my Arch Linux Hyprland setup. Includes custom Waybar styling, heavily customized Neovim configuration, and terminal setups.',
    tags: ['Arch', 'Hyprland', 'Lua', 'Bash'],
    link: 'https://github.com/Tymon3310/dotfiles',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="grid-bg"
      style={{ position: 'relative', padding: '128px 24px', background: '#050B14' }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label"><span>Projects</span></div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#e2e8f0' }}>
            Things I've <span className="gradient-text-blue">Built & Maintained</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: EASE }}
              className="card-glow"
              style={{ borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Icon row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div className="icon-box">
                  <project.icon size={22} style={{ color: '#38bdf8' }} />
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#38bdf8', opacity: 0.6, transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748b' }}>{project.description}</p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
