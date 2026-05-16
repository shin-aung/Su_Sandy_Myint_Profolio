import { useRef, useEffect } from 'react';
import { BookOpen, Briefcase, Code, Star } from 'lucide-react';
import { profile } from '../data/profile';

const goalIcons = [BookOpen, Briefcase, Code, Star];
const goalColors = [
  { bg: 'bg-peach/50', border: 'border-rose/25', dot: 'bg-rose', text: 'text-rose' },
  { bg: 'bg-olive/10', border: 'border-olive/25', dot: 'bg-olive', text: 'text-olive' },
  { bg: 'bg-brown/10', border: 'border-brown/20', dot: 'bg-brown', text: 'text-brown' },
  { bg: 'bg-rose/10', border: 'border-rose/20', dot: 'bg-rose', text: 'text-rose' },
];

export default function Goals() {
  const titleRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const objectiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allEls: (HTMLElement | null)[] = [
      titleRef.current,
      ...stepRefs.current,
      objectiveRef.current,
    ];

    allEls.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <section id="goals" className="py-20 bg-[#FEF3E9]">
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-12 text-center">
          <span className="font-body text-olive text-sm font-medium tracking-widest uppercase">Looking Ahead</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            My <span className="section-line">Goals</span>
          </h2>
        </div>

        {/* Roadmap grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.goals.map((goal, i) => {
            const Icon = goalIcons[i % goalIcons.length];
            const c = goalColors[i % goalColors.length];

            return (
              <div
                key={goal}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`reveal relative bg-white rounded-2xl p-5 shadow-card border ${c.border} card-lift text-center`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Step number */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full ${c.dot} flex items-center justify-center shadow text-white text-xs font-bold font-body`}>
                  {i + 1}
                </div>

                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-3 mt-2`}>
                  <Icon size={20} className={c.text} />
                </div>

                <p className="font-body text-sm font-semibold text-dark/80 leading-snug">{goal}</p>

                {/* Connector arrow between cards (not last) */}
                {i < profile.goals.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-peach-dark text-lg z-10">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Career objective */}
        <div ref={objectiveRef} className="reveal mt-10 bg-white rounded-3xl p-7 shadow-card border border-peach/40 text-center relative">
          <div className="tape -top-2.5 left-1/2 -translate-x-1/2" />
          <p className="font-display text-lg italic text-brown leading-relaxed max-w-xl mx-auto">
            "My goal is to develop my professional skills in management and technology while gaining valuable work experience. I hope to contribute my knowledge and skills to an organisation and grow in my career."
          </p>
          <p className="font-body text-xs text-dark/40 mt-4">— Su Sandy Myint, Career Objective</p>
        </div>
      </div>
    </section>
  );
}
