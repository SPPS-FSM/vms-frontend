import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import SidebarStaff from "../../../components/staff/sidebar";
import NavbarStaff from "../../../components/staff/navbar";
import { BiSearch } from "react-icons/bi";
import FooterAdmin from "../../../components/admin/footer";
import { TableUserDRM } from "../../../components/staff/VerifikasiDRM/tableUserDRM";
import { TableVerifDRM } from "../../../components/staff/VerifikasiDRM/tableVerifikasiDRM";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button, Textarea } from "@material-tailwind/react";
import { TableUploadDocument } from "../../../components/supplier/tableUploadDocument";
import { TableDetailDocument } from "../../../components/staff/VerifikasiDRM/tableDetailDocument";
import { TableDetailSertifikasi } from "../../../components/staff/VerifikasiDRM/tableDetailSertifikasi";
import { TableDetailProduct } from "../../../components/staff/VerifikasiDRM/tableDetailProduct";
import { TableDetailPengalaman } from "../../../components/staff/VerifikasiDRM/tableDetailPengalaman";
import Cookies from "js-cookie";

import {
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function VerifikasiDRM() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [user, setUser] = useState(null);

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
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/" + userId,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );

        setUser(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    if (!user) {
      fetchUser();
    }
  }, []);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarStaff />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarStaff openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Verifikasi DRM</div>
            <button
              onClick={() => navigate("/staff/list-drm")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form action="" className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama Perusahaan
            </label>
            <input
              value={user && user.nama_perusahaan}
              type="text"
              className="border w-full h-8 my-2"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nama PIC
            </label>
            <input
              value={user && user.nama_pic}
              type="text"
              className="border w-full h-8 my-2"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              value={user && user.email}
              type="text"
              className="border w-full h-8 my-2"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              No Telephone
            </label>
            <input
              value={user && user.no_telephone}
              type="text"
              className="border w-full h-8 my-2"
              disabled
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Status Vendor
            </label>
            <input
              id="id_status"
              className="w-full border h-8 my-1"
              disabled
              value={
                user && user.id_status === 1
                  ? "Terverifikasi"
                  : "Belum Terverifikasi"
              }
            />
          </form>

          <div className="px-4">
            <div className="mt-5">
              <label
                htmlFor="first-name"
                className="block mb-5 text-sm font-semibold leading-6 text-gray-900"
              >
                Document Persyaratan
              </label>
              <TableDetailDocument />
            </div>
            <hr className="my-3 border-blue-gray-300 " />

            <div className=" mt-5">
              <label
                htmlFor="first-name"
                className="block mb-5 text-sm font-semibold leading-6 text-gray-900"
              >
                Sertifikasi
              </label>
              <TableDetailSertifikasi />
            </div>
            <hr className="my-3 border-blue-gray-300 " />
            <div className=" mt-5">
              <label
                htmlFor="first-name"
                className="block mb-5 text-sm font-semibold leading-6 text-gray-900"
              >
                Product
              </label>
              <TableDetailProduct />
            </div>
            <hr className="my-3 border-blue-gray-300 " />
            <div className=" mt-5">
              <label
                htmlFor="first-name"
                className="block mb-5 text-sm font-semibold leading-6 text-gray-900"
              >
                Pengalaman
              </label>
              <TableDetailPengalaman />
            </div>
            <hr className="my-3 border-blue-gray-300 " />
          </div>
          {/* <div className="flex justify-end mr-4"> */}
          {/* <TolakDialog id={userId} /> */}
          {/* <VerifikasiDialog id={userId} /> */}
          {/* </div> */}

          <div className="text-gray-500 px-4 my-4">
            <p>* CATATAN :</p>
            <p>1. Pastikan Berkas yang sudah diupload dicek dan sudah sesuai</p>
            <p>
              2. Jika ada berkas yang salah tolong tuliskan di keterangan dan
              tekan tombol <b>TOLAK</b>
            </p>
            <p>
              2. Jika berkas sudah sesuai tekan tombol <b>VERIFIKASI</b>
            </p>
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

function TolakDialog({ id }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const handleOpen = () => setOpen((cur) => !cur);
  const handleTolak = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/user/" + id,
        {
          status: 2,
          status_description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      // setOpen(false);
      // refresh page
      // window.location.reload();
      navigate("/staff/list-drm");
    } catch (error) {
      console.error("Tolak vendor gagal", error);
      throw new Error("Tolak vendor gagal");
    }
  };

  return (
    <>
      <Button className="bg-red-500 mr-3" onClick={handleOpen}>
        Tolak
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Tolak Berkas Vendor
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Tuliskan keterangan mengapa anda menolak berkas vendor ini
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Keterangan
            </Typography>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              label="Keterangan"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0 flex gap-5">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Cancel
            </Button>
            <Button className="bg-red-500" onClick={handleTolak} fullWidth>
              Tolak
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

function VerifikasiDialog({ id }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleVerifikasi = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/user/" + id,
        {
          status: 1,
          status_description: null,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      navigate("/staff/list-drm");
    } catch (error) {
      console.error("Verifikasi vendor gagal", error);
      throw new Error("Verifikasi vendor gagal");
    }
  };

  return (
    <>
      <Button className="bg-green-500 mr-3" onClick={handleOpen}>
        Verifikasi
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Verifikasi Berkas Vendor
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Apakah anda yakin ingin memverifikasi berkas vendor ini?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex gap-5">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Cancel
            </Button>
            <Button
              className="bg-green-500"
              onClick={handleVerifikasi}
              fullWidth
            >
              Verifikasi
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
