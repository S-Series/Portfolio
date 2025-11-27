import HomeData from "../../datas/HomeData";
import { useProfile } from "../../contexts/UseProfile";
import { LiquidGlass } from "@liquidglass/react";
import "./HomeDataComp.css";

function HomeDataComp({ index }) {
  const { lang } = useProfile();
  const data = HomeData[lang][index];

  if (!data) return null;

  return (
    <div
      key={data.id}
      className={`home-data-body ${index % 2 === 0 ? "left" : "right"}`}
    >
      <LiquidGlass
        className="liquid-glass"
        blur={0.5}
        contrast={1}
        brightness={1.2}
        saturation={1.2}
        shadowIntensity={0.4}
        displacementScale={0.5}
        elasticity={0.8}
      >
        <div className="home-title-box">
          {data.logoPath && (
            <img className="home-main-logo" src={data.logoPath} alt="logo" />
          )}
          <h1 className={`home-main-title ${lang}-font`}>{data.title}</h1>
        </div>

        <div className="home-description-box">
          {data.description.map((item, index) => (
            <div className="home-desc-item" key={index}>
              {item.logoPath && (
                <img
                  alt="icon"
                  className="home-desc-icon"
                  src={item.logoPath}
                />
              )}
              {item.urlPath ? (
                <a href={`${item.urlPath}`} className="home-desc-text link">
                  {item.data}
                </a>
              ) : (
                <div className="home-desc-text">{item.data}</div>
              )}
            </div>
          ))}
        </div>
      </LiquidGlass>
    </div>
  );
}

export default HomeDataComp;
