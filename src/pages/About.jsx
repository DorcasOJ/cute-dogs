import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-8 7xl:px-0 pt-12 ">
      <div className="flex flex-col items-center justify-center gap-8 border-b border-gray-200 pb-12">
        <span className="text-2xl font-normal tracking-wider md:text-4xl lg:text-5xl ">
          We're built for the best care
        </span>

        <p className=" md:tracking-wider text-xs text-gray-400 w-[55%]">
          We are a community that love to care for dogs and would to sell to
          people who are ready to shower them with love Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Repellat sequi praesentium
          laudantium cum minus earum amet doloremque quas ratione vitae sed
          consequatur, omnis error vero distinctio quia temporibus veritatis
          officiis lorem Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Eaque est accusantium
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 ">
        <span className="text-xl font-normal tracking-wider md:text-3xl lg:text-2xl">
          Meet our team
        </span>
        <p className="text-xs text-gray-400 w-[55%]">
          repellendus! Corporis odit ullam rerum distinctio minima earum,
          cupiditate alias iusto, provident soluta tenetur, animi consectetur.
          Vel, sed. Nulla. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi, ex maiores! Nostrum soluta adipisci deleniti corporis
          animi commodi minima repellendus, architecto repellat molestias quia,
          ab dolor omnis blanditiis voluptatum possimus!
        </p>
        <div className="flex items-center justify-center py-10  min-h-[600px]">
          <div className="grid grid-cols-1  gap-y-4 md:gap-y-10 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="w-[270px] h-[400px] relative shadow">
              <img
                src="/images/about-team-1.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 w-[80%] left-[10%]  bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-white/30 text-white shadow-md py-2 px-5 flex flex-col gap-y-1">
                <span className="text-xl">Alisa hester</span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-base">Founder & CEO</span>
                  <p className="text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates, laudantium minus esse maiores,
                  </p>
                  <span className="flex gap-4">
                    <FaTwitter />
                    <FaLinkedin />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[400px] relative shadow">
              <img
                src="/images/about-team-2.jpg"
                alt=""
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-4 w-[80%] left-[10%]  bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-white/30 text-white shadow-md py-2 px-5 flex flex-col gap-y-1">
                <span className="text-xl">Stone hester</span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-base">Manager</span>
                  <p className="text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates, laudantium minus esse maiores,
                  </p>
                  <span className="flex gap-4">
                    <FaTwitter />
                    <FaLinkedin />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[400px] relative shadow">
              <img
                src="/images/about-team-3.jpg"
                alt=""
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-4 w-[80%] left-[10%]  bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-white/30 text-white shadow-md py-2 px-5 flex flex-col gap-y-1">
                <span className="text-xl">Alisa Stanlley</span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-base">Public Relation Officer</span>
                  <p className="text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates, laudantium minus esse maiores,
                  </p>
                  <span className="flex gap-4">
                    <FaTwitter />
                    <FaLinkedin />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[400px] relative shadow">
              <img
                src="/images/about-dog-1.jpg"
                alt=""
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-4 w-[80%] left-[10%]  bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-white/30 text-white shadow-md py-2 px-5 flex flex-col gap-y-1">
                <span className="text-xl">Alisa Young</span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-base">Genral Care Taker</span>
                  <p className="text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates, laudantium minus esse maiores,
                  </p>
                  <span className="flex gap-4">
                    <FaTwitter />
                    <FaLinkedin />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[400px] relative shadow">
              <img
                src="/images/about-dog-2.jpg"
                alt=""
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-4 w-[80%] left-[10%]  bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-white/30 text-white shadow-md py-2 px-5 flex flex-col gap-y-1">
                <span className="text-xl">Mia Ward</span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-base">Backend Developer</span>
                  <p className="text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates, laudantium minus esse maiores,
                  </p>
                  <span className="flex gap-4">
                    <FaTwitter />
                    <FaLinkedin />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
