import './App.css';


function App() {
  return (
    <div className="App">

      {/* <header className="header">
        <a href="#projects">Projects</a>
      </header> */}

      <section className="hero-section">
        <h1>Meg Benson</h1>
        <a href='#projects' className='hero-links'>Projects</a>
      </section>
      <section className='filler-section'></section>
      <section id="projects" className="projects">

        <div className="img-div">
        <a  href="https://kid-bank.mbenson3434.vercel.app/">
          <img className="kid-bank-logo" src="/goat.png" alt="" />
        </a>
        <div className="caption">
        <p>
          <a href="https://kid-bank-a931axrip.vercel.app/">Try Kid Bank</a>
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
