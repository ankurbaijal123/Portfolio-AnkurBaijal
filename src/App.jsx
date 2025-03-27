import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaDownload, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Leetcode from './Leetcode';
import foodies from "./assets/foodies.png";
import gk from "./assets/gk.png";
import images from "./assets/images.png";
import namaste from "./assets/namaste.png";
import phone from "./assets/phone.png";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const projects = [
    {
      name: "Foodies App",
      description: "A food delivery app with a sleek UI, dynamic menu, and order tracking.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/ankurbaijal123/foodiesankur",
      demo: "https://namastemovie-81eb3.web.app/",
      image: foodies
    },
    {
      name: "NetflixGPT",
      description: "AI-powered recommendation system for personalized movie and TV show suggestions using ChatGPT API.",
      tech: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
      github: "https://github.com/ankurbaijal123/netflixgpt",
      demo: "https://namastemovie-81eb3.web.app/",
      image: namaste
    },
    {
      name: "GK Quiz",
      description: "A general knowledge quiz application to test and improve your GK skills.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ankurbaijal123/GK-Quiz",
      demo : "https://effulgent-sunflower-b2782e.netlify.app/",
      image: gk
    },
    {
      name: "Image Processing Website Project",
      description: "A full-stack application that allows users to upload, process, and download images with features like brightness, contrast, and rotation adjustments.",
      tech: ["React", "Node.js", "Express"],
      github: "https://github.com/ankurbaijal123/Image-Processing-Website-Project",
      image: images
    },
    {
      name: "Phone Automation",
      description: "Integrated Scrcpy for real-time screen mirroring, Appium for automation testing, Twilio API for communication, and Tesseract for OCR.",
      tech: ["Python", "Scrcpy", "Appium", "Twilio API", "Tesseract"],
      github: "https://github.com/ankurbaijal123/Phone-Automation-Testing",
      image: phone
    },
    
    {
      name: "StackMate",
      description: "A Tinder-like platform for developers to connect and collaborate on projects. (OnGoing)",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT Auth"],
      github: "https://github.com/ankurbaijal123/StackMate-Frontend",
      image: "data:image/jpeg;base64,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"
    }
];

  

  const skills = {
    languages: ["Java", "JavaScript", "Python", "C++", "C"],
    frameworks: ["React.js", "Bootstrap", "Tailwind CSS"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: ["Git", "CLI"]
  };

  const achievements = [
    "🏆 Runner-up in Eureka Challenge 2.0 by Varroc",
    "💻 5⭐ Problem Solving on HackerRank",
    "🔥 3⭐ in Java on HackerRank",
    "🏅 Participated in multiple hackathons"
  ];
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-primary text-textPrimary-dark' : 'bg-gray-50 text-textPrimary-light'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-primary/90' : 'bg-white/90'} backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold"
          >
            <span className="text-secondary">{'<'}</span>
            AB
            <span className="text-secondary">{'/>'}</span>
          </motion.h1>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl hover:text-secondary transition-colors"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a 
              href="/Ankur_Baijal_Resume.pdf" 
              download 
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary text-primary hover:bg-secondary/80 transition-colors"
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold mb-4">
              Hi there 👋, I'm <span className="text-accent">Ankur Baijal</span>
            </h1>
            <h2 className={`text-2xl ${darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'} mb-6`}>
              Final-year Computer Science student at ITM University Gwalior
              <br />
              <span className="text-secondary">Upcoming SDE Intern at Origin Medical</span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'} mb-8`}>
              Passionate about problem-solving and software development
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com/ankurbaijal123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl hover:text-secondary transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/ankur-baijal-32526022b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl hover:text-secondary transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="mailto:ankur.baijal11@gmail.com"
                className="text-3xl hover:text-secondary transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
     

      {/* Achievements Section */}
      <section className={`py-20 ${darkMode ? 'bg-primary/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-primary/30' : 'bg-gray-50 shadow-lg'}`}
              >
                <p className={`text-lg text-center ${darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}`}>{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Leetcode />

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-primary/30' : 'bg-gray-50 shadow-lg'}`}
              >
                <h3 className="text-xl font-bold mb-4 text-accent capitalize">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className={`py-20 ${darkMode ? 'bg-primary/50' : 'bg-white'}`}>
<div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className={`p-6 rounded-lg ${darkMode ? 'bg-primary/30' : 'bg-gray-50 shadow-lg'}`}
      >
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        {/* Project Name */}
        <h3 className="text-xl font-bold mb-2 text-accent">{project.name}</h3>
        
        {/* Project Description */}
        <p className={`mb-4 ${darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            View Code
          </a>
          {project.demo && 
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Live Demo
            </a>
          }
        </div>
      </motion.div>
    ))}
  </div>
</div>
</section>


      {/* Education & Coursework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education & Coursework</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-primary/30' : 'bg-gray-50 shadow-lg'}`}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">ITM University Gwalior</h3>
              <p className={`mb-6 ${darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}`}>
                B.Tech in Computer Science
              </p>
              <h4 className="text-lg font-bold mb-2">Key Coursework:</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}
                >
                  • Database Management Systems (DBMS)
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}
                >
                  • Computer Networks
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}
                >
                  • Object-Oriented Programming (OOPs)
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}
                >
                  • Operating Systems (OS)
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className={`py-20 ${darkMode ? 'bg-primary/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Soft Skills</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "⏳", title: "Time Management", description: "Efficient task prioritization and deadline management" },
              { icon: "🧠", title: "Problem Solving", description: "Analytical thinking and creative solution development" },
              { icon: "🔄", title: "Adaptability", description: "Quick learning and flexibility in dynamic environments" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-lg ${darkMode ? 'bg-primary/30' : 'bg-gray-50 shadow-lg'}`}
              >
                <div className="text-4xl mb-4 text-accent">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className={darkMode ? 'text-textSecondary-dark' : 'text-textSecondary-light'}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-secondary text-primary rounded-full shadow-lg hover:bg-secondary/80 transition-colors"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;