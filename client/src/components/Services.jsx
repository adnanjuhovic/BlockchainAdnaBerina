import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

// Reusable card component for displaying services
const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row white-glassmorphism p-3 m-2 hover:shadow-xl">
    {/* Icon container */}
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    
    {/* Service information */}
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

// Main Services component
const Services = () => {
  // Service cards data
  const serviceCards = [
    {
      color: "bg-[#2952E3]",
      title: "Security guarantee",
      icon: <BsShieldFillCheck fontSize={21} className="text-white" />,
      subtitle: "Security is guaranteed. We always maintain privacy and quality"
    },
    {
      color: "bg-[#8945F8]",
      title: "Best exchange rates",
      icon: <BiSearchAlt fontSize={21} className="text-white" />,
      subtitle: "Security is guaranteed. We always maintain privacy and quality"
    },
    {
      color: "bg-[#F84550]",
      title: "Fastest transactions",
      icon: <RiHeart2Fill fontSize={21} className="text-white" />,
      subtitle: "Security is guaranteed. We always maintain privacy and quality"
    }
  ];

  return (
    <div className="flex w-full justify-center gradient-bg-services">
      {/* Content wrapper */}
      <div className="flex mf:flex-row flex-col items-center md:p-20 py-12 px-4">
        {/* Left section - Heading and description */}
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we<br />continue to improve
          </h1>
          <p className="text-left my-2 text-white font-light">
            The best choice for buying and selling your crypto assets
          </p>
        </div>

        {/* Right section - Service cards */}
        <div className="flex-1 flex flex-col justify-start items-center">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
