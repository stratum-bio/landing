import "../App.css";

const BusinessDescription = () => {
  return (
    <>
      <section className="business-bg min-h-screen w-screen flex flex-col items-center justify-center text-[#333] p-10 box-border">
        <div className="max-w-[1100px] w-full">
        <h2 className="text-[2.5rem] mb-8 text-left">Safely Turning Organizational Data into AI-Ready Biological Intelligence</h2>
        <p className="text-[1.25rem] leading-[1.6] text-left">
          We are taking on the data engineering bottleneck that stops organizations from operationalizing their own biological and clinical data at scale.
          Our platform ingests, harmonizes, and structures heterogeneous, multi-modal datasets into a unified, analysis-ready layer optimized for both comprehensive analytics and deep learning pipelines.
          This structured foundation lets our clients train disease-specific models their own data without exporting it or depending on third-party-controlled infrastructure.
          The end result is the ability to build proprietary, disease-specific biology foundation models and run advanced downstream analytics, with data integrity and governance maintained throughout.
        </p>
        </div>
      </section>
      <div className="h-[30vh] w-screen bg-linear-to-b from-[#e2e8f0] to-[#ececec]" />
    </>
  );
};

export default BusinessDescription;
