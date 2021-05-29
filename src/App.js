import React, {useRef, useEffect} from 'react';
import '../src/styles.scss'
import Background from '../src/assets/img/background.jpeg';
import PortfolioPicture from '../src/assets/img/profile.png';
import Header from "./components/Header";
import Typed from 'typed.js';
import Skills from './data/skills.json'
function App() {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView;
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
          My name is <span className="highlighted">Steven Ngo</span> and I am a undergraduate full stack developer.
        </h1>
        <h2>
          I love working with <span className="rotating-text highlighted"></span>
        </h2>
      </div>
      <div className="main__button-container">
        <button onClick={executeScroll}> Read more about me </button> 
      </div>
    </section>
    <section id="intro" ref={myRef} >
      <div className="intro__row">
        <div className="intro__image-container">
          <div className="image" style={{ backgroundImage: `url(${PortfolioPicture})`}}></div>
        </div>
        <div className="intro__description flex__column">
          <h3>
            I am currently in my final year of <span className="highlighted">Software Engineering </span> at Swinburne University, Australia.
          </h3>

          <h4>
            While studying, I am also working at <a href="https://www.mydna.life/" className="highlighted">myDNA Digital Company</a>, providing services/advices to improve people's health through genotyping technology and algorithm technology.
            And I ❤️ connecting with other people and make new friend 😁!
          </h4>
        </div>
      </div>

      <div className="flex__column">
        {/* <Experience :experience="experience" :skillList="skillList" v-bind:key="experience.company" v-for="experience in experiences"/> */}
      </div>
    </section>

    {/* <!--Skill section -->
    <section id="skills">
      <h4 className="highlighted">Front-end</h4>
      <div className="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in frontend"/>
      </div>

      <h4 className="highlighted">Mobile</h4>
      <div className="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in mobile"/>
      </div>

      <h4 className="highlighted">Back-end</h4>
      <div className="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in backend"/>
      </div>

      <h4 className="highlighted">DevOps</h4>
      <div className="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in devops"/>
      </div>

      <h4 className="highlighted">Language</h4>
      <div className="skill-container flex__row">
        <Skill :skill="skill"  v-bind:key="skill.title" v-for="skill in language"/>
      </div>
    </section> */}
        </div>
        </div>
    </div>
    </React.Fragment>
    
  );
}
export default App;

