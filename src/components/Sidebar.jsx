import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Downloader", path: "/downloader" },
    { name: "Drive", path: "/drive" },
    { name: "Pembukuan", path: "/pembukuan" },
    { name: "Portofolio", path: "/portofolio" },
    { name: "Statistik", path: "/statistik" },
    { name: "Tentang", path: "/tentang" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <>
      {/* Mobile Topbar */}
      <div className="mobile-header">
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          &#9776;
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div className="backdrop" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <span className="logo-text">MyTaskMate</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
