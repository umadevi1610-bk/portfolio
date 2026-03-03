import "./Home.css";
import myPhoto from "../assets/myphoto.jpeg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
  <div className="image-container">
    <img src={myPhoto} alt="Profile" />
  </div>
</div>

      <div className="home-right">
        <h1>Hi, I'm Umadevi balakrishnan 👋</h1>
        <h3>Full Stack MERN Developer</h3>

        <p>
          I’m a passionate Full Stack MERN Developer specializing in building scalable, user-focused web applications using modern technologies like MongoDB, Express.js, React.js, and Node.js.
        </p>

        <p>
          I enjoy turning ideas into real-world solutions and continuously improving my backend architecture and problem-solving skills. Currently, I am focused on developing production-ready projects and preparing for full-time developer opportunities.
        </p>
      </div>
    </section>
  );
};

export default Home;
