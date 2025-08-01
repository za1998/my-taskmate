import "../style/Kontak.css";

export default function Kontak() {
  return (
    <div className="kontak-container">
      <h2>Hubungi Kami</h2>
      <p>
        Jika kamu memiliki pertanyaan, saran, atau ingin terhubung langsung dengan developer MyTaskMate, silakan hubungi melalui:
      </p>
      <ul>
        <li>📧 Email: <a href="mailto:mytaskmate.app@gmail.com">mytaskmate.app@gmail.com</a></li>
        <li>📱 WhatsApp: <a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></li>
        <li>🌐 Website: <a href="https://mytaskmate.vercel.app" target="_blank">mytaskmate.vercel.app</a></li>
      </ul>
      <p>Developer aktif membalas pesan setiap hari kerja.</p>
    </div>
  );
}
