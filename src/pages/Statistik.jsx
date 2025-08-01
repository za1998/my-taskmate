import "../style/Statistik.css";

export default function Statistik() {
  const downloadData = JSON.parse(localStorage.getItem("download_history")) || [];
  const driveCount = parseInt(localStorage.getItem("file_uploaded") || "0");
  const transaksi = JSON.parse(localStorage.getItem("transaksi_data")) || [];

  const pemasukan = transaksi
    .filter(t => t.type === "masuk")
    .reduce((sum, t) => sum + t.amount, 0);

  const pengeluaran = transaksi
    .filter(t => t.type === "keluar")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalTransaksi = pemasukan + pengeluaran;

  return (
    <div className="statistik-container">
      <h2>📊 Statistik MyTaskMate</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Downloader</h3>
          <p>{downloadData.length} link diunduh</p>
        </div>
        <div className="stat-card">
          <h3>Drive</h3>
          <p>{driveCount} file diupload</p>
        </div>
        <div className="stat-card">
          <h3>Pembukuan</h3>
          <p>Total transaksi: {totalTransaksi.toLocaleString()} IDR</p>
          <p>🟢 Masuk: {pemasukan.toLocaleString()} IDR</p>
          <p>🔴 Keluar: {pengeluaran.toLocaleString()} IDR</p>
        </div>
      </div>
    </div>
  );
}
