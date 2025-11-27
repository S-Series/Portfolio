import { useProfile } from "../contexts/UseProfile";

import HomeData from "../datas/HomeData";
import HomeDataComp from "../components/Home/HomeDataComp";

import "./_page.css";

export default function Home() {
  const { lang } = useProfile();

  return (
    <div id="page-body">
      {HomeData[lang].map((_, i) => (
        <HomeDataComp key={i} index={i} />
      ))}
    </div>
  );
}
