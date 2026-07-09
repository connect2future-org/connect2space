import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";
import HeroBackground from "./HeroBackground";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section id="home" className="hero pt-[140px] sm:pt-[130px] md:pt-[140px] pb-8 md:pb-10">
      <HeroBackground />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <HeroContent />
          <HeroImages />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;