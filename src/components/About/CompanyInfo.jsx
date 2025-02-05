const CompanyInfo = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-center gap-4 py-8 md:py-16 px-4 md:px-8">
      <div className="flex flex-col items-start justify-center gap-8 w-full md:max-w-screen-xl py-1">
        <h1 className="text-black text-2xl md:text-3xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-sm md:text-base text-justify lg:text-lg">
          At Techno Thermal Treaters Pvt. Ltd. (TTTPL), we are committed to
          delivering excellence in heat treatment services for the global
          automotive sector and allied engineering industries. As an ISO
          9001-certified company, we uphold the highest standards of quality and
          operational efficiency. Founded in January 1992 by Mr. D.V. Kalra,
          TTTPL embarked on a journey with a clear vision—to provide top-tier
          commercial heat treatment services in the NCR region, later expanding
          to other states. Mr. Kalra’s entrepreneurial foresight has been
          instrumental in the company’s consistent growth and success. Our
          adherence to international quality standards, including ISO 9001 and
          the CQI-9 Heat Treatment Global Standard, reflects our unwavering
          commitment to precision and reliability. By integrating advanced
          technologies and fostering a team of skilled professionals, we
          continuously strive to exceed customer expectations and set new
          benchmarks in the industry.
        </p>
      </div>
      <div className="relative w-full flex justify-center items-start">
        <div className="w-72 sm:w-64 md:w-80 lg:w-96 h-72 mb-10">
          <img
            src="https://www.unithermfurnaces.com/frontend/assets/images/about3.webp"
            alt="Heat treatment equipment"
            className="rounded-md shadow-2xl z-0 w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-5 sm:left-10 md:bottom-0 md:left-10 w-24 sm:w-32 md:w-40">
          <img
            src="https://www.unithermfurnaces.com/frontend/assets/images/about4.webp"
            alt="Engineers at work"
            className="shadow-lg w-full h-auto hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
