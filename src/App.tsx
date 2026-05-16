import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import CurrentlyStudying from './components/CurrentlyStudying';
import ThingsILove from './components/ThingsILove';
import Values from './components/Values';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body text-dark">
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Skills />
      <CurrentlyStudying />
      <ThingsILove />
      <Values />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
}
