import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import SidebarAdmin from "../../../components/admin/sidebar";
import NavbarAdmin from "../../../components/admin/navbar";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import SidebarDekan from "../../../components/supplier/sidebar";
import NavbarSupplier from "../../../components/supplier/navbar";
import { TableUploadDocument } from "../../../components/supplier/tableUploadDocument";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import SidebarSupplier from "../../../components/supplier/sidebar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function TambahProduct() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [formData, setFormData] = useState({
    id_jenis_product: "",
    brand: "",
    description: "",
    price: "",
    id_kurs: "",
    stock: "",
    volume: "",
    id_satuan: "",
    address: "",
    id_provinsi: "",
    id_kota: "",
    company_category: "",
    storage_type: "",
    packaging: "",
  });
  const [file, setFile] = useState(null);
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
      data.append("id_jenis_product", formData.id_jenis_product);
      data.append("brand", formData.brand);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("id_kurs", formData.id_kurs);
      data.append("stock", formData.stock);
      data.append("volume", formData.volume);
      data.append("id_satuan", formData.id_satuan);
      data.append("address", formData.address);
      data.append("id_provinsi", formData.id_provinsi);
      data.append("id_kota", formData.id_kota);
      data.append("company_category", formData.company_category);
      data.append("storage_type", formData.storage_type);
      data.append("packaging", formData.packaging);

      const res = await axios.post(
        "http://localhost:4000/api/userproduct",
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      console.log("res", res);

      if (res) {
        navigate("/supplier/product_perusahaan");
      }
    } catch (error) {
      console.error("Error register:", error);
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [satuan, setSatuan] = useState([]);
  const [jenisProduct, setJenisProduct] = useState([]);
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [displayKota, setDisplayKota] = useState([]);

  console.log(formData);

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
    const fetchSatuan = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/satuan/satuan",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setSatuan(response.data);
    };

    const fetchJenisProduct = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/jenis-product/jenis-products",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setJenisProduct(response.data);
    };

    const fetchProvinsi = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/provinsi/provinsi",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setProvinsi(response.data);
    };

    const fetchKota = async () => {
      const response = await axios.get("http://localhost:4000/api/kota/kota", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      setKota(response.data);
    };

    fetchSatuan();
    fetchJenisProduct();
    fetchProvinsi();
    fetchKota();
  }, []);

  const handleSelectProvinsi = (e) => {
    const idProvinsi = e.target.value;
    const kotaProvinsi = kota.filter(
      (kota) => kota.id_provinsi === Number(idProvinsi)
    );
    setFormData({
      ...formData,
      id_provinsi: idProvinsi,
    });
    setDisplayKota(kotaProvinsi);
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
            <div className="font-semibold">Tambah Product </div>
            <a href="/supplier/product_perusahaan">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="company_category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kategori Perusahaan
            </label>
            <input
              type="text"
              name="company_category"
              className="border w-full h-8 my-4"
              onChange={handleChange}
            />
            <label
              htmlFor="id_jenis_product"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Jenis Product
            </label>
            <select
              name="id_jenis_product"
              id="id_jenis_product"
              onChange={handleChange}
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              {jenisProduct.map((jenisProduct) => (
                <option
                  key={jenisProduct.id_jenis_product}
                  value={jenisProduct.id_jenis_product}
                >
                  {jenisProduct.nama_jenis_product}
                </option>
              ))}
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Brand
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="brand"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Deskripsi
            </label>
            <textarea
              onChange={handleChange}
              type="number"
              name="description"
              className="border w-full h-32 my-4"
            />
            <label
              htmlFor="price"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Harga
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="price"
              className="border w-full h-8 my-4"
            />

            <label
              htmlFor="kurs"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kurs
            </label>
            <select
              onChange={handleChange}
              name="id_kurs"
              id="id_kurs"
              // onChange={handleChange}
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="2">IDR</option>
              <option value="1">USD</option>
            </select>

            <label
              htmlFor="stock"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Stok
            </label>
            <input
              onChange={handleChange}
              id="stock"
              type="number"
              name="stock"
              className="border w-full h-8 my-4"
            />

            <label
              htmlFor="volume"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Volume
            </label>
            <input
              onChange={handleChange}
              id="volume"
              type="number"
              name="volume"
              className="border w-full h-8 my-4"
            />

            <label
              htmlFor="id_satuan"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Satuan
            </label>
            <select
              onChange={handleChange}
              name="id_satuan"
              id="id_satuan"
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              {satuan.map((satuan) => (
                <option key={satuan.id_satuan} value={satuan.id_satuan}>
                  {satuan.nama_satuan}
                </option>
              ))}
            </select>

            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Alamat
            </label>
            <textarea
              onChange={handleChange}
              id="address"
              type="number"
              name="address"
              className="border w-full h-32 my-4"
            />

            <label
              htmlFor="id_provinsi"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Provinsi
            </label>
            <select
              name="id_provinsi"
              id="id_provinsi"
              onChange={handleSelectProvinsi}
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              {provinsi.map((provinsi) => (
                <option key={provinsi.id_provinsi} value={provinsi.id_provinsi}>
                  {provinsi.nama_provinsi}
                </option>
              ))}
            </select>

            <label
              htmlFor="id_kota"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kota
            </label>
            <select
              name="id_kota"
              id="id_kota"
              onChange={handleChange}
              // onChange={handleChange}
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              {displayKota.map((kota) => (
                <option key={kota.id_kota} value={kota.id_kota}>
                  {kota.nama_kota}
                </option>
              ))}
            </select>

            <label
              htmlFor="storage_type"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Jenis Penyimpanan
            </label>
            <input
              onChange={handleChange}
              id="storage_type"
              type="text"
              name="storage_type"
              className="border w-full h-8 my-4"
            />

            <label
              htmlFor="packaging"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Packaging
            </label>
            <input
              onChange={handleChange}
              id="packaging"
              type="text"
              name="packaging"
              className="border w-full h-8 my-4"
            />

            <label
              htmlFor="file"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Gambar
            </label>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border w-full h-8 my-4"
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
