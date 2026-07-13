const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-end pb-12 pt-20 overflow-hidden">
      <img
        src="/images/IMG-20260712-WA0008.jpg"
        alt="Link Vision Plus CCTV — Premium 4G Solar Camera"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4 text-foreground">
          Link Vision Plus
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-6 font-light">
          Premium 4G Solar CCTV & Smart Security Systems — Alaba International Market
        </p>
        <a
          href="#products"
          className="inline-block gold-gradient gold-glow text-primary-foreground font-semibold px-6 py-3 rounded-full text-base transition-transform hover:scale-105 active:scale-95"
        >
          View Security Catalog
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
