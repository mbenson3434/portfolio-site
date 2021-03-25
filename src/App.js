import './App.css';


function App() {
  return (
    <div className="App">
      {/* Top half of WebPage including name, blurb, links */}
      <section className="hero-section">
        <h1>Meghann Benson</h1>
        <h4>Full Stack Engineer</h4>
        <span className="span-links">
          <a href='#projects' className='hero-links'>Projects</a>&nbsp;&nbsp;
          <a href="https://github.com/mbenson3434" target="_blank" className='hero-links'>gitHub</a>&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/meghann-benson/" target="_blank" className='hero-links'>LinkedIn</a>
        </span>
        
      </section>

      {/* Line to divide hero section and project section */}
      <section className='filler-section'></section>

      {/* Project section */}
      <section id="projects" className="projects">

        {/* Kid Bank */}
        <div className="img-div img1">
          <div className="logo-container">
            <a className="logo" target="_blank" href="https://kid-bank.mbenson3434.vercel.app/">
              <img className="images" src="/goat.png" alt="" />
            </a>
          </div>
          <div className="caption">
          <p>
            <a target="_blank" href="https://kid-bank.vercel.app/">Try Kid Bank</a>
          </p>
          <p>
            <a target="_blank" href="https://github.com/mbenson3434/kid-bank">gitHub</a>
          </p>
          </div>
        </div>

        {/* Family Promise */}
        <div className="img-div img2">
          <div className="logo-container">
            <a className="logo" target="_blank" href="https://kid-bank.mbenson3434.vercel.app/">
              <img className="images" src="/FPlogo.png" alt="" />
            </a>
          </div>
          <div className="caption">
          <p>
            <a target="_blank" href="https://www.familypromiseofspokane.org/">FamilyPromise.org</a>
          </p>
          <p>
            <a target="_blank" href="https://github.com/mbenson3434/family-promise-spokane-fe-b">gitHub</a>
          </p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
