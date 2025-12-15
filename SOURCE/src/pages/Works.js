import { useProfile } from "../contexts/useProfile";

export default function Works() {

  const {lang} = useProfile();

  return (
    <div className="page-body">
      Works Page - Lang Check: {lang}
    </div>
  );
}