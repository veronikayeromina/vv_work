import Nav from "./Nav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 relative">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
