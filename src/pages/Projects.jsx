import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <p className="projects-sub">
        Real-world applications I have built using modern web technologies.
      </p>

      <div className="projects-grid">

        {/* Project 1 - Quiz App */}
        <div className="project-card">
          <h3>Quiz App</h3>
          <p>
            An interactive quiz application built using HTML, CSS and JavaScript
            with score tracking.
          </p>
          <span>HTML • CSS • JavaScript</span>

          <div className="project-links">
            <a
              href="https://github.com/umadevi1610-bk/quiz-app"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://umadevi1610-bk.github.io/quiz-app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo

            </a>
          </div>
        </div>

        {/* Project 2 - Full Stack Auth */}
        <div className="project-card">
          <h3>Full Stack Authentication System</h3>

          <p>
            A secure full-stack authentication system built using the MERN stack.
            Users can register, login, and access protected routes using JWT-based authentication.
          </p>

          <span>MERN Stack (MongoDB • Express • React • Node.js)</span>

          <div className="project-links">
            <a
              href="https://github.com/umadevi1610-bk/fullstack-auth"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 - Jobnet Final Year Project */}
        <div className="project-card">
          <h3>Jobnet – Final Year Project</h3>

          <p>
            Jobnet is a full-stack job portal web application built using Django.
            It allows users to register, login, upload resumes, and apply for jobs.
            The system includes authentication, resume management, and admin controls.
          </p>

          <span>Python • Django • HTML • CSS • SQLite</span>

          <div className="project-links">
            <a
              href="https://github.com/umadevi1610-bk/Jobnet"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>

            <a
              href="https://jobnet-mocha.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

          </div>
        </div>

        {/* Project 4 - Smart Expense System */}
        <div className="project-card">
          <h3>Smart Expense System</h3>

          <p>
            A smart expense tracking web application that helps users manage
            daily expenses, monitor spending, and organize financial records efficiently.
          </p>

          <span>React • JavaScript • CSS</span>

          <div className="project-links">
            <a
              href="https://lnkd.in/gGf-tnYc"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>

            <a
              href="https://lnkd.in/gKhH-_rb"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 5 - Weather Dashboard */}
        <div className="project-card">
          <h3>Weather Dashboard</h3>

          <p>
            A responsive weather dashboard application that provides real-time
            weather updates, temperature, humidity, and forecast details for different cities.
          </p>

          <span>React • API • CSS • JavaScript</span>

          <div className="project-links">
            <a
              href="https://github.com/umadevi1610-bk/weather-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>

            <a
              href="https://weather-dashboard-y7n5.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;