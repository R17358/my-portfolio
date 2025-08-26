import React, { useState } from 'react'
import { useEffect } from 'react'
import './Home.css'
import gfg from '../Home/gfg.png'
import linkedIn from '../Home/linkedin.png'
import phone from '../Home/telephone.png'
import leetcode from '../Home/leetcode.png'
import gmail from '../Home/gmail.png'
import github from '../Home/github.png'
import ninja from '../Home/ninja.png'
import youtube from '../Home/youtube.png'
import photo from '../Home/Photo.jpg'
import { Link } from 'react-router-dom'
import out1 from '../Header/textvisout1.png'
import out2 from '../Header/out2.png'
import Carousel from './Carousel'
import coin_out1 from '../Home/coin_out1.png'
import coin_out2 from '../Home/coin_out2.png'
import chat_out1 from '../Home/chat_out1.png'
import chat_out2 from '../Home/chat_out2.png'
import guess from '../Home/guess1.png'
import ecom1 from '../Home/ecom1.png'
import ecom2 from '../Home/ecom2.png'
import medi1 from '../Home/medi1.png'
import medi3 from '../Home/medi3.png'
import house1 from '../Home/house1.png'
import ai1 from '../Home/ai_ass2.png'
import ai2 from '../Home/ai_assistant1.png'
import draw1 from '../Home/draw1.png'
import draw2 from '../Home/draw2.png'
import draw3 from '../Home/draw3.png'
import draw4 from '../Home/draw4.png'
import draw0 from '../Home/draw0.png'
import draw5 from '../Home/YT Images/Buddha.webp'
import draw6 from '../Home/YT Images/krishna.webp'
import draw7 from '../Home/YT Images/Guru Nanak ji.webp'
import draw8 from '../Home/YT Images/santa.webp'
import draw9 from '../Home/YT Images/doraemon.webp'
import draw10 from '../Home/YT Images/durga ma.webp'
import draw11 from '../Home/YT Images/shiva.webp'
import draw12 from '../Home/YT Images/shivaji.webp'
import draw13 from '../Home/YT Images/ironman.webp'
import draw14 from '../Home/YT Images/Nagarjun.jpg'
import draw15 from '../Home/YT Images/robot.webp'
import draw16 from '../Home/YT Images/mogli.webp'
import draw17 from '../Home/YT Images/spiderman.webp'
import draw18 from '../Home/YT Images/Tom Jerry.webp'
import draw19 from '../Home/YT Images/sandeep.jpg'

import SOEN1 from '../Home/SOEN1.png'
import SOEN2 from '../Home/SOEN2.png'
import Resume from '../resumes/Resume'


