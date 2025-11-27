import { useProfile } from "../contexts/UseProfile";

export default function Skills() {

  const {lang} = useProfile();

  return (
    <div style={{
      height: "1000px"
    }}>
      Skills Page - Lang Check: {lang}
    </div>
  );
}