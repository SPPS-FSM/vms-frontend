import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
import { editDokumen } from "../../../services/Dokumen";
import { useNavigate } from "react-router-dom";
import {
  editSertifikasi,
  getDetailSertifikasi,
} from "../../../services/Sertifikasi";

export default function EditSertifikasi() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState({});
  const [jenisDocument, setJenisDocument] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }
      formData.append("nama_sertifikasi", data.nama_sertifikasi);
      formData.append("id_jenis_sertifikasi", data.id_jenis_sertifikasi);
      formData.append("tanggal_berlaku", data.tanggal_berlaku.slice(0, 10));
      formData.append("tanggal_berakhir", data.tanggal_berakhir.slice(0, 10));

      // console.log("data 2", data);

      const res = await editSertifikasi(formData, id);

      if (res) {
        navigate("/supplier/sertifikasi_perusahaan");
      }
    } catch (error) {
      console.error("Error register:", error);
    }
  };

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
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    const fetchJenisDocument = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/jenis-sertifikasi/sertifikasi",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setJenisDocument(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    fetchData();
    fetchJenisDocument();
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
            <div className="font-semibold">Edit Document</div>
            <a href="/supplier/upload_dokumen">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Perusahaan
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              readOnly
              id="nama_perusahaan"
              value={data.nama_perusahaan}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Sertifikasi
            </label>
            <input
              type="text"
              id="nama_sertifikasi"
              className="border w-full h-8 my-4"
              value={data.nama_sertifikasi}
              onChange={handleChange}
              name="nama_sertifikasi"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Jenis Document
            </label>
            <select
              name="id_jenis_sertifikasi"
              id="id_jenis_sertifikasi"
              onChange={handleChange}
              className="w-full border h-8 my-4"
              value={data.id_jenis_sertifikasi}
            >
              {jenisDocument.map((dokumen) => (
                <option
                  key={dokumen.id_jenis_sertifikasi}
                  value={dokumen.id_jenis_sertifikasi}
                >
                  {dokumen.nama_sertifikasi}
                </option>
              ))}
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berlaku
            </label>
            <input
              type="date"
              className="border w-full  my-4"
              value={
                data.tanggal_berlaku ? data.tanggal_berlaku.slice(0, 10) : ""
              }
              id="tanggal_berlaku"
              name="tanggal_berlaku"
              onChange={handleChange}
            />
            <label
              htmlFor="tanggal_berakhir"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berakhir
            </label>
            <input
              type="date"
              value={
                data.tanggal_berakhir ? data.tanggal_berakhir.slice(0, 10) : ""
              }
              id="tanggal_berakhir"
              name="tanggal_berakhir"
              onChange={handleChange}
              className="border w-full  my-4"
            />

            <div className="flex gap-3 items-center">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Upload Dokumen{" "}
              </label>
              <a
                className="text-blue-800 hover:underline text-sm"
                href={`http://localhost:4000/api/file/${
                  data.file && data.file.split("/")[1]
                }`}
                target="_blank"
                rel="noreferrer"
              >
                Lihat file lama
              </a>
            </div>
            <input
              type="file"
              name="file"
              id="file"
              className="æ"
              onChange={handleFileChange}
            />
            <div className="flex justify-end items-end">
              <Button type="submit" color="green">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
