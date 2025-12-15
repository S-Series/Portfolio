import { useProfile } from "../contexts/useProfile";

import ProjectsData, { ProjectStatus } from "../datas/ProjectData";
import ProjectDataComp from "../components/Projects/ProjectDataComp";

import "./_page.css";
import "./Projects.css";

export default function Projects() {
  const { lang } = useProfile();

  const projects = ProjectsData;
  const onProgressProjects = projects.filter(
    (item) => item.status === ProjectStatus.PROGRESS
  );
  const onServiceProjects = projects.filter(
    (item) => item.status === ProjectStatus.SERVICE
  );
  const archivedProjects = projects.filter(
    (item) =>
      item.status === ProjectStatus.ARCHIVED ||
      item.status === ProjectStatus.DROPPED
  );

  const EmptySlot = () => {
    return (
      <div className="empty-slot">
        <img alt="dev icon" src="/logo/dev.png" />
        <span>Nothing is here now...</span>
      </div>
    );
  };

  return (
    <>
      <div className="page-body project-body">
        <div id="on-service" className="project-slot on-service">
          <h2>On Service</h2>
          {onServiceProjects.length !== 0 ? (
            onServiceProjects.map((item) => (
              <ProjectDataComp key={item.id} {...item} />
            ))
          ) : (
            <EmptySlot />
          )}
        </div>
        <div id="on-progress" className="project-slot on-progress">
          <h2>On Progress</h2>
          {onProgressProjects.length !== 0 ? (
            onProgressProjects.map((item) => (
              <ProjectDataComp key={item.id} {...item} />
            ))
          ) : (
            <EmptySlot />
          )}
        </div>
        <div id="archived" className="project-slot archived">
          <h2>Archived</h2>
          {archivedProjects.length !== 0 ? (
            archivedProjects.map((item) => (
              <ProjectDataComp key={item.id} {...item} />
            ))
          ) : (
            <EmptySlot />
          )}
        </div>
      </div>
      <div className="project-fixed-slot">
          <a href="#on-service">
            On Service
          </a>
          <a href="#on-progress">
            On Progress
          </a>
          <a href="#archived">
            Archived
          </a>
      </div>
    </>
  );
}
