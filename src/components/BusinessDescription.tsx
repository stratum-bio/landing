import "../App.css";

const BusinessDescription = () => {
  return (
    <>
      <section className="business-bg min-h-screen w-screen flex flex-col items-center justify-center text-[#333] p-10 box-border">
        <h2 className="text-[2.5rem] mb-8">The Research Platform for Precision Medicine</h2>
        <p className="max-w-[1100px] text-[1.25rem] leading-[1.6] text-left mb-12">
          We aim to transform how multidisciplinary teams collaborate on solving complex problems rooted in biology & drug development,
          bridging the gap between siloed R&D and global clinical delivery to accelerate precision medicine.
        </p>
        <p className="max-w-[1100px] text-[1.25rem] leading-[1.6] text-left">
          We are building a multidisciplinary computational platform designed to
          model the biomarker lifecycle, from discovery and rigorous validation
          to reproducibility and clinical operationalization. Our platform
          provides a unified environment where medical and computational
          stakeholders leverage advanced machine learning to solve complex
          research questions within a standardized, auditable framework
          individually catered to all disciplines.
        </p>
      </section>
      <div className="h-[30vh] w-screen bg-linear-to-b from-[#e2e8f0] to-[#ffffff]" />
    </>
  );
};

export default BusinessDescription;
