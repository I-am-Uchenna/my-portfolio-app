import React, { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, Download, ExternalLink, Menu,
  Code, Database, Cloud, BarChart, LineChart, FileSpreadsheet,
  GitBranch, Zap, Activity, Settings, Grid, ArrowRightLeft, BookOpen, Snowflake // Added specific icons
} from "lucide-react"; // Updated import to include all necessary icons
import { motion } from "framer-motion";

// Helper function to get the Lucide icon component based on its name
const getSkillIconComponent = (iconName) => {
  switch (iconName) {
    case "Code": return Code;
    case "Database": return Database;
    case "Cloud": return Cloud;
    case "BarChart": return BarChart;
    case "LineChart": return LineChart;
    case "FileSpreadsheet": return FileSpreadsheet;
    case "GitBranch": return GitBranch;
    case "Zap": return Zap;
    case "Activity": return Activity;
    case "Settings": return Settings;
    case "Grid": return Grid;
    case "ArrowRightLeft": return ArrowRightLeft; // Used for ETL/SSIS
    case "BookOpen": return BookOpen;
    case "Snowflake": return Snowflake;
    // Add a default case or ensure all used icon names are mapped
    default: return null;
  }
};

// --- Components ---

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = ['about', 'skills', 'competencies', 'experience', 'education', 'certifications', 'projects', 'blog', 'contact', 'affiliations']; // Updated sections
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const NavLink = ({ to, children }) => (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(to);
      }}
      className={`
        ${activeSection === to
          ? "bg-blue-700 text-white"
          : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }
        px-3 py-2 rounded-md text-sm font-medium transition-colors
      `}
    >
      {children}
    </a>
  );

  const MobileNavLink = ({ to, children }) => (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(to);
      }}
      className={`
        ${activeSection === to
          ? "bg-blue-700 text-white"
          : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }
        block px-3 py-2 rounded-md text-base font-medium transition-colors
      `}
    >
      {children}
    </a>
  );

  return (
    <nav className="bg-slate-900/80 backdrop-blur-lg fixed w-full z-50 top-0 left-0 shadow-lg rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about');}} className="text-white text-2xl font-bold rounded-lg p-2 hover:bg-slate-700 transition-colors">
              Uchenna Ejike
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="about">About</NavLink>
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="competencies">Competencies</NavLink>
              <NavLink to="experience">Experience</NavLink>
              <NavLink to="projects">Projects</NavLink> {/* Moved Projects here */}
              <NavLink to="education">Education</NavLink>
              <NavLink to="certifications">Certifications</NavLink>
              <NavLink to="blog">Blog</NavLink>
              <NavLink to="affiliations">Affiliations</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="about">About</MobileNavLink>
          <MobileNavLink to="skills">Skills</MobileNavLink>
          <MobileNavLink to="competencies">Competencies</MobileNavLink>
          <MobileNavLink to="experience">Experience</MobileNavLink>
          <MobileNavLink to="projects">Projects</MobileNavLink> {/* Moved Projects here */}
          <MobileNavLink to="education">Education</MobileNavLink>
          <MobileNavLink to="certifications">Certifications</MobileNavLink>
          <MobileNavLink to="blog">Blog</MobileNavLink>
          <MobileNavLink to="affiliations">Affiliations</MobileNavLink>
          <MobileNavLink to="contact">Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
};

// About Section
const AboutSection = () => {
  return (
    <div className="pt-16">
      <section className="text-center mb-20 px-4">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-2 backdrop-blur-lg bg-white/10 p-4 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uchenna Ejike
        </motion.h1>
        <motion.p
          className="text-base md:text-lg font-semibold mb-4 text-blue-300 backdrop-blur-lg bg-white/5 p-2 rounded-xl" // Font size reduced from text-lg to text-base
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Data Analyst | Research Analyst | Business Intelligence Analyst | SQL Developer | ML & AI Engineer
        </motion.p>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-slate-300 backdrop-blur-lg bg-white/5 p-4 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          End-to-end expertise in analytics, machine learning, and business intelligence. Turning data into decisions that matter.
        </motion.p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-md">View Portfolio</button>
          <button className="text-white border border-white hover:bg-slate-800 px-6 py-3 rounded-md font-semibold transition-colors flex items-center shadow-md">
            <Download className="mr-2 w-4 h-4" /> Resume
          </button>
        </div>
      </section>
    </div>
  );
};

