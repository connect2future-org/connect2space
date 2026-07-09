import {
  FaMicrophone,
  FaBuilding,
  FaVideo,
  FaCamera,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Podcast Studio",
    description:
      "Professional podcast recording space with premium interiors and creator-ready equipment.",
    icon: FaMicrophone,
    gradient: "from-pink-500 to-fuchsia-600",
  },
  {
    id: 2,
    title: "Co-Working Space",
    description:
      "Work in an inspiring environment with high-speed WiFi and modern seating.",
    icon: FaBuilding,
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Video Production",
    description:
      "Professional setup for interviews, YouTube videos and commercial shoots.",
    icon: FaVideo,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    title: "Photography Studio",
    description:
      "Creative photography area with lighting equipment and premium backgrounds.",
    icon: FaCamera,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 5,
    title: "Meeting Room",
    description:
      "Elegant meeting rooms for startups, founders and business discussions.",
    icon: FaUsers,
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    id: 6,
    title: "Startup Workspace",
    description:
      "Dedicated workspaces built for freelancers, startups and creators.",
    icon: FaLaptopCode,
    gradient: "from-sky-500 to-cyan-500",
  },
];

export default services;