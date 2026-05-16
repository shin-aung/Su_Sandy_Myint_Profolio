import { useRef, useEffect } from 'react';
import { profile } from '../data/profile';

const valueColors = [
  'bg-rose/10 border-rose/25 text-rose',
  'bg-olive/10 border-olive/25 text-olive',
  'bg-brown/10 border-brown/20 text-brown',
  'bg-peach/50 border-peach/60 text-rose',
  'bg-[#E5EDD8]/60 border-olive/20 text-olive',
];
const valueIcons = ['🌿', '🤝', '✅', '💛', '🌱'];

export default function Values() {
  const titleRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    [titleRef.current, ...itemRefs.current].forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 90);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <section id="values" className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-12 text-center">
          <span className="font-body text-rose text-sm font-medium tracking-widest uppercase">What I Stand For</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            Values I <span className="section-line">Live By</span> ★
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {profile.values.map((val, i) => {
            const colorClass = valueColors[i % valueColors.length];
            const icon = valueIcons[i % valueIcons.length];

            return (
              <div
                key={val}
                ref={(el) => { itemRefs.current[i] = el; }}
                className={`reveal skill-badge flex items-center gap-2.5 px-5 py-3 rounded-2xl border bg-white shadow-card ${colorClass}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-xl">{icon}</span>
                <span className="font-body font-semibold text-sm">{val}</span>
              </div>
            );
          })}
        </div>

        {/* Sub-quote */}
        <div className="mt-12 bg-gradient-to-r from-peach/40 to-cream rounded-2xl px-7 py-5 border border-rose/20 text-center">
          <p className="font-display italic text-brown text-base">
            "Learning · Growing · Inspiring · Living my best version."
          </p>
        </div>
      </div>
    </section>
  );
}
