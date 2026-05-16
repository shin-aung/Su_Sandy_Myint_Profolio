import { useRef, useEffect } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { profile } from '../data/profile';

export default function Education() {
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const allEls: (HTMLElement | null)[] = [titleRef.current, ...cardRefs.current];

    allEls.forEach((el) => {
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

    // Timeline line grows
    if (lineRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            lineRef.current?.classList.add('grow');
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(lineRef.current);
    }
  }, []);

  return (
    <section id="education" className="py-20 bg-[#FEF3E9]">
      <div className="max-w-3xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-14 text-center">
          <span className="font-body text-olive text-sm font-medium tracking-widest uppercase">My Learning Journey</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            <span className="section-line">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-14">
          {/* Animated vertical line */}
          <div className="relative" style={{ minHeight: '160px' }}>
            <div ref={lineRef} className="timeline-line" />
          </div>

          <div className="space-y-8 -mt-10">
            {profile.education.map((edu, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`reveal reveal-delay-${i + 1} relative`}
              >
                {/* Dot on timeline */}
                <div className="absolute -left-14 top-5 w-5 h-5 rounded-full border-2 border-rose bg-white shadow flex items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${edu.current ? 'bg-rose' : 'bg-peach-dark'}`} />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-card border border-peach/40 card-lift">
                  {edu.current && (
                    <span className="inline-block mb-2 px-2.5 py-0.5 bg-rose/10 text-rose text-xs font-medium rounded-full border border-rose/20">
                      Currently Enrolled
                    </span>
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-peach/50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={18} className="text-rose" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark leading-snug">
                        {edu.qualification}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="flex items-center gap-1.5 font-body text-sm text-dark/60">
                      <MapPin size={13} className="text-olive" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-sm text-dark/60">
                      <Calendar size={13} className="text-rose" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
