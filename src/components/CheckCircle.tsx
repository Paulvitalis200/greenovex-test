import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CheckCircle: React.FC = () => {
  return (
    <div className="flex items-center justify-center rounded-full h-4 w-4 mt-1 bg-white">
      <FaCheckCircle className="text-[#30BDA1] text-1xl h-4 w-4 drop-shadow-[0_0_2px_white]" />
    </div>
  );
};

export default CheckCircle;
