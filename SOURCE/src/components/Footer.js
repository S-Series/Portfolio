import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import { useProfile } from "../contexts/useProfile";

import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const { isScrolled } = useProfile();

  const supLink = "https://ko-fi.com/sseries";
  const gitLink = "https://github.com/S-Series";

  return (
    <div id="footer-body" className={`${isScrolled ? "scrolled" : ""}`}>
      <div className="footer-slot">
        <span className="en-font">
          {`DEV Porfolio By. SSeries
Contact: SSeries000923@gmail.com
© www.sseries.dev || All rights reserved`}
        </span>
      </div>
      <div className="footer-slot">
        {/* 후원 */}
        <button
          className="footer-item"
          onClick={() => window.open(supLink, "_blank")}>
          <img alt="Ko-Fi" src="/kofi.png" />
          <span className="en-font">Support</span>
        </button>
        {/* 깃허브 */}
        <button
          className="footer-item"
          onClick={() => window.open(gitLink, "_blank")}>
          <img alt="git" src="/github.png" />
          <span className="en-font">Git-Hub</span>
        </button>
        {/* 연락수단 */}
        <button className="footer-item" onClick={() => navigate("/contact")}>
          <img alt="SSeries" src="/contact.png" />
          <span className="en-font">Contact</span>
        </button>
      </div>
    </div>
  );
}
