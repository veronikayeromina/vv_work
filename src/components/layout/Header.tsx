import Nav from "./Nav";
import Logo from "./Logo";
import Button from "../ui/Button";
import useTheme from "../../hooks/useTheme";

function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 relative">
      <Logo />

      <div className="flex flex-wrap items-center gap-4">
        <Nav />

        <Button
          onClick={toggleTheme}
          className="w-auto min-w-0! px-3 py-1.5 text-sm"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </div>
    </header>
  );
}

export default Header;
