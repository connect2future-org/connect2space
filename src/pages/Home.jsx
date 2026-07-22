import { lazy, Suspense } from 'react';
import Hero from "../components/sections/hero/Hero";
import WorkspaceShowcase from "../components/sections/workspace/WorkspaceShowcase";

const Services = lazy(() => import("../components/sections/services/Services"));
const About = lazy(() => import("../components/sections/about/About"));
const Experience = lazy(() => import("../components/sections/experience/Experience"));
const Gallery = lazy(() => import("../components/sections/gallery/Gallery"));
const Pricing = lazy(() => import("../components/sections/pricing/Pricing"));
const Amenities = lazy(() => import("../components/sections/amenities/Amenities"));
const Testimonials = lazy(() => import("../components/sections/testimonials/Testimonials"));
const FAQ = lazy(() => import("../components/sections/faq/FAQ"));
const Contact = lazy(() => import("../components/sections/contact/Contact"));

const Loader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Home = () => {
  return (
    <>
      <Hero />
      <WorkspaceShowcase />
      <Suspense fallback={<Loader />}>
        <Services />
        <About />
        <Experience />
        <Gallery />
        <Pricing />
        <Amenities />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;