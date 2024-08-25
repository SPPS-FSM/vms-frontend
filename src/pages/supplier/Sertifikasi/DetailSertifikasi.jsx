import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import { getDetailSertifikasi } from "../../../services/Sertifikasi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDateIndo } from "../../../utils/date";

export default function DetailSertifikasi() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

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
        const response = await getDetailSertifikasi(id);

        setData(response);
      } catch (error) {
        console.error("Get sertifikasi gagal", error);
        throw new Error("Get sertifikasi gagal");
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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Detail Document</div>
            <button
              onClick={() => navigate("/supplier/sertifikasi_perusahaan")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <div className="p-4 text-md ">
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Nama Perusahaan</p>
              <p className="w-full md:w-1/3">{data.nama_perusahaan}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Nama Sertifikasi</p>
              <p className="w-full md:w-1/3">{data.nama_sertifikasi}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Jenis Sertifikasi</p>
              <p className="w-full md:w-1/3">{data.jenis_sertifikasi}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Tanggal Berlaku</p>
              <p className="w-full md:w-1/3">
                {data.tanggal_berlaku && formatDateIndo(data.tanggal_berlaku)}
              </p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Tanggal Berakhir</p>
              <p className="w-full md:w-1/3">
                {data.tanggal_berakhir && formatDateIndo(data.tanggal_berakhir)}
              </p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Status Upload</p>
              <p className="w-full md:w-1/3">Sudah</p>
            </div>
          </div>
          <div className="flex justify-start gap-2 px-4">
            {data.file && (
              <a
                href={
                  `http://localhost:4000/api/file/` + data.file.split("/")[1]
                }
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-blue-500">Lihat File</Button>
              </a>
            )}
            <Button
              onClick={() => navigate("/supplier/edit-sertifikasi?id=" + id)}
              className="bg-green-500"
            >
              Edit
            </Button>
            {/* <Button className="bg-red-500">Cancel</Button> */}
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
