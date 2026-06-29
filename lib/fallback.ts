import type { Project, Experience, Skill } from "@/types";

export const fallbackProjects: Project[] = [
  {
    _id: "1", title: "BikerEats Mobile App", subtitle: "Figma, Flutter and Firebase",
    description: "Bikereats is a mobile application which allows cyclists to plan their routes based on the availability of cycling racks in Singapore.",
    image: "/bikereats-demo.gif", link: "https://appetize.io/app/anry3b1c88fh2zb20qxrt4ux1m",
    repo: "https://github.com/brancyx/BikerEats-App", tags: ["Flutter", "Firebase", "Figma"],
  },
  {
    _id: "2", title: "COVID-19 Predictor", subtitle: "RShiny",
    description: "A dashboard for predicting whether a patient has Covid-19 based on symptoms and blood test results. Random forest model was used.",
    image: "/covid-explorer.gif", link: "https://brancyx.shinyapps.io/covid-dashboard/",
    repo: "https://github.com/brancyx/Covid-Dashboard", tags: ["R", "RShiny", "Machine Learning"],
  },
  {
    _id: "3", title: "RoboHydrant", subtitle: "Flutter and Firebase",
    description: "RoboHydrant is a fully integrated IoT system for hydrant testing. Developed for SCDF X IBM Lifesavers' Innovation Challenge 2021.",
    image: "/robo-hydrant.gif", link: "https://scdf-lyfsavers.s3-web.jp-tok.cloud-object-storage.appdomain.cloud/index.html",
    repo: "https://github.com/brancyx/SCDFLyfsavers", tags: ["Flutter", "Firebase", "IoT"],
  },
  {
    _id: "4", title: "DemonSlayer", subtitle: "Roblox, Flutter and Firebase",
    description: "Demon Slayer is a computer-based social game to help students learn software engineering in an engaging yet effective way.",
    image: "/demon-slayer.gif", link: "https://www.roblox.com/games/6469571208/CZ3003-Demon-Slayer",
    repo: "https://drive.google.com/file/d/1rVkOSu_w4CrebP409wTQC4WPiRJSCTfT/view?usp=sharing", tags: ["Roblox", "Flutter", "Firebase"],
  },
];

export const fallbackExperiences: Experience[] = [
  {
    _id: "1", position: "iOS Mobile Engineer Intern", company: "Oversea-Chinese Banking Corp",
    startDate: "2022", current: true,
    brief: "Built an iOS proof-of-concept application using Swift to test and integrate vendor APIs. Incorporated dependency injection design patterns to improve scalability and ease of unit testing; increased test coverage by 5%.",
    details: ["In progress"], logo: "/ocbc.png",
  },
  {
    _id: "2", position: "Group Credit Analytics Intern", company: "Oversea-Chinese Banking Corp",
    startDate: "2021", endDate: "2021", current: false,
    brief: "Developed Python scripts to automate ETL pipelines and bulk uploading of big data onto databases; reduced over 3 hours/week of BAU workload.",
    details: [
      "Developed Python scripts to automate the execution of ETL pipelines, big data processing and bulk uploading of big data onto databases; reduced over 3 hours/week of BAU workload.",
      "Pitched optimization strategies for data ingestion and modelling to the Head of Risk Portfolio Management and successfully obtained funding for the team.",
    ], logo: "/ocbc.png",
  },
  {
    _id: "3", position: "Business Analyst", company: "Accenture Pte Ltd",
    startDate: "2020", endDate: "2021", current: false,
    brief: "Designed database schemas using ER diagrams and developed SQL scripts for 3 projects; directly contributed $3600 to company revenue.",
    details: [
      "Conducted interviews with key business users of a Government Agency to collect information on business processes and clarify user requirements.",
      "Designed the database schemas using Entity-Relationship diagrams and developed the corresponding SQL scripts using Microsoft SQL Developer to retrieve data for 3 different projects; this directly contributed $3600 to the company's revenue.",
    ], logo: "/accenture.png",
  },
  {
    _id: "4", position: "Digital Transformation Intern", company: "CapitaLand Business Ltd",
    startDate: "2020", endDate: "2020", current: false,
    brief: "Built a defect tracking system on Microsoft Excel to ensure defects from eCapitaMall's payment system are fixed within KPI deadlines; reduced system downtime by 66%.",
    details: [
      "Built a defect tracking system on Microsoft Excel to ensure defects arising from eCapitaMall's payment processing system are fixed within deadlines set in KPIs; this reduced system downtime by 66%.",
      "Drove discussion with team and vendor to develop documentation of eQueue Management System (eQMS) for various stakeholders. Presented findings to the Assistant Vice President of Retail Systems.",
    ], logo: "/capitaland.png",
  },
];

export const fallbackSkills: Skill[] = [
  { _id: "1", category: "Web Development", technologies: "JavaScript, React, Next.js, Tailwind CSS" },
  { _id: "2", category: "Mobile Application Development", technologies: "Flutter, React Native" },
  { _id: "3", category: "Database Management", technologies: "SQL, NoSQL, SAS, Google Cloud Firebase" },
  { _id: "4", category: "Data Analytics", technologies: "Python, R, Tableau, Qlikview" },
  { _id: "5", category: "Project Management", technologies: "SCRUM, Agile Methodology" },
  { _id: "6", category: "Robotic Process Automation", technologies: "Python (Selenium, Win32COM...)" },
];
