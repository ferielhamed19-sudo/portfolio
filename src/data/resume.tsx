import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Matlab } from "@/components/ui/svgs/matlab";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Builder } from "@/components/ui/svgs/builder"; // fallback/default icon

export const DATA = {
  name: "Feriel Hamed",
  initials: "HF",
  url: "https://dillion.io", // TODO: no personal site URL in CV — placeholder kept
  location: "Tunis, Tunisia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco", // TODO: no map link in CV — placeholder kept
  description:
    "Electronics & Embedded Software Engineer | IoT | Fresh Graduate.",
  summary:
    "Recently graduated Electronics & Embedded Systems Engineer (ISIMM). Final year project at Inovaria Tech: connected fuel-level monitoring system for heavy-duty vehicles (STM32, FreeRTOS, CAN/J1939, MQTT). Comfortable across the embedded stack, firmware, PCB design, sensor integration, and automotive protocols. Seeking a Junior Embedded Systems, Firmware, or IoT Engineer role.",
  avatarUrl: "/me.png", // TODO: no photo provided in CV — placeholder kept
  skills: [
    { name: "MQTT", icon: Builder }, // not found in svgl library
    { name: "C/C++", icon: Csharp },
    { name: "Python", icon: Python },
    { name: "STM32", icon: Builder },
    { name: "MATLAB", icon: Matlab },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: Builder }, // not found in svgl library
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Altium", icon: Builder }, // not found in svgl library
    { name: "Node.js", icon: Nodejs },
    { name: "Supabase", icon: Supabase },
    { name: "CAN/J1939", icon: Builder }, // not found in svgl library
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Git", icon: Builder }, // not found in svgl library
    { name: "Go", icon: Golang },
    { name: "KiCad", icon: Builder }, // not found in svgl library
    { name: "Docker", icon: Docker },
    { name: "FreeRTOS", icon: Builder }, // TODO: swap for a real Freertos.tsx once regenerated via svgls
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ferielhamed19@gmail.com",
    tel: "+216 28 461 842",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ferielhamed19-sudo", // TODO: CV only lists "GitHub" as a label, no actual URL given — placeholder kept
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://tn.linkedin.com/in/feriel-hamed-1aa857240", // TODO: CV only lists "LinkedIn" as a label, no actual URL given — placeholder kept
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter", // TODO: not in CV — placeholder kept
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube", // TODO: not in CV — placeholder kept
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ferielhamed19@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Inovaria Tech",
      href: "https://inovaria-changuel.com/en/", // TODO: no company URL given in CV — placeholder kept
      badges: [],
      location: "Sousse, Tunisia",
      title: "Embedded Systems Engineering Intern – Final Year Project (PFE)",
      logoUrl:
        "https://inovaria-changuel.com/wp-content/uploads/2025/07/Copie-de-ingvaria-1-1-e1752840016341.png", // TODO: no logo provided in CV — placeholder kept
      start: "Feb 2026",
      end: "Jul 2026",
      description:
        "Developed embedded firmware on STM32F407 with FreeRTOS, using a Kalman filter for sensor fusion and fuel-level accuracy. Integrated CAN bus (SAE J1939) and MQTT/GSM connectivity for real-time IoT vehicle diagnostics. Built a live monitoring dashboard (Node.js, Supabase) with leakage, water and fuel-theft detection — 18.5/20 evaluation.",
    },
    {
      company: "EMKAMED",
      href: "https://shopify.com", // TODO: no company URL given in CV — placeholder kept
      badges: [],
      location: "Ouardanine, Monastir, Tunisia",
      title: "Embedded Systems Intern",
      logoUrl: "/shopify.svg", // TODO: no logo provided in CV — placeholder kept
      start: "Aug 2025",
      end: "Aug 2025",
      description:
        "Developed firmware on ESP32 using PlatformIO for a soil-moisture monitoring and automatic irrigation valve system. Contributed to PCB schematic design using Altium Designer.",
    },
    {
      company:
        "CRMN – Centre de Recherche en Microélectronique et Nanotechnologie",
      href: "https://www.crmn.rnrt.tn/public/", // TODO: no company URL given in CV — placeholder kept
      badges: [],
      location: "Sousse, Tunisia",
      title:
        "Research Intern – Electrical Characterization of GaN HEMT Transistors",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARpLpTGAtbOuHEP3PAZvLQBqhUcPTcYyDFWQHl_MgfA&s=10", // TODO: no logo provided in CV — placeholder kept
      start: "Jun 2025",
      end: "Jun 2025",
      description:
        "Performed I-V electrical characterization of AlGaN/GaN HEMT transistors using a probe tester and parameter analyzer. Identified hysteresis and self-heating effects from deep-level defects, and modeled 2DEG behavior analytically using MATLAB.",
    },
    {
      company: "Sunrise Solar Power",
      href: "https://sunrise-solor-power.com/en", // TODO: no company URL given in CV — placeholder kept
      badges: [],
      location: "Gafsa, Tunisia",
      title: "Power Electronics Intern",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQG1aiSzHyhrwil9PTedtyQi2Dghqv_fq949ElnKxohTlP_Pq75lqcgnnW&s=10", // TODO: no logo provided in CV — placeholder kept
      start: "Jul 2024",
      end: "Jul 2024",
      description:
        "Assisted in installation, wiring, and component soldering for photovoltaic solar panel systems. Monitored system performance and supported basic troubleshooting of power electronics components.",
    },
    {
      company: "La Société Tunisienne de Sidérurgie – EL FOULADH",
      href: "https://www.elfouladh.com.tn/", // TODO: no company URL given in CV — placeholder kept
      badges: [],
      location: "Bizerte, Tunisia",
      title: "Software Development Intern",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjj7X2b5BlCAFKrDkQ2N8vZdgFkqRQMKR-oPOWzWUUPA&s=10", // TODO: no logo provided in CV — placeholder kept
      start: "Feb 2023",
      end: "May 2023",
      description:
        "Developed a React Native mobile app and a React.js web interface for inventory tracking. Designed a MySQL database for managing finished-product stock.",
    },
    {
      company: "Genios Smart Technology",
      href: "#", // TODO: no company URL given in CV — placeholder kept
      badges: [],
      location: "Chebba, Tunisia",
      title: "Web Development Intern",
      logoUrl: "/mitremedia.png", // TODO: no logo provided in CV — placeholder kept
      start: "Jul 2022",
      end: "Aug 2022",
      description: "Built responsive web page components using HTML5 and CSS3.",
    },
  ],
  education: [
    {
      school:
        "ISIMM – Higher Institute of Computer Science and Mathematics of Monastir, Tunisia",
      href: "https://isimm.rnu.tn/", // TODO: no school URL given in CV — placeholder kept
      degree:
        "Engineering Degree (Diplôme National d'Ingénieur) – Electronics: Microelectronics & Embedded Systems",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/fr/0/06/ISIM_LOGO_ar.png", // TODO: no logo provided in CV — placeholder kept
      start: "2023",
      end: "2026",
    },
    {
      school:
        "ISSAT Mahdia – Higher Institute of Applied Sciences and Technology of Mahdia, Tunisia",
      href: "https://issatso.rnu.tn/", // TODO: no school URL given in CV — placeholder kept
      degree: "Bachelor's Degree in Information and Communication Technologies",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC5BcZUoV_kOuIYU2JQ8lqk0Kh5Bgx-_H8mk1LoSO3NP6bnz4gxUYmfA&s=10", // TODO: no logo provided in CV — placeholder kept
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "OBD-II Automotive Diagnostic Tool",
      href: "https://chatcollect.com", // TODO: no project URL given in CV — placeholder kept
      dates: "Jan 2024 - Feb 2024", // TODO: no dates given in CV — placeholder kept
      active: true,
      description:
        "Reads and interprets real-time vehicle data (PIDs) over the OBD-II protocol on ESP32.",
      technologies: ["ESP32", "OBD-II", "Embedded C"],
      links: [
        // TODO: no links given in CV — placeholder kept
        {
          type: "Source",
          href: "https://github.com/ferielhamed19-sudo/OBD-II-ESP32-Automotive-Diagnostic",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4", // TODO: placeholder kept
    },
    {
      title: "Renault VECU Simulator – CAN/J1939",
      href: "https://magicui.design", // TODO: no project URL given in CV — placeholder kept
      dates: "June 2023 - Present", // TODO: no dates given in CV — placeholder kept
      active: true,
      description:
        "Simulates a virtual ECU generating and decoding CAN messages using the SAE J1939 protocol for heavy-duty vehicles.",
      technologies: ["CAN Bus", "SAE J1939", "Embedded C"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ferielhamed19-sudo/Simulateur-VECU-Renault-J1939",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4", // TODO: placeholder kept
    },
  ],
  hackathons: [
    // TODO: CV does not mention any hackathons — full original placeholder list kept unchanged.
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
