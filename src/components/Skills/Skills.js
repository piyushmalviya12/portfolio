import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="section-heading">My Skills</h2>
        <div className="skill">
          <h3>Front-end Development</h3>
          <ul>
            <li>React Js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill">
          <h3>Back-end Development</h3>
          <ul>
            <li>Java</li>
            <li>MySQL</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
