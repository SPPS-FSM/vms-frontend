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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Page */}
          <Route path="/login" element={<Login />} />

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
            path="/mahasiswa/surat-beasiswa"
            element={<PersuratanBeasiswa />}
          />
          <Route path="/mahasiswa/surat-kkn" element={<PersuratanKKN />} />
          <Route
            path="/mahasiswa/surat-fasilitas"
            element={<PersuratanFasilitas />}
          />
          <Route
            path="/mahasiswa/surat-data-aplikasi"
            element={<PersuratanDataAplikasi />}
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
          <Route
            path="/wadek/semua-surat"
            element={<AllSuratWadek />}
          />
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
