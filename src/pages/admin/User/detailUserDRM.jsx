import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarStaff from "../../../components/staff/sidebar";
import NavbarStaff from "../../../components/staff/navbar";
import { BiSearch } from "react-icons/bi";
import FooterAdmin from "../../../components/admin/footer";
import { TableUserDRM } from "../../../components/staff/VerifikasiDRM/tableUserDRM";
import { TableVerifDRM } from "../../../components/staff/VerifikasiDRM/tableVerifikasiDRM";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { TableUploadDocument } from "../../../components/supplier/tableUploadDocument";
import SidebarManager from "../../../components/manager/sidebar";
import NavbarManager from "../../../components/manager/navbar";
import { TableDetailDocument } from "../../../components/manager/Vendor/tableDetailDocument";
import { TableDetailSertifikasi } from "../../../components/manager/Vendor/tableDetailSertifikasi";
import { TableDetailProduct } from "../../../components/manager/Vendor/tableDetailProduct";
import { TableDetailPengalaman } from "../../../components/manager/Vendor/tableDetailPengalaman";
import SidebarAdmin from "../../../components/admin/sidebar";
import NavbarAdmin from "../../../components/admin/navbar";

export default function DetailUserDRM() {
  const navigate = useNavigate();
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
        <SidebarAdmin />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarAdmin openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Detail Vendor</div>
            <a href="/admin/all-user-drm">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form action="" className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Perusahaan
            </label>
            <input type="text" className="border w-full h-8 my-2" disabled />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama PIC
            </label>
            <input type="text" className="border w-full h-8 my-2" disabled />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Telephone
            </label>
            <input type="text" className="border w-full h-8 my-2" disabled />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Vendor
            </label>
            <input type="text" className="border w-full h-8 my-2" disabled />
          </form>

          <div className="px-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Document Persyaratan
            </label>
            <div className="mt-8">
              <TableDetailDocument />
            </div>
            <hr className="my-3 border-blue-gray-300 " />
            <div className=" mt-8">
              <TableDetailSertifikasi />
            </div>
            {/* <hr className="my-3 border-blue-gray-300 " />
            <div className=" mt-8">
              <TableDetailProduct />
            </div>
            <hr className="my-3 border-blue-gray-300 " />
            <div className=" mt-8">
              <TableDetailPengalaman />
            </div> */}
            <hr className="my-3 border-blue-gray-300 " />
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
