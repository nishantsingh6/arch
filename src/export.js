import reno from '../src/assets/flatreno.jpg'
import interior from  '../src/assets/intertior.webp'
import paint from  '../src/assets/painting.jpeg'
import kitch from '../src/assets/Kitchen.jpg'
import constrcuct from  '../src/assets/proj12.jpg';
import glass from  '../src/assets/glass.jpeg'

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";
import { img } from "framer-motion/client";

export const allservices = [
  {
    img: reno,
    title: "Flat Renovation",
    about: "Complete renovation solutions for flats, ensuring modern aesthetics and durability.",
  },
  {
    img: kitch,
    title: "Modular Kitchen & Wardrobes",
    about: "Design and installation of modular kitchens and wardrobes with customized fittings.",
  },
  {
    img: constrcuct,
    title: "Construction (New & Remodeling)",
    about: "End-to-end construction services for new projects and remodeling of existing structures.",
  },
  {
    img: interior,
    title: "Interior & Exterior Design",
    about: "Professional design services to enhance both interior and exterior spaces.",
  },
  {
    img: paint,
    title: "Painting & Putty Work",
    about: "High-quality painting and wall putty work to give your space a fresh look.",
  },
  {
    img: glass,
    title: "Aluminium, Steel, MS & Glass Work",
    about: "Fabrication and installation services for aluminium, steel, mild steel, and glass materials.",
  },
];


export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];