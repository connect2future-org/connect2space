import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-[28px] group aspect-[4/3]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 rounded-full glass text-primary text-xs uppercase tracking-[2px]">
          {item.category}
        </span>
        <h3 className="mt-4 text-xl font-heading font-bold text-white">{item.title}</h3>
        <Link
          to={`/spaces/${item.id}`}
          className="mt-4 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all text-sm hover:text-pink-400"
        >
          Explore <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default GalleryCard;