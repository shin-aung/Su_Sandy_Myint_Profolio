import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-[#FFF0E4] to-peach/30"
    >
      {/* Decorative background circles */}
      <div className="absolute top-16 right-8 w-72 h-72 rounded-full bg-peach/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-56 h-56 rounded-full bg-olive/10 blur-2xl pointer-events-none" />

      {/* Floating decorations */}
      <span className="deco-1 absolute top-28 left-12 text-2xl select-none pointer-events-none">✦</span>
      <span className="deco-2 absolute top-48 left-1/3 text-lg text-rose/40 select-none pointer-events-none">♡</span>
      <span className="deco-3 absolute bottom-32 right-16 text-xl text-olive/50 select-none pointer-events-none">✿</span>
      <span className="deco-1 absolute bottom-48 left-20 text-sm text-brown/30 select-none pointer-events-none">★</span>
      <span className="deco-2 absolute top-1/3 right-1/4 text-xl text-peach-dark/50 select-none pointer-events-none">❀</span>

      <div className="max-w-5xl mx-auto px-5 pt-20 pb-16 w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 hero-text text-center md:text-left">
          {/* Greeting badge */}
          <span className="inline-block mb-4 px-4 py-1.5 bg-peach/60 text-rose text-sm font-medium rounded-full border border-rose/20">
            Hello, welcome! 👋
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-3">
            I'm{' '}
            <span className="text-rose italic">Su Sandy Myint</span>
          </h1>

          <p className="font-body text-sm md:text-base text-dark/60 font-medium mb-5 leading-relaxed max-w-lg">
            {profile.tagline}
          </p>

          <p className="font-body text-base text-dark/75 mb-8 max-w-lg leading-relaxed">
            {profile.shortBio}
          </p>

          {/* Motto tag */}
          <p className="font-display italic text-brown/70 text-sm mb-8">
            "{profile.motto}"
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="#about" className="hero-btn-1 px-6 py-2.5 bg-rose text-white font-body font-medium text-sm rounded-full hover:bg-brown transition-colors duration-200 shadow-md">
              About Me
            </a>
            <a href="#skills" className="hero-btn-2 px-6 py-2.5 bg-white text-rose font-body font-medium text-sm rounded-full border border-rose/40 hover:bg-peach/40 transition-colors duration-200">
              View Skills
            </a>
            <a href="#contact" className="hero-btn-3 px-6 py-2.5 bg-olive text-white font-body font-medium text-sm rounded-full hover:bg-brown transition-colors duration-200">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 hero-image flex justify-center">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-peach/60 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-6 rounded-full border border-rose/15" />

            {/* Profile photo */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(201,111,99,0.25)]">
              <img
                src="/images/sandy-professional.jpg"
                alt="Su Sandy Myint"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Personality tags */}
            <div className="absolute -right-4 top-8 bg-white rounded-xl px-3 py-1.5 shadow-card text-xs font-body font-medium text-olive border border-olive/20">
              🎓 Currently Studying
            </div>
            <div className="absolute -left-6 bottom-12 bg-white rounded-xl px-3 py-1.5 shadow-card text-xs font-body font-medium text-rose border border-rose/20">
              💼 CMS Developer
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="font-body text-xs text-dark/50">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-rose/60 to-transparent" />
      </div>
    </section>
  );
}
