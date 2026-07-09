import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import galleryData from "./galleryData";
import femaleMascot from "../../../assets/images/female1.png";
import maleMascot from "../../../assets/images/male2.png";

const Gallery = () => {
  return (
    <section id="gallery" className="section bg-secondary/5">
      <div className="container relative">
        {/* Mascots – hidden on mobile, smaller on tablet */}
        <div className="hidden md:block absolute left-[5%] lg:left-[7%] top-[60px] lg:top-[20px] z-0 pointer-events-none">
          <motion.img
            src={femaleMascot}
            alt=""
            className="w-[140px] lg:w-[220px] h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            loading="lazy"
          />
        </div>

        <div className="hidden md:block absolute right-[5%] lg:right-[7%] top-[60px] lg:top-[20px] z-0 pointer-events-none">
          <motion.img
            src={maleMascot}
            alt=""
            className="w-[150px] lg:w-[230px] h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            loading="lazy"
          />
        </div>

        {/* Original content unchanged */}
        <div className="section-header">
          <span className="badge">Gallery</span>
          <h2 className="heading-lg">Our <span className="gradient-text">Spaces</span></h2>
          <p className="text-lg text-muted">Take a peek inside our premium workspaces.</p>
        </div>

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