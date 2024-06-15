import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='containor'>
        <Home />
        <Skill />
        <Experience />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
