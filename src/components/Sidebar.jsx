import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navSections = [
    {
      title: "📂 Fitur Utama",
      items: [
        { name: "Beranda", path: "/" },
        { name: "Downloader", path: "/downloader" },
        { name: "Drive", path: "/drive" },
        { name: "Pembukuan", path: "/pembukuan" },
      ],
    },
    {
      title: "📁 Informasi",
      items: [
        { name: "Portofolio", path: "/portofolio" },
        { name: "Statistik", path: "/statistik" },
        { name: "Tentang", path: "/tentang" },
        { name: "Kontak", path: "/kontak" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <span className="logo-text">MyTaskMate</span>
        </div>

        <nav className="sidebar-nav">
          {navSections.map((section, idx) => (
            <div className="sidebar-section" key={idx}>
              <div className="section-title">{section.title}</div>
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay on Mobile */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
