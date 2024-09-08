import React, { useState, useEffect } from "react";
import FooterAdmin from "../../components/admin/footer";
import NavbarSupplier from "../../components/supplier/navbar";
import SidebarSupplier from "../../components/supplier/sidebar";
import axios from "axios";
import Cookies from "js-cookie";

export default function DashboardDekan() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState({
    total_product: 0,
    total_penawaran: 0,
    id_status: null,
    status_description: null,
  });
  const [showContent, setShowContent] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
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

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/userproduct/summary",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData((prevData) => ({
        ...prevData,
        total_product: res.data.total_product,
      }));
    };
    const fetchPenawaran = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/userpenawaran/summary",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData((prevData) => ({
        ...prevData,
        total_penawaran: res.data.total_penawaran,
      }));
    };
    const fetchUser = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/user/" + Cookies.get("user"),
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData((prevData) => ({
        ...prevData,
        id_status: res.data.id_status,
        status_description: res.data.status_description,
      }));
    };
    fetchProduct();
    fetchPenawaran();
    fetchUser();
  }, []);

  const handleClick = () => {
    setShowContent(true);
    setButtonDisabled(true);
  };

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
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
            <div className="flex-col">
              <p className="font-bold text-xl mb-2">Status Vendor</p>
              <p
                className={`font-semibold text-lg rounded-xl text-center text-white border ${
                  data.id_status === 1
                    ? "bg-green-500"
                    : data.id_status === 2
                    ? "bg-red-500"
                    : "bg-gray-500"
                }`}
              >
                {data.id_status === 1
                  ? "Terverifikasi"
                  : data.id_status === 2
                  ? "Ditolak"
                  : "Belum Diverifikasi"}
              </p>
              {data.id_status === 2 && (
                <div className="mt-3">
                  <p>Alasan:</p>
                  <p>
                    <b>{data.status_description}</b>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
            <div className="flex-col">
              <p className="font-bold text-xl">Total Product</p>
              <p className="font-semibold text-2xl">{data.total_product}</p>
            </div>
          </div>
          <div className="bg-white col-span-12 xl:col-span-4 rounded-md shadow-md flex items-center gap-4 p-4">
            <button
              className="text-start"
              onClick={handleClick}
              disabled={buttonDisabled}
            >
              <p className="font-bold text-xl">Total Penawaran</p>
              <p className="font-semibold text-2xl">{data.total_penawaran}</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 md:gap-4 mt-4">
          {showContent && (
            <>
              <div className="bg-white col-span-12 xl:col-span-3 rounded-md shadow-md flex items-center gap-4 p-4">
                <div className="flex-col">
                  <p className="font-bold text-xl">Penawaran Berlaku</p>
                  <p className="font-semibold text-2xl">100</p>
                </div>
              </div>
              <div className="bg-white col-span-12 xl:col-span-3 rounded-md shadow-md flex items-center gap-4 p-4">
                <div className="flex-col">
                  <p className="font-bold text-xl">Penawaran Tidak Berlaku</p>
                  <p className="font-semibold text-2xl">100</p>
                </div>
              </div>
              <div className="bg-white col-span-12 xl:col-span-3 rounded-md shadow-md flex items-center gap-4 p-4">
                <div className="flex-col">
                  <p className="font-bold text-xl">Penawaran Dipilih Staff</p>
                  <p className="font-semibold text-2xl">100</p>
                </div>
              </div>
              <div className="bg-white col-span-12 xl:col-span-3 rounded-md shadow-md flex items-center gap-4 p-4">
                <div className="flex-col">
                  <p className="font-bold text-xl">Penawaran Dipilih Manager</p>
                  <p className="font-semibold text-2xl">100</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
