import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiquidGlass } from "@liquidglass/react";

import Select from "react-select";
import { useProfile } from "../contexts/useProfile";

import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [sideActive, setSideActive] = useState(false);

  const supLink = "https://ko-fi.com/sseries";
  const gitLink = "https://github.com/S-Series";

  const { lang, setLang, isScrolled } = useProfile();

  return (
    <>
      <div
        id="navbar-body"
        className={`${isScrolled && !isHovered ? "scrolled" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div id="navbar-hover-hitbox" />
        <LiquidGlass
          className="liquid-glass"
          borderRadius={0}
          blur={2}
          contrast={1}
          brightness={1.1}
          saturation={1}
          displacementScale={0.05}
          elasticity={0.5}>
          <div className="navbar-slot left">
            {/* 타이틀 */}
            <button className="navbar-item" onClick={() => navigate("/")}>
              <img alt="SSeries" className="title" src="/sseries.png" />
              <span className="title en-font">SSeries</span>
            </button>
          </div>
          <div className="navbar-slot">
            {/* About me */}
            <a className="navbar-item" href="/about">
              <span className="en-font">About Me</span>
            </a>
            {/* Projects */}
            <a className="navbar-item" href="/projects">
              <span className="en-font">Projects</span>
            </a>
            {/* Works */}
            <a className="navbar-item" href="/works">
              <span className="en-font">Works</span>
            </a>
            {/* Roadmap */}
            <a className="navbar-item" href="/roadmap">
              <span className="en-font">Road Map</span>
            </a>
          </div>
          <div className="navbar-slot right">
            {/* 언어선택 */}
            <Select
              menuPortalTarget={document.body}
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
                  border: "1px solid #fff",
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 500,
                }),
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
              options={["kr", "en", "jp"].map((item) => {
                return {
                  value: item,
                  label: (
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}>
                      <img
                        alt={`${item}-flag`}
                        src={`/flag-${item}.png`}
                        style={{
                          height: "1.5rem",
                          aspectRatio: "1 / 1",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #000)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontFamily: "enFont, sans-serif",
                        }}>
                        {item}
                      </span>
                    </div>
                  ),
                };
              })}
              onChange={(item) => setLang(item.value)}
            />
            {/* 로그인 */}
            <button className="navbar-item" onClick={() => navigate("/contact")}>
              <span className="en-font">Contact</span>
            </button>
            {/* 사이즈대응 */}
            <button
              className="navbar-item side-menu"
              onClick={() => {
                setSideActive((prev) => !prev);
              }}>
              <img alt="SSeries" src="/menu.svg" />
            </button>
          </div>
        </LiquidGlass>
      </div>
      <div
        id="navbar-sidebar"
        className={`${isScrolled && !isHovered ? "scrolled" : ""} ${
          sideActive ? "active" : ""
        }`}>
        {/* Home */}
        <a className="navbar-item" href="/">
          <span className="en-font">Home</span>
        </a>
        {/* About me */}
        <a className="navbar-item" href="/about">
          <span className="en-font">About Me</span>
        </a>
        {/* Projects */}
        <a className="navbar-item" href="/projects">
          <span className="en-font">Projects</span>
        </a>
        {/* Works */}
        <a className="navbar-item" href="/works">
          <span className="en-font">Works</span>
        </a>
        {/* Roadmap */}
        <a className="navbar-item" href="/roadmap">
          <span className="en-font">Road Map</span>
        </a>
      </div>
    </>
  );
}
