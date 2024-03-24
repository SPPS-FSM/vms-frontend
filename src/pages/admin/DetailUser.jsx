import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import SidebarAdmin from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbar";
import FooterAdmin from "../../components/admin/footer";

export default function DetailUser() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);

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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">Detail User</div>
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 p-8">
          <div className=" col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            <Typography>Nama</Typography>
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <p>Farhan Dwicahyo</p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            <Typography>NIM/NIP</Typography>
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <p>24060120140099</p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            <Typography>Jurusan</Typography>
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <p>Informatika</p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            <Typography>Role</Typography>
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <p>Mahasiswa</p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            <Typography>Status</Typography>
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <p>Aktif</p>
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
