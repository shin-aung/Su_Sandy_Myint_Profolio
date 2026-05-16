import { useRef, useEffect } from 'react';
import { Briefcase, MapPin, Calendar, Globe, Code, Smartphone, Search, Users } from 'lucide-react';
import { profile } from '../data/profile';

const responsibilityIcons = [Globe, Code, Smartphone, Users, Search];

export default function WorkExperience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [titleRef.current, cardRef.current].forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  const { workExperience: w } = profile;

  return (
    <section id="experience" className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-12 text-center">
          <span className="font-body text-rose text-sm font-medium tracking-widest uppercase">Professional Background</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            Work <span className="section-line">Experience</span>
          </h2>
        </div>

        <div ref={cardRef} className="reveal bg-white rounded-3xl p-7 md:p-9 shadow-card border border-peach/40 card-lift">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7 pb-7 border-b border-peach/40">
            {/* Company badge */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-peach/70 to-rose/20 flex items-center justify-center shadow-sm flex-shrink-0">
              <Briefcase size={24} className="text-rose" />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-dark">{w.title}</h3>
              <p className="font-body text-base font-semibold text-rose mt-0.5">{w.company}</p>

              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-1.5 font-body text-sm text-dark/55">
                  <MapPin size={13} className="text-olive" />
                  {w.location}
                </span>
                <span className="flex items-center gap-1.5 font-body text-sm text-dark/55">
                  <Calendar size={13} className="text-rose" />
                  {w.period}
                </span>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <h4 className="font-body text-sm font-semibold text-dark/50 uppercase tracking-wider mb-4">
            Key Responsibilities
          </h4>
          <ul className="space-y-3 list-none mb-7">
            {w.responsibilities.map((resp, i) => {
              const Icon = responsibilityIcons[i % responsibilityIcons.length];
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-peach/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={13} className="text-rose" />
                  </div>
                  <span className="font-body text-sm text-dark/75 leading-snug">{resp}</span>
                </li>
              );
            })}
          </ul>

          {/* Summary quote */}
          <div className="bg-gradient-to-r from-peach/30 to-cream rounded-2xl px-5 py-4 border-l-4 border-rose/50">
            <p className="font-display italic text-brown/80 text-base leading-relaxed">
              "{w.summary}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
