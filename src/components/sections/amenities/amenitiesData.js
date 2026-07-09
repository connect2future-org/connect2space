import {
  FaWifi,
  FaParking,
  FaCoffee,
  FaBolt,
  FaSnowflake,
  FaShieldAlt,
  FaCamera,
  FaMicrophone,
  FaCouch,
} from "react-icons/fa";

const amenities = [
  {
    id: 1,
    title: "High-Speed WiFi",
    icon: FaWifi,
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    id: 2,
    title: "Parking",
    icon: FaParking,
    color: "from-violet-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Tea & Coffee",
    icon: FaCoffee,
    color: "from-orange-500 to-pink-500",
  },
  {
    id: 4,
    title: "Power Backup",
    icon: FaBolt,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    title: "Air Conditioning",
    icon: FaSnowflake,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    title: "Security",
    icon: FaShieldAlt,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 7,
    title: "Photography Lights",
    icon: FaCamera,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 8,
    title: "Podcast Equipment",
    icon: FaMicrophone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 9,
    title: "Premium Lounge",
    icon: FaCouch,
    color: "from-fuchsia-500 to-violet-500",
  },
];

export default amenities;