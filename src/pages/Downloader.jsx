import { useState } from "react";
import "../style/IframePage.css";

export default function Drive() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="iframe-container">
      {loading && (
        <div className="iframe-loader">
          <div className="spinner" />
          <span>Memuat Download...</span>
        </div>
      )}
      <iframe
        src="https://multi-downloader-nine.vercel.app/"
        className="iframe-content"
        onLoad={() => setLoading(false)}
        title="Drive"
      ></iframe>

      <p style={{ marginTop: "10px", fontStyle: "italic", fontSize: "14px" }}>
      </p>
    </div>
  );
}
