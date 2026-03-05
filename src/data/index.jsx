export const userName = "Sachyam Dahal";
export const userTitle = "Software Engineer & Full-Stack Developer";
export const userTagline = "Crafting elegant solutions and delightful user experiences through code. I build scalable web applications that solve real problems and make an impact.";
export const userAbout = "I'm a passionate software engineer with a knack for building full-stack web applications that blend form and function. With expertise in React, Node.js, and Tailwind CSS, I create seamless user experiences and robust backends with integration of AI and ML. I thrive on solving complex problems and am always eager to learn new technologies. When I'm not coding, you can find me exploring the latest tech trends or hiking in the great outdoors.";
export const userEmail = "dahalsachyam@gmail.com";
export const userGithub = "https://github.com/DahalSachyam";
export const userLinkedin = "https://www.linkedin.com/in/sachyam-dahal-6764702a7/";
export const userLocation = "Anamnagar, KTM";
import himalayaLogo from "../assets/himalaya-logo.png";
import xaviersLogo from "../assets/xaviers-logo.png";
import pathshalaLogo from "../assets/pathshala-logo.png";

export const projectsArray = [
  {
    id: 1,
    title: "ElectroMart",
    description: "Full-stack e-commerce platform with AI/ML-powered product recommendation and sales prediction. Features interactive data visualizations built with Python, SQL Server backend, and a complete shopping experience with cart, checkout, and admin dashboard.",
    tags: ["Django", "Python", "SQL Server", "AI/ML", "Data Visualization"],
    gradient: "from-orange-500 to-rose-600",
    emoji: "🛒",
    liveUrl: "#",
    repoUrl: "https://github.com/DahalSachyam",
  },
  {
    id: 2,
    title: "Library Management System",
    description: "A clean Django-based application for managing library operations — add, update, search, and delete books and members. Features an intuitive dashboard with full CRUD functionality and a responsive interface.",
    tags: ["Django", "Python", "SQLite", "CRUD"],
    gradient: "from-indigo-500 to-blue-600",
    emoji: "📚",
    liveUrl: "#",
    repoUrl: "https://github.com/DahalSachyam",
  },
  {
    id: 3,
    title: "Fitness Tracker App",
    description: "A full-stack progressive web app for tracking daily workouts, nutrition intake, and personal records. Includes goal setting, progress charts, and a mobile-first design for on-the-go logging.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-emerald-500 to-teal-600",
    emoji: "💪",
    liveUrl: "#",
    repoUrl: "https://github.com/DahalSachyam",
  },
];

