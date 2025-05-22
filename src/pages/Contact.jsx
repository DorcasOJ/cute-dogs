import React, { useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { sendMessage } from "../model/helpers";

const Contact = () => {
  const contactForm = useRef();
  const serviceId = import.meta.env.VITE_DOG_SERVICE_ID;
  const templateId = import.meta.env.VITE_DOG_TEMPLETE_ID;
  const userId = import.meta.env.VITE_DOG_USER_ID;

  const handleForm = (e) => {
    e.preventDefault;

    sendMessage(serviceId, templateId, contactForm.current, userId);
  };

  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-8 7xl:px-0 pt-12 pb-36 ">
      <div className="lg:min-h-[60vh] flex flex-col lg:flex-row lg:gap-x-10 ">
        <div className=" min-h-[15vh] lg:self-stretch flex-1 flex bg-gray-100">
          <div className="w-full bg-[url('/images/contact-us.jpg')] bg-cover"></div>
        </div>

        <div className="flex-1 px-4 py-8 flex flex-col gap-y-10">
          <span className="text-2xl font-normal tracking-wider md:text-4xl lg:text-5xl py-5 lg:py-0">
            Let's Get in Touch.
          </span>
          <form
            ref={contactForm}
            action={handleForm}
            className="flex flex-col gap-y-8"
          >
            <div className="flex flex-col md:flex-row md:gap-x-10 lg:gap-x-6 gap-y-8 ">
              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <span className="flex items-center relative">
                  <CgProfile className="text-xl font-light absolute left-[12px]" />
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="rounded-3xl ps-[42px] py-5"
                    placeholder="Enter your first name..."
                    required
                  />
                </span>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <span className="flex items-center relative">
                  <CgProfile className="text-xl font-light absolute left-[12px]" />
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="rounded-3xl ps-[42px] py-5"
                    placeholder="Enter your last name..."
                    required
                  />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="emailAddress">Email Address</Label>
              <span className="flex items-center relative">
                <MdOutlineEmail className="text-xl font-light absolute left-[12px]" />
                <Input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  className="rounded-3xl ps-[42px] py-5"
                  placeholder="Enter your email address..."
                  required
                />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <span className="flex items-center relative">
                <BsTelephone className="text-lg font-light absolute left-[12px]" />
                <Input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="rounded-3xl ps-[42px] py-5"
                  placeholder="+234 567 890 1234"
                  required
                />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <span className="flex items-center relative">
                {/* <CgProfile className="text-2xl font-light absolute left-[12px]" /> */}
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  className="border border-gray-200 shadow focus:shadow  rounded-3xl p-5 w-full"
                  placeholder="Enter your main text here..."
                  required
                />
              </span>
            </div>

            <Button
              type="submit"
              className="cursor-pointer rounded-3xl bg-[#003459] flex gap-4 items-center 
              justify-center text-xl py-6 hover:bg-[#fceed5] hover:text-[#003459] shadow-md"
            >
              Submit Form
              <BsArrowRight className="self-center" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
