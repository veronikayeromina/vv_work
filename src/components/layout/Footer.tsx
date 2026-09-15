import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import Logo from "./Logo";

const footerList: footerListType[] = [
  {
    name: "Контакти",
    link: ROUTES.contacts,
  },
  {
    name: "Про компанію",
    link: null,
  },
  {
    name: "Для кандидатів",
    link: ROUTES.home,
  },
  {
    name: "Для роботодавців",
    link: null,
  },
  {
    name: "Соцмережі",
    link: null,
  },
  {
    name: "Політика конфіденційності",
    link: null,
  },
  {
    name: "Умови використання",
    link: null,
  },
];

type footerListType = {
  name: string;
  link: string | null;
};

function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-(--border) px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <Logo />

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {footerList.map(el =>
          el.link === null ? (
            <span key={el.name} className="text-(--text)">
              {el.name}
            </span>
          ) : (
            <Link
              to={el.link}
              key={el.name}
              className="text-(--text) transition-colors hover:text-(--accent)"
            >
              {el.name}
            </Link>
          ),
        )}
      </div>
    </footer>
  );
}

export default Footer;
