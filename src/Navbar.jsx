import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import Logo from "./assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const location = useLocation();

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
    { name: "Thirunelveli", path: "/thirunelveli" },
    { name: "View All Destinations", path: "/Destinations" },
  ];

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
          }
          ul li:hover .dropdown {
            display: flex;
            opacity: 1;
            transform: translateY(0);
          }
          .dropdown a:hover { background: #f0f0f0; }
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

        <div className="Logo">
          <img src={Logo} alt="Logo" />
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
      </nav>

      {/* Login / Signup Modal */}
      {(showLogin || showSignup) && (
        <div
          className="modal"
          onClick={() => {
            setShowLogin(false);
            setShowSignup(false);
          }}
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
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .modal-title {
                text-align: center;
                font-size: 1.6rem;
                font-weight: 700;
                color: #004d40;
                margin-bottom: 1.5rem;
              }
              .modal-input {
                width: 100%;
                padding: 0.75rem 1rem;
                margin-bottom: 1rem;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 1rem;
                transition: all 0.2s ease;
              }
              .modal-input:focus {
                border-color: #00796b;
                box-shadow: 0 0 0 2px rgba(0,121,107,0.2);
                outline: none;
              }
              .modal-btn {
                width: 100%;
                background: linear-gradient(135deg, #004d40, #00796b);
                color: white;
                padding: 0.75rem;
                border: none;
                border-radius: 9999px;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.3s ease, transform 0.1s ease;
              }
              .modal-btn:hover {
                background: linear-gradient(135deg, #00695c, #009688);
                transform: scale(1.02);
              }
              .modal-footer {
                text-align: center;
                margin-top: 1rem;
                font-size: 0.9rem;
                color: #555;
              }
              .modal-footer a {
                color: #00796b;
                text-decoration: none;
                font-weight: 600;
              }
              .modal-footer a:hover {
                text-decoration: underline;
              }
            `}</style>

            {showLogin && (
              <>
                <h2 className="modal-title">Welcome Back 👋</h2>
                <input type="text" placeholder="Username or Email" className="modal-input" />
                <input type="password" placeholder="Password" className="modal-input" />
                <button className="modal-btn" onClick={() => alert("Login submitted!")}>
                  Login
                </button>
                <div className="modal-footer">
                  <p>
                    Don’t have an account?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowLogin(false);
                        setShowSignup(true);
                      }}
                    >
                      Sign up
                    </a>
                  </p>
                  <p>
                    <a href="#">Forgot password?</a>
                  </p>
                </div>
              </>
            )}

            {showSignup && (
              <>
                <h2 className="modal-title">Create Account ✨</h2>
                <input type="text" placeholder="Full Name" className="modal-input" />
                <input type="email" placeholder="Email" className="modal-input" />
                <input type="password" placeholder="Password" className="modal-input" />
                <input type="password" placeholder="Confirm Password" className="modal-input" />
                <button className="modal-btn" onClick={() => alert("Signup submitted!")}>
                  Sign Up
                </button>
                <div className="modal-footer">
                  <p>
                    Already have an account?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowSignup(false);
                        setShowLogin(true);
                      }}
                    >
                      Login
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
