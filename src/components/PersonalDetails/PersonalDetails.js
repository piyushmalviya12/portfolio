import React from 'react';
import './PersonalDetails.css';

const PersonalDetails = () => {
  const hobbies = [
    {
      id: 1,
      name: 'Sketching And Drawing',
      image: 'https://pbs.twimg.com/media/D5chm2QXkAAJtwI.jpg',
    },
    {
      id: 2,
      name: 'Listing Music',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEEtWvei3VFzLYD6LusqKtu7W9Giucjbc2Q&usqp=CAU',
    },
    
  ];

  return (
    <section className="personal-details-section" id="personal-details">
      <div className="container">
        <h2 className="section-title">Personal Details</h2>
        <div className="personal-details-grid">
          <div className="personal-details-item">
            <i className="fa fa-phone"></i>
            <div className="personal-details-text">
              <p className="personal-details-label">Contact Number:</p>
              <p className="personal-details-value">+91 8962775590</p>
            </div>
          </div>
          <div className="personal-details-item">
            <i className="fa fa-envelope"></i>
            <div className="personal-details-text">
              <p className="personal-details-label">Email ID:</p>
              <p className="personal-details-value">piyushmalviya3641@gmail.com</p>
            </div>
          </div>
          <div className="personal-details-item">
            <i className="fa fa-heart"></i>
            <div className="personal-details-text">
              <p className="personal-details-label">Hobbies:</p>
              <div className="personal-details-hobbies">
                {hobbies.map((hobby) => (
                  <div className="personal-details-hobby" key={hobby.id}>
                    <img src={hobby.image} alt={hobby.name} />
                    <p>{hobby.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="personal-details-item">
            <i className="fa fa-envelope"></i>
            <div className="personal-details-text" id="resume">
             <button> <p className="personal-details-label" ><a href="resume.pdf" download>Download Resume</a></p></button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
