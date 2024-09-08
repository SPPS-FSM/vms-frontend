import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import NavbarSupplier from "../../../components/supplier/navbar";
import { PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import { TablePenawaranVendor } from "../../../components/supplier/tablePenawaranVendor";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Penawaran() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const userId = Cookies.get("user");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/userpenawaran/user/" + userId,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/" + userId,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setUser(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    if (!user) {
      fetchUser();
    } else if (user.id_status === 1) {
      fetchData();
    }
  }, [user]);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarSupplier />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarSupplier
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        {user && user.id_status === 1 ? (
          <div className="bg-white px-2 py-2 rounded-md shadow-md">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Penawaran Product</div>
              <button
                onClick={() => navigate("/supplier/tambah-penawaran")}
                className="bg-blue-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
              >
                <PlusIcon height={25} />
              </button>
            </div>
            <div className="text-sm text-gray-500 my-4">
              *catatan: <br /> - untuk menambah penawaran product tekan tombol
              Tambah (+)
            </div>
            <div>
              <TablePenawaranVendor data={data} setData={setData} />
            </div>
          </div>
        ) : (
          <div className="bg-white px-2 py-2 rounded-md shadow-md">
            <div className="flex flex-col">
              <p>
                Berkas belum lengkap/diverifikasi/ditolak. Silakan isi berkas
                terlebih dahulu.
              </p>
              <button
                onClick={() => navigate("/supplier/upload_dokumen")}
                className="bg-blue-500 rounded-md w-32 h-8 mt-5 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
              >
                Isi Berkas
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
