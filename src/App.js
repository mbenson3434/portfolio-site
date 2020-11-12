
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="header">
        <a href="#projects">Projects</a>
        <a>Resume</a>
      </header>

      <section className="whole-section2">
        <section className="hero-section">
          <div className="hello-div">
            <h1>Hello,</h1>
            <h2>I am Meg Benson!</h2>
            <p>A full stack web design student at Lambda school.</p>
          </div>
        </section>
      </section>

      <section id="projects" className="projects">

        <div className="img-div">
        <a  href="https://kid-bank-mvd23cnt3.vercel.app/">
          <img className="kid-bank-logo" src="/goat.png" alt="" />
        </a>
        <div className="caption">
        <p>
          <a href="https://kid-bank-mvd23cnt3.vercel.app/">Try Kid Bank</a>
        </p>
        <p>
          <a href="https://github.com/mbenson3434/kid-bank">gitHub</a>
        </p>
        </div>
        </div>

      </section>
    </div>
  );
}

export default App;
