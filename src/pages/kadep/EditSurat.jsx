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
import SidebarKadep from "../../components/kadep/sidebar";
import NavbarKadep from "../../components/kadep/navbar";

export default function EditSuratKadep() {
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
        <SidebarKadep />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarKadep openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">Edit Template Surat</div>
        <div className="bg-white p-6">
          <div className="md:col-span-4">
            <Typography variant="small" className="">
              Nama Surat
            </Typography>
          </div>
          <div className=" md:col-span-4 rounded-lg">
            <Input
              color="indigo"
              size="lg"
              placeholder="Nama Surat"
              className="!border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="md:col-span-4 pt-4">
            <Typography variant="small" className="">
              Upload Template Surat (.pdf)
            </Typography>
          </div>
          <div className="md:col-span-4  rounded-lg border b-2 border-gray-400">
            <div className="px-2 md:px-4 pt-2">
              <div className="overflow-hidden w-full max-w-[500px] md:w-full h-auto">
                <img
                  src="" // Mengubah link_image menjadi formData.blog_image
                  alt=""
                  className="w-full h-auto"
                />
              </div>{" "}
            </div>
            <div className="md:flex pt-4 pl-2 md:pl-4 pb-6">
              <div className="md:flex  justify-center items-center">
                <Button
                  color=""
                  className="bg-fsmblue-500 relative overflow-hidden"
                >
                  <span>
                    <Typography variant="small">Pilih File</Typography>
                  </span>

                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer top-0 left-0 h-full w-full"
                    onChange={handleFileUpload}
                  />
                </Button>
                <Typography className="md:pl-4">
                  {selectedFile ? `${selectedFile.name}` : "No File Chosen"}
                </Typography>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-end items-center pt-6">
            <a
              href="/master-blog"
              className="flex gap-2 text-green-500 ml-4 text-sm"
            >
              <Button className="bg-red-400 flex">Batal</Button>
            </a>
            <a
              href="/master-blog"
              className="flex gap-2 text-green-500 ml-4 text-sm"
            >
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
