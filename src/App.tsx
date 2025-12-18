import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import { StarsCanvas } from './components/canvas';

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ position: 'relative', zIndex: 0 }}>
                <div style={{ position: 'relative' }}>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Extracurricular />
                <div style={{ position: 'relative', zIndex: 0 }}>
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
