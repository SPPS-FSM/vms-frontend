import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import { TablePenawaranVendor } from "../../../components/manager/Kompetensi/tablePenawaranVendor";
import SidebarManager from "../../../components/manager/sidebar";
import NavbarManager from "../../../components/manager/navbar";
import {
  TableDraftKontrak,
  TableDraftPO,
} from "../../../components/manager/Kompetensi/tableDraftPO";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function DraftPO() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);

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
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold">List Purchase Order</div>
            <a href="/manager/tambah-po">
              <button className="bg-blue-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <PlusIcon height={25} />
              </button>
            </a>
          </div>
          <div>
            <TableDraftPO />
          </div>
          <div className="text-gray-500 mt-8">
            <p>CATATAN :</p>
            <p>
              - Pastikan sudah memilih vendor terlebih dahulu dimenu{" "}
              <span className="font-bold">Penawaran Vendor</span>
            </p>
            <p>- 1 Kontrak hanya bisa 1 penawaran</p>
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
