import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarStaff from "../../../components/staff/sidebar";
import NavbarStaff from "../../../components/staff/navbar";
import { BiSearch } from "react-icons/bi";
import FooterAdmin from "../../../components/admin/footer";
import { TableVerifDRM } from "../../../components/staff/VerifikasiDRM/tableVerifikasiDRM";

export default function ListDRM() {
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
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="md:flex justify-between items-center">
            <div className="font-semibold mb-4 md:mb-0">
              List Daftar Rekanan Mampu
            </div>
            <div className="flex gap-1">
              <input
                type="text"
                className="border border-gray-500 rounded-md w-full md:w-auto"
              />
              <button className="bg-green-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <BiSearch height={25} />
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500 my-4">
            <TableVerifDRM />
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
