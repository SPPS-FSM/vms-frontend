import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import NavbarSupplier from "../../../components/supplier/navbar";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import SidebarSupplier from "../../../components/supplier/sidebar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function TambahPenawaran() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [formData, setFormData] = useState({
    no_penawaran: "",
    id_product: "",
    tanggal_dibuat_penawaran: "",
    tanggal_mulai_penawaran: "",
    tanggal_berakhir_penawaran: "",
    terms_of_payment: "",
    terms_of_delivery: "",
    id_status_penawaran: "",
    description: "",
  });
  const [products, setProducts] = useState([]);
  const userId = Cookies.get("user");
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
        const response = await axios.get(
          "http://localhost:4000/api/userproduct/user/" + userId,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/userpenawaran",
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      console.log(response.data);

      if (response.data) {
        navigate("/supplier/penawaran");
      }
    } catch (error) {
      console.error("Post penawaran gagal", error);
      // throw new Error("Post penawaran gagal");
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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Tambah Penawaran </div>
            <button
              onClick={() => navigate("/supplier/penawaran")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="no_penawaran"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nomor Penawaran
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="no_penawaran"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="no_penawaran"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Pilih Product
            </label>
            <select
              onChange={handleChange}
              name="id_product"
              id="id_product"
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              {products.map((product) => (
                <option value={product.id_product}>{product.brand}</option>
              ))}
            </select>
            <label
              htmlFor="tanggal_dibuat_penawaran"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Dibuat Penawaran
            </label>
            <input
              onChange={handleChange}
              name="tanggal_dibuat_penawaran"
              id="tanggal_dibuat_penawaran"
              type="date"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="tanggal_mulai_penawaran"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Mulai Penawaran
            </label>
            <input
              onChange={handleChange}
              id="tanggal_mulai_penawaran"
              name="tanggal_mulai_penawaran"
              type="date"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="tanggal_berakhir_penawaran"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berakhir Penawaran
            </label>
            <input
              onChange={handleChange}
              name="tanggal_berakhir_penawaran"
              type="date"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="terms_of_payment"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Payment
            </label>
            <select
              onChange={handleChange}
              name="terms_of_payment"
              id="terms_of_payment"
              className="border w-full h-8 my-4 pl-2"
            >
              <option value=""></option>
              <option value="cod">COD</option>
              <option value="cbd">CBD</option>
            </select>
            <label
              htmlFor="terms_of_delivery"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Delivery
            </label>
            <input
              onChange={handleChange}
              className="border w-full h-8 my-4 pl-2"
              name="terms_of_delivery"
              id="terms_of_delivery"
            />

            <label
              htmlFor="id_status_penawaran"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Penawaran
            </label>
            <select
              onChange={handleChange}
              name="id_status_penawaran"
              id="id_status_penawaran"
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="8">Berlaku</option>
              <option value="9">Tidak Berlaku</option>
            </select>
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <input
              onChange={handleChange}
              className="border w-full h-8 my-4 pl-2"
              id="description"
              name="description"
            />
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
