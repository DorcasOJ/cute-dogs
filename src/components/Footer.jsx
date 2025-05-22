import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    // loadAnimation.heroCompleted && (
    <>
      <div className="w-full rounded-t-4xl bg-gradient-to-b from-[#fceed5] via-[#fceed5] to-[#ffe7ba] text-sm sm:text-base ">
        <div className="w-full  pt-8 max-w-7xl mx-auto px-4 md:px-8 7xl:px-0">
          <div className="w-full bg-[#003459] py-3 px-2 rounded-lg flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-5 justify-center items-center">
            <div className="text-white px-3 lg:px-4 py-2 md:w-[40%]">
              Register now so you don't miss our programs
            </div>
            <div className="w-full bg-white rounded-lg flex items-center justify-between px-3">
              <div className="py-3 flex flex-col md:flex-row gap-y-1 md:gap-x-5 w-full justify-center items-center">
                <Input
                  type="email"
                  className="flex-grow md:py-5 md:px-3 p-2 focus:outline-0 text-center"
                  placeholder="Enter your Email"
                />
                <button
                  className="flex btn btn-outline border shadow-md rounded-3xl bg-gradient-to-r from-[#fceed5] to-[#fceed2] cursor-pointer btn-md text-white  transition duration-200 ease-in-out transform  hover:bg-gradient-to-r hover:from-[#003459] from-64% hover:to-[#fceed5] to-25% hover:shadow-none px-0 
                "
                >
                  <span className="w-full h-full flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#fceed5] hover:to-[#003459] hover:bg-clip-text from-65% to-25% hover:text-transparent tracking-wider transition  text-[#003459] px-4">
                    Subscribe Now
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center md:justify-between justify-center py-6 border-b border-gray-300  flex-wrap gap-8 md:gap-0 ">
            <ul className="ps-1 list-none flex gap-4 md:gap-8 items-center justify-start text-black font-light  ">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/category">Category</Link>
              </li>

              <li>
                <Link to="/About">About</Link>
              </li>

              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>

            <ul className="pe-1 list-none flex gap-6 md:gap-8 items-center justify-end text-black font-light sm:text-xl md:text-2xl">
              <li>
                <Link to="/">
                  <FaFacebook />
                </Link>
              </li>

              <li>
                <Link to="/twitter">
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link to="/instagram">
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link to="/youtube">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-8 md:pb-5 pb-8  flex justify-between items-center text-xs md:text-sm gap-2">
            <div className="text-gray-400 flex-1">
              © 2022 Monito. All rights reserved.
            </div>
            <div className="flex-1 flex items-center justify-center ">
              <img src="/logo_svg.svg" alt="Logo" />
            </div>
            <div className="flex-1">
              <ul className="list-none flex-col flex items-end md:gap-4 gap-2 text-gray-400 ">
                <li>
                  <Link>Terms of Service</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
