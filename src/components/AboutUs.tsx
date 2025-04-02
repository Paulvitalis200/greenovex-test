import React from "react";
import NavigationBar from "./NavigationBar";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-black p-10 py-12 md:px-12"
    >
      <div className="absolute top-0 right-0 left-0 w-full z-50">
        <NavigationBar />
      </div>
      <div className="flex flex-col items-start justify-center mx-auto lg:my-[30px] mb-12 md:px-12">
        <p className="uppercase flex justify-items-start text-[16px] font-medium tracking-[0%] leading-[100%] pt-3.5 font-raleway">
          / ABOUT US
        </p>
        <h2 className="text-lg  lg:text-[40px] lg:font-semibold font-raleway leading-[100%] tracking-[0%] text-left items-center font-raleway md:text-4xl font-semibold mt-12">
          We are a leader in Engineering, providing energy solutions and making
          a difference in the community. By facilitating the transition to
          renewable energy, we are helping to reduce reliance on fossil fuels,
          decrease carbon emissions, and promote energy independence.
        </h2>
        {/* <div className="flex justify-center w-full">
          <button className="md:text-[20px] justify-center hidden lg:block mt-6 text-white font-medium hover:opacity-80">
            Read more
          </button>
        </div> */}
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-start md:gap-1 lg:gap-8 mt-12 mx-0 md:mx-12">
        {/* Image with Green Overlay */}
        <div className="relative w-full h-[200px] md:h-[400px] rounded-lg">
          <img
            src="src/assets/image1.webp"
            alt="Completion Rate"
            className="w-full h-full object-center rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#165D1E7D] to-[#5CB67F] rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-white flex flex-col gap-2 md:gap-6">
            <p className="text-[16px] font-semibold md:text-[20px] font-raleway">
              Completion Rate
            </p>
            <h3 className="text-[20px] md:text-[45px] font-bold font-raleway">
              99%
            </h3>
            <p className="text-[16px] md:text-[20px] font-raleway font-semibold">
              On-time project delivery
            </p>
          </div>
        </div>

        {/* Client Satisfaction & Cost Efficiency */}
        <div className="grid grid-rows-2 gap-1 md:gap-4 font-raleway">
          {/* Client Satisfaction */}
          <div className="bg-[#B4F5B5] text-black p-6 rounded-lg flex flex-col gap-4 justify-center  md:w-[230px] lg:w-full h-[128px] md:h-full mt-4 sm:mt-0">
            <h3 className="text-[16px] md:text-xl font-semibold leading-[100%] font-raleway">
              Client Satisfaction
            </h3>
            <h2 className="text-[20px] md:text-[45px] font-bold mt-2 leading-[100%]">
              95%
            </h2>
            <p className="text-[16px] md:text-xl font-semibold font-raleway leading-[100%] tracking-[0%] lg:w-[250px]">
              Driven by our commitment to quality & innovation.
            </p>
          </div>

          {/* Cost Efficiency */}
          <div className="bg-[#B4F5B5] text-black p-6 mt-2 md:mt-0 rounded-lg flex flex-col gap-4 md:gap-2 justify-center md:w-full md:h-full h-[128px] mt-4 sm:mt-0">
            <h3 className="text-[16px] md:text-xl font-semibold font-raleway leading-[100%] tracking-[0%]">
              Cost Efficiency
            </h3>
            <h2 className="text-[20px] md:text-[45px] font-bold mt-2 font-raleway">
              20%
            </h2>
            <p className="text-[16px] md:text-lg font-raleway font-semibold">
              Cost savings for clients
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className=" h-[152px] mt-4  md:mt-0 rounded-[6px] md:rounded-[10px] md:w-full md:h-[400px]">
          <img
            src="src/assets/solar.webp"
            alt="Solar Panel Installation"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
