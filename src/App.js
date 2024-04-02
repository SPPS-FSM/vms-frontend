import "./App.css";
import AddSurat from "./pages/admin/AddSurat";
import AddUser from "./pages/admin/AddUser";
import AllSurat from "./pages/admin/AllSurat";
import AllUser from "./pages/admin/AllUser";
import DashboardAdmin from "./pages/admin/Dashboard";
import DetailUser from "./pages/admin/DetailUser";
import EditSurat from "./pages/admin/EditSurat";
import TemplateSurat from "./pages/admin/TemplateSurat";
import AllSuratDekan from "./pages/dekan/AllSurat";
import DashboardDekan from "./pages/dekan/Dashboard";
import EditSuratDekan from "./pages/dekan/EditSurat";
import AllSuratDoswal from "./pages/doswal/AllSurat";
import DashboardDoswal from "./pages/doswal/Dashboard";
import EditSuratDoswal from "./pages/doswal/EditSurat";
import AllSuratKadep from "./pages/kadep/AllSurat";
import DashboardKadep from "./pages/kadep/Dashboard";
import EditSuratKadep from "./pages/kadep/EditSurat";
import AllSuratKaprodi from "./pages/kaprodi/AllSurat";
import DashboardKaprodi from "./pages/kaprodi/Dashboard";
import EditSuratKaprodi from "./pages/kaprodi/EditSurat";
import AllSuratKasubbag from "./pages/kasubbag/AllSurat";
import DashboardKasubbag from "./pages/kasubbag/Dashboard";
import EditSuratKasubbag from "./pages/kasubbag/EditSurat";
import AllSuratKoor from "./pages/koor/AllSurat";
import DashboardKoor from "./pages/koor/Dashboard";
import EditSuratKoor from "./pages/koor/EditSurat";
import Login from "./pages/login";
import DetailFormCutiAkademik from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormCutiAkademik";
import DetailFormKeterlambatanKRS from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormKeterlambatanKRS";
import DetailFormSuratPengantar from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormPengantar";
import DetailFormAktifKuliah from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormAktifKuliah";
import DetailFormPenundaanUKT from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormPenundaanUKT";
import DetailFormPerubahanDataWisuda from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormPerubahanDataWisuda";
import DetailFormUndurDiri from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormUndurDiri";
import Home from "./pages/mahasiswa/Home";
import PersuratanAkademik from "./pages/mahasiswa/persuratanAkademik";
import PersuratanBeasiswa from "./pages/mahasiswa/persuratanBeasiswa";
import PersuratanDataAplikasi from "./pages/mahasiswa/persuratanDataAplikasi";
import PersuratanFasilitas from "./pages/mahasiswa/persuratanFasilitas";
import PersuratanKKN from "./pages/mahasiswa/persuratanKKN";
import AllSuratPetugasPeralatan from "./pages/petugas-peralatan/AllSurat";
import DashboardPetugasPeralatan from "./pages/petugas-peralatan/Dashboard";
import EditSuratPetugasPeralatan from "./pages/petugas-peralatan/EditSurat";
import AllSuratWadek from "./pages/wakil-dekan/AllSurat";
import DashboardWadek from "./pages/wakil-dekan/Dashboard";
import EditSuratWadek from "./pages/wakil-dekan/EditSurat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailFormPerubahanDataSIAP from "./pages/mahasiswa/DetailPersuratanAkademik/detailFormPerubahanDataSIAP";
import DetailSuratRekomendasiKKN from "./pages/mahasiswa/DetailPersuratanKKN/detailSuratRekomendasiKKN";
import DetailSuratKeteranganKKN from "./pages/mahasiswa/DetailPersuratanKKN/detailSuratKeteranganKKN";
import DetailSuratNilaiKKN from "./pages/mahasiswa/DetailPersuratanKKN/detailSuratKeteranganNilaiKKN";
import DetailSuratPembekalanKKN from "./pages/mahasiswa/DetailPersuratanKKN/detailSuratKeteranganPembekalanKKN";
import DetailSuratKeteranganBeasiswa from "./pages/mahasiswa/DetailPersuratanBeasiswa/detailSuratKeteranganBeasiswa";
import DetailSuratPermohonanBeasiswa from "./pages/mahasiswa/DetailPersuratanBeasiswa/detailSuratPermohonanBeasiswa";
import DetailSuratPernyataanBeasiswa from "./pages/mahasiswa/DetailPersuratanBeasiswa/detailSuratPernyataanBeasiswa";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Page */}
          <Route default path="/login" element={<Login />} />

          {/* Admin */}
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/users" element={<AllUser />} />
          <Route path="/admin/detail-user" element={<DetailUser />} />
          <Route path="/admin/tambah-user" element={<AddUser />} />
          <Route path="/admin/semua-surat" element={<AllSurat />} />
          <Route path="/admin/tambah-surat" element={<AddSurat />} />
          <Route path="/admin/edit-surat" element={<EditSurat />} />
          <Route path="/admin/template-surat" element={<TemplateSurat />} />

          {/* Mahasiswa */}
          <Route path="/mahasiswa/home" element={<Home />} />
          <Route
            path="/mahasiswa/surat-akademik"
            element={<PersuratanAkademik />}
          />
          <Route
            path="/mahasiswa/detail-form-cuti"
            element={<DetailFormCutiAkademik />}
          />
          <Route
            path="/mahasiswa/detail-form-krs"
            element={<DetailFormKeterlambatanKRS />}
          />
          <Route
            path="/mahasiswa/detail-form-data-wisuda"
            element={<DetailFormPerubahanDataWisuda />}
          />
          <Route
            path="/mahasiswa/detail-form-undur-diri"
            element={<DetailFormUndurDiri />}
          />
          <Route
            path="/mahasiswa/detail-form-surat-pengantar"
            element={<DetailFormSuratPengantar />}
          />
          <Route
            path="/mahasiswa/detail-form-penundaan-ukt"
            element={<DetailFormPenundaanUKT />}
          />
          <Route
            path="/mahasiswa/detail-form-aktif-kuliah"
            element={<DetailFormAktifKuliah />}
          />
          <Route
            path="/mahasiswa/detail-form-data-siap"
            element={<DetailFormPerubahanDataSIAP />}
          />

          <Route path="/mahasiswa/surat-kkn" element={<PersuratanKKN />} />
          <Route
            path="/mahasiswa/detail-rekomendasi-kkn"
            element={<DetailSuratRekomendasiKKN />}
          />
          <Route
            path="/mahasiswa/detail-keterangan-kkn"
            element={<DetailSuratKeteranganKKN />}
          />
          <Route
            path="/mahasiswa/detail-nilai-kkn"
            element={<DetailSuratNilaiKKN />}
          />
          <Route
            path="/mahasiswa/detail-pembekalan-kkn"
            element={<DetailSuratPembekalanKKN />}
          />

          <Route
            path="/mahasiswa/surat-fasilitas"
            element={<PersuratanFasilitas />}
          />
          <Route
            path="/mahasiswa/surat-data-aplikasi"
            element={<PersuratanDataAplikasi />}
          />
          <Route
            path="/mahasiswa/surat-beasiswa"
            element={<PersuratanBeasiswa />}
          />
          <Route
            path="/mahasiswa/detail-surat-keterangan-beasiswa"
            element={<DetailSuratKeteranganBeasiswa />}
          />
          <Route
            path="/mahasiswa/detail-surat-permohonan-beasiswa"
            element={<DetailSuratPermohonanBeasiswa />}
          />
          <Route
            path="/mahasiswa/detail-surat-pernyataan-beasiswa"
            element={<DetailSuratPernyataanBeasiswa />}
          />

          {/* Kasubbag  */}
          <Route path="/kasubbag/dashboard" element={<DashboardKasubbag />} />
          <Route path="/kasubbag/semua-surat" element={<AllSuratKasubbag />} />
          <Route path="/kasubbag/edit-surat" element={<EditSuratKasubbag />} />

          {/* Dekan */}
          <Route path="/dekan/dashboard" element={<DashboardDekan />} />
          <Route path="/dekan/semua-surat" element={<AllSuratDekan />} />
          <Route path="/dekan/edit-surat" element={<EditSuratDekan />} />

          {/* Wakil Dekan */}
          <Route path="/wadek/dashboard" element={<DashboardWadek />} />
          <Route path="/wadek/semua-surat" element={<AllSuratWadek />} />
          <Route path="/wadek/edit-surat" element={<EditSuratWadek />} />

          {/* Kadep */}
          <Route path="/kadep/dashboard" element={<DashboardKadep />} />
          <Route path="/kadep/semua-surat" element={<AllSuratKadep />} />
          <Route path="/kadep/edit-surat" element={<EditSuratKadep />} />

          {/* Kaprodi */}
          <Route path="/kaprodi/dashboard" element={<DashboardKaprodi />} />
          <Route path="/kaprodi/semua-surat" element={<AllSuratKaprodi />} />
          <Route path="/kaprodi/edit-surat" element={<EditSuratKaprodi />} />

          {/* Koordinator PKL/Skripsi/Penelitian */}
          <Route path="/koor/dashboard" element={<DashboardKoor />} />
          <Route path="/koor/semua-surat" element={<AllSuratKoor />} />
          <Route path="/koor/edit-surat" element={<EditSuratKoor />} />

          {/* Petugas Peralatan */}
          <Route
            path="/petugas/dashboard"
            element={<DashboardPetugasPeralatan />}
          />
          <Route
            path="/petugas/semua-surat"
            element={<AllSuratPetugasPeralatan />}
          />
          <Route
            path="/petugas/edit-surat"
            element={<EditSuratPetugasPeralatan />}
          />

          {/* Doswal */}
          <Route path="/doswal/dashboard" element={<DashboardDoswal />} />
          <Route path="/doswal/semua-surat" element={<AllSuratDoswal />} />
          <Route path="/doswal/edit-surat" element={<EditSuratDoswal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
