import { useState } from "react";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
import { IoIosClose } from "react-icons/io";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
        className="relative z-50 w-auto! border-0! sm:hidden"
      >
        {isOpen ? (
          <IoIosClose className="text-white" size={28} />
        ) : (
          <GiHamburgerMenu size={20} />
        )}
      </Button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-6 backdrop-blur-sm sm:hidden"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="flex w-full max-w-sm flex-col gap-6 p-8 text-center"
          >
            <NavLinks className="text-xl font-semibold" />
          </div>
        </div>
      )}

      <div className="hidden sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <NavLinks />
      </div>
    </nav>
  );
}

export default Nav;
