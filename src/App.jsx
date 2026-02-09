import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <section className="section-sticky">
        <Home />
      </section>
      <section className="section-scroll">
        <About />
      </section>
      <section className="section-scroll">
        <Projects />
      </section>
      <section className="section-scroll">
        <Contact />
      </section>
    </div>
  );
}

export default App;
