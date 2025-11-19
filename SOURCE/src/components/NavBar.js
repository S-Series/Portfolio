import { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

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
  }, [])

  return (
    <div id="navbar-body" className={`${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-slot left">
        <button className="navbar-item"
          onClick={() => ({
            
          })()}
        >
          <img src="./sseries.png" />
          <span className="en-font">SSeries</span>
        </button>
      </div>
      <div className="navbar-slot right">
        <span>asdf</span>
      </div>
    </div>
  );
}