export const skillsArray = [
  {
    name: "Python",
    details: "Django, Data Analysis, NumPy, Pandas",
    color: "#3776AB",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <linearGradient id="py1" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient>
        <linearGradient id="py2" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient>
        <path fill="url(#py1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
        <path fill="url(#py2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
      </svg>
    ),
  },
  {
    name: "React",
    details: "Hooks, Context API, React Router, Next.js",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9.9-30.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    details: "Express, REST APIs, Authentication",
    color: "#339933",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#339933" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 91.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.71 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.006 1.235 1.006h5.764c.354 0 .692-.286.94-.545.24-.259.35-.474.314-.903-.484-8.748-6.947-14.286-22.095-14.286-12.635 0-20.163 5.334-20.163 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    details: "Responsive Design, Custom Themes, Animations",
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.748 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.748-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.748 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.748-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#06B6D4"/></svg>
    ),
  },
  {
    name: "Figma",
    details: "UI/UX Design, Prototyping, Design Systems",
    color: "#F24E1E",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67V0z"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/>
      </svg>
    ),
  },
  {
    name: "Docker & K8s",
    details: "Containers, Orchestration, CI/CD Pipelines",
    color: "#2496ED",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fillRule="evenodd" clipRule="evenodd" fill="#2496ED" d="M73.8 50.8h11.3v11.5H73.8zm0-13h11.3v11.5H73.8zM61 50.8h11.3v11.5H61zm0-13h11.3v11.5H61zM48.2 50.8h11.3v11.5H48.2zm-12.8 0H46.7v11.5H35.4zM48.2 37.8h11.3v11.5H48.2zM48.2 24.5h11.3V36H48.2zm24.8 27.7c-1.2-.8-4-1.1-6.1-.7-.3-2.2-1.5-4.1-3.6-5.8l-1.2-.8-.8 1.2c-1.6 2.4-2 6.4-.4 9 .8 1.3 2.2 2.5 4.3 3.2-2 .8-5.3 1.1-7.9 1.1H22.2l-.3 1.5c-.8 5.2.3 10.7 3.3 14.9 3 4 7.5 6 13.2 6 12.3 0 21.4-5.7 25.7-16 1.7 0 5.3 0 7.1-3.5.1-.1.5-1.1.7-1.4l-.9-.7z"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    details: "Database Design, Queries, Joins, Optimization",
    color: "#4479A1",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#4479A1" d="M2.001 90.458h4.108V74.235l6.36 13.753c.721 1.63 1.752 2.236 3.656 2.236 1.889 0 2.893-.605 3.627-2.236l6.202-13.633v16.103h4.108V71.174c0-1.63-.973-2.47-2.482-2.47h-2.572c-1.46 0-2.293.535-2.937 1.987l-6.12 13.542-5.79-13.423c-.6-1.382-1.47-2.106-3.042-2.106H4.483c-1.508 0-2.482.84-2.482 2.47v19.284zm31.876-12.909v6.085c0 5.21 3.14 7.5 7.512 7.5 2.046 0 3.839-.493 5.344-1.756l-1.435-2.923c-1.156.838-2.208 1.258-3.532 1.258-2.243 0-3.78-1.14-3.78-3.96v-6.204h5.49v-3.42h-5.49V68.09h-4.108v9.459zm51.673-2.834c-1.508 0-2.482.84-2.482 2.47v11.781c-1.42 1.3-3.246 2.153-4.686 2.153-2.046 0-2.879-.955-2.879-3.494V74.554c0-1.63-.974-2.47-2.482-2.47h-2.27c-1.509 0-2.484.84-2.484 2.47v13.334c0 4.3 2.1 6.565 5.856 6.565 2.67 0 5.056-1.298 6.908-3.147l.525 1.583c.388 1.072 1.075 1.564 2.198 1.564h1.543c1.508 0 2.482-.838 2.482-2.47V74.554c0-1.63-.974-2.47-2.482-2.47h-2.247l.001-.001zM116.542 91.2c-1.98 0-4.15-.606-5.716-1.682l1.295-3.072c1.296.838 2.9 1.29 4.222 1.29 1.692 0 2.571-.645 2.571-1.68 0-2.837-8.159-1.17-8.159-7.3 0-3.15 2.481-5.583 6.65-5.583 2.222 0 4.075.564 5.518 1.498l-1.39 2.955c-1.3-.756-2.726-1.087-4.08-1.087-1.553 0-2.482.726-2.482 1.6 0 2.717 8.204 1.122 8.204 7.222 0 3.382-2.677 5.838-6.633 5.838z"/><path fill="#4479A1" d="M98.094 73.172c-7.553 0-11.573 4.373-11.573 11.26 0 6.885 3.624 10.672 11.03 10.672 3.39 0 6.167-.873 8.353-2.477l-1.773-2.894c-1.773 1.092-3.754 1.753-6.162 1.753-3.846 0-6.017-1.894-6.39-5.56h15.36c.078-.605.138-1.21.138-1.935.001-7.027-3.527-10.82-8.983-10.82zm-4.357 4.373c3.008 0 4.887 2.13 4.953 5.27h-10.51c.601-3.573 2.564-5.27 5.557-5.27z"/><path fill="#4479A1" d="M64 0C28.654 0 0 28.654 0 64c0 35.345 28.654 64 64 64 35.345 0 64-28.655 64-64C128 28.654 99.345 0 64 0zm0 122.88C31.508 122.88 5.12 96.492 5.12 64S31.508 5.12 64 5.12s58.88 26.388 58.88 58.88-26.388 58.88-58.88 58.88z"/>
      </svg>
    ),
  },
  {
    name: "C++",
    details: "OOP, STL, Data Structures, Algorithms, Competitive Programming",
    color: "#00599C",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#00599C" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"/><path fill="#00599C" d="M115 64h-4v-4h-4v4h-4v4h4v4h4v-4h4zm-15 0h-4v-4h-4v4h-4v4h4v4h4v-4h4z"/>
      </svg>
    ),
  },
];



export const academicsArray = [
  { id: 1, degree: "Bachelor of Engineering in Computer Engineering", institution: "Himalaya College of Engineering", year: "2024 – Present", grade: "GPA 3.7 / 4.0 per semester", description: "Focused on Integration of AI and ML with Software Engineering.", logo: himalayaLogo },
  { id: 2, degree: "A-Levels", institution: "St. Xaviers College", year: "2022 – 2024", grade: "B's", description: "Trained in Mathematics, Physics, and Chemistry.", logo: xaviersLogo },
  { id: 3, degree: "Secondary Education (Science)", institution: "Pathshala Nepal Foundation", year: "2020 – 2022", grade: "3.95/4.0", description: "Completed my secondary education with a focus on science subjects.", logo: pathshalaLogo },
];