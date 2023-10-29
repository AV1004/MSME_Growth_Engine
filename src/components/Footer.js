import React from "react";
import LOGO from "../images/LOGO.png";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white text-xl">
      <div className="grid" style={{ gridTemplateColumns: "25rem auto" }}>
        <div className="w-96 p-16">
          <img src={LOGO} alt="LOGO" className="w-44" />
        </div>
        <div className="grid grid-cols-4">
          <div className="mt-10 mb-10 ">
            <h1 className="font-bold">Quick Links</h1>
            <ul className="my-4 space-y-3">
              <li>
                <button>Connect</button>
              </li>
              <li>
                <button>About MSME</button>
              </li>
            </ul>
          </div>
          <div className="mt-10 mb-10 ">
            <h1 className="font-bold">Vision</h1>
            <ul className="my-4 space-y-3">
              <li>
                <button>Mission</button>
              </li>
            </ul>
          </div>
          <div className="mt-10 mb-10 ">
            <h1 className="font-bold">Site Map</h1>
            <ul className="my-4 space-y-3">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>MSMEs</button>
              </li>
              <li>
                <button>Learn</button>
              </li>
              <li>
                <button>Services</button>
              </li>
            </ul>
          </div>
          <div className="mt-10 mb-10 ">
            <h1 className="font-bold">Social Media Links</h1>
            <ul className="my-4 space-y-3">
              <li>
                <button>Facebook</button>
              </li>
              <li>
                <button>Twitter</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
