import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../app/routes";

type PropsType = {
  className?: string;
  onLinkClick?: () => void;
};

const baseLinkClass = "text-(--text) transition-colors hover:text-(--accent)";

function NavLinks({ className = "text-sm", onLinkClick }: PropsType) {
  const linkClass = `${baseLinkClass} ${className}`;

  return (
    <>
      <Link to="/#categories" className={linkClass} onClick={onLinkClick}>
        Знайти роботу
      </Link>
      <Link to="/#employers" className={linkClass} onClick={onLinkClick}>
        Знайти працівника
      </Link>
      <NavLink
        to="/"
        end
        onClick={onLinkClick}
        className={({ isActive }) =>
          isActive ? `${className} font-medium text-(--accent)` : linkClass
        }
      >
        Про нас
      </NavLink>
      <NavLink
        to="/partners/euro-logistics"
        onClick={onLinkClick}
        className={({ isActive }) =>
          isActive ? `${className} font-medium text-(--accent)` : linkClass
        }
      >
        Партнери
      </NavLink>
      <NavLink
        to={ROUTES.contacts}
        onClick={onLinkClick}
        className={({ isActive }) =>
          isActive ? `${className} font-medium text-(--accent)` : linkClass
        }
      >
        Контакти
      </NavLink>
    </>
  );
}

export default NavLinks;
