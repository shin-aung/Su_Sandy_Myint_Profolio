import { useRef, useEffect } from 'react';
import { profile } from '../data/profile';

const groupColors: Record<string, string> = {
  'CMS Platforms':      'bg-rose/10 text-rose border-rose/25',
  'Programming / Web':  'bg-olive/10 text-olive border-olive/25',
  'Web Tools':          'bg-brown/10 text-brown border-brown/25',
  'Database':           'bg-[#E8D5C4]/60 text-brown border-brown/20',
  'Web Quality':        'bg-peach/50 text-rose border-peach/60',
  'Professional Tools': 'bg-[#E5EDD8]/60 text-olive border-olive/20',
};

const groupIcons: Record<string, string> = {
  'CMS Platforms':      '🖥️',
  'Programming / Web':  '💻',
  'Web Tools':          '🔧',
  'Database':           '🗄️',
  'Web Quality':        '🌐',
  'Professional Tools': '📋',
};

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const allEls: (HTMLElement | null)[] = [titleRef.current, ...groupRefs.current];
    allEls.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), idx * 80);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#FEF3E9]">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-12 text-center">
          <span className="font-body text-olive text-sm font-medium tracking-widest uppercase">What I can do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            Technical <span className="section-line">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.skills.map((group, i) => {
            const colorClass = groupColors[group.group] ?? 'bg-peach/40 text-rose border-peach/40';
            const icon = groupIcons[group.group] ?? '📌';

            return (
              <div
                key={group.group}
                ref={(el) => { groupRefs.current[i] = el; }}
                className="reveal bg-white rounded-2xl p-5 shadow-card border border-peach/40 card-lift"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{icon}</span>
                  <h4 className="font-body text-sm font-semibold text-dark/70">{group.group}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge inline-block px-3 py-1 rounded-full text-xs font-body font-medium border cursor-default ${colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
