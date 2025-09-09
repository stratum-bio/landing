import stratumLogo from '/stratum-logo-dark.svg'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <img src={stratumLogo} className="logo app-logo" alt="Stratum Bio logo" />
      <p className="app-text">Tell us you're thinking about us</p>
      <p>
        <a href="mailto:hello@stratum.bio" className="app-link">hello@stratum.bio</a>
      </p>
    </div>
  )
}

export default App
