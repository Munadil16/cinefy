import { Link } from "react-router-dom";
import ThemeToggle from "./theme/theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3">
      <Link to="/">
        <p className="text-xl font-medium text-red-500">Cinefy</p>
      </Link>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
