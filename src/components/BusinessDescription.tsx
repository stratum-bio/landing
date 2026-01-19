import '../App.css'

const BusinessDescription = () => {
  return (
    <>
      <section className="business-bg min-h-screen w-screen flex flex-col items-center justify-center text-[#333] p-10 box-border">
        <h2 className="text-[2.5rem] mb-8">Accelerating Precision Medicine</h2>
        <p className="max-w-[800px] text-[1.25rem] leading-[1.6] text-left">
          We are building a multidisciplinary computational platform designed to model the biomarker lifecycle, from discovery and rigorous validation to reproducibility and clinical operationalization. Our platform provides a unified environment where medical and computational stakeholders leverage advanced machine learning to solve complex research questions within a standardized, auditable framework individually catered to different disciplines. We initially empower academic teams to scale discovery with limited resources, before transitioning to support assay developers in establishing technical efficacy, and providing independent high-fidelity evaluations for drug development assets. Ultimately, we aim to transform how large pharmaceutical teams collaborate, bridging the gap between siloed R&D and global clinical delivery to accelerate precision medicine.
        </p>
      </section>
      <div className="h-[30vh] w-screen bg-linear-to-b from-[#e2e8f0] to-[#ffffff]" />
    </>
  )
}

export default BusinessDescription
