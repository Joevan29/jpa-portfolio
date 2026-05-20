export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  thumbnail?: string
  liveUrl?: string
  sourceUrl?: string
  accent: string
  problem?: string
  approach?: string
  result?: string
  metrics?: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  type: "full-time" | "contract" | "freelance" | "internship"
}

export interface SkillTag {
  label: string
  color: "acid" | "violet" | "coral" | "sky" | "neon"
}

export const HERO_DATA = {
  name: { first: "Joevan", middle: "Pramana", last: "Achmad" },
  badge: "Full Stack Achmad ↗",
  roles: ["Full Stack", "Backend Engineer", "Developer"],
  tags: [
    { label: "About me", color: "acid" },
    { label: "Plus", color: "violet" },
    { label: "Accessibility", color: "coral" },
    { label: "Backend", color: "neon" },
    { label: "Others", color: "sky" },
  ] satisfies SkillTag[],
}

export const PROJECTS: Project[] = [
  {
    id: "smart-nexus",
    title: "Smart Nexus",
    description:
      "Scalable REST API for handling large-scale event registrations and ticketing.",
    tags: ["Next.js", "TypeScript", "GeminiAI"],
    thumbnail: "/images/smart_nexus.png", // Ditambahkan
    accent: "#C8F135",
    sourceUrl: "https://github.com/Joevan29/nexus.git",
    problem: "Handling high concurrency during limited-time ticket sales windows.",
    approach: "Optimized connection pooling and implemented Redis caching to manage traffic spikes effectively.",
    result: "Successfully handled 10k+ req/sec during peak registration periods.",
    metrics: ["10k+ req/sec", "Redis Caching"],
  },
  {
    id: "mba-dashboard",
    title: "Market Basket Analysis Dashboard",
    description:
      "Interactive dashboard to analyze consumer purchasing patterns and product associations.",
    tags: ["Python", "Streamlit", "MLxtend"],
    thumbnail: "/images/mba_dashboard.png", // Ditambahkan
    accent: "#00E5FF",
    sourceUrl: "https://github.com/joevan29/mba_dashboard",
    problem: "Identifying hidden relationships between products in large e-commerce transaction datasets.",
    approach: "Developed a Streamlit dashboard comparing Apriori and FP-Growth algorithms to visualize strong product association rules.",
    result: "Provided clear visualization of consumer purchasing patterns for better decision-making.",
    metrics: ["Apriori & FP-Growth", "Data Visualization"],
  },
  {
    id: "bri-life-notification",
    title: "BRI Life Notification System",
    description:
      "Automated WA birthday notification system to enhance customer engagement.",
    tags: ["Node.js", "PostgreSQL", "Scheduler"],
    thumbnail: "/images/notification.png", // Ditambahkan
    accent: "#7B4FFF",
    sourceUrl: "https://github.com/joevan29",
    problem: "Manual customer engagement processes were inefficient and lacked personalization.",
    approach: "Engineered an automated birthday notification system using Node.js and scheduled cron tasks.",
    result: "Directly improved user experience and efficiency in customer engagement processes.",
    metrics: ["Automated Scheduling", "User Engagement"],
  },
  {
    id: "sea-catering",
    title: "Sea Catering App",
    description:
      "Full-service catering management platform with real-time order tracking.",
    tags: ["React", "Vite", "Tailwind CSS"],
    thumbnail: "/images/sea_catering.png", // Ditambahkan
    accent: "#FF6B47",
    liveUrl: "https://sea-catering-app.vercel.app/",
    problem: "Managing complex menu variations and real-time delivery status updates for customers.",
    approach: "Implemented a dynamic menu system and Firebase Realtime Database for live order tracking.",
    result: "Streamlined the ordering process and provided real-time visibility for deliveries.",
    metrics: ["Real-time Tracking", "Dynamic Menus"],
  },
  {
    id: "iot-monitor",
    title: "IoT Environmental Monitor",
    description:
      "Automated temperature monitoring system with Arduino.",
    tags: ["C++", "Arduino", "IoT"],
    thumbnail: "https://placehold.co/800x600/1e293b/22c55e?text=IoT+Monitor", // Menggunakan link placeholder seperti sebelumnya
    accent: "#B44FFF",
    sourceUrl: "https://github.com/joevan29",
    problem: "Building a low-cost, real-time monitoring solution for environmental metrics.",
    approach: "Integrated DHT11 sensors with Arduino Uno and RT modules for data capture.",
    result: "Provided accurate, real-time data logging for environmental temperature.",
    metrics: ["Real-time Data", "Hardware Integration"],
  },
  {
    id: "lumbung-kata",
    title: "Lumbung Kata Nusantara",
    description:
      "Digital preservation platform for Indonesian indigenous languages and dialects.",
    tags: ["Next.js", "TypeScript", "AzureAI"],
    thumbnail: "/images/lumbung_kata.png", // Ditambahkan
    accent: "#FFDE00",
    liveUrl: "https://lumbung-kata-nusantara.vercel.app/",
    problem: "Archiving and referencing obscure dialects with a user-friendly interface.",
    approach: "Developed a crowd-sourced dictionary platform with phonetic search capabilities.",
    result: "Successfully created an accessible digital archive for indigenous language preservation.",
    metrics: ["Phonetic Search", "Crowd-sourced Data"],
  },
  {
    id: "kimia-farma-big-data",
    title: "Kimia Farma Big Data",
    description:
      "Analyzing business performance data using BigQuery and Looker Studio.",
    tags: ["BigQuery", "Looker Studio", "SQL"],
    thumbnail: "/images/kimia_farma.png", // Ditambahkan
    accent: "#C8F135",
    sourceUrl: "https://github.com/Joevan29/Big-Data-Analytics-Kimia-Farma",
    problem: "Processing over 672,000 transaction rows to identify revenue patterns.",
    approach: "Engineered a unified analysis table and built a dynamic dashboard using SQL and Looker Studio.",
    result: "Visualized Rp 345.96M in revenue, enabling data-driven business performance analysis.",
    metrics: ["672,000+ rows", "Rp 345.96M revenue analyzed"],
  },
  {
    id: "react-module",
    title: "React Module Collection",
    description:
      "A comprehensive library of reusable React components for rapid UI development.",
    tags: ["React", "NPM", "Storybook"],
    thumbnail: "/images/react_module.png", // Ditambahkan
    accent: "#00E5FF",
    liveUrl: "https://reactmodule-by-jo.vercel.app/",
    problem: "Inconsistent UI patterns across multiple projects leading to code duplication.",
    approach: "Built a centralized component library and published it on NPM for easy integration.",
    result: "Reduced development time by 40% across frontend projects by eliminating UI duplication.",
    metrics: ["40% faster development", "NPM Published"],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: "kirana-megatara",
    company: "PT Kirana Megatara Tbk",
    role: "Mobile Developer Intern",
    period: "Mar 2026 - Present",
    description: [
      "Engineered a secure API Gateway using PHP (CodeIgniter 3) to bridge and serve real-time factory data for the upcoming enterprise mobile application, seamlessly orchestrating data flow across servers.",
      "Developed a recursive authentication mechanism to process complex organizational hierarchies, enabling secure, role-based data fetching specifically designed for mobile app users.",
      "Optimized real-time SAP logistics data (Shipments, Delivery, Trucking) via advanced SQL queries, ensuring low-latency data delivery to the mobile frontend tracking system.",
    ],
    type: "internship",
  },
  {
    id: "bri-life",
    company: "PT Asuransi BRI Life",
    role: "Back End Developer Intern",
    period: "May 2025 - July 2025",
    description: [
      "Developed and optimized scalable RESTful API endpoints using Node.js, significantly improving data retrieval latency for new application features.",
      "Wrote and fine-tuned complex SQL queries in PostgreSQL, optimizing database performance and ensuring strict data integrity for backend services.",
      "Designed and implemented efficient database schemas for new application modules, ensuring proper data normalization within the company's core system.",
      "Engineered a customer engagement feature by building an automated birthday notification system using Node.js scheduled tasks (Cron jobs), directly enhancing user personalization.",
    ],
    type: "internship",
  },
  {
    id: "kimia-farma",
    company: "Kimia Farma x Rakamin Academy",
    role: "Project Based Virtual Intern: Big Data Analytics",
    period: "Apr 2025 - May 2025",
    description: [
      "Managed large-scale data processing pipelines in Google BigQuery, handling over 670,000+ transaction records efficiently.",
      "Authored complex SQL queries to automate data aggregation and cleaning, ensuring data readiness for production-level dashboards.",
      "Developed dynamic visualization tools using Looker Studio to monitor key system performance metrics.",
    ],
    type: "internship",
  },
  {
    id: "jaya-konsultan",
    company: "PT. Jaya Konsultan Indonesia",
    role: "Internet of Things (IoT) Intern",
    period: "Apr 2021 - May 2021",
    description: [
      "Designed and developed a digital clock using Arduino Uno, integrating an RTC module for accurate timekeeping.",
      "Built an automatic temperature monitoring system with a DHT11/DS18B20 sensor and Arduino Uno, improving efficiency and reliability in environmental monitoring.",
    ],
    type: "internship",
  },
]
