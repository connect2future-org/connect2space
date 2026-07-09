import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const ContactInfoCard = () => {

const whatsappMessage = encodeURIComponent(
"Hello Connect2Space,\n\nI'm interested in booking your workspace.\nPlease share pricing and availability.\n\nThank you."
);

return (

<div className="glass rounded-[34px] p-10 h-full">

<h2 className="text-4xl font-heading font-bold">

Let's Connect

</h2>

<p className="text-muted mt-6 leading-8">

We're always ready to help you find the perfect creative space.

</p>

<div className="space-y-6 mt-10">

<a
href="tel:+918088980347"
className="glass glass-hover rounded-2xl flex items-center gap-5 p-5"
>

<FaPhoneAlt className="text-primary text-2xl"/>

<div>

<h4 className="font-semibold">

Call Us

</h4>

<p>

8088980347

</p>

<p>

7019436720

</p>

</div>

</a>

<a

href={`https://wa.me/917019436720?text=${whatsappMessage}`}

target="_blank"

className="glass glass-hover rounded-2xl flex items-center gap-5 p-5"

>

<FaWhatsapp className="text-green-400 text-2xl"/>

<div>

<h4>

WhatsApp

</h4>

<p>

7019436720

</p>

</div>

</a>

<a

href="mailto:Docs@connect2future.com?subject=Workspace Booking Inquiry&body=Hello Connect2Space,%0D%0A%0D%0AI am interested in booking your workspace. Please share pricing and availability.%0D%0A%0D%0AThank you."

className="glass glass-hover rounded-2xl flex items-center gap-5 p-5"

>

<FaEnvelope className="text-primary text-2xl"/>

<div>

<h4>

Email

</h4>

<p>

Docs@connect2future.com

</p>

<p>

Support@connect2future.com

</p>

</div>

</a>

<div

className="glass rounded-2xl p-5 flex gap-5"

>

<FaMapMarkerAlt className="text-primary text-2xl"/>

<p>

No 971,
Dry Fruits Basket Bus Stop,
Opposite Nirmita Kendra,
Bogadi 2nd Stage North,
Mysuru,
Karnataka 570006

</p>

</div>

</div>

</div>

)

}

export default ContactInfoCard