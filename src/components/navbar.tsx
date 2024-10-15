import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center px-6 py-3">
      <Link to="/">
        <p className="text-xl font-medium text-blue-600">Cinefy</p>
      </Link>
    </nav>
  );
};

export default Navbar;
