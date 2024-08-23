import React from "react";
import { FaDumbbell, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-gray-900 to-gray-950">
      <div className="container">
        <div className="grid border-t-2 border-gray-300/10 py-5 text-white md:grid-cols-4 md:gap-4">
          {/* Bran information section */}
          <div className="space-y-4 px-4 py-8">
            <div className="flex items-center gap-2 text-2xl font-bold uppercase">
              <FaDumbbell />
              <p>App</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              iste tempore fugit numquam, necessitatibus alias voluptate illo?
              Tempore, suscipit nihil vel commodi esse, mollitia amet architecto
              molestias tenetur deleniti dolor!
            </p>
            <div className="!mt-6 flex items-center justify-start gap-5">
              <a href="#">
                <HiLocationMarker className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links section */}
          <div className="grid grid-cols-2 md:col-span-3 md:ml-14 md:grid-cols-3">
            <div className="px-4 py-8">
              <h1 className="mb-5 text-justify text-xl font-bold sm:text-left">
                Web links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Trainer</a>
                </li>
                <li>
                  <a href="#">Program</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="px-4 py-8">
              <h1 className="mb-5 text-justify text-xl font-bold sm:text-left">
                Company
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Our services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="px-4 py-8">
              <h1 className="mb-5 text-justify text-xl font-bold sm:text-left">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Trainer</a>
                </li>
                <li>
                  <a href="#">Program</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright section */}
        <div className="mt-8">
          <div className="bordergray-300/10 border-t-2 py-6 text-center">
            <span className="text-sm text-gray-300 opacity-70">
              @2024 App Gym. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
