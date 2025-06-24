import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
    return (
        <>
            <div> Meghana Masadi Portfolio</div>
            <div>
                <Navbar />
                <Contact />
                <Home />
                <About />
                <Projects />
            </div>
        </>
    );
}

export default App;
