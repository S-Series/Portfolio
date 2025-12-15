import { useProfile } from "../contexts/useProfile";

export default function Roadmap() {

  const {lang} = useProfile();

  return (
    <div className="page-body">
      Roadmap Page - Lang Check: {lang}
    </div>
  );
}