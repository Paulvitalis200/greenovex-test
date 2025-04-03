import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import NavigationBar from "./NavigationBar";

const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-[70vh] flex flex-col w-full bg-white text-black py-24 px-10 lg:py-19 md:px-24 font-raleway"
    >
      <NavigationBar />
      <div className="flex flex-col justify-between mb-12">
        <p className="uppercase text-[14px] md:text-[16px] font-medium leading-[100%] pt-3">
          / CONTACT US
        </p>
        <div className="mt-8 md:mt-14">
          <h1 className="hidden md:block text-[40px] leading-[100%] font-raleway font-semibold max-w-3/4">
            Connect with us to explore how we can be of service to you.
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:mt-20 gap-8 md:justify-center md:items-center mt-4">
          <div className="p-4 w-full h-[180px] md:w-[332px] md:h-[274px] flex flex-col justify-between border-2 border-[#36454F] rounded-sm">
            <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] flex items-center justify-center border-2 border-[#36454F] rounded-sm">
              <IoCallOutline className="text-[24px]" />
            </div>
            <p className="font-raleway text-[16px] md:text-[18px] font-semibold">
              Call us
            </p>
            <p className="font-raleway text-[14px] md:text-[16px] font-semibold">
              Mon-Fri from 8 am - 6 pm EAT
            </p>
            <p className="font-raleway text-[14px] md:text-[16px] font-semibold underline underline-offset-8">
            <a href="tel:+25472888839">+25472888839</a>
            </p>
            <p className="font-raleway text-[14px] md:text-[16px] font-semibold underline underline-offset-8">
            <a href="tel:+254727568001">+254727568001</a>
            </p>
          </div>
          <div className="p-4 w-full h-[180px] md:w-[332px] md:h-[274px] flex flex-col justify-between border-2 border-[#36454F] rounded-sm">
            <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] flex items-center justify-center border-2 border-[#36454F] rounded-sm">
              <CiMail className="text-[24px]" />
            </div>
            <p className="font-raleway text-[16px] md:text-[18px] font-semibold">
              Email us
            </p>
            <p className="font-raleway text-[14px] md:text-[16px] font-semibold">
              Drop us an email
            </p>
            <p className="font-raleway  text-[14px] md:text-[16px] font-semibold underline underline-offset-8">
            <a href="mailto:greenovexsolutions@gmail.com">greenovexsolutions@gmail.com</a>
            </p>
          </div>
          <div className="p-4 w-full h-[180px] md:w-[332px] md:h-[274px] flex flex-col justify-between border-2 border-[#36454F] rounded-sm">
            <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] flex items-center justify-center border-2 border-[#36454F] rounded-sm">
              <MdOutlineLocationOn className="text-[24px]" />
            </div>
            <p className="font-raleway text-[16px] md:text-[18px] font-semibold">
              Visit us
            </p>
            <p className="font-raleway text-[14px] md:text-[16px] font-semibold">
              Visit our office HQ
            </p>
            <p className="font-raleway text-[14px] md:text-[16px] font-semibold underline underline-offset-8">
              Oginga Odinga St, Kisumu - Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
