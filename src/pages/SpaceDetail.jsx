import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers, FaWifi, FaMicrophone, FaVideo } from "react-icons/fa";
import galleryData from "../components/sections/gallery/galleryData";
import { WHATSAPP_URL } from "../utils/contact";

const SpaceDetail = () => {
  const { id } = useParams();
  const space = galleryData.find((s) => s.id === parseInt(id));

  if (!space) {
    return (
      <div className="section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-lg">Space not found</h2>
          <Link to="/" className="btn btn-primary mt-6">Go Back Home</Link>
        </div>
      </div>
    );
  }

  const images = space.images;

  const facilities = [
    { icon: FaWifi, label: "High-speed WiFi" },
    { icon: FaUsers, label: "Capacity: 10-50 people" },
    { icon: FaMicrophone, label: "Audio equipment" },
    { icon: FaVideo, label: "Video conferencing" },
  ];

  return (
    <div className="section !pt-[120px]">
      <div className="container">
        {/* Hero Banner */}
        {/* Compact Space Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl px-6 py-7 md:px-10 md:py-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

          <div className="relative z-10">
            <h1 className="heading-lg">
              <span className="gradient-text">{space.title}</span>
            </h1>

            <p className="text-lg text-muted max-w-2xl mx-auto mt-3">
              Explore our premium {space.title.toLowerCase()} – designed for creativity and productivity.
            </p>
          </div>
        </motion.div>

        {/* Gallery – all images in a single row, larger landscape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[160px] md:min-w-0 overflow-hidden rounded-3xl glass p-3 group hover:shadow-pink transition-all duration-300"
              >
                <div className="w-full aspect-video min-h-[200px] md:min-h-[240px] bg-gradient-to-br from-black/10 to-purple-900/10 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src={img}
                    alt={`${space.title} ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Description & Facilities */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="heading-md">About This Space</h2>
            <p className="text-muted mt-4 leading-relaxed">
              Our {space.title.toLowerCase()} is a versatile space perfect for meetings, workshops, and creative sessions.
              With modern amenities and a premium atmosphere, it's designed to impress and inspire.
            </p>
            <div className="mt-6 space-y-3">
              {facilities.map((facility, idx) => {
                const Icon = facility.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon className="text-primary" />
                    <span className="text-light">{facility.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <h2 className="heading-md">Pricing & Booking</h2>
            <div className="glass rounded-2xl p-6 mt-4">
              <p className="text-muted text-sm">Pricing</p>
              <div className="text-3xl font-bold gradient-text">{space.price}</div>
              <p className="text-muted text-sm mt-2">Flexible packages available</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center mt-6"
              >
                Book Your Space<FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetail;