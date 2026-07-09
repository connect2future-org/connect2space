import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="glass glass-hover rounded-[34px] p-10"
    >
      <div className="flex items-center gap-5">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full border-4 border-primary object-cover"
        />

        <div>

          <h3 className="text-2xl font-heading font-bold">

            {testimonial.name}

          </h3>

          <p className="text-muted">

            {testimonial.company}

          </p>

        </div>

      </div>

      <div className="flex gap-2 mt-8">

        {[...Array(testimonial.rating)].map((_, i) => (

          <FaStar
            key={i}
            className="text-yellow-400"
          />

        ))}

      </div>

      <p className="mt-8 leading-8 text-muted">

        "{testimonial.review}"

      </p>

    </motion.div>
  );
};

export default TestimonialCard;