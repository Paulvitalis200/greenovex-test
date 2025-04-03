import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="min-h-[20vh] p-8 md:p-8 lg:px-24 flex flex-col items-center font-raleway bg-[#30BD32]">
      <div className="w-full flex md:justify-start gap-80">
        <div className="flex flex-col gap-4 md:gap-8 text-white">
          <img src="/static/images/Greenovex-white.svg" className="w-30 md:w-40"/>
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn className="text-xl" />
            <p className="text-[14px] md:text-sm font-semibold">
              Oginga Odinga St, Kisumu - Kenya
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoCallOutline className="text-xl" />
            <p className="text-[14px] md:text-sm font-semibold">
              +254792750490 / +254772568001
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CiMail className="text-xl" />
            <p className="text-[14px] md:text-sm font-semibold">
              P.O. BOX 40100, Kisumu - Kenya
            </p>
          </div>
        </div>

        {/* Middle Section */}
        {/* <div className="hidden md:flex flex-col gap-2 text-white">
          <p className="text-[12px] md:text-sm font-semibold">Customers</p>
          <p className="text-[12px] md:text-sm font-semibold">Testimonials</p>
          <p className="text-[12px] md:text-sm font-semibold">Success Stories</p>
        </div> */}
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex justify-between items-center mt-6 md:mt-14 text-white text-sm font-semibold">
        <p className="text-center md:text-left w-full text-[14px] md:text-[14px]">&copy; 2025 Greenovex. All Rights Reserved.</p>
        <div className="hidden md:flex gap-8">
          <BsTwitterX className="text-[22px] cursor-pointer" />
          <FaFacebook className="text-[22px] cursor-pointer" />
          <FaInstagram className="text-[22px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
