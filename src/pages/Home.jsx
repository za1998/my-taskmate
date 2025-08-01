import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
  Cell,
  Line,
} from "recharts";
import ChatAI from "./ChatAI";
import "../style/Home.css";

export default function Home() {
  const [liveData, setLiveData] = useState([
    { time: "0s", open: 50, close: 55, high: 60, low: 45, volume: 200 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => {
        const last = prev[prev.length - 1];
        const open = last.close;
        const close = Math.max(20, Math.min(100, open + (Math.random() * 10 - 5)));
        const high = Math.max(open, close) + Math.random() * 5;
        const low = Math.min(open, close) - Math.random() * 5;
        const volume = Math.floor(Math.random() * 400) + 100;
        const time = `${prev.length}s`;
        return [...prev.slice(-40), { time, open, close, high, low, volume }];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>
            Selamat Datang di <span className="highlight">MyTaskMate</span>
          </h1>
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

      <section className="chart-container live">
          <ChatAI />
        <h3>📈 Simulasi Grafik Candlestick + Volume</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={liveData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="time" stroke="#ccc" />
            <YAxis yAxisId="left" stroke="#ccc" domain={['auto', 'auto']} />
            <YAxis yAxisId="right" orientation="right" hide />

            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#4ab4f5" }}
            />

            {/* Volume */}
            <Bar yAxisId="right" dataKey="volume" barSize={5} opacity={0.3}>
              {liveData.map((entry, index) => (
                <Cell
                  key={`vol-${index}`}
                  fill={entry.close > entry.open ? "#00ff99" : "#ff4d4d"}
                />
              ))}
            </Bar>

            {/* Open/Close Bar (Body) */}
            <Bar yAxisId="left" dataKey="close" barSize={5}>
              {liveData.map((entry, index) => {
                const height = Math.abs(entry.close - entry.open);
                return (
                  <Cell
                    key={`candle-${index}`}
                    fill={entry.close > entry.open ? "#00ff99" : "#ff4d4d"}
                    y={Math.min(entry.close, entry.open)}
                    height={height}
                  />
                );
              })}
            </Bar>

            {/* Wick Line */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="high"
              stroke="transparent"
              dot={(props) => {
                const { cx, cy, index } = props;
                const d = liveData[index];
                if (!d) return null;
                const color = d.close > d.open ? "#00ff99" : "#ff4d4d";
                return (
                  <g>
                    <line
                      x1={cx}
                      x2={cx}
                      y1={props.y}
                      y2={props.chartY + 50}
                      stroke={color}
                      strokeWidth={1}
                    />
                  </g>
                );
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
