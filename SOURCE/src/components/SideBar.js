import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      id="sidebar-body"
      className={`${isScrolled && !isHovered ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div id="sidebar-hover-hitbox" />
      <div className="button-slot">
        <button className="sidebar-item">
            {/* 클릭시 리스트 펼치기 */}
        </button>
        <button className="sidebar-item"></button>
        <button className="sidebar-item"></button>
      </div>
    </div>
  );
}
