import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      institution: 'Birla Institute Of Technology',
      degree: 'Masters Of Computer Application',
      year: '2021 - Till Now',
      location: 'Noida, Uttar Pradesh'
    },
    {
      id: 2,
      institution: 'Govt. Nirbhay Singh Patel Science College',
      degree: 'Bachelors Of Computer Application',
      year: '2017 - 2020',
      location: 'Indore, Madhya Pradesh'
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationList.map((education) => (
            <div className="education-item" key={education.id}>
              <div className="education-details">
                <h3 className="education-institution">{education.institution}</h3>
                <p className="education-degree">{education.degree}</p>
                <p className="education-year">{education.year}</p>
                <p className="education-location">{education.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
