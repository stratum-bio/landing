import "../App.css";

const TeamDescription = () => {
  return (
    <section className="team-bg min-h-screen w-screen flex flex-col items-center justify-center text-[#333] p-10 box-border">
      <h2 className="text-[2.5rem] mb-12">Our Team</h2>
      <div className="flex flex-col items-center max-w-[600px] text-center">
        <img
          src="/portrait-square.png"
          alt="Ruben Sethi"
          className="w-[400px] h-[400px] rounded-full mb-6 object-cover shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        />
        <h3 className="text-[1.75rem] m-0 mb-2">Ruben Sethi</h3>
        <p className="font-bold text-[#555] mb-4">Founder</p>
        <p className="text-[1.1rem] leading-[1.6] text-left">
          Former Meta AI technical lead & manager with 10+ years of research
          experience in applied research in machine learning, including brain
          computer interfaces and computer vision. Transitioned to
          deep learning for omics after moving to Paris from San Francisco.
        </p>
      </div>
    </section>
  );
};

export default TeamDescription;
