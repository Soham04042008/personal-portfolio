
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML & CSS", value: 90 },
  { name: "JavaScript", value: 75 },
  { name: "React", value: 70 },
  { name: "Java", value: 65 },
  { name: "Problem Solving", value: 80 },
];

const projects = [
  {
    category: "Web Development",
    title: "BookMatch",
    icon: "📚",
    number: "01",
    description:
      "A book discovery website that helps readers find books based on their interests and preferences.",
    tags: ["JavaScript", "Java", "Spring Boot"],
    link: "https://bookmatch-production-e34e.up.railway.app",
  },
  {
    category: "Web Development",
    title: "Portfolio Website",
    icon: "🌐",
    number: "02",
    description:
      "A personal portfolio showcasing my skills, education, projects, and learning journey.",
    tags: ["React", "Vite", "CSS"],
    link: "https://github.com/Soham04042008",
  },
  {
    category: "College Projects",
    title: "Vehicle Rental System",
    icon: "🚘",
    number: "03",
    description:
      "A vehicle rental web application developed to explore vehicle listings and manage rental bookings.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Soham04042008",
  },
  {
    category: "College Projects",
    title: "Vegifresh",
    icon: "🥬",
    number: "04",
    description:
      "An e-commerce project focused on browsing fresh products through a user-friendly interface.",
    tags: ["MERN Stack", "JavaScript"],
    link: "https://github.com/Soham04042008",
  },
];

