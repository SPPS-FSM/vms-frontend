import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import SidebarAdmin from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbar";
import FooterAdmin from "../../components/admin/footer";
import axios from "axios";
import SidebarKasubbag from "../../components/kasubbag/sidebar";
import NavbarKasubbag from "../../components/kasubbag/navbar";

export default function DashboardKasubbag() {
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
        <SidebarKasubbag />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarKasubbag
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">Dashboard</div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-32">
            <div className="col-span-4 text-start bg-white rounded-md shadow-md pl-5 py-3">
              <p className="font-semibold">Total Surat</p>
              <p className="font-semibold text-3xl pt-1">100</p>
            </div>
            <div className="col-span-4 text-start bg-orange-500 rounded-md shadow-md pl-5 py-3">
              <p className="font-semibold">Menunggu</p>
              <p className="font-semibold text-3xl pt-1">100</p>
            </div>
            <div className="col-span-4 text-start bg-green-500 rounded-md shadow-md pl-5 py-3">
              <p className="font-semibold">Sudah</p>
              <p className="font-semibold text-3xl pt-1">0</p>
            </div>
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
