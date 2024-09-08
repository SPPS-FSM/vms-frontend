import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import NavbarStaff from "../../../components/staff/navbar";
import SidebarStaff from "../../../components/staff/sidebar";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDateIndo } from "../../../utils/date";

import {
  Button,
  Dialog,
  Card,
  CardHeader,
  Textarea,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function DetailPenawaranDRM() {
  const [searchParams] = useSearchParams();
  const penawaranId = searchParams.get("id");
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState(null);
  const [showDetailProduct, setShowDetailProduct] = useState(false);
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
          "http://localhost:4000/api/userpenawaran/" + penawaranId,
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
  }, [penawaranId]);

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
        {data ? (
          <div className="bg-white px-2 py-2 rounded-md shadow-md">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Detail Penawaran</div>
              <button
                onClick={() => navigate("/staff/penawaran-vendor")}
                className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
              >
                <ArrowLeftIcon height={25} />
              </button>
            </div>
            <hr className="my-3 border-blue-gray-300 " />
            <div className="p-4 text-md ">
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Kode Penawaran</p>
                <p className="w-full md:w-1/3">{data.no_penawaran}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">Nama Vendor</p>
                <p className="w-full md:w-1/3">{data.nama_perusahaan}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">PIC Vendor</p>
                <p className="w-full md:w-1/3">{data.nama_pic}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">No Telephone</p>
                <p className="w-full md:w-1/3">{data.no_telephone}</p>
              </div>
              <div className="md:flex flex-none gap-0">
                <p className="font-bold w-full md:w-1/3">ID Product</p>
                <div>
                  <p className="w-full md:w-1/3">{data.id_product}</p>
                  <button
                    className="text-blue-500"
                    onClick={() => setShowDetailProduct(!showDetailProduct)}
                  >
                    Detail Product
                  </button>
                </div>
              </div>
              {showDetailProduct && (
                <div className="bg-gray-200 rounded-md p-2 ">
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">Brand</p>
                    <p className="w-full md:w-1/3">{data.brand}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Price</p>
                    <p className="w-full md:w-1/3">{data.price}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Kurs</p>
                    <p className="w-full md:w-1/3">{data.nama_kurs}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Stock</p>
                    <p className="w-full md:w-1/3">{data.stock}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Volume</p>
                    <p className="w-full md:w-1/3">{data.volume}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Satuan Klien</p>
                    <p className="w-full md:w-1/3">{data.nama_satuan}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Image</p>
                    {/* <p className="w-full md:w-1/3"></p> */}
                    {data && data.item_image && (
                      <img
                        src={
                          "http://localhost:4000/api/file/" +
                          data.item_image.split("/")[1]
                        }
                        alt="image2"
                        className="w-full md:w-1/3 h-full "
                      />
                    )}
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Description</p>
                    <p className="w-full md:w-1/3">
                      {data.product_description}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Jenis Product</p>
                    <p className="w-full md:w-1/3">{data.nama_jenis_product}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Provinsi</p>
                    <p className="w-full md:w-1/3">{data.nama_provinsi}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Kota</p>
                    <p className="w-full md:w-1/3">{data.nama_kota}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">
                      Company Category
                    </p>
                    <p className="w-full md:w-1/3">{data.company_category}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Storage Type</p>
                    <p className="w-full md:w-1/3">{data.storage_type}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4  ">
                    <p className="font-bold w-full md:w-1/3">Packaging</p>
                    <p className="w-full md:w-1/3">{data.packaging}</p>
                  </div>
                </div>
              )}
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">
                  Tanggal Dibuat Penawaran
                </p>
                <p className="w-full md:w-1/3">
                  {data && formatDateIndo(data.tanggal_dibuat_penawaran)}
                </p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">
                  Tanggal Mulai Penawaran
                </p>
                <p className="w-full md:w-1/3">
                  {data && formatDateIndo(data.tanggal_mulai_penawaran)}
                </p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">
                  Tangal Berakhir Penawaran
                </p>
                <p className="w-full md:w-1/3">
                  {data && formatDateIndo(data.tanggal_berakhir_penawaran)}
                </p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">Terms of Payment</p>
                <p className="w-full md:w-1/3">{data.Terms_of_Payment}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">Terms of Delivery</p>
                <p className="w-full md:w-1/3">{data.Terms_of_Delivery}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">Description</p>
                <p className="w-full md:w-1/3">{data.penawaran_description}</p>
              </div>

              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">Status Penawaran</p>
                <p className="w-full md:w-1/3">{data.nama_status_penawaran}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4  ">
                <p className="font-bold w-full md:w-1/3">
                  Status Proses Penawaran
                </p>
                <p className="w-full md:w-1/3">
                  {data.nama_status_proses_penawaran}
                </p>
              </div>
              {data.id_status_proses_penawaran === 3 && (
                <div className="pt-4 flex justify-start">
                  {/* <a href="/staff/pilih-penawaran-vendor"> */}
                  {/* <Button color="orange">Pilih Penawaran</Button> */}
                  <TolakDialog id={penawaranId} />
                  <VerifikasiDialog id={penawaranId} />

                  {/* </a> */}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
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
  const handleOpen = () => setOpen((cur) => !cur);
  const handleTolak = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/userpenawaran/" + id,
        {
          id_status_proses_penawaran: 6,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      navigate("/staff/penawaran-vendor");
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
              Tolak Penawaran Vendor
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Apakah yakin ingin menolak penawaran vendor ini?
            </Typography>
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
        "http://localhost:4000/api/userpenawaran/" + id,
        {
          id_status_proses_penawaran: 4,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      navigate("/staff/penawaran-vendor");
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
