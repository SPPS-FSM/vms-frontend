import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import SidebarAdmin from "../../../components/admin/sidebar";
import NavbarAdmin from "../../../components/admin/navbar";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { register } from "../../../services/Auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function TambahUserInternal() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [formData, setFormData] = useState({
    nip: "",
    email: "",
    username: "",
    nama_perusahaan: "",
    nama_pic: "",
    no_telephone: "",
    password: "",
    id_role: 1,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // convert id_role to number
      formData.id_role = parseInt(formData.id_role);

      const response = await register(formData, true);

      if (response) {
        navigate("/admin/user-internal");
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

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarAdmin />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarAdmin openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Tambah User Internal </div>
            <a href="/admin/user-internal">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <label
              htmlFor="nip"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              NIP
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="nip"
              id="nip"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="usernamename"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border w-full h-8 my-4 pl-2"
              onChange={handleChange}
            />
            <label
              htmlFor="nama_pic"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama PIC
            </label>
            <input
              type="text"
              id="nama_pic"
              name="nama_pic"
              className="border w-full h-8 my-4 pl-2"
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="email"
              name="email"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="nama_perusahaan"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Perusahaan
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="nama_perusahaan"
              name="nama_perusahaan"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="no_telephone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Telephone
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="no_telephone"
              name="no_telephone"
              className="border w-full h-8 my-4 pl-2"
            />
            <label
              htmlFor="id_role"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Pilih Role
            </label>
            <select
              onChange={handleChange}
              name="id_role"
              id="id_role"
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="2">Staff</option>
              <option value="3">Manager</option>
            </select>
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="border w-full h-8 my-4 pl-2"
            />

            <div className="flex justify-end items-end gap-2">
              <Button color="red">Cancel</Button>
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
