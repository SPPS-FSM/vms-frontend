import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SidebarManager from "../../../components/manager/sidebar";
import NavbarManager from "../../../components/manager/navbar";
import { Button } from "@material-tailwind/react";

export default function DetailPO() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [showDetailPenawaran, setShowDetailPenawaran] = useState(false);

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
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden"
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
            <div className="font-semibold">Detail PO</div>
            <a href="/manager/list-penawaran">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <div className="p-4 text-md">
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Kode PO</p>
              <p className="w-full md:w-1/3">PO101</p>
            </div>
            <div className="md:flex flex-none gap-0">
              <p className="font-bold w-full md:w-1/3">Kode Penawaran</p>
              <div>
                <p className="w-full md:w-1/3">A101</p>
                <button
                  className="text-blue-500"
                  onClick={() => setShowDetailPenawaran(!showDetailPenawaran)}
                >
                  Detail Penawaran
                </button>
              </div>
            </div>
            {showDetailPenawaran && (
              <div className="bg-gray-200 rounded-md p-2">
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Nama Vendor</p>
                  <p className="w-full md:w-1/3">PT Mangosteen</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">PIC Vendor</p>
                  <p className="w-full md:w-1/3">Farhan</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">No Telephone</p>
                  <p className="w-full md:w-1/3">085710116209</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Product</p>
                  <p className="w-full md:w-1/3">Mangosteen</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Harga</p>
                  <p className="w-full md:w-1/3">Rp 100.000,00</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Kuantitas</p>
                  <p className="w-full md:w-1/3">100</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Satuan</p>
                  <p className="w-full md:w-1/3">KG</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Keterangan</p>
                  <p className="w-full md:w-1/3">
                    Buah Manggis Manis dari Semarang
                  </p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Gambar Product</p>
                  <p className="w-full md:w-1/3"></p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">
                    Tanggal Dibuat Penawaran
                  </p>
                  <p className="w-full md:w-1/3">04/07/2024</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">
                    Tanggal Mulai Penawaran
                  </p>
                  <p className="w-full md:w-1/3">04/07/2024</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">
                    Tangal Berakhir Penawaran
                  </p>
                  <p className="w-full md:w-1/3">04/07/2025</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Terms of Payment</p>
                  <p className="w-full md:w-1/3">CBD</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Terms of Delivery</p>
                  <p className="w-full md:w-1/3">CPT</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Description</p>
                  <p className="w-full md:w-1/3">.</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Status Vendor</p>
                  <p className="w-full md:w-1/3">Terverifikasi</p>
                </div>
                <div className="md:flex flex-none gap-0 mb-4">
                  <p className="font-bold w-full md:w-1/3">Status Penawaran</p>
                  <p className="w-full md:w-1/3">Berlaku</p>
                </div>
                <div className="md:flex flex-none gap-0">
                  <p className="font-bold w-full md:w-1/3">
                    Status Proses Penawaran
                  </p>
                  <p className="w-full md:w-1/3">Dipilih Staff</p>
                </div>
              </div>
            )}
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Tanggal Dibuat PO</p>
              <p className="w-full md:w-1/3">04/07/2024</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Tanggal Mulai PO</p>
              <p className="w-full md:w-1/3">04/07/2024</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Tangal Berakhir PO</p>
              <p className="w-full md:w-1/3">04/07/2025</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Terms of Payment</p>
              <p className="w-full md:w-1/3">CBD</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Terms of Delivery</p>
              <p className="w-full md:w-1/3">CPT</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Description</p>
              <p className="w-full md:w-1/3">.</p>
            </div>
            <div className="pt-4 flex md:justify-start justify-center">
              <a href="/manager/edit-po">
                <Button color="green">Edit PO</Button>
              </a>
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
