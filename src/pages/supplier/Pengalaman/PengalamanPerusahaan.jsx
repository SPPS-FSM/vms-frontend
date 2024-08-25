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
import { PlusIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import SidebarSupplier from "../../../components/supplier/sidebar";
import { TablePengalamanVendor } from "../../../components/supplier/tablePengalamanVendor";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function PengalamanPerusahaan() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);

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
          "http://localhost:4000/api/userpengalaman/user/" +
            Cookies.get("user"),
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Get pengalaman perusahaan gagal", error);
        throw new Error("Get pengalaman perusahaan gagal");
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

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
            <div className="font-semibold">Pengalaman Perusahaan</div>
            <button
              onClick={() => {
                navigate("/supplier/tambah-pengalaman");
              }}
              className="bg-blue-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <PlusIcon height={25} />
            </button>
          </div>
          <div className="text-sm text-gray-500 my-4">
            *catatan: <br /> - untuk menambah pengalaman tekan tombol Tambah (+)
          </div>
          <div>
            <TablePengalamanVendor data={data} setData={setData} />
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
