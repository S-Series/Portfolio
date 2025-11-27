import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiquidGlass } from "@liquidglass/react";

import Select from "react-select";
import { useProfile } from "../contexts/UseProfile";

import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const { isScrolled } = useProfile();
  const [isHovered, setIsHovered] = useState(false);

  const supLink = "https://ko-fi.com/sseries";
  const gitLink = "https://github.com/S-Series";

  const { lang, setLang } = useProfile();

  return (
    <div
      id="navbar-body"
      className={`${isScrolled && !isHovered ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <LiquidGlass
        className="glass-container"
        borderRadius={0}
        blur={0.25}
        contrast={1}
        brightness={1.5}
        saturation={1}
        displacementScale={0.1}
        elasticity={1}>
        <div id="navbar-hover-hitbox" />
        <div className="navbar-slot left">
          {/* 타이틀 */}
          <button className="navbar-item" onClick={() => navigate("/")}>
            <img alt="SSeries" className="title" src="./sseries.png" />
            <span className="title en-font">SSeries</span>
          </button>
        </div>
        <div className="navbar-slot right">
          {/* 지원 */}
          <Select
            styles={{
              container: (base) => ({
                ...base,
                width: "7.5rem",
                transform: "scale(0.85)",
              }),
              control: (base) => ({
                ...base,
                border: 0,
                height: "50%",
                borderRadius: "0.5rem",
              }),
              valueContainer: (base) => ({
                ...base,
              }),
            }}
            options={["kr", "en", "jp"].map((item) => {
              return {
                value: item,
                label: (
                  <div className="navbar-select-item">
                    <img
                      alt={`${item}-flag`}
                      className="navbar-select-item img"
                      src={`./flag-${item}.png`}
                    />
                    <span className={`navbar-select-item text en-font`}>
                      {item}
                    </span>
                  </div>
                ),
              };
            })}
            onChange={(item) => setLang(item.value)}
          />
          {/* 지원 */}
          <button
            className="navbar-item"
            onClick={() => window.open(supLink, "_blank")}>
            <img alt="Ko-Fi" src="./kofi.png" />
            <span className="en-font">Support</span>
          </button>
          {/* 깃허브 */}
          <button
            className="navbar-item"
            onClick={() => window.open(gitLink, "_blank")}>
            <img alt="git" src="./github.png" />
            <span className="en-font">Git-Hub</span>
          </button>
          {/* 연락수단 */}
          <button className="navbar-item" onClick={() => navigate("/about")}>
            <img alt="SSeries" src="./contact.png" />
            <span className="en-font">Contact</span>
          </button>
        </div>
      </LiquidGlass>
    </div>
  );
}
