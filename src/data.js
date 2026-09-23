import { SiPython, SiFastapi, SiDjango, SiPostgresql, SiJsonwebtokens } from "react-icons/si";

export const profile = {
  name: ["Neha Vardhini J K"],
  role: "Python Backend Developer",
  intro:
    "I build production-ready REST APIs with FastAPI and Django. Six live-deployed projects, from an AI healthcare platform to a campus placement system.",
  email: "jknehavardhini2004@gmail.com",
  location: "Chennai, India",
  resume: "/Neha%20Vardhini%20J%20K%20Resume.pdf",
  photo: "/Photo.png", // add your portrait here (see README)
  links: {
    LinkedIn: "https://www.linkedin.com/in/nehavardhinijk",
    GitHub: "https://github.com/jk-neha",
  },
};

export const coreStack = [
  { name: "Python", icon: SiPython, color: "#3776AB", text: "Main language for APIs, data handling and ML side projects." },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", text: "Async REST APIs with validation, JWT auth and role-based access." },
  { name: "Django REST Framework", icon: SiDjango, color: "#0C4B33", text: "Serializers, permissions and viewsets for larger, multi-role apps." },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", text: "Relational data modelling, hosted on Neon for live projects." },
  { name: "REST APIs and JWT", icon: SiJsonwebtokens, color: "#111111", text: "Secure token authentication and clean, well-structured endpoints." },
];

export const alsoUse =
  "Also: C# and .NET, SQL, MySQL, OpenCV, Streamlit, Postman, Git, GitHub, Azure Repos, Vercel, Render, Neon.";

// Diagram rows: each row is a list of nodes. Rows connect top to bottom.
export const featured = [
  {
    title: "CareBridge",
    subtitle: "AI-assisted healthcare platform",
    text: "A full-stack platform connecting patients, doctors and pharmacies through role-based dashboards, from booking an appointment to filling a prescription.",
    tags: ["Python", "Django REST", "PostgreSQL", "JWT", "Google Gemini"],
    live: "https://care-bridge-ai-assisted-healthcare.vercel.app",
    github: "https://github.com/jk-neha/CareBridge-AI-Assisted-Healthcare-Platform",
    flow: [
      [{ t: "Web app", s: "Patient, doctor, pharmacy, admin", k: "blue" }],
      [{ t: "Django REST API", s: "JWT auth, role-based access", k: "green" }],
      [
        { t: "PostgreSQL", s: "Neon", k: "blue" },
        { t: "Google Gemini", s: "Symptom checker", k: "purple" },
      ],
    ],
    challenge:
      "Connect patients, doctors and pharmacies in one flow while keeping each role's access separate.",
    solution:
      "Django REST Framework with JWT auth and role-based permissions. An admin verifies doctor and pharmacy accounts. Prescriptions link to real pharmacy inventory for ordering. Gemini suggests the right specialist from a patient's symptoms.",
    result:
      "Live end to end: frontend on Vercel, backend on Render, database on Neon.",
  },
  {
    title: "Campus Intelligence System",
    subtitle: "Placement management platform",
    text: "A full-stack system that automates student recruitment, eligibility screening, job applications and placement analytics for students, companies and admins.",
    tags: ["Python", "FastAPI", "PostgreSQL", "REST API", "JWT"],
    live: "https://campus-placements-intelligence-syst.vercel.app/",
    github: "https://github.com/jk-neha/campus-placements-intelligence-system",
    flow: [
      [{ t: "Web app", s: "Students, companies, admins", k: "blue" }],
      [{ t: "FastAPI", s: "JWT auth, role-based authorization", k: "green" }],
      [
        { t: "Eligibility engine", s: "Rules and job applications", k: "cream" },
        { t: "PostgreSQL", s: "Database models", k: "blue" },
      ],
    ],
    challenge:
      "Screen eligibility and manage job applications for many students without manual checks.",
    solution:
      "Most of the business logic lives in FastAPI: REST APIs, JWT authentication, role-based authorization, an eligibility checker and an application workflow, all backed by PostgreSQL models.",
    result:
      "Deployed and running, with separate access for students, companies and admins plus placement analytics.",
  },
];

export const moreProjects = [
  { name: "Full Stack Product App", text: "React frontend, FastAPI backend and a Neon PostgreSQL database with full CRUD.", stack: "FastAPI, PostgreSQL, React", live: "https://fullstack-product-app-rust.vercel.app/", github: "https://github.com/jk-neha/fullstack-product-app" },
  { name: "PDF AI Chatbot", text: "Upload a PDF and ask questions about it. Text is extracted with PyPDF2 and answered by LLaMA 3.1 through the Groq API.", stack: "Python, Streamlit, Groq", live: "https://pdf-ai-assistance-bot-live.onrender.com/", github: "https://github.com/jk-neha/pdf-ai-assistance-bot-live" },
  { name: "FaceID Attendance", text: "Real-time face recognition that logs attendance with timestamps, using OpenCV and a KNN classifier.", stack: "Python, OpenCV, Streamlit", live: "https://face-recognition-app-app-4voyybbgfuwxk7kadkp2rn.streamlit.app/", github: "https://github.com/jk-neha/face-recognition-streamlit-app" },
  { name: "PolluCast", text: "Predicts air quality from live environmental data with a Random Forest model and gives health alerts.", stack: "Python, ML, Streamlit", live: "https://pollucast-health-alerts-app-app-kquat4tx6batgpgyf5ubux.streamlit.app/", github: "https://github.com/jk-neha/pollucast-health-alerts-streamlit-app" },
];

export const experience = [
  {
    when: "Nov 2025 – May 2026",
    role: "Software Engineer Trainee (.NET Backend Developer)",
    org: "Ambattur Fashion Group, Chennai",
    text: "Worked on migrating a Financial Accounting System used across 4 countries.",
    points: [
      "Built 30–40 REST API endpoints across 9 of the system's 18 modules.",
      "Shipped about 150 pull requests through a real enterprise workflow: Azure Repos, code review and sprint deadlines.",
      "Tested APIs with Postman while working in C# and .NET.",
    ],
  },
  {
    when: "May 2025 – Jun 2025",
    role: "Intern, Development Team Essentials of Modern AI",
    org: "NCS SoftSolutions (P) Ltd",
    text: "Two-month internship on a document-processing and migration team.",
    points: [
      "Built OCR pipelines (image to text, PDF to text) using pre-trained HuggingFace models.",
      "Contributed to a migration from a React and .NET application to JSP and Spring MVC.",
    ],
  },
];

export const education = [
  { name: "M.Sc. Computer Science", org: "Loyola College, Chennai", when: "2024 – 2026", note: "CGPA 9.35 / 10. Secretary, Computer Research Clusters club 2024–25." },
  { name: "B.Sc. Computer Science", org: "Bhaktavatsalam Memorial College for Women", when: "2021 – 2024", note: "Grade A. Academic Top Performer 2021–24." },
];

export const recognition = [
  "Certificate of Appreciation, Loyola Research Park (LRP 2026)",
  "Research paper: BREATHESAFE, IoT-powered air quality monitoring (PERI Institute of Technology)",
  "Research paper: Humanoid Voice Recognition (NAAC'24)",
  "Learn Python for Data Science, Infosys Springboard",
  "Google Project Management Specialization",
  "AWS Academy Cloud Foundations",
];
