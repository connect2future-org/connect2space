import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import servicesData from "../components/sections/services/servicesData";
import { WHATSAPP_URL } from "../utils/contact";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-lg">Service not found</h2>
          <Link to="/" className="btn btn-primary mt-6">Go Back Home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const features = [
    "Expert consultation",
    "Customised solutions",
    "Fast turnaround",
    "Dedicated support",
  ];
  const benefits = [
    "Increase productivity",
    "Professional quality",
    "Cost-effective",
    "Scalable",
  ];
  const faqs = [
    { q: "How long does the process take?", a: "Typically 2-4 weeks depending on complexity." },
    { q: "Can I customise the service?", a: "Yes, we tailor every service to your specific needs." },
    { q: "What support do you provide?", a: "We offer ongoing support and maintenance." },
  ];

  // Placeholder images for gallery
  const galleryImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e6?w=600&auto=format&fit=crop",
  ];

  return (
    <div className="section pt-[120px]">
      <div className="container">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10">
            <span className="badge">Service</span>
            <h1 className="heading-lg mt-4">
              <span className="gradient-text">{service.title}</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto mt-4">{service.description}</p>
            <div className="flex justify-center mt-6">
              <div className="icon-box text-4xl">
                <Icon />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery – 3 equal images in a row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-3xl glass p-2">
              <img
                src={img}
                alt={`${service.title} ${idx + 1}`}
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
          ))}
        </motion.div>

        {/* Description & Features */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="heading-md">About This Service</h2>
            <p className="text-muted mt-4 leading-relaxed">
              Our {service.title.toLowerCase()} service is designed to help you achieve your goals with precision and creativity.
              We combine expertise with modern technology to deliver outstanding results.
            </p>
            <div className="mt-6 space-y-3">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheck className="text-primary" />
                  <span className="text-light">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="heading-md">Benefits</h2>
            <ul className="mt-4 space-y-3 text-light">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-primary text-lg">✦</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14"
        >
          <h2 className="heading-md text-center">Our Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {["Discovery", "Design", "Development", "Delivery"].map((step, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 text-center hover:shadow-pink transition">
                <div className="text-3xl font-black gradient-text">0{idx + 1}</div>
                <h4 className="text-white font-bold mt-3">{step}</h4>
                <p className="text-sm text-muted mt-2">We work closely with you every step of the way.</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-14"
        >
          <h2 className="heading-md text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass rounded-2xl p-6">
                <h4 className="text-white font-bold">{faq.q}</h4>
                <p className="text-muted mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-14 text-center"
        >
          <div className="glass rounded-3xl p-10">
            <h2 className="heading-md">Ready to get started?</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">Book a consultation or get a quote today.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Book Now <FaArrowRight />
              </a>
              <Link to="/#contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;