function Home() {

  const [see, setSee] = useState(false);
  const [more, setMore] = useState(false);
  const images = [draw0, draw1, draw2, draw3, draw4, draw5, draw18, draw6, draw7, draw8, draw9, draw10, draw11, draw12, draw13, draw14, draw15, draw16, draw17, draw19];

  const fun_more = () => {
    setMore(!more);
  }
  const seeOutput = () => {
    if (!see) {
      document.body.classList.add('seen')
    } else {
      document.body.classList.remove('seen')
    }
    setSee(!see)
  }

  return (
    <div className='box'>
      <div className="container">
        <div id="intro" className="heading">
          <h1>Introduction</h1><hr />
          <div className="profileSec">
            <div className="photo">
              <img src={photo} alt="ProfilePhoto" />
            </div>
            <div className="linkContainer">
              <div className="leftLinks">
                <div className="links">
                  <div className="link">
                    <div className="icon">
                      <img src={linkedIn} alt="LinkedIn" width />
                    </div>
                    <div className="url">
                      <a
                        href="https://www.linkedin.com/in/ritesh-pandit-408557269"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ritesh-pandit-408557269</a>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={phone} alt="phone" />
                    </div>
                    <div className="url">
                      <a href="tel:+918692018519">+91 8692018519</a>
                    </div>

                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={gmail} id="gmail" alt="Gmail" />
                    </div>
                    <div className="url">
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=ritesh.pandit.lfc@gmail.com&body=Hi%20Ritesh"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ritesh.pandit.lfc@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon" id="github">
                      <img src={github} alt="Github" />
                    </div>
                    <div className="url">
                      <a
                        href="https://github.com/R17358"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/R17358</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightLinks">
                <div className="links">
                  <div className="link">
                    <div className="icon">
                      <img src={gfg} alt="geekforgeeks" width />
                    </div>
                    <div className="url">
                      <a
                        href="https://www.geeksforgeeks.org/user/karanstdkjrv/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        geekforgeeks-karanstdkjrv</a>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={leetcode} alt="Leetcode" />
                    </div>
                    <div className="url">
                      <a
                        href="https://leetcode.com/u/Ritesh_0000/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Leetcode-Ritesh_0000</a>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={ninja} id="ninja" alt="codingNinja" />
                    </div>
                    <div className="url">
                      <a
                        href="https://www.naukri.com/code360/profile/Ritesh5484"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        coding-ninjas-Ritesh5484</a>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={youtube} alt="YouTube" />
                    </div>
                    <div className="url">
                      <a
                        href="https://www.youtube.com/@shivay984"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @shivay984</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p id='intro'><span id='welcome'>"Welcome, I’m Ritesh Gangadhar Pandit</span>,
            a passionate <b>AI/ML and Full-Stack Developer</b> with expertise in <b>MERN stack (MongoDB, Express.js, React.js, Node.js), Python,
            and cutting-edge AI technologies</b>. I specialize in building scalable, AI-powered web applications, computer vision solutions,
            and data-driven platforms, leveraging tools like CNN, GAN, Transformers, RESTful APIs, and Webhooks to deliver production-ready projects.
            With a strong foundation in Data Structures & Algorithms and a constant drive for optimization, I blend creativity with problem-solving
            to craft user-focused, high-performance solutions.
            I’m a lifelong learner who thrives on innovation—whether it’s developing full-stack platforms, integrating AI models, or exploring new tech trends. Beyond tech, my interests in teaching, art, and continuous exploration fuel unique perspectives, helping me approach challenges with both logic and creativity. My goal is to keep pushing the boundaries of technology while ensuring accessibility, usability, and real-world impact.
            "</p>
          <h2>"Impossible = I'm Possible"</h2>
        </div>
        <div id="education" className="heading">
          <h1>Education</h1><hr />
          <div className="edu">
            <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>BE in Computer Science & Engineering(Data Science)</h3>
                </div>
                <div className="college">
                  <h5>Lokmanya Tilak College of Engineering (University of Mumbai)</h5>
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <h3>CGPA: 8.19/10</h3>
                </div>
                <div className="location">
                  <h5>Navi Mumbai</h5>
                </div>
              </div>
            </div>
            <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>Diploma in Mechanical Engineering</h3>
                </div>
                <div className="college">
                  <h5>K.J. Somaiya Polytechnic</h5>
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <h3>Percentage: 85.30%</h3>
                </div>
                <div className="location">
                  <h5>Vidyavihar</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="skills" className="heading">
          <h1>Skills</h1><hr />
          <div className="skillContainer">

            <h4>Programming Languages</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>C++</h5>
              </div>
              <div className="skill">
                <h5>Java</h5>
              </div>
              <div className="skill">
                <h5>Python</h5>
              </div>
              <div className="skill">
                <h5>JavaScript (ES6+)</h5>
              </div>
              <div className="skill">
                <h5>SQL</h5>
              </div>
            </div>

            <h4>Frontend</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>React.Js</h5>
              </div>
              <div className="skill">
                <h5>React Redux</h5>
              </div>
              <div className="skill">
                <h5>React Native</h5>
              </div>
              <div className="skill">
                <h5>HTML5</h5>
              </div>
              <div className="skill">
                <h5>CSS3</h5>
              </div>
              <div className="skill">
                <h5>Tailwind CSS</h5>
              </div>
              <div className="skill">
                <h5>Javascript</h5>
              </div>
              <div className="skill">
                <h5>Typescript</h5>
              </div>
              <div className="skill">
                <h5>Responsive design</h5>
              </div>
              <div className="skill">
                <h5>UI/UX Principles</h5>
              </div>

            </div>


            <h4>Backend</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>Node.Js</h5>
              </div>
              <div className="skill">
                <h5>Express.js</h5>
              </div>
              <div className="skill">
                <h5>RESTful APIs</h5>
              </div>
              <div className="skill">
                <h5>JWT Authentication</h5>
              </div>
              <div className="skill">
                <h5>MongoDB</h5>
              </div>
              <div className="skill">
                <h5>MySQL</h5>
              </div>
              <div className="skill">
                <h5>CRUD Operations</h5>
              </div>
              <div className="skill">
                <h5>API Development</h5>
              </div>
              <div className="skill">
                <h5>JSON parsing</h5>
              </div>
            </div>

            <h4>Tools & Platforms</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>Git</h5>
              </div>
              <div className="skill">
                <h5>Github</h5>
              </div>
              <div className="skill">
                <h5>Postman</h5>
              </div>
              <div className="skill">
                <h5>thunderClient</h5>
              </div>
              <div className="skill">
                <h5>VS code</h5>
              </div>
              <div className="skill">
                <h5>cursorAI</h5>
              </div>
              <div className="skill">
                <h5>Windows</h5>
              </div>
              <div className="skill">
                <h5>Linux</h5>
              </div>
              <div className="skill">
                <h5>Cloudinary</h5>
              </div>
              <div className="skill">
                <h5>Vercel</h5>
              </div>
              <div className="skill">
                <h5>Render</h5>
              </div>
              <div className="skill">
                <h5>Generative AI</h5>
              </div>
            </div>

            <h4>Python and AI centric Technologies & Tools</h4>
            <div className="subcontainer">
              <div className="skill" style={{ width: "12vw" }}>
                <h5>OpenCV (Computer vision)</h5>
              </div>
              <div className="skill">
                <h5>Flask</h5>
              </div>
              <div className="skill">
                <h5>numpy</h5>
              </div>
              <div className="skill">
                <h5>pandas</h5>
              </div>
              <div className="skill">
                <h5>Streamlit</h5>
              </div>
              <div className="skill">
                <h5>matplotlib</h5>
              </div>
              <div className="skill">
                <h5>CNN</h5>
              </div>
              <div className="skill">
                <h5>GAN</h5>
              </div>
              <div className="skill" style={{ width: "15vw" }}>
                <h5>Pretrained Models(Yolo V5, LLMs)</h5>
              </div>
              <div className="skill" style={{ width: "12vw" }}>
                <h5>AI model integration</h5>
              </div>
              <div className="skill" style={{ width: "12vw" }}>
                <h5>Kaggle</h5>
              </div>
              <div className="skill" style={{ width: "12vw" }}>
                <h5>Huggingface</h5>
              </div>
            </div>

            <h4>Course Work</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>DSA (C++, Java)</h5>
              </div>
              <div className="skill">
                <h5>OOPS</h5>
              </div>
              <div className="skill">
                <h5>Git</h5>
              </div>
              <div className="skill">
                <h5>GitHub</h5>
              </div>
              <div className="skill">
                <h5>AI-ML-DL</h5>
              </div>
              <div className="skill">
                <h5>DBMS</h5>
              </div>
              <div className="skill">
                <h5>OS</h5>
              </div>
              <div className="skill">
                <h5>Networking</h5>
              </div>
            </div>
            <h4>Soft Skills</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>Innovative</h5>
              </div>
              <div className="skill">
                <h5>Team Work</h5>
              </div>
              <div className="skill">
                <h5>Learning Attitude</h5>
              </div>
              <div className="skill" style={{ width: '12vw' }}>
                <h5>Agile Project Management</h5>
              </div>
              <div className="skill">
                <h5>Proactive</h5>
              </div>
              <div className="skill">
                <h5>Analytical Thinking</h5>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="heading">
          <h1>Projects</h1><hr />
          <div className="edu">

            <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>PageInsighter: Text Visualizer</h3>
                </div>
                <div className="college">
                  <h5>PageInsighter is a Python based Web Application that provide easy understanding to user about the textual content(Paragraph)
                    Written on the page by visualizing it.
                  </h5>
                  <ul>
                    <li><b>Objective:</b> Sometimes it become difficult and boring to understand text written on page but its images gives better idea
                      So this app will provide images and summmary relevant to context of text so it become easy and interesting to read books.
                    </li>
                    <li><b>Technologies:</b> Python, Streamlit, GAN model, OOP, Transformer, API Integrations, OCR, OpenCV, Git & Github </li>
                    <li><b>Achievements:</b> <ul>
                      <li>Learnt To Create GUIs in Python</li>
                      <li>Implemented OOPs concepts</li>
                      <li>Learnt To Integrate APIs and AI models</li>
                      <li>Learnt About Python Libraries such as OCR, Numpy</li>
                    </ul> </li>
                  </ul>
                  {see ? <div className="out">
                    <img src={out1} />
                    <img src={out2} />
                  </div> : <br />}
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <a
                    href="https://github.com/R17358/PageInsighter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>

                </div>
                <div>
                  <button onClick={seeOutput}>See Output</button>
                </div>
              </div>
            </div>

            <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>Nirmiti: AI Software Developer</h3>
                </div>
                <div className="college">
                  <h5>Developed an AI-powered web application that generates complete project code, including file structure and build instructions, based on user prompts.
                  </h5>
                  <ul>
                    <li><b>Objective:</b> generates complete project code, including file structure and build instructions, based on user prompts.
                      Implemented collaboration tools, including real-time chat for communication between developers and AI chatbot assistance.
                      Integrated copy, edit, and auto-save features, allowing users to modify code and store changes in a database.
                      Added authentication (signup/login) and role-based access for managing collaborators.
                    </li>
                    <li><b>Technologies:</b>React.js, Redux, Node.js, Express, MongoDB, WebSockets, AI Integration, Git & Github </li>
                    <li><b>Achievements:</b> <ul>
                      <li>Learn about WebSockets</li>
                      <li>Learn to parse JSON data by API responses</li>
                      <li>Learnt To Integrate APIs and AI models</li>
                      <li>Enhaced Dynamic UI building with React</li>
                    </ul> </li>
                  </ul>
                  {see ? <div className="out">
                    <img src={SOEN1} />
                    <img src={SOEN2} />
                  </div> : <br />}
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <a
                    href="https://github.com/R17358/SOEN-AI-Software-Developer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>

                  <a
                    href="https://nirmiti.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    visit
                  </a>

                </div>
                <div>
                  <button onClick={seeOutput}>See Output</button>
                </div>
              </div>
            </div>

            <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>AI Desktop Assistant</h3>
                </div>
                <div className="college">
                  <h5>It is a Python based Application that automates various computer related tasks such as browsing, OS control and monitoring
                    by taking input voice commands. also it is able to answer the questions of users. also solves maths problem by scan its image. give translations and summaries
                  </h5>
                  <ul>
                    <li><b>Objective:</b> To automate computer tasks and making smart system that helps in daily and complex works.
                    </li>
                    <li><b>Technologies:</b> Pyttsx3, SpeechRecognition, web scrapping, Python, Streamlit, OOP, API Integrations, OpenCV, Git & Github</li>
                    <li><b>Achievements:</b> <ul>
                      <li>Error handling</li>
                      <li>Implemented OOPs concepts</li>
                      <li>SpeechRecognition</li>
                      <li>Learnt About Python Libraries such as OCR, Numpy</li>
                    </ul> </li>
                  </ul>
                  {see ? <div className="out">
                    <img src={ai1} />
                    <img src={ai2} />
                  </div> : <br />}
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <a
                    href="https://github.com/R17358/AI-Desktop-Assistant-streamlit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>

                </div>
                <div>
                  <button onClick={seeOutput}>See Output</button>
                </div>
              </div>
            </div>

            <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>E-commerce web Application</h3>
                </div>
                <div className="college">
                  <h5>Full Stack(MERN) web application to buy and sell the products online.
                  </h5>
                  <ul>
                    <li><b>Objective:</b> To make a Full stack web application to help sellers to sell their products and buyers to buy the products
                    </li>
                    <li><b>Technologies:</b> React.js, HTML-CSS, JavaScript, MongoDB, Express, Node.js, Stripe, Git & Github</li>
                    <li><b>Achievements:</b> <ul>
                      <li>Learnt To Create GUIs in Python</li>
                      <li>Implemented OOPs concepts</li>
                      <li>Learnt To Integrate APIs and AI models</li>
                      <li>Learnt About Python Libraries such as OCR, Numpy</li>
                    </ul> </li>
                  </ul>
                  {see ? <div className="out">
                    <img src={ecom1} />
                    <img src={ecom2} />
                  </div> : <br />}
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <a
                    href="https://github.com/R17358/my-E-shop-Web/tree/master"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>

                  <a
                    href="https://hindustan-zone.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    visit
                  </a>

                </div>
                <div>
                  <button onClick={seeOutput}>See Output</button>
                </div>
              </div>
            </div>


            {more ? <div> <div className="edu_card">
              <div className="left_edu_card">
                <div className="course">
                  <h3>MediVisual</h3>
                </div>
                <div className="college">
                  <h5>Python based Web Application that helps patients or common person to understand medical reports easily by native language and images as well.
                  </h5>
                  <ul>
                    <li><b>Objective:</b> To fulfil the gap between professional medical terms and common patient language so they aware about their health.
                    </li>
                    <li><b>Technologies:</b> Python, Streamlit, GAN model, Text generation models, API integration, OOP, OCR</li>
                    <li><b>Achievements:</b> <ul>
                      <li>Learnt To handle multiformat files PDFs as well images or word files</li>
                      <li>Implemented OOPs concepts</li>
                      <li>Learnt To Integrate APIs and AI models</li>
                      <li>Learnt About Python Libraries such as OCR, Numpy</li>
                    </ul> </li>
                  </ul>
                  {see ? <div className="out">
                    <img src={medi1} />
                    <img src={medi3} />
                  </div> : <br />}
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <a
                    href="https://github.com/R17358/MediVisual"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><img src={github} alt="github" /></a>

                </div>
                <div>
                  <button onClick={seeOutput}>See Output</button>
                </div>
              </div>
            </div>

              <div className="edu_card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>AR Drone Game</h3>
                  </div>
                  <div className="college">
                    <h5>AR(Augmented Reality) based mobile app that provides simulation of drone and controls to tanslate in 3 dimensional space and rotations as well.
                    </h5>
                    <ul>
                      <li><b>Objective:</b> To make entertaining AR app for fun for children
                      </li>
                      <li><b>Technologies:</b> Unity, AR foundation, C#</li>
                      <li><b>Achievements:</b> <ul>
                        <li>Learnt To make AR mobile app</li>
                        <li>Learnt C# language</li>
                        <li>Learnt to create and install apk file in phone</li>
                      </ul> </li>
                    </ul>
                    {see ? <div className="out">

                    </div> : <br />}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks">
                    <Link to=""></Link>
                  </div>
                  <div>
                    <button onClick={seeOutput}>See Output</button>
                  </div>
                </div>
              </div>


              <div className="edu_card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>House Price Predictor</h3>
                  </div>
                  <div className="college">
                    <h5>Python app to predict price of houses using Machine learning.
                    </h5>
                    <ul>
                      <li><b>Objective:</b> To learn how to train and use ML model.
                      </li>
                      <li><b>Technologies:</b> Python, numpy, pandas, streamlit, Jupyter, scikilearn, kaggle</li>
                      <li><b>Achievements:</b> <ul>
                        <li>Learnt To train and test ML model</li>
                        <li>create dataframes</li>
                        <li>Data Preprocessing and analysis</li>
                      </ul> </li>
                    </ul>
                    {see ? <div className="out">
                      <img src={house1} />
                    </div> : <br />}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks">
                    <a
                      href="https://github.com/R17358/House-price-predictor"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><img src={github} alt="github" /></a>

                  </div>
                  <div>
                    <button onClick={seeOutput}>See Output</button>
                  </div>
                </div>
              </div>


              <div className="edu_card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>Chat Analyzer</h3>
                  </div>
                  <div className="college">
                    <h5>Python app to analyse the social media chats such as WhatsApp and Visualize using Machine learning and Data Visualization.
                    </h5>
                    <ul>
                      <li><b>Objective:</b> To learn how to preprocess and analyse data.
                      </li>
                      <li><b>Technologies:</b> Python, numpy, pandas, streamlit, Jupyter, scikilearn, kaggle, Matplotlib</li>
                      <li><b>Achievements:</b> <ul>
                        <li>Learnt To preprocess and analyze data</li>
                        <li>create dataframes</li>
                        <li>Data visualization</li>
                      </ul> </li>
                    </ul>
                    {see ? <div className="out">
                      <img src={chat_out1} />
                      <img src={chat_out2} />
                    </div> : <br />}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks">
                    <a
                      href="https://github.com/R17358/Chat_analyzer"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><img src={github} alt="github" /></a>

                  </div>
                  <div>
                    <button onClick={seeOutput}>See Output</button>
                  </div>
                </div>
              </div>


              <div className="edu_card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>AI coin Counter</h3>
                  </div>
                  <div className="college">
                    <h5>Python app to count coins which placed at front of camera.
                    </h5>
                    <ul>
                      <li><b>Objective:</b> To create a app for easily count coins by leveraging OpenCV based camera
                      </li>
                      <li><b>Technologies:</b> Python, numpy,OpenCV, streamlit</li>
                      <li><b>Achievements:</b> <ul>
                        <li>Learnt OpenCV</li>
                      </ul> </li>
                    </ul>
                    {see ? <div className="out">
                      <img src={coin_out1} />
                      <img src={coin_out2} />
                    </div> : <br />}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks">
                    <a
                      href="https://github.com/R17358/AI_Coin_Counter"
                      target="_blank"
                      rel="noopener noreferrer"
                    ><img src={github} alt="github" /></a>

                  </div>
                  <div>
                    <button onClick={seeOutput}>See Output</button>
                  </div>
                </div>
              </div>

            </div>
              : <br />}

          </div>
          <div className="btn">
            <button onClick={fun_more} style={{cursor:"pointer"}}>{more ? "less projects" : "more projects"}</button>
          </div>
        </div>
        
        <div id="resume" className='heading'>
          <h1>My Resumes</h1>  
          <Resume />
        </div>

        <div id="hobbies" className="heading">
          <h1>Hobbies</h1><hr />
          <div className="skillContainer">
            <div className="subcontainer">
              <div className="skill">
                <h5>Painting</h5>
              </div>
              <div className="skill">
                <h5>Teaching</h5>
              </div>
              <div className="skill">
                <h5>Learning new skills</h5>
              </div>
            </div>
          </div>
        </div>
        <Carousel images={images} />
      </div>
      <div id="experience" className="heading">
        <h1>Experience</h1><hr />
        <p>Code Crew | Core Member
          Organized hackathons, events and conducted workshops reaching over 300+ students.</p>
      </div>


    </div>
  )
}

export default Home