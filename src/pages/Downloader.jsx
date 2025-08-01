import { useState } from "react";
import "../style/IframePage.css"; // Pastikan file CSS terbaru sudah diimpor

export default function Downloader() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="iframe-page">
      <div className="iframe-container">
        {/* Loading Overlay */}
        {loading && (
          <div className="iframe-loader">
            <div className="spinner" />
            <span className="loader">Memuat halaman Downloader...</span>
          </div>
        )}

        {/* Embedded Iframe */}
        <iframe
          src="https://multi-downloader-nine.vercel.app/"
          className="iframe-content"
          onLoad={() => setLoading(false)}
          title="Downloader"
          loading="lazy"
        ></iframe>
      </div>

      {/* Optional Note or Info */}
      <p className="iframe-note">
        Situs downloader berjalan langsung dari layanan eksternal yang telah diintegrasikan.
      </p>
    </section>
  );
}
