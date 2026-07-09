import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ item }) => {

  const [open, setOpen] = useState(false);

  return (

    <div className="glass rounded-[28px] overflow-hidden">

      <button

        onClick={() => setOpen(!open)}

        className="w-full flex justify-between items-center p-7 text-left"

      >

        <h3 className="text-xl font-heading font-bold">

          {item.question}

        </h3>

        <div className="text-primary">

          {open ? <FaMinus /> : <FaPlus />}

        </div>

      </button>

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{ height: 0, opacity: 0 }}

            animate={{ height: "auto", opacity: 1 }}

            exit={{ height: 0, opacity: 0 }}

            transition={{ duration: .35 }}

          >

            <div className="px-7 pb-7 text-muted leading-8">

              {item.answer}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

};

export default FAQItem;