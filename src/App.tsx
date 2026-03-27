import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import FuturePlans from './components/FuturePlans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050B14' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <FuturePlans />
      </main>
      <Footer />
    </div>
  );
}

export default App;
