import React, { useState, useEffect } from "react";
import {
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import SidebarAdmin from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbar";
import FooterAdmin from "../../components/admin/footer";
import axios from "axios";
import SidebarDekan from "../../components/supplier/sidebar";
import NavbarSupplier from "../../components/supplier/navbar";
import { EyeIcon } from "@heroicons/react/24/outline";
import { TableDocument } from "../../components/supplier/tableDocument";
import SidebarSupplier from "../../components/supplier/sidebar";
import { TablePenawaran } from "../../components/supplier/tablePenawaran";

export default function DashboardDekan() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

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

  console.log(result);
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
        <div className="mb-2">Dashboard</div>
        {/* <Typography variant="h4">Selamat Datang di SPPS-FSM</Typography> */}
        <div className="grid grid-cols-12 text-center gap-2 md:gap-4">
          <div className="bg-white col-span-12 md:col-span-4 rounded-md shadow-md">
            <div className="font-bold mt-4">
              <p>STATUS</p>
            </div>
            <div className="flex justify-center items-center text-white p-2 font-bold ">
              <p className="bg-light-green-400 w-max py-2 px-4 border rounded-full">
                TERVERIFIKASI
              </p>
              <p className="bg-red-400 w-max py-2 px-4 border rounded-full">
                TOLAK
              </p>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 rounded-md shadow-md">
            2
          </div>
          <div className="bg-white col-span-12 md:col-span-4 rounded-md shadow-md">
            3
          </div>
        </div>
        <hr className="my-8 border-blue-gray-300 " />
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="font-semibold">Kelengkapan Dokumen Persyaratan</div>
          <div className="text-sm text-gray-500 my-4">
            untuk dapat menjadi Rekanan/Vendor anda harus melengkapi dokumen
            persyaratan, berikut status dokumen persyaratan anda
          </div>
          <div>
            <TableDocument />
          </div>
        </div>
        <div className="bg-white px-2 py-2 rounded-md shadow-md mt-8">
          <div className="font-semibold">Penawaran</div>
          <div className="text-sm text-gray-500 my-4">
            untuk menambahkan penawaran anda harus menambhakannya terlebih
            dahulu, list daftar barang atau jasa yang ditawarkan
          </div>
          <div>
            <TablePenawaran />
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
