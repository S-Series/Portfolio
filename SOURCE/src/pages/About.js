import AboutData from "../datas/AboutData";
import AboutDataComp from "../components/About/AboutDataComp";
import { useProfile } from "../contexts/useProfile";

import "./_page.css";

export default function About() {
  const { lang } = useProfile();

  return (
    <div className="page-body">
      {AboutData[lang].map((_, i) => (
        <AboutDataComp key={i} index={i} />
      ))}
    </div>
  );
}
