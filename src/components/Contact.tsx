import { useRef, useEffect } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
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

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-2xl mx-auto px-5">
        {/* Heading */}
        <div ref={titleRef} className="reveal mb-12 text-center">
          <span className="font-body text-rose text-sm font-medium tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mt-2">
            Let's <span className="section-line">Connect</span>
          </h2>
        </div>

        <div ref={cardRef} className="reveal bg-white rounded-3xl p-8 shadow-card border border-peach/40 text-center card-lift relative">
          {/* Tape */}
          <div className="tape -top-2.5 right-12" />

          {/* Profile mini */}
          <img
            src="/images/sandy-professional.jpg"
            alt="Sandy"
            className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-4 border-3 border-peach/60 shadow-md"
          />

          <h3 className="font-display text-xl font-bold text-dark mb-1">{profile.name}</h3>
          <p className="font-body text-sm text-rose font-medium mb-4">{profile.nickname}</p>

          <p className="font-body text-base text-dark/65 leading-relaxed max-w-md mx-auto mb-8">
            I am open to learning opportunities, OJT experience, and professional development opportunities. Feel free to reach out!
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-rose text-white font-body font-medium text-sm rounded-full hover:bg-brown transition-colors duration-200 shadow-md"
            >
              <Mail size={15} />
              Send Email
            </a>
            <a
              href="https://wa.me/6593600789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-body font-medium text-sm rounded-full hover:bg-[#1da851] transition-colors duration-200 shadow-md"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Contact details */}
          <p className="font-body text-sm text-dark/40 mt-6">
            {profile.email}
          </p>
        </div>
      </div>
    </section>
  );
}
