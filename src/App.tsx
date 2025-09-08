import stratumLogo from '/stratum-logo-dark.svg'
import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '20px'
    }}>
      <img src={stratumLogo} className="logo" alt="Stratum Bio logo" style={{ maxWidth: '800px', height: 'auto' }} />
      <p style={{ marginTop: '20px', fontSize: '1.2em' }}>Tell us you're thinking about us</p>
      <p>
        <a href="mailto:hello@stratum.bio" style={{ color: 'white', textDecoration: 'underline' }}>hello@stratum.bio</a>
      </p>
    </div>
  )
}

export default App
