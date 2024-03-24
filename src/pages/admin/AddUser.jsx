import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import SidebarAdmin from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbar";
import FooterAdmin from "../../components/admin/footer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

export default function AddUser() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  console.log(result);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle the selected file as needed
    console.log(file);
  };

  const TABLE_HEAD = ["Nama Surat", "Nama File", "Action"];

  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      online: true,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      online: false,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      online: false,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      online: true,
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      online: false,
    },
  ];
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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">Tambah User</div>
        <div className="bg-white p-6">
          <div className="md:col-span-4">
            <Typography variant="small" className="">
              Role
            </Typography>
          </div>
          <div className=" md:col-span-4 rounded-lg pb-4">
            <Select label="">
              <Option>Mahasiswa</Option>
              <Option>Kepala Departemen</Option>
              <Option>Wakil Dekanat</Option>
              <Option>Ketua Dekanat</Option>
            </Select>
          </div>
          <div className="md:col-span-4">
            <Typography variant="small" className="">
              Nama
            </Typography>
          </div>
          <div className=" md:col-span-4 rounded-lg pb-4">
            <Input
              color="indigo"
              size="lg"
              placeholder="Masukan Nama Lengkap"
              className="!border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="md:col-span-4">
            <Typography variant="small" className="">
              NIM/NIP
            </Typography>
          </div>
          <div className=" md:col-span-4 rounded-lg pb-4">
            <Input
              color="indigo"
              size="lg"
              placeholder="Masukan NIM/NIP"
              className="!border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="md:col-span-4">
            <Typography variant="small" className="">
              Jurusan
            </Typography>
          </div>
          <div className=" md:col-span-4 rounded-lg pb-4">
            <Select label="">
              <Option>Informatika</Option>
              <Option>Statistika</Option>
              <Option>Matematika</Option>
              <Option>Biologi</Option>
              <Option>Bioteknologi</Option>
              <Option>Fisika</Option>
              <Option>Kimia</Option>
            </Select>
          </div>
          <div className="md:col-span-4">
            <Typography variant="small" className="">
              Status
            </Typography>
          </div>
          <div className=" md:col-span-4 rounded-lg pb-4">
            <Select label="">
              <Option>Aktif</Option>
              <Option>Tidak Aktif</Option>
            </Select>
          </div>
          <div className="md:col-span-4 flex justify-end items-center pt-6">
            <a href="#" className="flex gap-2 text-green-500 ml-4 text-sm">
              <Button className="bg-red-400 flex">Batal</Button>
            </a>
            <a href="#" className="flex gap-2 text-green-500 ml-4 text-sm">
              <Button className="bg-green-500 flex">Simpan</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Table All User */}

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
