import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../app/routes";

type PropsType = {
  className?: string;
};

const baseLinkClass = "text-(--text) transition-colors hover:text-(--accent)";

function NavLinks({ className = "text-sm" }: PropsType) {
  const linkClass = `${baseLinkClass} ${className}`;

  return (
    <>
      <Link to="/#categories" className={linkClass}>
        Знайти роботу
      </Link>
      <Link to="/#employers" className={linkClass}>
        Знайти працівника
      </Link>
      <Link to="/" className={linkClass}>
        Про нас
      </Link>
      <NavLink
        to="/partners/euro-logistics"
        className={({ isActive }) =>
          isActive ? `${className} font-medium text-(--accent)` : linkClass
        }
      >
        Партнери
      </NavLink>
      <Link to={ROUTES.contacts} className={linkClass}>
        Контакти
      </Link>
    </>
  );
}

export default NavLinks;
