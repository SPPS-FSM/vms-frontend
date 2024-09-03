import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import Cookies from "js-cookie";
import { useSearchParams, useNavigate } from "react-router-dom";
import { formatDateInput } from "../../../utils/date";

export default function EditPengalaman() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState({});
  const [jenisDocument, setJenisDocument] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        "http://localhost:4000/api/userpengalaman/" + id,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      if (res.status === 200) {
        console.log("success");
        navigate("/supplier/pengalaman_perusahaan");
      }
    } catch (error) {
      console.error("Error register:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/userpengalaman/" + id,
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
          "http://localhost:4000/api/userpengalaman/" + id,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        // edit the data, so it can be displayed in the form
        response.data.tanggal_mulai = formatDateInput(
          response.data.tanggal_mulai
        );
        response.data.tanggal_selesai = formatDateInput(
          response.data.tanggal_selesai
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
            <div className="font-semibold">Edit Pengalaman</div>
            <a href="/supplier/pengalaman_perusahaan">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} action="" className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Perusahaan
            </label>
            <input
              name="nama_perusahaan"
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data.nama_perusahaan}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Klien
            </label>
            <input
              name="nama_klien"
              value={data.nama_klien}
              onChange={handleChange}
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Proyek
            </label>
            <input
              name="nama_proyek"
              value={data.nama_proyek}
              onChange={handleChange}
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kurs
            </label>
            <select
              name="id_kurs"
              id="id_kurs"
              onChange={handleChange}
              value={data.id_kurs}
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="2">IDR</option>
              <option value="1">USD</option>
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nilai Proyek
            </label>
            <input
              name="nilai_proyek"
              value={data.nilai_proyek}
              onChange={handleChange}
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Kontrak
            </label>
            <input
              name="no_kontrak"
              value={data.no_kontrak}
              onChange={handleChange}
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kontak Klien
            </label>
            <input
              name="kontak_klien"
              onChange={handleChange}
              value={data.kontak_klien}
              type="text"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Mulai
            </label>
            <input
              name="tanggal_mulai"
              onChange={handleChange}
              value={data.tanggal_mulai}
              type="date"
              className="border w-full  my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Selesai
            </label>
            <input
              name="tanggal_selesai"
              onChange={handleChange}
              value={data.tanggal_selesai}
              type="date"
              className="border w-full  my-4"
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
