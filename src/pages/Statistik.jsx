import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import "../style/Statistik.css";

export default function Statistik() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
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

    setChartData([
      { name: "Downloader", value: downloadData.length },
      { name: "Drive Upload", value: driveCount },
      { name: "Pemasukan", value: pemasukan },
      { name: "Pengeluaran", value: pengeluaran },
      { name: "Total Transaksi", value: totalTransaksi },
    ]);
  }, []);

  return (
    <div className="statistik-container">
      <h2>📊 Statistik MyTaskMate</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: '#222', border: '1px solid #444', color: '#fff' }} />
            <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#fff' }} />
            <Bar dataKey="value" fill="#4ab4f5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
