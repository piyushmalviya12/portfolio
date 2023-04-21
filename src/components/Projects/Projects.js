import React from 'react';
import './Projects.css';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'React Calculator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lacinia lorem, a lobortis sapien maximus in. Integer mattis convallis purus, sed egestas dolor gravida non. Sed laoreet varius orci, vitae mattis mauris suscipit a. ',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*vv1gRwRHiRWEC7GXXolxMQ.png',
      link: 'https://github.com/piyushmalviya12/React-Caculator'
    },
    {
      id: 2,
      title: 'Blood Bank Management System',
      description: 'Proin dapibus commodo velit. Nunc ultricies ex auctor sem tincidunt dapibus. Proin sed lacus at metus hendrerit iaculis vel vel elit. Nam euismod metus eget elit rutrum, vel pretium nisi iaculis. Donec vitae facilisis ante. Sed maximus purus quis velit commodo commodo. ',
      image: 'https://5.imimg.com/data5/UJ/XU/RF/SELLER-25744477/blood-bank-management-system-500x500.jpg',
      link: 'https://github.com/piyushmalviya12/Blood-Bank-Management-System'
    },
    {
      id: 3,
      title: 'Hotstar Clone',
      description: 'Nullam lobortis sapien a lorem semper, vel dictum leo tempus. Donec ac malesuada velit. Vestibulum suscipit eget nunc in volutpat. Pellentesque rhoncus, turpis id blandit volutpat, massa ipsum faucibus est, sed aliquet risus dolor vel eros. ',
      image: 'https://repository-images.githubusercontent.com/618076926/821b1ab6-7853-4e1c-857d-f91dc1362bd2',
      link: 'https://github.com/piyushmalviya12/HotStarClone'
    }
  ];

  return (
    <section className="projects-section" id="project">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
