import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import Cookies from "js-cookie";
import { useNavigate, useSearchParams } from "react-router-dom";
import SidebarStaff from "../../../components/staff/sidebar";
import NavbarStaff from "../../../components/staff/navbar";

export default function DetailProduct() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState(undefined);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/userproduct/" + id,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    fetchData();
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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Detail Product</div>
            <button
              onClick={() => navigate("/staff/product-vendor")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <div className="p-4 text-md ">
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Nama Perusahaan</p>
              <p className="w-full md:w-1/3">{data && data.nama_perusahaan}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Brand</p>
              <p className="w-full md:w-1/3">{data && data.brand}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Price</p>
              <p className="w-full md:w-1/3">{data && data.price}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Kurs</p>
              <p className="w-full md:w-1/3">{data && data.nama_kurs}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Stock</p>
              <p className="w-full md:w-1/3">{data && data.stock}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Volume</p>
              <p className="w-full md:w-1/3">{data && data.stock}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Satuan Klien</p>
              <p className="w-full md:w-1/3">{data && data.nama_satuan}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Image</p>
              {data && (
                <img
                  src={`http://localhost:4000/api/file/${
                    data && data.item_image.split("/")[1]
                  }`}
                  alt="image2"
                  className="w-full md:w-1/3 h-full "
                />
              )}
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Description</p>
              <p className="w-full md:w-1/3">{data && data.description}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Jenis Product</p>
              <p className="w-full md:w-1/3">
                {data && data.nama_jenis_product}
              </p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Provinsi</p>
              <p className="w-full md:w-1/3">{data && data.nama_provinsi}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Kota</p>
              <p className="w-full md:w-1/3">{data && data.nama_kota}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Company Category</p>
              <p className="w-full md:w-1/3">{data && data.company_category}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Storage Type</p>
              <p className="w-full md:w-1/3">{data && data.storage_type}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Packaging</p>
              <p className="w-full md:w-1/3">{data && data.packaging}</p>
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
