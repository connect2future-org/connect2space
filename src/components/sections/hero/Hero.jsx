import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";
import HeroBackground from "./HeroBackground";

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const Hero = () => {
  return (
    <section id="home" className="hero pt-[20px] sm:pt-[100px] md:pt-[140px] pb-8 md:pb-10">
      <HeroBackground isTouch={isTouch} />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <HeroContent />
          <div className="mt-0">
            <HeroImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;