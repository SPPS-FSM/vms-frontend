import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { formatDateInput } from "../../../utils/date";

export default function EditPenawaran() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState(null);
  const userId = Cookies.get("user");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
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
          "http://localhost:4000/api/userpenawaran/" + id,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        "http://localhost:4000/api/userpenawaran/" + id,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      if (res) {
        navigate("/supplier/penawaran");
      }
    } catch (error) {
      console.error("Error register:", error);
    }
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
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Edit Penawaran </div>
            <button
              onClick={() => navigate("/supplier/penawaran")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
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
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data && data.nama_perusahaan}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nomor Penawaran
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              value={data && data.no_penawaran}
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Pilih Product
            </label>
            <input
              value={data && data.brand}
              disabled
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Dibuat Penawaran
            </label>
            <input
              type="date"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data && formatDateInput(data.tanggal_dibuat_penawaran)}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Mulai Penawaran
            </label>
            <input
              type="date"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data && formatDateInput(data.tanggal_mulai_penawaran)}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berakhir Penawaran
            </label>
            <input
              type="date"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data && formatDateInput(data.tanggal_berakhir_penawaran)}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Payment
            </label>
            <input
              name=""
              id=""
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data && data.Terms_of_Payment}
            />

            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Delivery
            </label>
            <input
              name=""
              id=""
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={data && data.Terms_of_Delivery}
            />

            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Penawaran
            </label>
            <select
              name="id_status_penawaran"
              value={data && data.id_status_penawaran}
              className="w-full border h-8 my-4"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="8">Berlaku</option>
              <option value="9">Tidak Berlaku</option>
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Proses Penawaran
            </label>
            {/* <input
              name=""
              id=""
              className="w-full border h-8 my-4 bg-gray-200"
              disabled
              value={data && data.nama_status_proses_penawaran}
            /> */}

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
