import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations", dropdown: "districts" },
    { name: "Tours", path: "/tours", dropdown: "tours" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Tours dropdown
  const toursDropdown = [
    { name: "Wildlife", path: "/wildlife" },
    { name: "Culture", path: "/culture" },
    { name: "Cuisine", path: "/cuisine" },
    { name: "Resorts", path: "/resorts" },
    { name: "Festivals", path: "/festivals" }, // extra interactive item
  ];

  // Districts dropdown
  const districtsDropdown = [
    { name: "Madurai", path: "/madurai" },
    { name: "Ooty", path: "/ooty" },
    { name: "Mahabalipuram", path: "/mahabalipuram" },
    { name: "Manimuthar", path: "/manimuthar" },
    { name: "Rameswaram", path: "/rameswaram" },
    { name: "Chennai", path: "/chennai" },
    { name: "Kodaikanal", path: "/kodaikanal" },
    { name: "Tiruchirappalli", path: "/tiruchirappalli" },
    { name: "Vellore", path: "/vellore" },
    { name: "Thanjavur", path: "/thanjavur" },
    { name: "Coimbatore", path: "/coimbatore" },
    { name: "Thirunelveli", path: "/thirunelveli" },
    { name: "View All Destinations", path: "/Destinations" }, // extra
  ];

  return (
    <nav>
      <style>{`
        nav {
          background-color: #004d40;
          color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          font-family: 'Poppins', sans-serif;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.8rem;
        }

        .logo img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        ul li {
          position: relative;
        }

        ul li a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background 0.3s ease, color 0.3s ease;
        }

        ul li a:hover {
          background-color: #ffd700;
          color: #004d40;
        }

        ul li a.active {
          background-color: #00796b;
          font-weight: 700;
        }

        /* Dropdown Menu */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          color: #004d40;
          min-width: 220px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          display: none;
          flex-direction: column;
          z-index: 2000;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        ul li:hover .dropdown {
          display: flex;
          opacity: 1;
          transform: translateY(0);
        }

        .dropdown a {
          padding: 0.75rem 1rem;
          color: #004d40;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .dropdown a:hover {
          background: #f0f0f0;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 9999px;
          padding: 0.25rem 0.75rem;
        }

        .search-bar input {
          border: none;
          outline: none;
          padding: 0.5rem;
          border-radius: 9999px;
        }

        .search-bar svg {
          color: #004d40;
          margin-left: 0.5rem;
        }

        .login-btn {
          background-color: #ffd700;
          color: #004d40;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .login-btn:hover {
          background-color: #ffc107;
        }

        .mobile-menu {
          background-color: #004d40;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid #00796b;
        }

        .modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          width: 300px;
          max-width: 90%;
        }

        .modal-content input {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .modal-content button {
          background-color: #004d40;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: bold;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
          .md\\:hidden {
            display: none;
          }
        }
      `}</style>

      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>

      <ul className="hidden md:flex">
        {navLinks.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoverMenu(link.dropdown)}
            onMouseLeave={() => setHoverMenu(null)}
          >
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>

            {/* Tours Dropdown */}
            {link.dropdown === "tours" && hoverMenu === "tours" && (
              <div className="dropdown">
                {toursDropdown.map((item, i) => (
                  <Link key={i} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Districts Dropdown */}
            {link.dropdown === "districts" && hoverMenu === "districts" && (
              <div className="dropdown">
                {districtsDropdown.map((district, i) => (
                  <Link key={i} to={district.path}>
                    {district.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
        <li>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FiSearch />
          </div>
        </li>
        <li>
          <button className="login-btn" onClick={() => setShowLogin(true)}>
            <FiUser /> Login
          </button>
        </li>
      </ul>

      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="mobile-menu absolute top-full left-0 w-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <FiSearch />
            </div>
          </li>
          <li>
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              <FiUser /> Login
            </button>
          </li>
        </ul>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="modal" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => alert("Login submitted!")}>Login</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
