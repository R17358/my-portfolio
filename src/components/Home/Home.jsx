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
                      <Link to="https://www.linkedin.com/in/ritesh-pandit-408557269">ritesh-pandit-408557269</Link>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={phone} alt="phone" />
                    </div>
                    <div className="url">
                      <Link to="/">+91 8692018519</Link>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={gmail} id="gmail" alt="Gmail" />
                    </div>
                    <div className="url">
                      <Link to="https://mail.google.com">karanstdio1234@gmail.com</Link>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon" id="github">
                      <img src={github} alt="Github" />
                    </div>
                    <div className="url">
                      <Link to="https://github.com/R17358">github.com/R17358</Link>
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
                      <Link to="https://www.geeksforgeeks.org/user/karanstdkjrv/">geekforgeeks-karanstdkjrv</Link>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={leetcode} alt="Leetcode" />
                    </div>
                    <div className="url">
                      <Link to="https://leetcode.com/u/Ritesh_0000/">Leetcode-Ritesh_0000</Link>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={ninja} id="ninja" alt="codingNinja" />
                    </div>
                    <div className="url">
                      <Link to="https://www.naukri.com/code360/profile/Ritesh5484">coding-ninjas-Ritesh5484</Link>
                    </div>
                  </div>
                  <div className="link">
                    <div className="icon">
                      <img src={youtube} alt="YouTube" />
                    </div>
                    <div className="url">
                      <Link to="https://www.youtube.com/@shivay984">@shivay984</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p id='intro'><span id='welcome'>"Welcome, I’m Ritesh Gangadhar Pandit</span>, a Computer Science Engineering student with a passion for building efficient and
            impactful solutions through technology. With a solid foundation in Data Structures and Algorithms (DSA) and
            Full-stack development. My objective is to leverage my skills in software development,
            problem-solving, and creativity to develop user-centered solutions that make a meaningful impact.
            I aspire to work on projects where I can blend cutting-edge technologies like AI and Web Development
            to solve complex challenges efficiently.Ultimately, my vision is to
            contribute to innovative projects that not only push the boundaries of technology but also prioritize user experience and accessibility. I aim to keep growing both as a developer and a creative thinker, and to stay at the forefront of technology through continuous learning and hands-on experience.
            Beyond tech, I’m also a teacher, painter, and lifelong learner.
            These interests fuel my creativity and curiosity,
            allowing me to approach challenges from unique perspectives and continuously expand my skill set.
            I'm always eager to learn, innovate, and contribute to projects that make a positive impact."</p>
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
                  <h5>Lokmanya Tilak College of Engineering</h5>
                </div>
              </div>
              <div className="right_edu_card">
                <div className="marks">
                  <h3>CGPA: 8.77/10</h3>
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
            <h4>Technologies & Tools</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>DSA</h5>
              </div>
              <div className="skill">
                <h5>React.js</h5>
              </div>
              <div className="skill">
                <h5>OpenCV</h5>
              </div>
              <div className="skill">
                <h5>Streamlit</h5>
              </div>
              <div className="skill">
                <h5>HTML-CSS</h5>
              </div>
              <div className="skill">
                <h5>Web Scrapping</h5>
              </div>
              <div className="skill">
                <h5>Numpy</h5>
              </div>
              <div className="skill">
                <h5>Pandas</h5>
              </div>
              <div className="skill">
                <h5>Windows</h5>
              </div>
              <div className="skill">
                <h5>Ubuntu</h5>
              </div>
            </div>
            <h4>Programming Languages</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>C++</h5>
              </div>
              <div className="skill">
                <h5>Python</h5>
              </div>
              <div className="skill">
                <h5>JavaScript</h5>
              </div>
              <div className="skill">
                <h5>MySQL</h5>
              </div>
            </div>
            <h4>Course Work</h4>
            <div className="subcontainer">
              <div className="skill">
                <h5>OOPS</h5>
              </div>
              <div className="skill">
                <h5>Git & GitHub</h5>
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
              <div className="skill">
                <h5>Time Management</h5>
              </div>
              <div className="skill">
                <h5>Proactive</h5>
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
                  <Link to="https://github.com/R17358/PageInsighter"><img src={github} alt="github" /></Link>
                  <Link to="https://text-visualizer-deploy.onrender.com/">visit</Link>
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
                  <Link to="https://github.com/R17358/SOEN-AI-Software-Developer"><img src={github} alt="github" /></Link>
                  <Link to="https://soen-ai-software-developer.vercel.app/">visit</Link>
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
                  <Link to="https://github.com/R17358/AI-Desktop-Assistant-streamlit"><img src={github} alt="github" /></Link>
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
                  <Link to="https://github.com/R17358/my-E-shop-Web/tree/master"><img src={github} alt="github" /></Link>
                  <Link to="https://my-e-shop-web-frontend.vercel.app/">visit</Link>
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
                  <Link to="https://github.com/R17358/MediVisual"><img src={github} alt="github" /></Link>
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
                    <Link to="https://github.com/R17358/House-price-predictor"><img src={github} alt="github" /></Link>
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
                    <Link to="https://github.com/R17358/Chat_analyzer"><img src={github} alt="github" /></Link>
                  </div>
                  <div>
                    <button onClick={seeOutput}>See Output</button>
                  </div>
                </div>
              </div>

              <div className="edu_card">
                <div className="left_edu_card">
                  <div className="course">
                    <h3>Guess Number Game</h3>
                  </div>
                  <div className="college">
                    <h5>Basic Game using HTML,CSS and JavaScript
                    </h5>
                    <ul>
                      <li><b>Objective:</b> For Entertainment
                      </li>
                      <li><b>Technologies:</b> HTML, CSS , JavaScript</li>
                      <li><b>Achievements:</b> <ul>
                        <li>JavaScript</li>
                      </ul> </li>
                    </ul>
                    {see ? <div className="out">
                      <img src={guess} />
                    </div> : <br />}
                  </div>
                </div>
                <div className="right_edu_card">
                  <div className="marks">
                    <Link to="https://github.com/R17358/Guess_no_game"><img src={github} alt="github" /></Link>
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
                    <Link to="https://github.com/R17358/AI_Coin_Counter"><img src={github} alt="github" /></Link>
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
            <button onClick={fun_more}>more projects</button>
          </div>
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