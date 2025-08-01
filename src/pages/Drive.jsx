import { useState } from "react";
import "../style/IframePage.css";

export default function Drive() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="iframe-container">
      {loading && (
        <div className="iframe-loader">
          <div className="spinner" />
          <span>Memuat Drive...</span>
        </div>
      )}
      <iframe
        src="https://file-upload-drive-one.vercel.app/"
        className="iframe-content"
        onLoad={() => setLoading(false)}
        title="Drive"
      ></iframe>

      <p style={{ marginTop: "10px", fontStyle: "italic", fontSize: "14px" }}>
        Untuk akses upload, silakan hubungi tim developer.
      </p>
    </div>
  );
}
