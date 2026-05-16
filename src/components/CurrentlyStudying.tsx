import { useRef, useEffect } from 'react';
import { Briefcase, BarChart2, MessageSquare, Users } from 'lucide-react';
import { profile } from '../data/profile';

const icons = [Briefcase, BarChart2, MessageSquare, Users];
const colors = [
  'from-rose/20 to-peach/30 border-rose/25',
  'from-olive/15 to-[#E5EDD8]/50 border-olive/25',
  'from-brown/10 to-[#E8D5C4]/40 border-brown/20',
  'from-peach/40 to-cream border-peach/40',
];
const iconColors = ['text-rose', 'text-olive', 'text-brown', 'text-rose'];

export default function CurrentlyStudying() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    [titleRef.current, ...cardRefs.current].forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 80);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <section id="studying" className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-4 text-center">
          <span className="font-body text-rose text-sm font-medium tracking-widest uppercase">AceTek College, Singapore</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            Currently <span className="section-line">Studying</span>
          </h2>
        </div>

        <p className="reveal text-center font-body text-base text-dark/60 max-w-xl mx-auto mb-12 leading-relaxed">
          {profile.studyDescription}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.currentlyStudying.map((item, i) => {
            const Icon = icons[i % icons.length];
            const colorClass = colors[i % colors.length];
            const iconColor = iconColors[i % iconColors.length];

            return (
              <div
                key={item.subject}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`reveal bg-gradient-to-br ${colorClass} rounded-2xl p-6 border shadow-card card-lift`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={18} className={iconColor} />
                </div>
                <h4 className="font-display text-base font-bold text-dark mb-1.5">{item.subject}</h4>
                <p className="font-body text-xs text-dark/55 leading-snug">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
