import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "Flat Renovation",
    about: "Complete renovation solutions for flats, ensuring modern aesthetics and durability.",
  },
  {
    icon: construction,
    title: "Modular Kitchen & Wardrobes",
    about: "Design and installation of modular kitchens and wardrobes with customized fittings.",
  },
  {
    icon: design,
    title: "Construction (New & Remodeling)",
    about: "End-to-end construction services for new projects and remodeling of existing structures.",
  },
  {
    icon: document,
    title: "Interior & Exterior Design",
    about: "Professional design services to enhance both interior and exterior spaces.",
  },
  {
    icon: paint,
    title: "Painting & Putty Work",
    about: "High-quality painting and wall putty work to give your space a fresh look.",
  },
  {
    icon: support,
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