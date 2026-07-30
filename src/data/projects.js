import {
  SiPython,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

import {
  TbApi,
  TbBrain,
} from "react-icons/tb";

import {
  FaCamera,
  FaMicrochip,
  FaFileAlt,
} from "react-icons/fa";

const projects = [
  {
    id: 1,

    title: "Campus Placement Intelligence System",

    description:
      "A full-stack placement platform with secure authentication, eligibility analysis, recruitment management and AI-powered placement insights for students and administrators.",

    image: "/projects/campus.png",

    tech: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Machine Learning", icon: TbBrain },
      { name: "REST API", icon: TbApi },
    ],

    github:
      "https://github.com/jk-neha/campus-placements-intelligence-system",

    live:
      "https://campus-placements-intelligence-syst.vercel.app/",
  },

  {
    id: 2,

    title: "Full Stack Product App",

    description:
      "A product management application with secure REST APIs, PostgreSQL integration and complete CRUD functionality using FastAPI.",

    image: "/projects/product.png",

    tech: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST API", icon: TbApi },
    ],

    github:
      "https://github.com/jk-neha/fullstack-product-app",

    live:
      "https://fullstack-product-app-rust.vercel.app/",
  },

  {
    id: 3,

    title: "AI PDF Chatbot",

    description:
      "An intelligent document assistant that allows users to upload PDFs, ask contextual questions and generate AI-powered summaries.",

    image: "/projects/pdf.png",

    tech: [
      { name: "Python", icon: SiPython },
      { name: "Streamlit", icon: FaFileAlt},
      { name: "Machine Learning", icon: TbBrain },
    ],

    github:
      "https://github.com/jk-neha/pdf-ai-assistance-bot-live",

    live:
      "https://pdf-ai-assistance-bot-live.onrender.com/",
  },

  {
    id: 4,

    title: "FaceID Attendance System",

    description:
      "A computer vision application that automates attendance using real-time facial recognition and OpenCV.",

    image: "/projects/face.png",

   tech:[
   {name:"Python",icon:SiPython},
   {name:"OpenCV",icon:FaCamera},
   {name:"Machine Learning",icon:TbBrain},
   {name:"Streamlit",icon:FaFileAlt},
]
,

    github:
      "https://github.com/jk-neha/face-recognition-streamlit-app",

    live:
      "https://face-recognition-app-app-4voyybbgfuwxk7kadkp2rn.streamlit.app/",
  },

  {
    id: 5,

    title: "PolluCast AQI Predictor",

    description:
      "An IoT and machine learning application that predicts air quality levels and provides health recommendations.",

    image: "/projects/pollucast.png",
tech:[
   {name:"Python",icon:SiPython},
   {name:"IoT",icon:FaMicrochip},
   {name:"Machine Learning",icon:TbBrain},
]
  ,

    github:
      "https://github.com/jk-neha/pollucast-health-alerts-streamlit-app",

    live:
      "https://pollucast-health-alerts-app-app-kquat4tx6batgpgyf5ubux.streamlit.app/",
  },
];

export default projects;