function SkillBar({ name, value, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150 + index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span className="skill-percent">{value}%</span>
      </div>

      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = ["All", "Web Development", "College Projects"];

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio" id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-background" />

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          SOHAM<span>.DEV</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Connect ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero section-container">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            INFORMATION TECHNOLOGY STUDENT
          </div>

          <p className="hero-overline">HELLO, WORLD! I'M</p>

          <h1>
            Soham
            <br />
            <span className="gradient-text">Mhatre.</span>
          </h1>

          <h2 className="hero-role">
            I build <span>digital experiences.</span>
          </h2>

          <p className="hero-description">
            I'm a Second Year Information Technology student at
            Datta Meghe College of Engineering, Airoli. I enjoy
            learning web technologies, developing projects, and
            turning ideas into practical applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              Discover More ↓
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Soham04042008"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <span />

            <a href="#contact">Contact Me ↗</a>
          </div>
        </div>

        {/* Decorative developer graphic */}
        <div
          className="hero-visual"
          aria-label="Decorative developer graphic"
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-orbit orbit-three" />

          <div className="code-card">
            <div className="code-card-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-lines">
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>

              <p className="indent">
                <span className="code-cyan">name</span>:{" "}
                <span className="code-green">"Soham"</span>,
              </p>

              <p className="indent">
                <span className="code-cyan">branch</span>:{" "}
                <span className="code-green">"IT"</span>,
              </p>

              <p className="indent">
                <span className="code-cyan">learning</span>:{" "}
                <span className="code-green">true</span>,
              </p>

              <p className="indent">
                <span className="code-cyan">passion</span>:{" "}
                <span className="code-green">"Technology"</span>
              </p>

              <p>{"};"}</p>

              <p className="code-comment">
                // Build. Learn. Repeat.
              </p>
            </div>
          </div>

          <div className="floating-badge badge-code">{"</>"}</div>
          <div className="floating-badge badge-spark">✳</div>
          <div className="floating-badge badge-star">✦</div>

          <div className="visual-caption">
            <span>CREATIVE MINDSET</span>
            <span className="caption-line" />
            <span>BUILD • LEARN • REPEAT</span>
          </div>
        </div>

        <a href="#about" className="scroll-cue">
          <span className="scroll-mouse" />
          SCROLL TO EXPLORE
        </a>
      </header>

      <main>
        {/* About */}
        <section
          className="about-section section-container"
          id="about"
        >
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>

            <h2>
              More than just <span className="gradient-text">code.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-monogram">
              <div className="monogram-ring">
                <span>SM</span>
                <i className="monogram-star">✦</i>
              </div>

              <p>CURIOUS BY NATURE.</p>
              <p>DEVELOPER BY CHOICE.</p>
            </div>

            <div className="about-content">
              <p className="about-lead">
                Hey! I'm Soham Mhatre, a Second Year Information
                Technology student at Datta Meghe College of
                Engineering, Airoli.
              </p>

              <p>
                I am interested in programming, web development,
                and software technologies. I enjoy learning how
                websites and applications work, designing
                interfaces, and creating projects that help me
                improve my technical and problem-solving skills.
              </p>

              <div className="about-facts">
                <div>
                  <span>01</span>
                  <p>Always learning</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Project focused</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Future ready</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          className="skills-section section-container"
          id="skills"
        >
          <div className="section-heading">
            <span className="section-index">02 / TOOLKIT</span>

            <h2>
              Skills I'm <span className="gradient-text">building.</span>
            </h2>

            <p>
              Technologies and abilities I'm developing through
              learning, practice, and project work.
            </p>
          </div>

          <div className="skills-layout">
            <div className="skills-intro glass-card">
              <div className="skills-symbol">{"{ }"}</div>

              <h3>Learning in progress.</h3>

              <p>
                I believe consistent practice matters more than
                knowing everything. These are sample proficiency
                levels. Adjust them to reflect your actual skills.
              </p>

              <div className="tech-pills">
                <span>Frontend</span>
                <span>Backend</span>
                <span>Problem Solving</span>
              </div>
            </div>

            <div className="skills-list glass-card">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          className="education-section section-container"
          id="education"
        >
          <div className="section-heading">
            <span className="section-index">03 / JOURNEY</span>

            <h2>
              My learning <span className="gradient-text">path.</span>
            </h2>

            <p>
              My educational journey so far.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">01</div>

              <div className="timeline-card glass-card">
                <span className="timeline-label">CURRENT</span>

                <h3>Second Year Engineering</h3>

                <p className="timeline-place">
                  Datta Meghe College of Engineering, Airoli
                </p>

                <p>
                  Pursuing Information Technology and developing
                  my knowledge of programming, computer science,
                  and software development.
                </p>

                <span className="timeline-date">
                  Currently studying
                </span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">02</div>

              <div className="timeline-card glass-card">
                <span className="timeline-label">COMPLETED</span>

                <h3>Secondary School Education</h3>

                <p className="timeline-place">
                  RCF School, Alibag
                </p>

                <p>
                  Completed school education up to the 10th standard.
                </p>

                <span className="timeline-date">
                  10th Standard Completed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          className="projects-section section-container"
          id="projects"
        >
          <div className="section-heading">
            <span className="section-index">04 / SELECTED WORK</span>

            <h2>
              Things I've <span className="gradient-text">created.</span>
            </h2>

            <p>
              Projects from my development and learning journey.
            </p>
          </div>

          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "filter-active" : ""
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-art">
                  <div className="project-art-grid" />

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-icon">
                    {project.icon}
                  </span>

                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          className="contact-section section-container"
          id="contact"
        >
          <div className="contact-card">
            <span className="section-index">05 / GET IN TOUCH</span>

            <div className="contact-decoration">✳</div>

            <h2>
              Let's build something{" "}
              <span className="gradient-text">great.</span>
            </h2>

            <p>
              Have a project idea or want to connect? I'd be happy
              to hear from you.
            </p>

            <a
              className="primary-button"
              href="mailto:your.email@example.com"
            >
              Say Hello <span>↗</span>
            </a>

            <p className="contact-note">
              Replace your.email@example.com with your real email
              address before publishing.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer section-container">
        <a href="#home" className="logo">
          SOHAM<span>.DEV</span>
        </a>

        <p>Designed with curiosity. Built with code.</p>

        <a
          href="https://github.com/Soham04042008"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </div>
  );
}

export default App;
