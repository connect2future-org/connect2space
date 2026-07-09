import Hero from "../components/sections/hero/Hero";
import WorkspaceShowcase from "../components/sections/workspace/WorkspaceShowcase";
import Services from "../components/sections/services/Services";
import About from "../components/sections/about/About";
import Gallery from "../components/sections/gallery/Gallery";
import Pricing from "../components/sections/pricing/Pricing";
import Amenities from "../components/sections/amenities/Amenities";
import Testimonials from "../components/sections/testimonials/Testimonials";
import FAQ from "../components/sections/faq/FAQ";
import Contact from "../components/sections/contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <WorkspaceShowcase />
      <Services />
      <About />
      <Gallery />
      <Pricing />
      <Amenities />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;