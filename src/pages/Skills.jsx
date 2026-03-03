import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h1>My Skills</h1>
      <p className="skills-sub">
        Technologies I use to build modern, scalable web applications.
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 />
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaReact />
          <span>React</span>
        </div>

        <div className="skill-card">
          <FaNodeJs />
          <span>Node.js</span>
        </div>

        <div className="skill-card">
          <SiExpress />
          <span>Express.js</span>
        </div>

        <div className="skill-card">
          <SiMongodb />
          <span>MongoDB</span>
        </div>

        <div className="skill-card">
          <FaGitAlt />
          <span>Git & GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
