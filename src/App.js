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

function App() {
  return (
    <div className="App">
      {/* Login Page */}
      {/* <Login /> */}

      {/* Admin */}
      {/* <DashboardAdmin /> */}
      {/* <AllUser /> */}
      {/* <DetailUser /> */}
      {/* <AddUser/> */}
      {/* <AllSurat /> */}
      {/* <AddSurat/> */}
      <EditSurat/>
      {/* <TemplateSurat /> */}

      {/* Mahasiswa */}
      {/* <Home /> */}
      {/* <PersuratanAkademik /> */}
      {/* <PersuratanBeasiswa /> */}
      {/* <PersuratanKKN /> */}
      {/* <PersuratanFasilitas /> */}
      {/* <PersuratanDataAplikasi /> */}

      {/* Kasubbag  */}
      {/* <DashboardKasubbag /> */}
      {/* <AllSuratKasubbag /> */}
      {/* <EditSuratKasubbag /> */}

      {/* Dekan */}
      {/* <DashboardDekan /> */}
      {/* <AllSuratDekan /> */}
      {/* <EditSuratDekan /> */}

      {/* Wakil Dekan */}
      {/* <DashboardWadek /> */}
      {/* <AllSuratWadek /> */}
      {/* <EditSuratWadek /> */}

      {/* Kadep */}
      {/* <DashboardKadep /> */}
      {/* <AllSuratKadep /> */}
      {/* <EditSuratKadep /> */}

      {/* Kaprodi */}
      {/* <DashboardKaprodi /> */}
      {/* <AllSuratKaprodi /> */}
      {/* <EditSuratKaprodi /> */}

      {/* Koordinator PKL/Skripsi/Penelitian */}
      {/* <DashboardKoor /> */}
      {/* <AllSuratKoor /> */}
      {/* <EditSuratKoor /> */}

      {/* Petugas Peralatan */}
      {/* <DashboardPetugasPeralatan /> */}
      {/* <AllSuratPetugasPeralatan /> */}
      {/* <EditSuratPetugasPeralatan /> */}

      {/* Doswal */}
      {/* <DashboardDoswal /> */}
      {/* <AllSuratDoswal /> */}
      {/* <EditSuratDoswal /> */}
    </div>
  );
}

export default App;
