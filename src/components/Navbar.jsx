import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  //   console.log(theme);

  const handleToggle = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const themeData = localStorage.getItem("theme");
    // console.log(themeData);
    document.querySelector("html").setAttribute("data-theme", themeData);
  }, [theme]);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg px-6 sm:px-8 fixed z-10">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-2xl gap-0 font-bold normal-case"
          >
            <span className="text-fuchsia-700">Byte</span>
            <span className="text-indigo-700">Blaze</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ul className="menu menu-horizontal px-1 gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Bookmarks
            </NavLink>
          </ul>
          <label className="toggle text-base-content">
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
