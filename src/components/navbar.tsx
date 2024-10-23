import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./theme/theme-toggle";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-3 bg-white p-8 py-3 dark:bg-zinc-950 sm:px-14 lg:px-20">
      <Link to="/">
        <p className="text-2xl font-semibold text-red-500">Cinefy</p>
      </Link>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full border px-4 focus-within:border-2 focus-within:border-red-500">
          <Input
            className="h-9 border-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <Search
            className="cursor-pointer opacity-55 hover:opacity-100"
            onClick={handleSearch}
          />
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
