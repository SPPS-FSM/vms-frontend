import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import axios from "axios";
import Cookies from "js-cookie";
import { submitSertifikasi } from "../../../services/Sertifikasi";
import { useNavigate } from "react-router-dom";

export default function TambahSertifikasi() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [jenisSertifikasi, setJenisSertifikasi] = useState([]);
  const [formData, setFormData] = useState({
    nama_sertifikat: "",
    id_jenis_sertifikasi: "",
    tanggal_berlaku: "",
    tanggal_berakhir: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("nama_sertifikasi", formData.nama_sertifikat);
      data.append(
        "id_jenis_sertifikasi",
        Number(formData.id_jenis_sertifikasi)
      );
      data.append("tanggal_berlaku", formData.tanggal_berlaku);
      data.append("tanggal_berakhir", formData.tanggal_berakhir);

      const res = await submitSertifikasi(data);

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
        const response = await axios.get(
          "http://localhost:4000/api/jenis-sertifikasi/sertifikasi",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setJenisSertifikasi(response.data);
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

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Tambah Sertifikasi </div>
            <a href="/supplier/sertifikasi_perusahaan">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="nama_sertifikat"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Sertifikat
            </label>
            <input
              name="nama_sertifikat"
              id="nama_sertifikat"
              type="text"
              required
              className="border w-full h-8 my-4"
              onChange={handleChange}
            />
            <label
              htmlFor="id_jenis_sertifikasi"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Jenis Sertifikat
            </label>
            <select
              name="id_jenis_sertifikasi"
              id="id_jenis_sertifikasi"
              className="w-full border h-8 my-4"
              onChange={handleChange}
              required
            >
              <option value="">--Pilih Jenis Sertifikat--</option>
              {jenisSertifikasi.map((sertifikasi) => (
                <option
                  key={sertifikasi.id_jenis_sertifikasi}
                  value={sertifikasi.id_jenis_sertifikasi}
                >
                  {sertifikasi.nama_sertifikasi}
                </option>
              ))}
            </select>

            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Upload Dokumen
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              required
              className="border w-full h-8 my-4"
            />

            <div className="grid grid-cols-12 gap-4 my-4">
              <div className="col-span-12 md:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Tanggal Berlaku
                </label>
                <input
                  required
                  type="date"
                  name="tanggal_berlaku"
                  id="tanggal_berlaku"
                  onChange={handleChange}
                  className="border w-full h-8"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Tanggal Berakhir
                </label>
                <input
                  required
                  type="date"
                  name="tanggal_berakhir"
                  id="tanggal_berakhir"
                  onChange={handleChange}
                  className="border w-full h-8"
                />
              </div>
            </div>

            <div className="flex justify-end items-end">
              <Button type="submit" color="green">
                submit
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
