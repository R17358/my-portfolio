import React from "react";
import ReactTypingEffect from "react-typing-effect";
import './Intro.css';

const Intro = () => {
  return (
    <div id="intro-section" className="glass-card intro-card">
      <div className="intro-content">
        <p className='intro-text'>
          <span className='welcome-text'>Welcome, I'm Ritesh Gangadhar Pandit</span>,<br />
          a passionate <b className="highlight">AI/ML and Full-Stack Developer</b> with expertise in{' '}
          <b className="highlight">MERN stack (MongoDB, Express.js, React.js, Node.js), Python, and AI technologies</b>.
        </p>

        <div className="typing-container">
          <ReactTypingEffect
            text={[
              "I specialize in building scalable, AI-powered web applications 🚀",
              "I create computer vision solutions and data-driven platforms 🎯",
              "I leverage tools like CNN, GAN, Transformers, RESTful APIs, and Webhooks 🔧"
            ]}
            speed={50}
            eraseSpeed={30}
            typingDelay={500}
            eraseDelay={2000}
            cursor="_"
            className="typing-text"
          />
        </div>

        <p className="intro-description">
          With a strong foundation in <b>Data Structures & Algorithms</b> and a drive for optimization, 
          I blend creativity with problem-solving to craft high-performance solutions.
        </p>

        <div className="quote-section">
          <h2 className="motivational-quote">
            <span className="quote-icon">✨</span>
            "Impossible = I'm Possible"
            <span className="quote-icon">✨</span>
          </h2>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Internships</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;