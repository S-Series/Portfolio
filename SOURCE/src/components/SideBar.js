import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProfile } from "../contexts/UseProfile";
import "./SideBar.css";

export default function SideBar() {
  const navigate = useNavigate();
  const { isScrolled } = useProfile();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="sidebar-body"
      className={`${!isHovered ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div id="sidebar-hover-hitbox" />
      <div className="button-slot">
        <button className="sidebar-item" onClick={() => navigate("/about")}>
          About
        </button>
        <button className="sidebar-item" onClick={() => navigate("/skills")}>
          Skills
        </button>
        <button className="sidebar-item drop">Projects</button>
        <ul className="sidebar-item-list active">
          {/* On Run */}
          <li>
            <span>{`- Released`}</span>
          </li>
          <li>
            <a href="/projects?item=wuwa">WuWa DEV</a>
          </li>
          <li>
            <a href="/projects?item=remind">Re: Mind</a>
          </li>
          {/* On Work */}
          <li>
            <span>{`- In Progress`}</span>
          </li>
          <li>
            <a href="/projects?item=#">stay tune</a>
          </li>
        </ul>
        {/* Stay Tune */}
        <button className="sidebar-item" onClick={() => navigate("/")}>
          Contact
        </button>
        {/* Projects */}
        <button className="sidebar-item" onClick={() => navigate("/")}>
          Experiences
        </button>
        {/* Projects */}
        <button className="sidebar-item" onClick={() => navigate("/")}>
          Others
        </button>
      </div>
    </div>
  );
}
