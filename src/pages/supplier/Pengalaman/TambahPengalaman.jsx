import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import SidebarAdmin from "../../../components/admin/sidebar";
import NavbarAdmin from "../../../components/admin/navbar";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import SidebarDekan from "../../../components/supplier/sidebar";
import NavbarSupplier from "../../../components/supplier/navbar";
import { TableUploadDocument } from "../../../components/supplier/tableUploadDocument";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import SidebarSupplier from "../../../components/supplier/sidebar";

export default function TambahPengalaman() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("data", data);
    } catch (error) {
      console.error("Error register:", error);
    }
  };

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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Tambah Pengalaman</div>
            <a href="/supplier/pengalaman_perusahaan">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="nama_klien"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Klien
            </label>
            <input
              onChange={handleChange}
              name="nama_klien"
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="nama_proyek"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Proyek
            </label>
            <input
              type="text"
              name="nama_proyek"
              onChange={handleChange}
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="kurs"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kurs
            </label>
            <select
              name="id_kurs"
              id=""
              onChange={handleChange}
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="2">IDR</option>
              <option value="1">USD</option>
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nilai Proyek
            </label>
            <input type="text" className="border w-full h-8 my-4" />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Kontrak
            </label>
            <input
              onChange={handleChange}
              name="no_kontrak"
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kontak Klien
            </label>
            <input
              name="kontak_klien"
              onChange={handleChange}
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Mulai
            </label>
            <input
              name="tanggal_mulai"
              onChange={handleChange}
              type="date"
              className="border w-full  my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Selesai
            </label>
            <input
              onChange={handleChange}
              name="tanggal_selesai"
              type="date"
              className="border w-full  my-4"
            />
            <div className="flex justify-end items-end">
              <Button type="submit" color="green">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
