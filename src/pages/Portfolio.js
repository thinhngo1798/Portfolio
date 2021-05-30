import React, {useRef, useEffect} from 'react';
import Typed from 'typed.js';

import './PortfolioStyle.scss';
import Background from '../assets/img/background1.jpg';
import PortfolioPicture from '../assets/img/profile1.jpg';

import Header from '../components/Header';
import Experience from '../components/Experience';
import Skill from "../components/Skill";

import Skills from '../data/skills.json';
import Experiences from '../data/experiences';

function Portfolio() {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView(true);
  const experiences = Experiences;
  useEffect(() => {
     // Loading and configuring rotating text
     let allSkills = []
     let frontEnd = ""
     let backEnd = ""
     let devOps = ""
     Skills.frontend.forEach(skill => {
      frontEnd += (", " + skill.title); 
     })
     Skills.backend.forEach(skill => {
      backEnd += ", " + skill.title; 
     })
     Skills.devops.forEach(skill => {
      devOps += ", " + skill.title; 
     })
     allSkills.push(frontEnd.substring(1));
     allSkills.push(backEnd.substring(1));
     allSkills.push(devOps.substring(1));

     var options = {
       strings: allSkills,
       loop: true,
       typeSpeed: 110,
       backSpeed: 30,
       startDelay: 300,
       backDelay: 600,
     }

     new Typed(".rotating-text", options);
  }, []);

  return (
    <React.Fragment>
      <div className="main-wrapper">
      <div className="background" style={{ backgroundImage: `url(${Background})`}}>
        </div>
        <Header />
      <div className="header-margin"></div>
     <div>
        <div id="layout">
        <section id="main">
      <div>
        <h1>
          Hi! <br />
          My name is <span className="highlighted">Steven Ngo</span> and I am a <span className="highlighted">Full Stack Web Developer</span> at myDNA Life and an <span className="highlighted">Undergraduate Software Engineer</span> from Swinburne University.
        </h1>
        <h2>
          I love working with <span className="rotating-text highlighted1"></span>
        </h2>
      </div>
      <div className="main__button-container">
        <button onClick={executeScroll}> Read more about me </button> 
      </div>
    </section>
    <section id="intro" ref={myRef} >
      <div className="intro__row">
        <div className="intro__image-container">
          <div className="image" style={{ backgroundImage: `url(${PortfolioPicture})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="intro__description flex__column">
          <h3>
            I am currently in my final year of <span className="highlighted">Software Engineering </span> at Swinburne University, Australia.
          </h3>
          <h3>
            While studying, I am working part time at <a href="https://www.mydna.life/" className="highlighted">myDNA Life Company</a>, providing services and advice to improve people's health through genotyping technology and algorithm technology. <br />
            And I ❤️ connecting with other people and make new friends 😁!
          </h3>
        </div>
      </div>

      <div className="flex__column">
        {
          experiences.map((function(experience,index) {
            return <Experience key={index} experience={experience}/>
          }))
        }
      </div>
    </section>

    <section id="skills">
      <h4 className="highlighted">Front-end</h4>
      <div className="skill-container flex__row">
        {
          Skills.frontend.map((skill,key) => {
            return <Skill key={key} skill={skill}></Skill>
          })
        }
      </div>

      <h4 className="highlighted">Mobile</h4>
      <div className="skill-container flex__row">
      {
          Skills.mobile.map((skill,key) => {
            return <Skill key={key} skill={skill}></Skill>
          })
        }
      </div>

      <h4 className="highlighted">Back-end</h4>
      <div className="skill-container flex__row">
      {
          Skills.backend.map((skill,key) => {
            return <Skill key={key} skill={skill}></Skill>
          })
        }
              </div>

      <h4 className="highlighted">DevOps</h4>
      <div className="skill-container flex__row">
      {
          Skills.devops.map((skill,key) => {
            return <Skill key={key} skill={skill}></Skill>
          })
        }
      </div>

      <h4 className="highlighted">Language</h4>
      <div className="skill-container flex__row">
      {
          Skills.language.map((skill,key) => {
            return <Skill key={key} skill={skill}></Skill>
          })
        }
      </div>
    </section>
        </div>
        </div>
    </div>
    </React.Fragment>
    
  );
}
export default Portfolio;

