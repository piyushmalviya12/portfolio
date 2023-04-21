import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import Education from './components/Education/Education';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <PersonalDetails />
      <Footer />
    </div>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Skills from './components/Skills/Skills';
// import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/Contact/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/projects">
//           <Projects />
//         </Route>
//         <Route path="/skills">
//           <Skills />
//         </Route>
//         <Route path="/testimonials">
//           <Testimonials />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
