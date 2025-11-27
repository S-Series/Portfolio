import { useProfile } from "../contexts/UseProfile";

export default function Projects() {

  const {lang} = useProfile();

  return (
    <div style={{
      height: "1000px"
    }}>
      ProjectsPage - Lang Check: {lang}
    </div>
  );
}