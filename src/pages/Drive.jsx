import { useEffect, useState } from "react";
import "../style/IframePage.css";

export default function Drive() {
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setIframeError(true);
        setLoading(false);
      }
    }, 8000); // Timeout 8 detik jika iframe tak merespons

    return () => clearTimeout(timeout);
  }, [loading]);

  const retryLoad = () => {
    setLoading(true);
    setIframeError(false);
    // Force reload iframe
    const iframe = document.getElementById("drive-iframe");
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="iframe-container">
      {loading && !iframeError && (
        <div className="iframe-loader">
          <div className="spinner" />
          <span>Memuat Drive...</span>
        </div>
      )}

      {!loading && iframeError && (
        <div className="iframe-loader error">
          <p>⚠️ Gagal memuat konten Drive.</p>
          <p>Login mungkin diblokir oleh browser karena batasan keamanan.</p>
          <button className="retry-btn" onClick={retryLoad}>🔄 Coba Lagi</button>
        </div>
      )}

      <iframe
        id="drive-iframe"
        src="https://file-upload-drive-one.vercel.app"
        className="iframe-content"
        onLoad={() => setLoading(false)}
        title="Drive"
      />

      <p className="iframe-note">
        Jika halaman tidak merespons atau tidak bisa login, hubungi tim developer.
      </p>
    </div>
  );
}
