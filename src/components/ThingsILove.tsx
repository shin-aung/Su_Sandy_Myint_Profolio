import { useRef, useEffect } from 'react';
import { profile } from '../data/profile';

export default function ThingsILove() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allEls: (HTMLElement | null)[] = [
      titleRef.current,
      ...cardRefs.current,
      noteRef.current,
    ];

    allEls.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <section id="hobbies" className="py-20 bg-[#FEF3E9]">
      <div className="max-w-3xl mx-auto px-5">
        <div ref={titleRef} className="reveal text-center mb-12">
          <span className="font-body text-olive text-sm font-medium tracking-widest uppercase">Outside of Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            Things I <span className="section-line">Love</span> ♡
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {profile.hobbies.map((hobby, i) => (
            <div
              key={hobby.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="reveal bg-white rounded-3xl p-7 shadow-card border border-peach/40 card-lift text-center w-44"
            >
              <div className="text-5xl mb-3 deco-1">{hobby.emoji}</div>
              <p className="font-body text-sm font-semibold text-dark/75">{hobby.name}</p>
            </div>
          ))}
        </div>

        {/* Decorative note */}
        <div
          ref={noteRef}
          className="reveal mt-10 bg-white/60 rounded-2xl px-6 py-4 border border-peach/30 text-center max-w-xs mx-auto"
        >
          <p className="font-display italic text-brown/65 text-sm">
            "A little joy in every day 🌸"
          </p>
        </div>
      </div>
    </section>
  );
}
