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
import NavbarManager from "../../../components/manager/navbar";
import SidebarManager from "../../../components/manager/sidebar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function TambahPO() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [penawaran, setPenawaran] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPenawaran = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/userpenawaran/statusproses/5",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setPenawaran(res.data);
    };

    fetchPenawaran();
  }, []);

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

  console.log("penawaran", penawaran);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarManager />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarManager
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Buat PO</div>
            <button
              onClick={() => navigate("/manager/buat-po")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form action="" className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nomor PO
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4"
              name="no_po"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kode Penawaran
            </label>
            <select
              name="no_penawaran"
              id=""
              className="w-full border h-8 mt-4"
            >
              <option value=""></option>
              {penawaran.map((item) => (
                <option value={item.no_penawaran}>
                  {item.no_penawaran} | {item.brand}
                </option>
              ))}
            </select>
            <div className="text-gray-500 mb-4">
              <p>
                *Pastikan sudah memilih penawaran yang tepat terlebih dahulu
              </p>
            </div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Dibuat PO
            </label>
            <input type="date" className="border w-full h-8 my-4" />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Dimulai PO
            </label>
            <input type="date" className="border w-full h-8 my-4" />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berakhir PO
            </label>
            <input type="date" className="border w-full h-8 my-4" />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Payment
            </label>
            <select name="" id="" className="w-full border h-8 my-4">
              <option value=""></option>
              <option value="">COD</option>
              <option value="">CBD</option>
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Delivery
            </label>
            <select name="" id="" className="w-full border h-8 my-4">
              <option value=""></option>
              <option value="">CPT</option>
            </select>
            <div className="flex justify-end items-end">
              <Button color="green">submit</Button>
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
