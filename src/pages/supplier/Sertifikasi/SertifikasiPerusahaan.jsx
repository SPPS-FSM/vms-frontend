import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import { TableSertifikasiVendor } from "../../../components/supplier/tableSertifikasiVendor";
import Cookies from "js-cookie";

export default function SertifikasiPerusahaan() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const id = Cookies.get("user");

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
          "http://localhost:4000/api/usersertifikasi/user/" + id,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Get sertifikasi gagal", error);
        throw new Error("Get sertifikasi gagal");
      }
    };

    fetchData();
  }, []);

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
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Sertifikasi Perusahaan</div>
            <a href="/supplier/tambah-sertifikasi">
              <button className="bg-blue-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <PlusIcon height={25} />
              </button>
            </a>
          </div>
          <div className="text-sm text-gray-500 my-4">
            *catatan: <br /> - untuk menambah sertifikasi tekan tombol Tambah
            (+)
          </div>
          <div>
            <TableSertifikasiVendor data={data} setData={setData} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
