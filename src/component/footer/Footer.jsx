import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
  FaMobileAlt,
} from "react-icons/fa";
import FooterLink from "./FooterLink";

const Footer = () => {
  const impotantLink = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Service",
    },
    {
      name: "Login",
    },
  ];

  const Links = [
    {
      name: "Privacy Policy",
    },
    {
      name: "Services",
    },
    {
      name: "Service",
    },
    {
      name: "Login",
    },
  ];
  return (
    <>
      <footer className=" text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to to-violet-900">
        <div className="mx-auto max-w-[1200px] p-4">
          {/* Footer contaner section */}
          <div className="grid py-5 md:grid-cols-3">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
                <a href="#home" className="">
                  COZ
                  <span className="inline-block font-bold text-primary">
                    WEB
                  </span>
                </a>
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                natus omnis cum aliquid, deleniti neque dolores odit porro
                labore quam est aspernatur. Qui ex blanditiis, quas modi
                mollitia vitae nihil.
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Viet Nam</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>0376681557</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Impotants Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <FooterLink impotantLink={impotantLink} />
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Useful Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <FooterLink impotantLink={Links} />
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div>
                  <h1>Subscribe to out newletter</h1>
                  <input
                    type="text"
                    placeholder="Enter yor mail"
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <div className="flex gap-3 items-center mt-6">
                    <a className="duration-200 hover:scale-150" href="#">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a className="duration-200 hover:scale-150" href="#">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a className="duration-200 hover:scale-150" href="#">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer copy right  section */}
          <div className="bottom-footer">
            <p className="border-t-2 border-gray-300/50 py-6 text-center">
              Nguyen Nhu Hoai
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
