import { motion } from "framer-motion";

const AmenityCard = ({ item }) => {

const Icon = item.icon;

return(

<motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{duration:.3}}

className="group relative overflow-hidden rounded-[30px] glass glass-hover p-8"

>

<div

className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.color}`}

style={{mixBlendMode:"soft-light"}}

/>

<div

className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color}`}

>

<Icon className="text-white text-3xl"/>

</div>

<h3 className="mt-8 text-2xl font-heading font-bold">

{item.title}

</h3>

<p className="mt-5 text-muted">

Premium facility included with your booking.

</p>

</motion.div>

)

}

export default AmenityCard;