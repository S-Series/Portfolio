import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const supLink = "https://ko-fi.com/sseries";
  const gitLink = "https://github.com/S-Series";

  //# isScrolled 로직
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar-body"
      className={`${isScrolled && !isHovered ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        <button
          className="navbar-item"
          onClick={() => window.open(supLink, "_blank")}
        >
          <img alt="Ko-Fi" src="./kofi.png" />
          <span className="en-font">Support</span>
        </button>
        {/* 깃허브 */}
        <button
          className="navbar-item"
          onClick={() => window.open(gitLink, "_blank")}
        >
          <img alt="git" src="./github.png" />
          <span className="en-font">Git-Hub</span>
        </button>
        {/* 연락수단 */}
        <button className="navbar-item" onClick={() => navigate("/about")}>
          <img alt="SSeries" src="./contact.png" />
          <span className="en-font">Contact</span>
        </button>
      </div>
    </div>
  );
}
