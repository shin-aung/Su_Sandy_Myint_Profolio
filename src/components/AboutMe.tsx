import { useRef, useEffect } from 'react';
import { profile } from '../data/profile';

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const personalityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [sectionRef.current, cardRef.current, personalityRef.current].filter(Boolean);
    const observers: IntersectionObserver[] = [];

    els.forEach((el) => {
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
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="about" className="py-20 bg-cream" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-5">
        {/* Section heading */}
        <div className="reveal mb-12 text-center" ref={sectionRef as unknown as React.RefObject<HTMLDivElement>}>
          <span className="font-body text-rose text-sm font-medium tracking-widest uppercase">Get to know me</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            About <span className="section-line">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main card */}
          <div
            ref={cardRef}
            className="reveal flex-1 relative bg-white rounded-3xl p-7 shadow-card border border-peach/40 card-lift"
          >
            {/* Tape decoration */}
            <div className="tape -top-2.5 left-8" />

            <div className="flex items-start gap-4 mb-5">
              <img
                src="/images/sandy-professional.jpg"
                alt="Sandy"
                className="w-20 h-20 rounded-2xl object-cover object-top shadow-md border-2 border-peach/60 flex-shrink-0"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-dark">{profile.name}</h3>
                <p className="font-body text-sm text-rose font-medium mt-0.5">{profile.nickname}</p>
                <p className="font-body text-xs text-dark/50 mt-1">Myanmar · Singapore</p>
              </div>
            </div>

            <p className="font-body text-base text-dark/75 leading-relaxed mb-6">
              {profile.fullBio}
            </p>

            {/* Nationality & Education quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'From', value: 'Myanmar 🇲🇲' },
                { label: 'Based in', value: 'Singapore 🇸🇬' },
                { label: 'Degree', value: 'B.Eng (IT)' },
                { label: 'Currently', value: 'PGDip Management' },
              ].map((fact) => (
                <div key={fact.label} className="bg-cream rounded-xl px-3 py-2 border border-peach/30">
                  <p className="font-body text-xs text-dark/40 font-medium">{fact.label}</p>
                  <p className="font-body text-sm text-dark font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personality / traits */}
          <div ref={personalityRef} className="reveal reveal-delay-2 w-full lg:w-72 flex flex-col gap-5">
            {/* Traits card */}
            <div className="bg-white rounded-3xl p-6 shadow-card border border-peach/40 card-lift">
              <div className="tape -top-2.5 right-8" />
              <h4 className="font-display text-lg font-bold text-dark mb-4">About Me ♡</h4>
              <ul className="space-y-2 list-none">
                {profile.personality.map((trait) => (
                  <li key={trait} className="flex items-center gap-2 font-body text-sm text-dark/75">
                    <span className="w-2 h-2 rounded-full bg-rose/60 flex-shrink-0" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            {/* Motto card */}
            <div className="bg-gradient-to-br from-peach/60 to-cream rounded-3xl p-6 shadow-card border border-rose/20 text-center card-lift">
              <p className="font-display italic text-brown text-lg leading-snug">
                "{profile.motto}"
              </p>
              <p className="font-body text-xs text-dark/40 mt-3">— Sandy's Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
