import stratumLogo from '/stratum-logo-dark.svg'
import './App.css'

const Landing = () => {
  return (
    <>
      <div className="app-container" style={{ height: '100vh', width: '100vw', backgroundColor: '#10273c' }}>
        <img src={stratumLogo} className="logo app-logo" alt="Stratum Bio logo" />
        <p className="app-text">Tell us you're thinking about us</p>
        <p>
          <a href="mailto:hello@stratum.bio" className="app-link">hello@stratum.bio</a>
        </p>
      </div>
      <div style={{ 
        height: '30vh', 
        width: '100vw', 
        background: 'linear-gradient(to bottom, #10273c, #f9f9f9)' 
      }} />
    </>
  )
}

export default Landing