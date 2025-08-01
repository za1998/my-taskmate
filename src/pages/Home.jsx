import "../style/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Selamat Datang di <span className="highlight">MyTaskMate</span></h1>
          <p>Platform pribadi serbaguna untuk membantu aktivitas digital harianmu.</p>
          <div className="hero-buttons">
            <Link to="/" className="btn primary">🚀 Mulai Sekarang</Link>
            <Link to="/tentang" className="btn secondary">ℹ️ Pelajari Lebih Lanjut</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" alt="Dashboard" />
        </div>
      </section>

      <section className="features">
        <h2>🔧 Fitur Unggulan</h2>
        <div className="features-grid">
          <FeatureCard title="Downloader" desc="Unduh video dari TikTok, IG, YouTube, dan X tanpa watermark." to="/downloader" />
          <FeatureCard title="Drive" desc="Upload file pentingmu secara pribadi dan aman." to="/drive" />
          <FeatureCard title="Pembukuan" desc="Catat pemasukan dan pengeluaran harianmu dengan mudah." to="/pembukuan" />
          <FeatureCard title="Portofolio" desc="Tampilkan proyek-proyek terbaikmu dalam satu tempat." to="/portofolio" />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc, to }) {
  return (
    <Link to={to} className="feature-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
}
