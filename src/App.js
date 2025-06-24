import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/SkillSet';

function App() {
    return (
        <>
            <div> Meghana Masadi Portfolio</div>
            <div>
                <Navbar />
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </>
    );
}

export default App;
