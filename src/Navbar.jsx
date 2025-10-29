import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import Logo from "./assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations", dropdown: "districts" },
    { name: "Tours", path: "/tours", dropdown: "tours" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toursDropdown = [
    { name: "Wildlife", path: "/wildlife" },
    { name: "Culture", path: "/culture" },
    { name: "Cuisine", path: "/cuisine" },
    { name: "Resorts", path: "/resorts" },
    { name: "Festivals", path: "/festivals" },
  ];

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
    { name: "Tirunelveli", path: "/thirunelveli" },
  ];

  // 🔍 Search filter functionality
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredDistricts([]);
      return;
    }

    const results = districtsDropdown.filter((district) =>
      district.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDistricts(results);
  };

  const handleDistrictClick = (path) => {
    setSearchTerm("");
    setFilteredDistricts([]);
    navigate(path);
  };

  return (
    <>
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
          .Logo img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
          ul {
            list-style: none;
            display: flex;
            gap: 1.5rem;
            align-items: center;
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
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 2000;
          }
          ul li:hover .dropdown {
            display: flex;
            opacity: 1;
            transform: translateY(0);
          }
          .dropdown a {
            padding: 10px 15px;
            text-decoration: none;
            color: #004d40;
          }
          .dropdown a:hover { background: #f0f0f0; }
          .search-container {
            position: relative;
          }
          .search-bar {
            display: flex;
            align-items: center;
            background: white;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            position: relative;
            z-index: 1;
          }
          .search-bar input {
            border: none;
            outline: none;
            padding: 0.5rem;
            border-radius: 9999px;
          }
          .suggestions {
            position: absolute;
            top: 110%;
            left: 0;
            width: 100%;
            background: white;
            color: #004d40;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            z-index: 5;
            font-size: 0.9rem;
          }
          .suggestions div {
            padding: 0.5rem 1rem;
            cursor: pointer;
          }
          .suggestions div:hover {
            background: #f0f0f0;
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
          .login-btn:hover { background-color: #ffc107; }
          .mobile-menu {
            background-color: #004d40;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-top: 1px solid #00796b;
          }
          @media (min-width: 768px) {
            .mobile-menu { display: none; }
            .md\\:hidden { display: none; }
          }
        `}</style>

        {/* 🔥 Logo + Title */}
        <div
          className="Logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img src={Logo} alt="Logo" />
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "white",
                letterSpacing: "1.5px",
                fontFamily: "'Cinzel', serif",
              }}
            >
              EPICUREVOYAGE
            </h1>
          </Link>
        </div>

        {/* 🔗 Desktop Menu */}
        <ul className="hidden md:flex">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverMenu(link.dropdown)}
              onMouseLeave={() => setHoverMenu(null)}
              style={{ position: "relative" }}
            >
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>

              {link.dropdown === "tours" && hoverMenu === "tours" && (
                <div className="dropdown">
                  {toursDropdown.map((item, i) => (
                    <Link key={i} to={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

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

          {/* 🔍 Search */}
          <li className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search district..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FiSearch />
            </div>
            {filteredDistricts.length > 0 && (
              <div className="suggestions">
                {filteredDistricts.map((district, i) => (
                  <div key={i} onClick={() => handleDistrictClick(district.path)}>
                    {district.name}
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* 🔒 Login Button */}
          <li>
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              <FiUser /> Login
            </button>
          </li>
        </ul>

        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* 📱 Mobile Dropdown */}
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
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <FiSearch />
              </div>
              {filteredDistricts.length > 0 && (
                <div className="suggestions">
                  {filteredDistricts.map((district, i) => (
                    <div
                      key={i}
                      onClick={() => handleDistrictClick(district.path)}
                    >
                      {district.name}
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <button className="login-btn" onClick={() => setShowLogin(true)}>
                <FiUser /> Login
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* 🔒 Login Modal */}
      {showLogin && (
        <div
          className="modal"
          onClick={() => setShowLogin(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "2rem 2.5rem",
              borderRadius: "12px",
              width: "350px",
              maxWidth: "90%",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              animation: "fadeIn 0.3s ease",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#004d40" }}>
              Login
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Login successful!");
                setShowLogin(false);
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <label>Email</label>
                <input
                  type="email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label>Password</label>
                <input
                  type="password"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#004d40",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Login
              </button>

              <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem" }}>
                Don’t have an account?{" "}
                <span
                  style={{ color: "#00796b", cursor: "pointer", fontWeight: "600" }}
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                >
                  Sign up
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* 🆕 Signup Modal */}
      {showSignup && (
        <div
          className="modal"
          onClick={() => setShowSignup(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "2rem 2.5rem",
              borderRadius: "12px",
              width: "350px",
              maxWidth: "90%",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              animation: "fadeIn 0.3s ease",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#004d40" }}>
              Sign Up
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Signup successful!");
                setShowSignup(false);
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label>Email</label>
                <input
                  type="email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label>Password</label>
                <input
                  type="password"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#004d40",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Sign Up
              </button>

              <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem" }}>
                Already have an account?{" "}
                <span
                  style={{ color: "#00796b", cursor: "pointer", fontWeight: "600" }}
                  onClick={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
