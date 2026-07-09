import {
  FaBuilding,
  FaPenFancy,
  FaMicrophone,
  FaUsers,
  FaCalendarAlt,
  FaVideo,
} from "react-icons/fa";

export const pricingData = [
  {
    id: 1,
    name: "Premium Workspace",
    price: "₹8,000",
    period: "/ seat",
    description: "Premium collaborative workspace for startups, freelancers, creators and businesses.",
    icon: FaBuilding,
    features: [
      "High-speed WiFi",
      "Premium seating",
      "Air Conditioning",
      "Power Backup",
      "Reception Access",
    ],
    cta: "Book Workspace",
    whatsappMessage: `Hi Connect2Space,

I would like to book the Premium Workspace.

Please share availability, pricing details and booking process.

Thank you.`,
  },
  {
    id: 2,
    name: "Creator Corner",
    price: "₹300",
    period: "/ session",
    description: "Compact creative zone ideal for content creators and freelancers.",
    icon: FaPenFancy,
    features: [
      "Quiet Workspace",
      "Fast WiFi",
      "Charging Ports",
      "Comfortable Seating",
    ],
    cta: "Book Creator Corner",
    whatsappMessage: `Hi Connect2Space,

I would like to book the Creator Corner.

Please let me know the available slots and booking details.

Thank you.`,
  },
  {
    id: 3,
    name: "Podcast Studio",
    price: "₹2,000",
    period: "/ session",
    description: "Professional recording studio with premium acoustics and lighting.",
    icon: FaMicrophone,
    features: [
      "Professional Microphones",
      "Studio Lighting",
      "Soundproof Room",
      "Recording Setup",
    ],
    cta: "Book Studio",
    whatsappMessage: `Hi Connect2Space,

I would like to book the Podcast Studio.

Please share available recording slots and booking details.

Thank you.`,
  },
  {
    id: 4,
    name: "Meeting Space",
    price: "₹1,200",
    period: "/ hour",
    description: "Modern conference room for meetings, presentations and discussions.",
    icon: FaUsers,
    features: [
      "Smart Display",
      "Video Conferencing",
      "Whiteboard",
      "Air Conditioning",
    ],
    cta: "Book Meeting Room",
    whatsappMessage: `Hi Connect2Space,

I would like to reserve the Meeting Space.

Please let me know the available timings and booking process.

Thank you.`,
  },
  {
    id: 5,
    name: "Event Space",
    price: "₹10,000 – ₹3,00,000",
    period: "",
    description: "Flexible event venue for workshops, launches, networking events and corporate gatherings.",
    icon: FaCalendarAlt,
    features: [
      "Stage Setup",
      "Seating Arrangement",
      "Audio System",
      "Custom Layout",
    ],
    cta: "Book Event Space",
    whatsappMessage: `Hi Connect2Space,

I would like to book the Event Space.

Please share pricing, availability and event booking details.

Thank you.`,
  },
  {
    id: 6,
    name: "Content Studio",
    price: "Custom",
    period: " pricing",
    description: "Professional production space customized according to your project requirements.",
    icon: FaVideo,
    features: [
      "Photography",
      "Videography",
      "Green Screen",
      "Professional Lighting",
    ],
    cta: "Request Quote",
    whatsappMessage: `Hi Connect2Space,

I am interested in the Content Studio.

Please provide a quotation and discuss my project requirements.

Thank you.`,
  },
];