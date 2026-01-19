import stratumLogo from '/stratum-logo-dark.svg'
import './App.css'

const Landing = () => {
  return (
    <>
      <div className="app-container flex flex-col items-center justify-center text-center text-white p-5 md:p-[10px] h-screen w-screen bg-[#10273c]">
        <img 
          src={stratumLogo} 
          className="logo app-logo max-w-[800px] h-auto md:max-w-full transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
          alt="Stratum Bio logo" 
        />
        <p>
          <a href="mailto:hello@stratum.bio" className="app-link text-white underline">hello@stratum.bio</a>
        </p>
      </div>
      <div className="h-[30vh] w-screen bg-linear-to-b from-[#10273c] to-[#e2e8f0]" />
    </>
  )
}

export default Landing
