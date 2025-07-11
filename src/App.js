import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, Menu } from "lucide-react";
import { motion } from "framer-motion";

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
    const sections = ['about', 'education', 'projects', 'blog', 'contact'];
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
              My Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="about">About</NavLink>
              <NavLink to="education">Education</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="blog">Blog</NavLink>
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
          <MobileNavLink to="education">Education</MobileNavLink>
          <MobileNavLink to="projects">Projects</MobileNavLink>
          <MobileNavLink to="blog">Blog</MobileNavLink>
          <MobileNavLink to="contact">Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
};

// About Section
const AboutSection = () => {
  const skills = [
    "Python", "SQL", "Power BI", "Tableau",
    "Scikit-learn", "TensorFlow", "Airflow", "Docker",
    "Azure", "AWS", "GCP", "Git"
  ];

  return (
    <div className="pt-16">
      <section className="text-center mb-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2 backdrop-blur-lg bg-white/10 p-4 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uchenna Splendor Ejike
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 backdrop-blur-lg bg-white/5 p-2 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Data Analyst | ML & AI Engineer
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
      <section className="max-w-4xl mx-auto text-center mb-20 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-slate-300 backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          I'm a data professional with a passion for solving complex problems. With years of experience in SQL development, machine learning, business intelligence, and data science, I help businesses transform their data into strategic advantage.
        </p>
      </section>
      <section className="max-w-5xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map(skill => (
            <motion.div
              key={skill}
              className="backdrop-blur-lg bg-white/10 rounded-xl shadow-md p-4"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
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
      degree: "Master of Science in Data Science",
      institution: "University of Example",
      years: "2020 - 2022",
      details: [
        "Specialized in machine learning, statistical modeling, and big data analytics.",
        "Thesis: 'Predictive Analytics for Healthcare Outcomes'.",
        "Relevant coursework: Advanced Statistics, Deep Learning, Database Systems."
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Another University",
      years: "2016 - 2020",
      details: [
        "Focused on algorithms, data structures, and software engineering.",
        "Capstone Project: 'Automated Sentiment Analysis Tool'.",
        "Awarded Dean's List for academic excellence."
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
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
              <p className="text-slate-400 text-sm mb-4">{edu.years}</p>
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

// Projects Section
const ProjectsSection = () => {
  const allProjects = [
    {
      title: "Healthcare BI Dashboard",
      description: "A Power BI dashboard analyzing hospital KPIs like gross billings, patient visits, and staff hours.",
      tech: ["Power BI", "SQL Server", "DAX"],
      link: "https://github.com/yourgithub/healthcare-dashboard"
    },
    {
      title: "E-commerce Fraud Detection",
      description: "Machine learning model detecting fraudulent transactions using scikit-learn and SMOTE.",
      tech: ["Python", "scikit-learn", "SMOTE"],
      link: "https://github.com/yourgithub/fraud-detection"
    },
    {
      title: "Time Series Cointegration Analysis",
      description: "A financial econometrics project identifying cointegrated stock pairs using ADF and Johansen tests.",
      tech: ["Python", "Statsmodels", "Matplotlib"],
      link: "https://github.com/yourgithub/cointegration-analysis"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed a machine learning model to predict customer churn for a telecom company.",
      tech: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
      link: "https://github.com/yourgithub/churn-prediction"
    },
    {
      title: "Sales Forecasting Model",
      description: "Built a sales forecasting model using historical data and time series techniques.",
      tech: ["Python", "Prophet", "Plotly"],
      link: "https://github.com/yourgithub/sales-forecasting"
    },
    {
      title: "Natural Language Processing (NLP) for Customer Feedback",
      description: "Created a system to analyze customer reviews, extracting key themes and sentiment using NLP techniques.",
      tech: ["Python", "NLTK", "SpaCy", "Flask"],
      link: "https://github.com/yourgithub/nlp-feedback"
    },
    {
      title: "Real-time Data Streaming with Kafka",
      description: "Designed and implemented a real-time data pipeline for sensor data using Apache Kafka and Spark Streaming.",
      tech: ["Kafka", "Spark", "Scala", "AWS"],
      link: "https://github.com/yourgithub/kafka-streaming"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
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
                View on GitHub <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Blog Section
const BlogSection = () => {
  const [summaries, setSummaries] = useState({});
  const [loadingPost, setLoadingPost] = useState(null);

  const blogPosts = [
    {
      title: "The Future of AI in Business Intelligence",
      date: "July 1, 2025",
      snippet: "Exploring how artificial intelligence is revolutionizing BI tools and decision-making processes.",
      fullContent: "The integration of Artificial Intelligence (AI) into Business Intelligence (BI) is no longer a futuristic concept but a rapidly evolving reality. AI-powered BI tools are transforming how businesses collect, process, and analyze data, leading to more insightful and actionable outcomes. Traditional BI relies heavily on human analysis, which can be time-consuming and prone to biases. AI, on the other hand, can process vast amounts of data at incredible speeds, identify complex patterns, and even predict future trends with high accuracy. This article delves into the various ways AI is reshaping the BI landscape, from automated data preparation to advanced predictive analytics and natural language processing capabilities. We will explore how AI algorithms can automatically clean and transform raw data, reducing the manual effort required for data preparation. Furthermore, we will discuss how machine learning models enhance predictive capabilities, allowing businesses to forecast sales, identify potential risks and optimize resource allocation. The emergence of natural language processing (NLP) in BI tools also enables users to interact with data using conversational queries, making data analysis more accessible to non-technical users. This shift empowers a broader range of employees to leverage data for decision-making, fostering a data-driven culture across the organization. Finally, we will touch upon the ethical considerations and challenges associated with AI in BI, such as data privacy and algorithmic bias, and propose strategies for responsible implementation. The future of BI is undoubtedly intertwined with AI, promising a new era of intelligent insights and unprecedented business growth."
    },
    {
      title: "Demystifying Data Pipelines: A Beginner's Guide",
      date: "June 15, 2025",
      snippet: "A step-by-step guide to understanding and building efficient data pipelines.",
      fullContent: "Data pipelines are the backbone of any data-driven organization, enabling the flow of data from various sources to its destination for analysis and reporting. For beginners, the concept of data pipelines can seem daunting, but breaking it down into manageable steps reveals its underlying simplicity. This guide aims to demystify data pipelines, providing a clear, step-by-step approach to understanding and building them. We will start by defining what a data pipeline is and why it is crucial for modern data ecosystems. Next, we will explore the different stages of a typical data pipeline: data ingestion, data processing, and data storage. Data ingestion involves collecting raw data from diverse sources, which can include databases, APIs, IoT devices, and log files. Data processing then transforms this raw data into a usable format, often involving cleaning, filtering, aggregating, and enriching the data. Finally, the processed data is loaded into a data warehouse or data lake for storage and subsequent analysis. We will discuss various tools and technologies commonly used at each stage, such as Apache Kafka for streaming data, Apache Spark for distributed processing, and cloud data warehouses like Google BigQuery or Amazon Redshift for storage. Practical examples and simple code snippets will illustrate how to implement each step, making the learning process engaging and hands-on. By the end of this guide, you will have a solid understanding of data pipelines and the confidence to start building your own."
    },
    {
      title: "Leveraging Cloud for Scalable Data Solutions",
      date: "May 20, 2025",
      snippet: "Insights into utilizing AWS, Azure, and GCP for robust and scalable data architectures.",
      fullContent: "The advent of cloud computing has revolutionized the way businesses handle and process data, offering unparalleled scalability, flexibility, and cost-effectiveness. This article provides insights into leveraging major cloud platforms—Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)—to build robust and scalable data solutions. We will begin by outlining the core benefits of migrating data infrastructure to the cloud, including reduced operational overhead, enhanced security, and the ability to scale resources on demand. Each cloud provider offers a comprehensive suite of data services tailored to different needs. For AWS, we will examine services like Amazon S3 for data storage, Amazon Redshift for data warehousing, and AWS Glue for ETL operations. On Azure, we will explore Azure Data Lake Storage, Azure Synapse Analytics, and Azure Data Factory. For GCP, we will delve into Google Cloud Storage, BigQuery, and Dataflow. We will compare and contrast the offerings of these platforms, highlighting their strengths and ideal use cases. Furthermore, we will discuss best practices for designing cloud-native data architectures, focusing on aspects such as data governance, cost optimization, and disaster recovery. Real-world scenarios will illustrate how businesses can effectively utilize these cloud services to build scalable data lakes, data warehouses, and analytics platforms that can handle massive volumes of data and complex analytical workloads. By embracing cloud technologies, organizations can unlock new possibilities for data innovation and gain a competitive edge in today's data-driven landscape."
    }
  ];

  const generateSummary = async (postTitle, fullContent) => {
    setLoadingPost(postTitle);
    setSummaries(prev => ({ ...prev, [postTitle]: '' }));

    try {
      let chatHistory = [];
      const prompt = `Summarize the following blog post content concisely:\n\n${fullContent}`;
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });

      const payload = { contents: chatHistory };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setSummaries(prev => ({ ...prev, [postTitle]: text }));
      } else {
        setSummaries(prev => ({ ...prev, [postTitle]: 'Error: Could not generate summary.' }));
      }
    } catch (error) {
      console.error("Error generating summary:", error);
      setSummaries(prev => ({ ...prev, [postTitle]: 'Error: Failed to fetch summary.' }));
    } finally {
      setLoadingPost(null);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Blog & Articles</h2>
        <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          Dive into my thoughts on data science, machine learning, and business intelligence through these articles. Click "Generate Summary" to get an AI-powered overview!
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
              {summaries[post.title] ? (
                <div className="mt-4 p-3 bg-slate-700 rounded-md text-sm text-slate-200">
                  <p className="font-semibold mb-1">Summary:</p>
                  <p>{summaries[post.title]}</p>
                </div>
              ) : (
                <button
                  onClick={() => generateSummary(post.title, post.fullContent)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold transition-colors shadow-md mt-4"
                  disabled={loadingPost === post.title}
                >
                  {loadingPost === post.title ? 'Generating...' : 'Generate Summary'}
                </button>
              )}
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
            href="mailto:you@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-800 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-blue-800 hover:bg-blue-900 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
        </div>
        <p className="text-slate-400 text-sm mt-12">
          &copy; {new Date().getFullYear()} Uchenna Ejike. All rights reserved.
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
      <section id="education">
        <EducationSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
