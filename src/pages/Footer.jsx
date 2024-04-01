import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1040px]  py-8 sm:px-0 px-5 mx-auto text-gray-300 text-[15px]">
        <p>
          Questions? Call <span className="underline pl-2">+91 8303021198</span>
        </p>
        <div className="grid sm:grid-cols-4 grid-cols-2 underline py-4">
          <div>
            <ul>
              <li className="py-1">FAQ</li>
              <li className="py-1">Investor Relations</li>
              <li className="py-1">Privacy</li>
              <li className="py-1">Speed Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">Help Center</li>
              <li className="py-1">Jobs</li>
              <li className="py-1">Cookie Preferences</li>
              <li className="py-1">Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">Account</li>
              <li className="py-1">Ways to Watch</li>
              <li className="py-1">Corporate Information</li>
              <li className="py-1">Only on Netflix</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">Media Centre</li>
              <li className="py-1">Terms of Use</li>
              <li className="py-1">Contact Us</li>
            </ul>
          </div>
        </div>
         <select className="bg-gray-700/70 px-4 py-2 rounded text-white cursor-pointer">
            <option>English</option>
            <option>Hindi</option>
         </select>
         <h1 className="py-6">Netflix India</h1>
      </div>
    </div>
  );
};

export default Footer;
