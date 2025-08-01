import { useEffect, useState } from "react";
import "../style/Drive.css";

export default function Drive() {
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setIframeError(true);
        setLoading(false);
      }
    }, 8000);
    return () => clearTimeout(timeout);
  }, [loading]);

  const retryLoad = () => {
    setLoading(true);
    setIframeError(false);
    const iframe = document.getElementById("drive-iframe");
    if (iframe) iframe.src = iframe.src;
  };

  return (
    <div className="drive-wrapper">
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
            <button className="retry-btn" onClick={retryLoad}>
              🔄 Coba Lagi
            </button>
          </div>
        )}

        <iframe
          id="drive-iframe"
          src="https://file-upload-drive-one.vercel.app"
          className="iframe-content"
          onLoad={() => setLoading(false)}
          title="Drive"
        />
      </div>

<div className="iframe-footer">
  <div className="iframe-info-box">
    <p>
      ⚠️ <strong>Layanan Drive ini bersifat terbatas</strong> dan hanya dapat digunakan setelah mendapatkan
      persetujuan dari tim developer.
    </p>
    <p>
      Jika Anda mengalami kendala dalam mengakses fitur atau memerlukan izin upload file, silakan hubungi kami melalui Telegram.
    </p>
  </div>

  <a
    href="https://t.me/Testingabers"
    className="chat-telegram-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    Chat Developer
  </a>
</div>

    </div>
  );
}