// Technical Skills Section
const TechnicalSkillsSection = () => {
  const skills = [
    { name: "SQL", icon: "Code" },
    { name: "Python", icon: "Code" },
    { name: "R", icon: "Code" },
    { name: "DAX", icon: "Code" },

    { name: "PostgreSQL", icon: "Database" },
    { name: "Microsoft SQL Server", icon: "Database" },
    { name: "MySQL", icon: "Database" },
    { name: "SQLite", icon: "Database" },
    { name: "Microsoft Azure", icon: "Cloud" },
    { name: "SSIS", icon: "ArrowRightLeft" }, // SSIS with ETL icon
    { name: "Snowflake", icon: "Snowflake" }, // Added Snowflake
    { name: "BigQuery", icon: "Database" }, // Added BigQuery

    { name: "Tableau", icon: "BarChart" },
    { name: "Power BI", icon: "BarChart" },
    { name: "Seaborn", icon: "LineChart" },
    { name: "Matplotlib", icon: "LineChart" },

    { name: "Microsoft Excel", icon: "FileSpreadsheet" },
    { name: "Git", icon: "GitBranch" },
    { name: "Power Automate", icon: "Zap" },
    { name: "Google Analytics", icon: "Activity" },
    { name: "IBM SPSS", icon: "Settings" },
    { name: "Fabric", icon: "Grid" },

    { name: "ETL Tools", icon: "ArrowRightLeft" },
    { name: "Data Storytelling", icon: "BookOpen" }
  ];

  return (
    <div id="skills" className="pt-16 min-h-screen">
      <section className="max-w-5xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map(skill => {
            const IconComponent = getSkillIconComponent(skill.icon);
            return (
              <motion.div
                key={skill.name}
                className="backdrop-blur-lg bg-white/10 rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                {IconComponent && <IconComponent className="w-8 h-8 mb-2 text-blue-300" />}
                <span className="text-sm font-semibold">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// Core Competencies Section
const CoreCompetenciesSection = () => {
  const competencies = [
    "Time Series Analysis & Financial Modeling",
    "Statistical Reporting & Support",
    "Data Quality Assurance",
    "Research & Macroprudential Risk Assessment",
    "Problem Solving", // Changed from "Analytical Problem-Solving Skills"
    "Reporting & Communication",
    "Team Collaboration & Stakeholder Engagement",
    "Forecasting and Predictive Analytics"
    // Removed "Relational Database Design", "NoSQL Databases", "Cloud Platforms (AWS, Azure, GCP)"
  ];

  return (
    <div id="competencies" className="pt-16"> {/* Removed min-h-screen */}
      <section className="max-w-5xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Core Competencies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {competencies.map(comp => (
            <motion.div
              key={comp}
              className="backdrop-blur-lg bg-white/10 rounded-xl shadow-md p-4"
              whileHover={{ scale: 1.05 }}
            >
              {comp}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Professional Experience Section
const ProfessionalExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst and Business Intelligence Analyst",
      company: "Splendor Analytics",
      location: "Remote",
      duration: "Apr 2023 – Present",
      details: [
        "Conducted data quality checks on large datasets from multiple sources, ensuring accuracy for regulatory reporting and decision-making.",
        "Developed interactive dashboards in Power BI to visualize key performance indicators, operational efficiency, and financial trends.",
        "Performed exploratory data analysis (EDA) and time series modeling to support strategic policy formulation.",
        "Provided statistical reporting and insights for cross-functional teams to inform risk mitigation strategies.",
        "Optimized data retrieval processes, reducing report generation time by 25% and enhancing real-time decision-making for stakeholders."
      ]
    },
    {
      title: "Freelance Data and Research Analyst",
      company: "Upwork",
      location: "Remote",
      duration: "Apr 2023 - Jun 2024",
      details: [
        "Assisted over 12 diverse clients with comprehensive data analysis, statistical modeling, and dashboard design, delivering actionable financial insights that directly informed business objectives.",
        "Developed and deployed custom machine learning models (e.g., for predictive analytics, classification) tailored to client-specific datasets, improving forecasting accuracy by an average of 15%.",
        "Designed and implemented interactive dashboards using Tableau and Power BI, translating complex data into intuitive visualizations that enhanced client understanding of risk exposure and operational performance.",
        "Executed end-to-end data warehousing tasks, including data extraction, transformation (ETL with tools like SSIS), and loading into various database systems (e.g., PostgreSQL, Snowflake, BigQuery) to ensure data readiness for analysis.",
        "Conducted rigorous statistical analysis (e.g., regression, hypothesis testing) to validate data integrity and uncover significant trends, directly supporting client decision-making and strategic planning.",
        "Produced comprehensive reports for risk assessment, identifying and monitoring systemic vulnerabilities, which led to proactive mitigation strategies for clients."
      ]
    },
    {
      title: "Research Analyst",
      company: "Appen",
      location: "Remote",
      duration: "Apr 2018 - Jun 2024",
      details: [
        "Spearheaded large-scale data collection efforts for AI and ML projects, meticulously curating and annotating diverse datasets (e.g., image, text, audio) to train and validate machine learning models.",
        "Managed data labeling workflows for complex AI algorithms, ensuring high accuracy and consistency across millions of data points, directly impacting model performance and reliability.",
        "Collaborated closely with AI/ML engineers to define data requirements and refine annotation guidelines, optimizing data acquisition strategies for various machine learning applications.",
        "Implemented process improvements that enhanced data collection efficiency by 30%, contributing to successful project completions and accelerating AI model development cycles.",
        "Contributed to the development and evaluation of AI-powered features by providing critical data insights and feedback, ensuring alignment with project objectives and improving model robustness.",
        "Maintained stringent data integrity and confidentiality protocols throughout the data lifecycle, safeguarding sensitive information for AI and ML initiatives.",
        "Collaborated with interdisciplinary teams, playing a key role in achieving project milestones and maintaining data integrity."
      ]
    },
    {
      title: "Business Intelligence Analyst (Contract)",
      company: "Emplifi",
      location: "Remote",
      duration: "Jun 2023 - Jul 2023",
      details: [
        "Developed and managed BI dashboards using Microsoft Power BI, delivering insights that optimized operational performance.",
        "Integrated APIs to streamline data flows and enhance the accuracy of real-time analytics, resulting in a 10% improvement in reporting speed."
      ]
    },
    {
      title: "Business Intelligence Analyst (Contract)",
      company: "YDS Online",
      location: "Remote",
      duration: "Jun 2023 - Jul 2023",
      details: [
        "Designed and implemented KPI dashboards using Google Sheets, providing key insights into business operations and driving process improvements.",
        "Collaborated with stakeholders to define dashboard metrics, ensuring alignment with business objectives and enhancing decision-making capabilities."
      ]
    },
    {
      title: "Data Analyst (Internship)",
      company: "Accenture",
      location: "Remote",
      duration: "Mar 2023 - May 2023",
      details: [
        "Cleaned and prepared large datasets for analysis, ensuring data integrity and accuracy, leading to a 100% error-free reporting record.",
        "Developed analytical models that provided insights into business processes, contributing to improved decision-making.",
        "Communicated findings to stakeholders through clear and effective data visualizations and reports, improving data-driven strategies."
      ]
    },
    {
      title: "Data Analyst and Business Analyst (Internship)",
      company: "Tata Group",
      location: "Remote",
      duration: "Jan 2023 - Mar 2023",
      details: [
        "Conducted data cleaning, modeling, and analysis using SQL and Tableau, uncovering insights that supported business decisions.",
        "Collaborated with cross-functional teams to address data-related challenges, resulting in a 15% increase in project efficiency.",
        "Delivered comprehensive reports and visualizations that communicated complex data insights to stakeholders."
      ]
    }
  ];

  return (
    <div id="experience" className="pt-16"> {/* Removed min-h-screen */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Professional Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-8 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-400 text-lg mb-1">{exp.company} <span className="text-slate-400 text-sm">| {exp.location}</span></p>
              <p className="text-slate-400 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {exp.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Education Section
const EducationSection = () => {
  const educationDetails = [
    {
      degree: "Master's in Financial Engineering (currently ongoing)",
      institution: "WorldQuant University, USA",
      years: "To finish in December 2026",
      details: [
        "Comprehensive coursework in quantitative finance, stochastic calculus, financial modeling, derivatives pricing, and algorithmic trading.",
        "Focus on applying advanced mathematical and computational methods to solve complex problems in finance.",
        "Engaging with topics such as risk management, portfolio optimization, and financial econometrics."
      ]
    },
    {
      degree: "Bachelor of Science in Microbiology",
      institution: "University of Nigeria, 2021",
      years: "", // Year is part of institution now
      details: [
        "Relevant Coursework: Data Analysis and Collection, Statistics, Computer Science, Information Systems, Bioinformatics."
      ]
    }
  ];

  return (
    <div id="education" className="pt-16 min-h-screen">
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
        <div className="space-y-10">
          {educationDetails.map((edu, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-8 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 text-lg mb-1">{edu.institution}</p>
              {edu.years && <p className="text-slate-400 text-sm mb-4">{edu.years}</p>} {/* Only render if years exist */}
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {edu.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Certifications Section
const CertificationsSection = () => {
  const certifications = [
    {
      name: "Microsoft Certified Data Analyst",
      issuer: "Microsoft",
      year: "2023"
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      year: "2023"
    },
    {
      name: "Excel for Business",
      issuer: "Macquarie University, Australia",
      year: "2023"
    }
  ];

  return (
    <div id="certifications" className="pt-16 min-h-screen">
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-blue-400 text-lg">{cert.issuer}</p>
              </div>
              <p className="text-slate-400 text-sm">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const allProjects = [
    {
      title: "Global Power Plant Database Analysis",
      description: "Conducted an extensive analysis of the Global Power Plant Database, identifying key trends in energy production, fuel types, and geographical distribution to inform renewable energy strategies.",
      tech: ["Data Analysis", "Energy Sector", "Visualization"],
      link: "https://github.com/I-am-Uchenna/Global-Power-Plant-Database-Analysis"
    },
    {
      title: "Waiter Tips Prediction with Machine Learning",
      description: "Developed a machine learning model using Python to predict waiter tips based on various factors, providing insights into customer tipping behavior and potential revenue optimization.",
      tech: ["Python", "Machine Learning", "Predictive Analytics"],
      link: "https://github.com/I-am-Uchenna/Waiter-Tips-Prediction-With-Machine-Learning-Using-Python"
    },
    {
      title: "Analyzing Car Dataset Using Python",
      description: "Performed comprehensive data analysis on a car dataset using Python, uncovering insights into car features, pricing, and market trends to support automotive industry research.",
      tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
      link: "https://github.com/I-am-Uchenna/Analyzing-Car-Dataset-Using-Python"
    },
    {
      title: "SQL Data Warehouse Project",
      description: "Designed and implemented a comprehensive SQL Data Warehouse, optimizing data storage and retrieval for analytical purposes and business intelligence reporting.",
      tech: ["SQL", "Data Warehousing", "ETL"],
      link: "https://github.com/I-am-Uchenna/SQL-Data-Warehouse-Project"
    },
    {
      title: "The Bitter Winter Retreat: French Invasion of Russia in 1812 Analysis",
      description: "Analyzed the French invasion of Russia in 1812 using Power BI, visualizing historical data to uncover key factors and outcomes of the campaign.",
      tech: ["Power BI", "Historical Data Analysis", "Data Visualization"],
      link: "https://medium.com/@Splendor001/the-bitter-winter-retreat-analyzing-the-french-invasion-of-russia-in-1812-using-power-bi-a965d5278dfb?source=user_profile_page---------15-------------82b0240c74c6----------------------"
    },
    {
      title: "Healthcare Facilities & COVID-19 Data Analysis",
      description: "Conducted an in-depth analysis of healthcare facilities and COVID-19 data, providing insights and recommendations for public health strategies and resource allocation.",
      tech: ["Data Analysis", "Public Health", "Data Visualization"],
      link: "https://medium.com/@Splendor001/analysis-of-healthcare-facilities-and-covid-19-data-insights-and-recommendations-391d82381db3?source=user_profile_page---------20-------------82b0240c74c6----------------------"
    },
    {
      title: "Order and Shipping Dashboard",
      description: "Developed an interactive dashboard in Microsoft Excel to visualize order and shipping metrics, enabling efficient tracking and analysis of logistics performance.",
      tech: ["Microsoft Excel", "Data Visualization"],
      link: "https://yv0lv-my.sharepoint.com/:x:/r/personal/splendor_splendoranalytics_co/_layouts/15/Doc.aspx?sourcedoc=%7B6F1B1B5F-5663-41CD-BAB7-1884F50C7ED2%7D&file=Order%20and%20shipping%20Dashboard.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&wdOrigin=OFFICECOM-WEB.APPGALLERY%2CAPPHOME-WEB.FILEBROWSER.RECENT&wdPreviousSession=f9804a55-9a31-4fdb-a1a5-c8c42bcb04b9&wdPreviousSessionSrc=AppHomeWeb&ct=1752197258966"
    },
    {
      title: "Employee Insights Dashboard (Power BI)",
      description: "Designed and implemented a dynamic Power BI dashboard to provide key insights into employee performance, engagement, and HR metrics, supporting data-driven human resource strategies.",
      tech: ["Power BI", "HR Analytics", "Data Visualization"],
      link: "https://app.powerbi.com/view?r=eyJrIjoiNGEwOTkyODItNGMxOC00NDJhLTliYTUtNTkxZDY0OTRhNWE2IiwidCI6IjAzMWNmOTMwLTViZTctNGZhYy04MzVjLTI3MDc3YzQxZTcwOCIsImCiOjh9"
    },
    {
      title: "Child Abuse Analysis in the US (Power BI)",
      description: "Created a comprehensive Power BI dashboard for analyzing child abuse trends and patterns across the US, providing critical insights for advocacy and policy development.",
      tech: ["Power BI", "Social Impact Analytics", "Data Visualization"],
      link: "https://app.powerbi.com/view?r=eyJrIjoiM2QxOTc1NzctZWI5Yi00YzY2LWE1NzMtY2Q5YTc4ZmZjZGEwIiwidCI6IjAzMWNmOTMwLTViZTctNGZhYy04MzVjLTI3MDc3YzQxZTcwOCIsImciOjh9"
    },
    {
      title: "Retail Database Management System",
      description: "Designed and implemented a robust Retail Database Management System using T-SQL and SQL Server, optimizing data storage and retrieval for transactional data.",
      tech: ["T-SQL", "SQL Server", "Database Design"],
      link: "https://github.com/I-am-Uchenna/Retail-Database-Management-System-T-SQL-SQL-Server-"
    },
    {
      title: "Diabetes Predictor Dashboard",
      description: "Developed an interactive Diabetes Predictor Dashboard using Python and Streamlit, integrating machine learning models to provide early risk assessment based on patient data.",
      tech: ["Python", "Streamlit", "Machine Learning", "Data Visualization"],
      link: "https://github.com/I-am-Uchenna/diabetes-predictor-dashboard"
    },
    {
      title: "Healthcare Dashboard",
      description: "Created a comprehensive Healthcare Dashboard using Power BI and SQL Server, visualizing key healthcare metrics and trends to support operational efficiency and strategic planning.",
      tech: ["Power BI", "SQL Server", "Data Visualization", "Healthcare Analytics"],
      link: "https://github.com/I-am-Uchenna/Healthcare-Dashboard"
    },
    {
      title: "Superstore Retail Analysis and Predictive Modeling",
      description: "Analysis and predictive modeling for superstore retail data.",
      tech: ["Python", "Machine Learning"],
      link: "https://github.com/Merrill007/Superstore-Retail-Analysis-and-Predictive-Modeling"
    },
    {
      title: "Analyzing Netflix Data using Python",
      description: "Exploratory data analysis and insights from Netflix content data.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://github.com/Merrill007/Analyzing-Netflix-Data-using-Python/blob/main/Netflix%20Analysis.ipynb"
    },
    {
      title: "Analyzing Sales and Customer Data in AdventureWorks2019 using SQL",
      description: "SQL-based analysis of sales and customer data from AdventureWorks2019 database.",
      tech: ["SQL", "AdventureWorks2019"],
      link: "https://medium.com/@Splendor001/analyzing-sales-and-customer-data-in-adventureworks2019-using-sql-999c47bc8d80?source=user_profile---------17----------------------------"
    }
  ];

  return (
    <div id="projects" className="pt-16 min-h-screen">
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="backdrop-blur-xl bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-2 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs bg-slate-700 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-600 text-sm"
              >
                {project.link.includes("github.com") || project.link.includes("sharepoint.com") || project.link.includes("powerbi.com") || project.link.includes("medium.com") ? "View Project" : "Read Article"} <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Blog Section (kept as is, without summary generation)
const BlogSection = () => {
  const blogPosts = [
    {
      title: "A Comprehensive Guide to Creating Dynamic Reports in Excel from SQL Server Data",
      date: "July 11, 2024",
      snippet: "A detailed guide on building dynamic reports in Excel, leveraging SQL Server data for powerful and flexible data analysis and visualization.",
      link: "https://medium.com/@Splendor001/a-comprehensive-guide-to-creating-dynamic-reports-in-excel-from-sql-server-data-54396f02efe4?source=user_profile_page---------16-------------82b0240c74c6----------------------"
    },
    {
      title: "From Numbers to Narrative: A Step-by-Step Guide to Data Storytelling",
      date: "July 8, 2024",
      snippet: "Learn how to transform complex data into compelling narratives, making insights accessible and impactful for any audience.",
      link: "https://medium.com/@Splendor001/from-numbers-to-narrative-a-step-by-step-guide-to-data-storytelling-ff6d1d1f9570?source=user_profile_page---------14-------------82b0240c74c6----------------------"
    },
    {
      title: "How Data Analytics is Redefining Traditional Businesses",
      date: "July 2, 2024",
      snippet: "Explores the transformative power of data analytics in traditional industries, highlighting how data-driven strategies are driving innovation and competitive advantage.",
      link: "https://medium.com/@Splendor001/how-data-analytics-is-redefining-traditional-businesses-79728bcf245e?source=user_profile_page---------13-------------82b0240c74c6----------------------"
    },
    {
      title: "Understanding Data: Data Analysis and Data Analytics",
      date: "July 9, 2024",
      snippet: "Explores the fundamental concepts of data, data analysis, and data analytics, clarifying their distinctions and interconnectedness.",
      link: "https://medium.com/@Splendor001/understanding-data-data-analysis-and-data-analytics-75a111ddf950?source=user_profile_page---------8-------------82b0240c74c6----------------------"
    },
    {
      title: "Retail Inventory Management with Data Analytics",
      date: "July 5, 2024",
      snippet: "Discusses how data analytics can revolutionize retail inventory management, leading to optimized stock levels and reduced costs.",
      link: "https://medium.com/@Splendor001/retail-inventory-management-with-data-analytics-b9d0876acab7?source=user_profile_page---------10-------------82b0240c74c6----------------------"
    },
    {
      title: "Becoming a Data Analyst: A Roadmap for Those Who Hate Math",
      date: "June 28, 2024",
      snippet: "Provides a practical roadmap for aspiring data analysts, especially those intimidated by mathematics, offering alternative learning paths and essential skills.",
      link: "https://medium.com/@Splendor001/becoming-a-data-analyst-a-roadmap-for-those-who-hate-math-from-someone-who-understands-ef4530aa872f?source=user_profile_page---------11-------------82b0240c74c6----------------------"
    },
    {
      title: "The Rise of Semantic Layers in BI",
      date: "July 10, 2024", // Adjusted date to reflect current year or recent past
      snippet: "Explored the growing importance of semantic layers in Business Intelligence, simplifying data access and enhancing usability for all stakeholders.",
      link: "https://medium.com/@Splendor001/the-rise-of-semantic-layers-in-bi-simplifying-data-access-for-everyone-6448964163a3?source=user_profile_page---------0-------------82b0240c74c6----------------------"
    },
    {
      title: "Why Data-Driven Isn't Always the Goal",
      date: "June 25, 2024", // Adjusted date
      snippet: "Discussed the nuances of data-driven decision-making, arguing that a balanced approach considering qualitative factors is often more effective.",
      link: "https://medium.com/@Splendor001/why-data-driven-isn-t-always-the-goal-6c09b42944b7?source=user_profile_page---------1-------------82b0240c74c6----------------------"
    },
    {
      title: "What I Thought BI Was and What It Actually Is",
      date: "June 1, 2024", // Adjusted date
      snippet: "Shared personal insights and experiences on the evolution of understanding Business Intelligence, contrasting initial perceptions with real-world applications.",
      link: "https://medium.com/@Splendor001/what-i-thought-bi-was-and-what-it-actually-is-d25757283e6f?source=user_profile_page---------2-------------82b0240c74c6----------------------"
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Blog & Articles</h2>
        <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          Dive into my thoughts on data science, machine learning, and business intelligence through these articles.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{post.date}</p>
              <p className="text-slate-300 mb-4 text-sm">{post.snippet}</p>
              <a
                href={post.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-600 text-sm mt-4 block"
              >
                Read More <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Professional Affiliations Section
const ProfessionalAffiliationsSection = () => {
  const affiliations = [
    "Member, American Society of Microbiology",
    "Contributor, GitHub Open-Source Data Projects"
  ];

  return (
    <div id="affiliations" className="pt-16 min-h-screen">
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Professional Affiliations</h2>
        <div className="space-y-6">
          {affiliations.map((affiliation, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-lg text-slate-300">{affiliation}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <section className="text-center max-w-2xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-slate-300 mb-8 text-lg backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          I'm open to freelance work, full-time roles, and collaborations. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out!
        </p>
        <div className="flex justify-center gap-8 text-white">
          <motion.a
            href="mailto:uchennaejike80@gmail.com" // Updated email
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://github.com/I-am-Uchenna" // Updated with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-800 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ejike-uchenna-splendor/" // Updated LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-blue-800 hover:bg-blue-900 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          {/* Add Medium Profile link if available */}
          <motion.a
            href="https://medium.com/@Splendor001" // Updated Medium profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-700 hover:bg-slate-800 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M7.4 5.4c.3-.3.6-.5.9-.6.3-.1.6-.1.9-.1h.2c.3 0 .6.1.9.2.3.1.5.3.7.5.2.2.3.4.4.7.1.3.1.6.1.9v.2c0 .3-.1.6-.2.9-.1.3-.3.5-.5.7-.2.2-.4.3-.7.4-.3.1-.6.1-.9.1H9c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9V6c0-.3.1-.6.2-.9.1-.3.3-.5.5-.7zm10.7 0c.3-.3.6-.5.9-.6.3-.1.6-.1.9-.1h.2c.3 0 .6.1.9.2.3.1.5.3.7.5.2.2.3.4.4.7.1.3.1.6.1.9v.2c0 .3-.1.6-.2.9-.1.3-.3.5-.5.7-.2.2-.4.3-.7.4-.3.1-.6.1-.9.1h-.2c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9V6c0-.3.1-.6.2-.9.1-.3.3-.5.5-.7zM6 12c0-.3.1-.6.2-.9.1-.3.3-.5.5-.7.2-.2.4-.3.7-.4.3-.1.6-.1.9-.1h.2c.3 0 .6.1.9.2.3.1.5.3.7.5.2.2.3.4.4.7.1.3.1.6.1.9v.2c0 .3-.1.6-.2.9-.1.3-.3.5-.5.7-.2.2-.4.3-.7.4-.3.1-.6.1-.9.1H7c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9z" />
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2.9 14.5c-.3.3-.6.5-.9.6-.3.1-.6.1-.9.1h-.2c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9V7c0-.3.1-.6.2-.9.1-.3.3-.5.5-.7.2-.2.4-.3.7-.4.3-.1.6-.1.9-.1h.2c.3 0 .6.1.9.2.3.1.5.3.7.5.2.2.3.4.4.7.1.3.1.6.1.9v8.5zm5.8 0c-.3.3-.6.5-.9.6-.3.1-.6.1-.9.1h-.2c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9V7c0-.3.1-.6.2-.9.1-.3.3-.5.5-.7.2-.2.4-.3.7-.4.3-.1.6-.1.9-.1h.2c.3 0 .6.1.9.2.3.1.5.3.7.5.2.2.3.4.4.7.1.3.1.6.1.9v8.5z" />
            </svg>
          </motion.a>
        </div>
        <p className="text-slate-400 text-sm mt-12">
          &copy; {new Date().getFullYear()} Uchenna Ejike. All rights reserved. Made with data and ❤️
        </p>
      </section>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white font-sans">
      <Navbar />
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <TechnicalSkillsSection />
      </section>
      <section id="competencies">
        <CoreCompetenciesSection />
      </section>
      <section id="experience">
        <ProfessionalExperienceSection />
      </section>
      <section id="projects"> {/* Moved Projects here */}
        <ProjectsSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="certifications">
        <CertificationsSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="affiliations">
        <ProfessionalAffiliationsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
