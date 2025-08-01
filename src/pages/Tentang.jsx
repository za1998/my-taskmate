import PageWrapper from "../components/PageWrapper";
import "../style/PageWrapper.css";

export default function Tentang() {
  return (
    <PageWrapper title="Tentang Aplikasi">
      <p>
        <strong>MyTaskMate</strong> adalah aplikasi produktivitas all-in-one yang dirancang
        untuk memudahkan manajemen tugas, pengelolaan file, downloader, dan banyak lagi.
      </p>
      <p>
        Proyek ini dibuat dengan <span style={{ color: "#4ab4f5" }}>React.js</span> oleh tim developer berdedikasi
        untuk mendukung efisiensi kerja digital dengan antarmuka modern dan ringan.
      </p>
    </PageWrapper>
  );
}
