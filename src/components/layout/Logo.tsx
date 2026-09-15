import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="shrink-0 whitespace-nowrap text-lg font-semibold text-(--text-h)"
    >
      VV Work
    </Link>
  );
}

export default Logo;
