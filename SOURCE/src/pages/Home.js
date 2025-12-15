import { useProfile } from "../contexts/useProfile";

import "./_page.css";
import "./Home.css";

export default function Home() {
  const { lang } = useProfile();

  return (
    <div className="page-body">
      <div className="profile">
        <img alt="SSeries" className="sseries" src="./sseries.png" />
        <span>Hi. I'm SSeries</span>
        <div className="back-circle pink"/>
        <div className="back-circle green"/>
        <div className="back-circle blue"/>
      </div>
      <div className="grid">
        {/* About me */}
        <a className="grid-item" href="/about">
          <span className="en-font">About Me</span>
        </a>
        {/* Projects */}
        <a className="grid-item" href="/projects">
          <span className="en-font">Projects</span>
        </a>
        {/* Works */}
        <a className="grid-item" href="/works">
          <span className="en-font">Works</span>
        </a>
        {/* Roadmap */}
        <a className="grid-item" href="/roadmap">
          <span className="en-font">Road Map</span>
        </a>
      </div>
    </div>
  );
}
