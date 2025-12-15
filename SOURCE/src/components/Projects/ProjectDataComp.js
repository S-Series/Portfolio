import { useProfile } from "../../contexts/useProfile";
import { ProjectStatus } from "../../datas/ProjectData";
import "./ProjectDataComp.css"

function ProjectDataComp(props) {
  const {
    id,
    title,
    subtitle,
    description,
    status,
    tech,
    thumbnail,
    links,
    period,
  } = props;

  const { lang } = useProfile();

  const renderPeriod = (period, status) => {
    if (status === ProjectStatus.SERVICE || status === ProjectStatus.PROGRESS) {
      return `Since. ${period.start} ~`;
    }

    if (status === ProjectStatus.ARCHIVED) {
      return `${period.start} ~ ${period.end}`;
    }

    return null;
  };

  return (
    <div id={id} className="project-container">
      <div className="header">
        <img
          alt="thumbnail"
          src={thumbnail}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/projects/default.jpg";
          }}
        />
        <div className="text-slot">
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
          <span className="period"> {renderPeriod(period, status)}</span>
        </div>
      </div>
      <div className="skill-slot">
        {tech.map((item) => {
          return (
            <span className="tech-slot" key={`${id}-${item}`}>
              {item}
            </span>
          );
        })}
      </div>
      <span className="description">{description[lang]}</span>
      <div className="button-slot">
        <button
          className="link-button"
          disabled={!links.github}
          onClick={() => window.open(links.github, "_blank")}>
          <img alt="github icon" src="/github.png" />
          <span>Github</span>
        </button>
        <button
          className="link-button"
          disabled={!links.service}
          onClick={() => window.open(links.service, "_blank")}>
          <img alt="link icon" src="/link.png" />
          <span>Visit</span>
        </button>
      </div>
    </div>
  );
}
export default ProjectDataComp;
