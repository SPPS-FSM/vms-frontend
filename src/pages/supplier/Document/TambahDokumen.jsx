import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import { submitDokumen } from "../../../services/Dokumen";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function TambahDokumen() {
  const user = Cookies.get("user");
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [jenisDokumen, setJenisDokumen] = useState([]);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [formData, setFormData] = useState({
    nama_document: "",
    id_jenis_document: "",
    tanggal_berlaku: "",
    tanggal_berakhir: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("nama_document", formData.nama_document);
      data.append("id_jenis_document", formData.id_jenis_document);
      data.append("tanggal_berlaku", formData.tanggal_berlaku);
      data.append("tanggal_berakhir", formData.tanggal_berakhir);

      const res = await submitDokumen(data);

      if (res) {
        navigate("/supplier/upload_dokumen");
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
    async function fetchMissingDocument() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/userdocuments/missing/" + user,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setJenisDokumen(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    }

    fetchMissingDocument();
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
            <div className="font-semibold">Tambah Dokumen</div>
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
              Pilih Dokumen
            </label>
            <select
              name="id_jenis_document"
              onChange={handleChange}
              id=""
              className="w-full border h-8 my-4"
            >
              <option value="">--Pilih Dokumen--</option>
              {jenisDokumen.map((dokumen) => (
                <option
                  key={dokumen.id_jenis_document}
                  value={dokumen.id_jenis_document}
                >
                  {dokumen.jenis_document}
                </option>
              ))}
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Dokumen
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4"
              onChange={handleChange}
              name="nama_document"
            />

            <label
              htmlFor="tanggal_berlaku"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berlaku
            </label>
            <input
              id="tanggal_berlaku"
              type="date"
              className="border w-full h-8 my-4"
              onChange={handleChange}
              name="tanggal_berlaku"
            />
            <label
              htmlFor="tanggal_berakhir"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berakhir
            </label>
            <input
              id="tanggal_berakhir"
              type="date"
              className="border w-full h-8 my-4"
              onChange={handleChange}
              name="tanggal_berakhir"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Upload Dokumen
            </label>
            <input
              type="file"
              name="document"
              onChange={handleFileChange}
              className="border w-full h-8 my-4"
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
