import "../style/Pembukuan.css";

export default function Pembukuan() {
  return (
    <div className="pembukuan-container">
      <div className="pembukuan-card">
        <h2>📘 Halaman Pembukuan</h2>
        <p>
          Tim pengembang saat ini sedang dalam proses membangun sistem pembukuan.
        </p>
        <p>
          Harap bersabar, fitur ini akan segera tersedia dengan tampilan yang lebih interaktif dan fungsional.
        </p>
        <div className="loader-bar">
          <div className="progress" />
        </div>
        <p className="note">Versi beta direncanakan rilis dalam waktu dekat.</p>
      </div>
    </div>
  );
}
