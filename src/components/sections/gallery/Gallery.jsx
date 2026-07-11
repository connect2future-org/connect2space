import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import galleryData from "./galleryData";
import femaleMascot from "../../../assets/images/female1.png";
import maleMascot from "../../../assets/images/male2.png";

const Gallery = () => {
  return (
    <section id="gallery" className="section bg-secondary/5">
      <div className="container">
        {/* Mascots + Heading – using flex for perfect alignment */}
        <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Female mascot – left */}
          <div className="hidden md:block flex-shrink-0 w-[90px] lg:w-[150px] xl:w-[170px]">
            <motion.img
              src={femaleMascot}
              alt=""
              className="w-full h-auto object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
          </div>

          {/* Heading – centered */}
          <div className="flex-1 text-center">
            <span className="badge">Gallery</span>
            <h2 className="heading-lg">
              Our <span className="gradient-text">Spaces</span>
            </h2>
            <p className="text-lg text-muted mt-2">
              Take a peek inside our premium workspaces.
            </p>
          </div>

          {/* Male mascot – right */}
          <div className="hidden md:block flex-shrink-0 w-[100px] lg:w-[160px] xl:w-[180px]">
            <motion.img
              src={maleMascot}
              alt=""
              className="w-full h-auto object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Gallery Cards – unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;