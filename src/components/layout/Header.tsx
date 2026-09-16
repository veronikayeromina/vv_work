import Nav from "./Nav";
import Logo from "./Logo";
import Button from "../ui/Button";
import useTheme from "../../hooks/useTheme";
import { useFavorites } from "../../hooks/useFavorites";
import { FaHeart } from "react-icons/fa";

function Header() {
  const [theme, toggleTheme] = useTheme();
  const { favorites } = useFavorites();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 relative">
      <Logo />

      <div className="flex flex-wrap items-center gap-4">
        <Button
          onClick={toggleTheme}
          className="w-auto! min-w-0! px-3 py-1.5 text-sm"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>

        <span className="flex items-center gap-1 text-sm text-(--text)">
          <FaHeart className="text-(--accent)" aria-hidden="true" />
          <span aria-hidden="true">{favorites.length > 0 && favorites.length}</span>
          <span className="sr-only">У обраному: {favorites.length}</span>
        </span>

        <Nav />
      </div>
    </header>
  );
}

export default Header;
