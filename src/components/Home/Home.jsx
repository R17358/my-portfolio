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
import Intro from '../Intro/Intro'


function Home() {

  const [see, setSee] = useState(false);
  const [more, setMore] = useState(false);
  const [theme, setTheme] = useState('dark');
  const images = [draw0, draw1, draw2, draw3, draw4, draw5, draw18, draw6, draw7, draw8, draw9, draw10, draw11, draw12, draw13, draw14, draw15, draw16, draw17, draw19];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
    <div className='portfolio-wrapper'>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      <div className="box">
        <div className="container">
          {/* Animated Background Elements */}
          <div className="bg-decoration">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          <div id="intro" className="heading section-fade-in">
            <h1 className="section-title">
              <span className="title-accent">Introduction</span>
            </h1>
            <hr className="section-divider" />
            
            <div className="profileSec glass-card">
              <div className="photo">
                <div className="photo-frame">
                  <img src={photo} alt="Ritesh Pandit" />
                  <div className="photo-overlay"></div>
                </div>
              </div>
              
              <div className="linkContainer">
                <div className="leftLinks">
                  <div className="links">
                    <div className="link link-hover-effect">
                      <div className="icon">
                        <img src={linkedIn} alt="LinkedIn" />
                      </div>
                      <div className="url">
                        <a
                          href="https://www.linkedin.com/in/ritesh-pandit-408557269"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ritesh-pandit-408557269
                        </a>
                      </div>
                    </div>
                    
                    <div className="link link-hover-effect">
                      <div className="icon">
                        <img src={phone} alt="phone" />
                      </div>
                      <div className="url">
                        <a href="tel:+918692018519">+91 8692018519</a>
                      </div>
                    </div>
                    
                    <div className="link link-hover-effect">
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
                    
                    <div className="link link-hover-effect">
                      <div className="icon" id="github">
                        <img src={github} alt="Github" />
                      </div>
                      <div className="url">
                        <a
                          href="https://github.com/R17358"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/R17358
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rightLinks">
                  <div className="links">
                    <div className="link link-hover-effect">
                      <div className="icon">
                        <img src={gfg} alt="geekforgeeks" />
                      </div>
                      <div className="url">
                        <a
                          href="https://www.geeksforgeeks.org/user/karanstdkjrv/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          geekforgeeks-karanstdkjrv
                        </a>
                      </div>
                    </div>
                    
                    <div className="link link-hover-effect">
                      <div className="icon">
                        <img src={leetcode} alt="Leetcode" />
                      </div>
                      <div className="url">
                        <a
                          href="https://leetcode.com/u/Ritesh_0000/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Leetcode-Ritesh_0000
                        </a>
                      </div>
                    </div>
                    
                    <div className="link link-hover-effect">
                      <div className="icon">
                        <img src={ninja} id="ninja" alt="codingNinja" />
                      </div>
                      <div className="url">
                        <a
                          href="https://www.naukri.com/code360/profile/Ritesh5484"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          coding-ninjas-Ritesh5484
                        </a>
                      </div>
                    </div>
                    
                    <div className="link link-hover-effect">
                      <div className="icon">
                        <img src={youtube} alt="YouTube" />
                      </div>
                      <div className="url">
                        <a
                          href="https://www.youtube.com/@shivay984"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @shivay984
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Intro />
          </div>

          <div id="education" className="heading section-fade-in">
            <h1 className="section-title">
              <span className="title-accent">Education</span>
            </h1>
            <hr className="section-divider" />
            
            <div className="edu">
              <div className="edu_card glass-card card-hover">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>BE in Computer Science & Engineering (Data Science)</h3>
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
              
              <div className="edu_card glass-card card-hover">
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

          <div id="skills" className="heading section-fade-in">
            <h1 className="section-title">
              <span className="title-accent">Skills</span>
            </h1>
            <hr className="section-divider" />
            
            <div className="skillContainer">
              <h4 className="skill-category">Programming Languages</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>C++</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Java</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Python</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>JavaScript (ES6+)</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>SQL</h5>
                </div>
              </div>

              <h4 className="skill-category">Frontend</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>React.Js</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>React Redux</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>React Native</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>HTML5</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>CSS3</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Javascript</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Typescript</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Responsive design</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>UI/UX Principles</h5>
                </div>
              </div>

              <h4 className="skill-category">Backend</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>Node.Js</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Express.js</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>RESTful APIs</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>JWT Authentication</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>MongoDB</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>MySQL</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>CRUD Operations</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>API Development</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>JSON parsing</h5>
                </div>
              </div>

              <h4 className="skill-category">Tools & Platforms</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>Git</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Github</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Postman</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>thunderClient</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>VS code</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>cursorAI</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Windows</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Linux</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Cloudinary</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Vercel</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Render</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Generative AI</h5>
                </div>
              </div>

              <h4 className="skill-category">Python and AI centric Technologies & Tools</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>OpenCV (Computer vision)</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Flask</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>numpy</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>pandas</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Streamlit</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>matplotlib</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>CNN</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>GAN</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Pretrained Models(Yolo V5, LLMs)</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>AI model integration</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Kaggle</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Huggingface</h5>
                </div>
              </div>

              <h4 className="skill-category">Course Work</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>DSA (C++, Java)</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>OOPS</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Git</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>GitHub</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>AI-ML-DL</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>DBMS</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>OS</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Networking</h5>
                </div>
              </div>

              <h4 className="skill-category">Soft Skills</h4>
              <div className="subcontainer">
                <div className="skill skill-badge">
                  <h5>Innovative</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Team Work</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Learning Attitude</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Agile Project Management</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Proactive</h5>
                </div>
                <div className="skill skill-badge">
                  <h5>Analytical Thinking</h5>
                </div>
              </div>
            </div>
          </div>

          <div id="projects" className="heading section-fade-in">
            <h1 className="section-title">
              <span className="title-accent">Projects</span>
            </h1>
            <hr className="section-divider" />
            
            <div className="edu">
              <div className="edu_card glass-card project-card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>PageInsighter: Text Visualizer</h3>
                  </div>
                  <div className="college">
                    <h5>PageInsighter is a Python based Web Application that provide easy understanding to user about the textual content(Paragraph) Written on the page by visualizing it.</h5>
                    <ul>
                      <li><b>Objective:</b> Sometimes it become difficult and boring to understand text written on page but its images gives better idea. So this app will provide images and summary relevant to context of text so it become easy and interesting to read books.</li>
                      <li><b>Technologies:</b> Python, Streamlit, GAN model, OOP, Transformer, API Integrations, OCR, OpenCV, Git & Github </li>
                      <li><b>Achievements:</b> 
                        <ul>
                          <li>Learnt To Create GUIs in Python</li>
                          <li>Implemented OOPs concepts</li>
                          <li>Learnt To Integrate APIs and AI models</li>
                          <li>Learnt About Python Libraries such as OCR, Numpy</li>
                        </ul>
                      </li>
                    </ul>
                    {see && (
                      <div className="out output-gallery">
                        <img src={out1} alt="PageInsighter Output 1" />
                        <img src={out2} alt="PageInsighter Output 2" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks project-links">
                    <a
                      href="https://github.com/R17358/PageInsighter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <img src={github} alt="github" />
                    </a>
                  </div>
                  <div>
                    <button onClick={seeOutput} className="btn-modern">
                      {see ? 'Hide Output' : 'See Output'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="edu_card glass-card project-card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>Nirmiti: AI Software Developer</h3>
                  </div>
                  <div className="college">
                    <h5>Developed an AI-powered web application that generates complete project code, including file structure and build instructions, based on user prompts.</h5>
                    <ul>
                      <li><b>Objective:</b> generates complete project code, including file structure and build instructions, based on user prompts. Implemented collaboration tools, including real-time chat for communication between developers and AI chatbot assistance. Integrated copy, edit, and auto-save features, allowing users to modify code and store changes in a database. Added authentication (signup/login) and role-based access for managing collaborators. It is also in form of Mobile application using react native at <a target='_blank' href='https://github.com/R17358/Nirmiti-react-native-app'>Nirmiti app github</a></li>
                      <li><b>Technologies:</b> React.js, React Native, Redux, Node.js, Express, MongoDB, WebSockets, AI Integration, Git & Github </li>
                      <li><b>Achievements:</b>
                        <ul>
                          <li>Learn about WebSockets</li>
                          <li>Learn to parse JSON data by API responses</li>
                          <li>Learnt To Integrate APIs and AI models</li>
                          <li>Enhanced Dynamic UI building with React</li>
                          <li>Implemented Web as well as Mobile app development</li>
                          <li>Learnt to deploy application on render, vercel and playstore</li>
                        </ul>
                      </li>
                    </ul>
                    {see && (
                      <div className="out output-gallery">
                        <img src={SOEN1} alt="Nirmiti Output 1" />
                        <img src={SOEN2} alt="Nirmiti Output 2" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks project-links">
                    <a
                      href="https://github.com/R17358/SOEN-AI-Software-Developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <img src={github} alt="github" />
                    </a>
                    <a
                      href="https://nirmiti.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-link"
                    >
                      Visit
                    </a>
                  </div>
                  <div>
                    <button onClick={seeOutput} className="btn-modern">
                      {see ? 'Hide Output' : 'See Output'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="edu_card glass-card project-card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>AI Desktop Assistant</h3>
                  </div>
                  <div className="college">
                    <h5>It is a Python based Application that automates various computer related tasks such as browsing, OS control and monitoring by taking input voice commands. also it is able to answer the questions of users. also solves maths problem by scan its image. give translations and summaries</h5>
                    <ul>
                      <li><b>Objective:</b> To automate computer tasks and making smart system that helps in daily and complex works.</li>
                      <li><b>Technologies:</b> Pyttsx3, SpeechRecognition, web scrapping, Python, Streamlit, OOP, API Integrations, OpenCV, Git & Github</li>
                      <li><b>Achievements:</b> 
                        <ul>
                          <li>Error handling</li>
                          <li>Implemented OOPs concepts</li>
                          <li>SpeechRecognition</li>
                          <li>Learnt About Python Libraries such as OCR, Numpy</li>
                        </ul>
                      </li>
                    </ul>
                    {see && (
                      <div className="out output-gallery">
                        <img src={ai1} alt="AI Assistant Output 1" />
                        <img src={ai2} alt="AI Assistant Output 2" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks project-links">
                    <a
                      href="https://github.com/R17358/AI-Desktop-Assistant-streamlit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <img src={github} alt="github" />
                    </a>
                  </div>
                  <div>
                    <button onClick={seeOutput} className="btn-modern">
                      {see ? 'Hide Output' : 'See Output'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="edu_card glass-card project-card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>E-commerce web Application</h3>
                  </div>
                  <div className="college">
                    <h5>Full Stack(MERN) web application to buy and sell the products online.</h5>
                    <ul>
                      <li><b>Objective:</b> To make a Full stack web application to help sellers to sell their products and buyers to buy the products</li>
                      <li><b>Technologies:</b> React.js, HTML-CSS, JavaScript, MongoDB, Express, Node.js, Stripe, Git & Github</li>
                      <li><b>Achievements:</b> 
                        <ul>
                          <li>Learnt Payment Gateway Integration</li>
                          <li>Implemented Authentication and Authorization</li>
                          <li>Cart Management and State Management</li>
                          <li>RESTful API Development</li>
                        </ul>
                      </li>
                    </ul>
                    {see && (
                      <div className="out output-gallery">
                        <img src={ecom1} alt="E-commerce Output 1" />
                        <img src={ecom2} alt="E-commerce Output 2" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks project-links">
                    <a
                      href="https://github.com/R17358/my-E-shop-Web/tree/master"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <img src={github} alt="github" />
                    </a>
                    <a
                      href="https://hindustan-zone.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-link"
                    >
                      Visit
                    </a>
                  </div>
                  <div>
                    <button onClick={seeOutput} className="btn-modern">
                      {see ? 'Hide Output' : 'See Output'}
                    </button>
                  </div>
                </div>
              </div>

              {more && (
                <div>
                  <div className="edu_card glass-card project-card">
                    <div className="left_edu_card">
                      <div className="course">
                        <h3>MediVisual</h3>
                      </div>
                      <div className="college">
                        <h5>Python based Web Application that helps patients or common person to understand medical reports easily by native language and images as well.</h5>
                        <ul>
                          <li><b>Objective:</b> To fulfil the gap between professional medical terms and common patient language so they aware about their health.</li>
                          <li><b>Technologies:</b> Python, Streamlit, GAN model, Text generation models, API integration, OOP, OCR</li>
                          <li><b>Achievements:</b> 
                            <ul>
                              <li>Learnt To handle multiformat files PDFs as well images or word files</li>
                              <li>Implemented OOPs concepts</li>
                              <li>Learnt To Integrate APIs and AI models</li>
                              <li>Learnt About Python Libraries such as OCR, Numpy</li>
                            </ul>
                          </li>
                        </ul>
                        {see && (
                          <div className="out output-gallery">
                            <img src={medi1} alt="MediVisual Output 1" />
                            <img src={medi3} alt="MediVisual Output 2" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="right_edu_card">
                      <div className="marks project-links">
                        <a
                          href="https://github.com/R17358/MediVisual"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img src={github} alt="github" />
                        </a>
                      </div>
                      <div>
                        <button onClick={seeOutput} className="btn-modern">
                          {see ? 'Hide Output' : 'See Output'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="edu_card glass-card project-card">
                    <div className="left_edu_card">
                      <div className="course">
                        <h3>AR Drone Game</h3>
                      </div>
                      <div className="college">
                        <h5>AR(Augmented Reality) based mobile app that provides simulation of drone and controls to translate in 3 dimensional space and rotations as well.</h5>
                        <ul>
                          <li><b>Objective:</b> To make entertaining AR app for fun for children</li>
                          <li><b>Technologies:</b> Unity, AR foundation, C#</li>
                          <li><b>Achievements:</b> 
                            <ul>
                              <li>Learnt To make AR mobile app</li>
                              <li>Learnt C# language</li>
                              <li>Learnt to create and install apk file in phone</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right_edu_card">
                      <div className="marks">
                        <Link to=""></Link>
                      </div>
                      <div>
                        <button onClick={seeOutput} className="btn-modern">
                          {see ? 'Hide Output' : 'See Output'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="edu_card glass-card project-card">
                    <div className="left_edu_card">
                      <div className="course">
                        <h3>House Price Predictor</h3>
                      </div>
                      <div className="college">
                        <h5>Python app to predict price of houses using Machine learning.</h5>
                        <ul>
                          <li><b>Objective:</b> To learn how to train and use ML model.</li>
                          <li><b>Technologies:</b> Python, numpy, pandas, streamlit, Jupyter, scikilearn, kaggle</li>
                          <li><b>Achievements:</b> 
                            <ul>
                              <li>Learnt To train and test ML model</li>
                              <li>create dataframes</li>
                              <li>Data Preprocessing and analysis</li>
                            </ul>
                          </li>
                        </ul>
                        {see && (
                          <div className="out output-gallery">
                            <img src={house1} alt="House Price Predictor Output" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="right_edu_card">
                      <div className="marks project-links">
                        <a
                          href="https://github.com/R17358/House-price-predictor"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img src={github} alt="github" />
                        </a>
                      </div>
                      <div>
                        <button onClick={seeOutput} className="btn-modern">
                          {see ? 'Hide Output' : 'See Output'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="edu_card glass-card project-card">
                    <div className="left_edu_card">
                      <div className="course">
                        <h3>Chat Analyzer</h3>
                      </div>
                      <div className="college">
                        <h5>Python app to analyse the social media chats such as WhatsApp and Visualize using Machine learning and Data Visualization.</h5>
                        <ul>
                          <li><b>Objective:</b> To learn how to preprocess and analyse data.</li>
                          <li><b>Technologies:</b> Python, numpy, pandas, streamlit, Jupyter, scikilearn, kaggle, Matplotlib</li>
                          <li><b>Achievements:</b> 
                            <ul>
                              <li>Learnt To preprocess and analyze data</li>
                              <li>create dataframes</li>
                              <li>Data visualization</li>
                            </ul>
                          </li>
                        </ul>
                        {see && (
                          <div className="out output-gallery">
                            <img src={chat_out1} alt="Chat Analyzer Output 1" />
                            <img src={chat_out2} alt="Chat Analyzer Output 2" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="right_edu_card">
                      <div className="marks project-links">
                        <a
                          href="https://github.com/R17358/Chat_analyzer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img src={github} alt="github" />
                        </a>
                      </div>
                      <div>
                        <button onClick={seeOutput} className="btn-modern">
                          {see ? 'Hide Output' : 'See Output'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="edu_card glass-card project-card">
                    <div className="left_edu_card">
                      <div className="course">
                        <h3>AI coin Counter</h3>
                      </div>
                      <div className="college">
                        <h5>Python app to count coins which placed at front of camera.</h5>
                        <ul>
                          <li><b>Objective:</b> To create a app for easily count coins by leveraging OpenCV based camera</li>
                          <li><b>Technologies:</b> Python, numpy, OpenCV, streamlit</li>
                          <li><b>Achievements:</b> 
                            <ul>
                              <li>Learnt OpenCV</li>
                            </ul>
                          </li>
                        </ul>
                        {see && (
                          <div className="out output-gallery">
                            <img src={coin_out1} alt="Coin Counter Output 1" />
                            <img src={coin_out2} alt="Coin Counter Output 2" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="right_edu_card">
                      <div className="marks project-links">
                        <a
                          href="https://github.com/R17358/AI_Coin_Counter"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img src={github} alt="github" />
                        </a>
                      </div>
                      <div>
                        <button onClick={seeOutput} className="btn-modern">
                          {see ? 'Hide Output' : 'See Output'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="btn">
              <button onClick={fun_more} className="btn-modern btn-more">
                {more ? 'Less Projects' : 'More Projects'}
              </button>
            </div>
          </div>

          <div id="resume" className='heading section-fade-in'>
            <h1 className="section-title">
              <span className="title-accent">My Resumes</span>
            </h1>
            <hr className="section-divider" />
            <Resume />
          </div>

          <div id="hobbies" className="heading section-fade-in">
            <h1 className="section-title">
              <span className="title-accent">Hobbies</span>
            </h1>
            <hr className="section-divider" />
            
            <div className="skillContainer">
              <div className="subcontainer">
                <div className="skill skill-badge hobby-badge">
                  <h5>🎨 Painting</h5>
                </div>
                <div className="skill skill-badge hobby-badge">
                  <h5>📚 Teaching</h5>
                </div>
                <div className="skill skill-badge hobby-badge">
                  <h5>🚀 Learning new skills</h5>
                </div>
              </div>
            </div>
          </div>
          
          <Carousel images={images} />

          <div id="experience" className="heading section-fade-in">
            <h1 className="section-title">
              <span className="title-accent">Experience</span>
            </h1>
            <hr className="section-divider" />
            
            <div className="experience-item glass-card">
              <h2>AI/ML Development Intern — Idolize business solutions</h2>
              <span className="date">Oct 2025</span>
              <ul>
                <li>Built RAG-based document intelligence system using LangChain for PDF/image query answering</li>
                <li>Developed autonomous AI agent with tool-use capabilities (web search, conversation, vision, note-taking) using LangChain and Gemini Vision API</li>
                <li>Created computer vision solution with OpenCV for automated form field verification detection</li>
                <li>Implemented OCR pipeline using EasyOCR for Aadhaar card data extraction and database automation</li>
              </ul>
            </div>

            <div className="experience-item glass-card">
              <h2>Software Developer Intern — Advin Softwares pvt. ltd.</h2>
              <span className="date">Nov 2025 – Jan 2026</span>
              <ul>
                <li>Worked on Angular-based enterprise web applications integrated with REST APIs and SQL Stored Procedures</li>
                <li>Developed core features including pagination, search functionality, dashboards, and form validations</li>
                <li>Fixed business logic issues and improved data consistency across multiple modules</li>
                <li>Enhanced financial calculations, subscription management, support desk, and purchase workflows</li>
                <li>Collaborated closely with backend developers and UI/UX designers in an agile development environment</li>
              </ul>
            </div>

            <div className="experience-item glass-card">
              <h2>Full-stack Development Intern — InternPe</h2>
              <span className="date">Mar 2023 – May 2023</span>
              <ul>
                <li>Developed and deployed <strong>full-stack applications</strong> with <strong>Node.js as main backend</strong> and <strong>Python backend for AI integration</strong>.</li>
                <li>Built an AI-powered content creation app where users input prompts to generate lyrics, create images, produce songs, and generate short videos</li>
                <li>Implemented <strong>REST APIs</strong> for seamless communication between Node.js and Python backends</li>
                <li>Enhanced application performance and API testing by <strong>40%</strong> using <strong>Postman</strong></li>
                <li>Handled <strong>dynamic data management</strong> efficiently, ensuring smooth AI integration and user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home