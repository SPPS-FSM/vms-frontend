import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import SidebarAdmin from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbar";
import FooterAdmin from "../../components/admin/footer";
import axios from "axios";
import NavbarManager from "../../components/manager/navbar";
import SidebarManager from "../../components/manager/sidebar";
import {
  BsCheckCircleFill,
  BsFileCheckFill,
  BsFileFill,
  BsFileZipFill,
  BsPeopleFill,
  BsStarFill,
} from "react-icons/bs";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiFile } from "react-icons/fi";
import Cookies from "js-cookie";
import SidebarStaff from "../../components/staff/sidebar";
import NavbarStaff from "../../components/staff/navbar";

export default function DashboardManager() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/dashboard",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Get data gagal", error);
        throw new Error("Get data gagal");
      }
    };
    fetchData();
  }, []);

  console.log("data", data);

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
        <SidebarStaff />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarStaff openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">Dashboard</div>
        {
          <div className="grid grid-cols-12 gap-2 md:gap-4">
            <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
              <div className="text-4xl">
                <BsPeopleFill color="green" />
              </div>
              <div className="flex-col">
                <p className="font-bold text-xl">Total Vendor</p>
                <p className="text-gray-500">Total vendor yang terdaftar</p>
                <p className="font-semibold text-2xl">
                  {data ? data.total_vendor : 0}
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
              <div className="text-4xl">
                <BsCheckCircleFill color="green" />
              </div>
              <div className="flex-col">
                <p className="font-bold text-xl">Total Vendor Terverifikasi</p>
                <p className="text-gray-500">
                  Total vendor yang diverifikasi oleh Staff
                </p>
                <p className="font-semibold text-2xl">
                  {data ? data.total_verified_vendor : 0}
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
              <div className="text-4xl">
                <FiFile color="green" />
              </div>
              <div className="flex-col">
                <p className="font-bold text-xl">Total PO</p>
                <p className="text-gray-500">Total list PO</p>
                <p className="font-semibold text-2xl">
                  {data ? data.total_po : 0}
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
              <div className="text-4xl">
                <BsStarFill color="green" />
              </div>
              <div className="flex-col">
                <p className="font-bold text-xl">Total Penawaran</p>
                <p className="text-gray-500">Total list penawaran</p>
                <p className="font-semibold text-2xl">
                  {data ? data.total_penawaran : 0}
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
              <div className="text-4xl">
                <BsCheckCircleFill color="green" />
              </div>
              <div className="flex-col">
                <p className="font-bold text-xl">Total Penawaran Terpilih</p>
                <p className="text-gray-500">
                  Total penawaran yang dipilih oleh Staff
                </p>
                <p className="font-semibold text-2xl">
                  {data ? data.total_penawaran_staff : 0}
                </p>
              </div>
            </div>

            <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
              <div className="text-4xl">
                <BsCheckCircleFill color="green" />
              </div>
              <div className="flex-col">
                <p className="font-bold text-xl">Total Penawaran Dipilih</p>
                <p className="text-gray-500">
                  Total penwaran yang dipilih oleh Manager
                </p>
                <p className="font-semibold text-2xl">
                  {data ? data.total_penawaran_manager : 0}
                </p>
              </div>
            </div>
          </div>
        }
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
