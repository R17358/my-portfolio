import React from "react";
import ReactTypingEffect from "react-typing-effect";
import './Intro.css'; // your custom styles

const Intro = () => {
  return (
    <div id="intro-section">
      <p id='intro'>
        <span id='welcome'>Welcome, I’m Ritesh Gangadhar Pandit</span>,<br />
        a passionate <b>AI/ML and Full-Stack Developer</b> with expertise in{' '}
        <b>MERN stack (MongoDB, Express.js, React.js, Node.js), Python, and AI technologies</b>.
      </p>

      <ReactTypingEffect
        text={[
          "I specialize in building scalable, AI-powered web applications.",
          "I create computer vision solutions and data-driven platforms.",
          "I leverage tools like CNN, GAN, Transformers, RESTful APIs, and Webhooks."
        ]}
        speed={50}
        eraseSpeed={30}
        typingDelay={500}
        eraseDelay={2000}
        cursor="_"
        className="typing-text"
      />

      <p>
        With a strong foundation in Data Structures & Algorithms and a drive for optimization, 
        I blend creativity with problem-solving to craft high-performance solutions.
      </p>

      <h2>"Impossible = I'm Possible"</h2>
    </div>
  );
};

export default Intro;
