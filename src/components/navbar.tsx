import { Link } from "react-router-dom";
import ThemeToggle from "./theme/theme-toggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white p-8 py-3 dark:bg-zinc-950 sm:px-14 lg:px-20">
      <Link to="/">
        <p className="text-2xl font-semibold text-red-500">Cinefy</p>
      </Link>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
