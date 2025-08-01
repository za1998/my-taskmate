import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Downloader from "./pages/Downloader";
import Drive from "./pages/Drive";
import Pembukuan from "./pages/Pembukuan";
import Portofolio from "./pages/Portofolio";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import Statistik from "./pages/Statistik";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/downloader" element={<Downloader />} />
            <Route path="/drive" element={<Drive />} />
            <Route path="/pembukuan" element={<Pembukuan />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/statistik" element={<Statistik />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
