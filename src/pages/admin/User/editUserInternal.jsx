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
import { TableUploadDocument } from "../../../components/supplier/tableUploadDocument";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function EditUserInternal() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("id");
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
      const response = await axios.put(
        "http://localhost:4000/api/user/" + userId,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      if (response) {
        navigate("/admin/user-internal");
      }

      console.log(data);
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
    (async (userId) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    })(userId);
  }, []);

  // console.log(data);

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
            <div className="font-semibold">Edit User Internal </div>
            <a href="/admin/user-internal">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} className="p-4">
            <input type="text" name="id" value={data.id_user} hidden />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              NIP
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              defaultValue={data.nip}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama PIC
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 pl-2"
              defaultValue={data.nama_pic}
              onChange={handleChange}
              name="nama_pic"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              className="border w-full h-8 my-4 pl-2"
              defaultValue={data.email}
              onChange={handleChange}
              name="email"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Perusahaan
            </label>
            <input
              defaultValue={data.nama_perusahaan}
              onChange={handleChange}
              type="text"
              className="border w-full h-8 my-4 pl-2"
              name="nama_perusahaan"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Telephone
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 pl-2"
              defaultValue={data.no_telephone}
              onChange={handleChange}
              name="no_telephone"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Role
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              defaultValue={
                data.id_role === 2
                  ? "Staff"
                  : data.id_role === 3
                  ? "Manager"
                  : ""
              }
              value={data.id_role}
            />

            <div className="flex justify-end items-end gap-2">
              <Button color="red">Cancel</Button>
              <Button type="submit" color="green">
                Edit
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
