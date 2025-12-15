import { useProfile } from "../../contexts/useProfile";

import AboutData from "../../datas/AboutData";
import "./AboutDataComp.css";

function AboutDataComp({ index }) {
  const { lang } = useProfile();
  const data = AboutData[lang][index];

  if (!data) return null;

  return (
    <div
      key={data.id}
      className={`about-data-body ${index % 2 === 0 ? "left" : "right"}`}>
      <div className="item-slot">
        <div className="about-title-box">
          {data.logoPath && (
            <img className="about-main-logo" src={data.logoPath} alt="logo" />
          )}
          <h1 className={`about-main-title ${lang}-font`}>{data.title}</h1>
        </div>

        <div className="about-description-box">
          {data.description.map((item, index) => (
            <div className="about-desc-item" key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                {item.logoPath && (
                  <img
                    alt="icon"
                    className="about-desc-icon"
                    src={item.logoPath}
                  />
                )}
                {item.urlPath ? (
                  <a
                    href={`${item.urlPath}`}
                    className={`about-desc-title link en-font`}>
                    <img
                      alt="icon"
                      src="./link.png"
                      style={{
                        width: "1rem",
                        height: "1rem",
                      }}
                    />
                    {item.title}
                  </a>
                ) : (
                  <div className={`about-desc-title en-font`}>{item.title}</div>
                )}
              </div>
              <div className={`about-desc-text ${lang}-font`}>{item.data}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDataComp;
