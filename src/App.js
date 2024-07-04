import "./App.css";
import DashboardAdmin from "./pages/admin/Dashboard";
import DashboardSupplier from "./pages/supplier/Dashboard";
import DashboardStaff from "./pages/staff/Dashboard";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadDokumen from "./pages/supplier/Dokumen/UploadDokumen";
import SertifikasiPerusahaan from "./pages/supplier/Sertifikasi/SertifikasiPerusahaan";
import PengalamanPerusahaan from "./pages/supplier/Pengalaman/PengalamanPerusahaan";
import Penawaran from "./pages/supplier/Penawaran/Penawaran";
import TambahDokumen from "./pages/supplier/Dokumen/TambahDokumen";
import TambahSertifikasi from "./pages/supplier/Sertifikasi/TambahSertifikasi";
import TambahPengalaman from "./pages/supplier/Pengalaman/TambahPengalaman";
import TambahProduct from "./pages/supplier/Product/TambahProduct";
import TambahPenawaran from "./pages/supplier/Penawaran/TambahPenawaran";
import VerifikasiDRM from "./pages/staff/DRM/VerifikasiDRM";
import SertifikasiVendor from "./pages/staff/Kompetensi/SertifikasiVendor";
import PengalamanVendor from "./pages/staff/Kompetensi/PengalamanVendor";
import ProductVendor from "./pages/staff/Kompetensi/ProductVendor";
import PenawaranVendor from "./pages/staff/Penawaran/PenawaranVendor";
import UserInternal from "./pages/admin/UserInternal";
import AllUserDRM from "./pages/admin/AllUserDRM";
import Register from "./pages/register";
import DashboardManager from "./pages/manager/Dashboard";
import ProductPerusahaan from "./pages/supplier/Product/ProductPerusahaan";
import DetailDokumen from "./pages/supplier/Dokumen/DetailDokumen";
import DetailPenawaran from "./pages/supplier/Penawaran/DetailPenawaran";
import DetailPengalaman from "./pages/supplier/Pengalaman/DetailPengalaman";
import DetailProduct from "./pages/supplier/Product/DetailProduct";
import DetailSertifikasi from "./pages/supplier/Sertifikasi/DetailSertifikasi";
import TambahUserInternal from "./pages/admin/TambahUserInternal";
import EditDokumen from "./pages/supplier/Dokumen/EditDokumen";
import EditPengalaman from "./pages/supplier/Pengalaman/EditPengalaman";
import EditProduct from "./pages/supplier/Product/EditProduct";
import EditSertifikasi from "./pages/supplier/Sertifikasi/EditSertifikasi";
import EditPenawaran from "./pages/supplier/Penawaran/EditPenawaran";
import ProfileSupplier from "./pages/supplier/ProfileSupplier";
import ListDRM from "./pages/staff/DRM/ListDRM";
import AjukanPenawaran from "./pages/staff/Penawaran/AjukanPenawaran";
import PenawaranVendoManager from "./pages/manager/Penawaran/PenawaranVendorManager";
import TambahDraftKontrak from "./pages/manager/PO/TambahPO";
import ListVendor from "./pages/manager/Vendor/ListVendor";
import VerifikasiVendor from "./pages/manager/Vendor/DetailVendor";
import DetailPenawaranVendor from "./pages/manager/Penawaran/DetailPenawaranVendor";
import PilihPenawaranVendor from "./pages/manager/Penawaran/PilihPenawaranVendor";
import DraftPO from "./pages/manager/PO/DraftPO";
import TambahPO from "./pages/manager/PO/TambahPO";
import DetailVendor from "./pages/manager/Vendor/DetailVendor";
import EditPO from "./pages/manager/PO/EditPO";
import DetailPO from "./pages/manager/PO/DetailPO";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Page */}
          <Route default path="/login" element={<Login />} />
          {/* Register Page */}
          <Route default path="/register" element={<Register />} />

          {/* Admin */}
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/user-internal" element={<UserInternal />} />
          <Route
            path="/admin/tambah-user-internal"
            element={<TambahUserInternal />}
          />
          <Route path="/admin/all-user-drm" element={<AllUserDRM />} />

          {/* Manager */}
          <Route path="/manager/dashboard" element={<DashboardManager />} />
          <Route
            path="/manager/list-penawaran"
            element={<PenawaranVendoManager />}
          />
          <Route
            path="/manager/detail-penawaran-manager"
            element={<DetailPenawaranVendor />}
          />
          <Route
            path="/manager/pilih-penawaran-manager"
            element={<PilihPenawaranVendor />}
          />
          <Route path="/manager/buat-po" element={<DraftPO />} />
          <Route path="/manager/edit-po" element={<EditPO />} />
          <Route path="/manager/detail-po" element={<DetailPO />} />
          <Route
            path="/manager/tambah-po"
            element={<TambahPO />}
          />
          <Route path="/manager/list-vendor" element={<ListVendor />} />
          <Route
            path="/manager/detail-vendor"
            element={<DetailVendor />}
          />

          {/* Supplier */}
          <Route path="/supplier/dashboard" element={<DashboardSupplier />} />
          <Route path="/supplier/upload_dokumen" element={<UploadDokumen />} />
          <Route path="/supplier/tambah-dokumen" element={<TambahDokumen />} />
          <Route path="/supplier/detail-dokumen" element={<DetailDokumen />} />
          <Route path="/supplier/edit-dokumen" element={<EditDokumen />} />
          <Route
            path="/supplier/sertifikasi_perusahaan"
            element={<SertifikasiPerusahaan />}
          />
          <Route
            path="/supplier/tambah-sertifikasi"
            element={<TambahSertifikasi />}
          />
          <Route
            path="/supplier/detail-sertifikasi"
            element={<DetailSertifikasi />}
          />
          <Route
            path="/supplier/edit-sertifikasi"
            element={<EditSertifikasi />}
          />
          <Route
            path="/supplier/pengalaman_perushaan"
            element={<PengalamanPerusahaan />}
          />
          <Route
            path="/supplier/tambah-pengalaman"
            element={<TambahPengalaman />}
          />
          <Route
            path="/supplier/detail-pengalaman"
            element={<DetailPengalaman />}
          />
          <Route
            path="/supplier/edit-pengalaman"
            element={<EditPengalaman />}
          />
          <Route
            path="/supplier/product_perusahaan"
            element={<ProductPerusahaan />}
          />
          <Route path="/supplier/tambah-product" element={<TambahProduct />} />
          <Route path="/supplier/detail-product" element={<DetailProduct />} />
          <Route path="/supplier/detail-product" element={<EditProduct />} />
          <Route path="/supplier/penawaran" element={<Penawaran />} />
          <Route
            path="/supplier/tambah-penawaran"
            element={<TambahPenawaran />}
          />
          <Route
            path="/supplier/detail-penawaran"
            element={<DetailPenawaran />}
          />
          <Route path="/supplier/edit-penawaran" element={<EditPenawaran />} />
          <Route path="/supplier/edit-profile" element={<ProfileSupplier />} />

          {/* Staff */}
          <Route path="/staff/dashboard" element={<DashboardStaff />} />
          <Route path="/staff/list-drm" element={<ListDRM />} />
          <Route path="/staff/verifikasi-drm" element={<VerifikasiDRM />} />
          <Route
            path="/staff/sertifikasi-vendor"
            element={<SertifikasiVendor />}
          />
          <Route
            path="/staff/pengalaman-vendor"
            element={<PengalamanVendor />}
          />
          <Route path="/staff/product-vendor" element={<ProductVendor />} />
          <Route path="/staff/penawaran-vendor" element={<PenawaranVendor />} />
          <Route
            path="/staff/ajukan-penawaran-vendor"
            element={<AjukanPenawaran />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
