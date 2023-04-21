import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
       <h1><i>PIYUSH MALVIYA</i></h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#personal-details">Personal Details</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Download Resume</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#testimonials">Testimonials</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#personaldetails">PersonalDetails</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
