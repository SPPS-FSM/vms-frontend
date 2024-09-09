import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SidebarManager from "../../../components/manager/sidebar";
import NavbarManager from "../../../components/manager/navbar";
import { Button } from "@material-tailwind/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { formatDateIndo } from "../../../utils/date";

export default function DetailPO() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [showDetailPenawaran, setShowDetailPenawaran] = useState(false);
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/userpo/" + id,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );
        console.log("response", response);

        setData(response.data);
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

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
        <SidebarManager />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarManager
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Detail PO</div>
            <button
              onClick={() => navigate("/manager/list-penawaran")}
              className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4"
            >
              <ArrowLeftIcon height={25} />
            </button>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          {data ? (
            <div className="p-4 text-md">
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Nomor PO</p>
                <p className="w-full md:w-1/3">{data.no_po}</p>
              </div>
              <div className="md:flex flex-none gap-0">
                <p className="font-bold w-full md:w-1/3">Kode Penawaran</p>
                <div>
                  <p className="w-full">{data.penawaran.no_penawaran}</p>
                  <button
                    className="text-blue-500"
                    onClick={() => setShowDetailPenawaran(!showDetailPenawaran)}
                  >
                    Detail Penawaran
                  </button>
                </div>
              </div>
              {showDetailPenawaran && (
                <div className="bg-gray-200 rounded-md p-2">
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">Nama Vendor</p>
                    <p className="w-full md:w-1/3">
                      {data.user.nama_perusahaan}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">PIC Vendor</p>
                    <p className="w-full md:w-1/3">{data.user.nama_pic}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">No Telephone</p>
                    <p className="w-full md:w-1/3">{data.user.no_telephone}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">ID Product</p>
                    <p className="w-full md:w-1/3">{data.id_product}</p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">
                      Tanggal Dibuat Penawaran
                    </p>
                    <p className="w-full md:w-1/3">
                      {formatDateIndo(data.penawaran.tanggal_dibuat_penawaran)}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">
                      Tanggal Mulai Penawaran
                    </p>
                    <p className="w-full md:w-1/3">
                      {formatDateIndo(data.penawaran.tanggal_mulai_penawaran)}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">
                      Tangal Berakhir Penawaran
                    </p>
                    <p className="w-full md:w-1/3">
                      {formatDateIndo(
                        data.penawaran.tanggal_berakhir_penawaran
                      )}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">
                      Terms of Payment
                    </p>
                    <p className="w-full md:w-1/3">
                      {data.penawaran.Terms_of_Payment}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">
                      Terms of Delivery
                    </p>
                    <p className="w-full md:w-1/3">
                      {data.penawaran.Terms_of_Delivery}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">Description</p>
                    <p className="w-full md:w-1/3">
                      {data.penawaran.description}
                    </p>
                  </div>

                  <div className="md:flex flex-none gap-0 mb-4">
                    <p className="font-bold w-full md:w-1/3">
                      Status Penawaran
                    </p>
                    <p className="w-full md:w-1/3">
                      {data.penawaran.status_penawaran.nama_status}
                    </p>
                  </div>
                  <div className="md:flex flex-none gap-0">
                    <p className="font-bold w-full md:w-1/3">
                      Status Proses Penawaran
                    </p>
                    <p className="w-full md:w-1/3">
                      {data.penawaran.status_proses_penawaran.nama_status}
                    </p>
                  </div>
                </div>
              )}
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Tanggal Dibuat PO</p>
                <p className="w-full md:w-1/3">
                  {formatDateIndo(data.tanggal_dibuat_po)}
                </p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Tanggal Mulai PO</p>
                <p className="w-full md:w-1/3">
                  {formatDateIndo(data.tanggal_mulai_po)}
                </p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Tangal Berakhir PO</p>
                <p className="w-full md:w-1/3">
                  {formatDateIndo(data.tanggal_berakhir_po)}
                </p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Terms of Payment</p>
                <p className="w-full md:w-1/3">{data.Terms_of_Payment}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Terms of Delivery</p>
                <p className="w-full md:w-1/3">{data.Terms_of_Delivery}</p>
              </div>
              <div className="md:flex flex-none gap-0 mb-4">
                <p className="font-bold w-full md:w-1/3">Description</p>
                <p className="w-full md:w-1/3">{data.description}</p>
              </div>
              <div className="pt-4 flex md:justify-start justify-center">
                <Button
                  onClick={() => navigate("/manager/edit-po?id=" + data.id_po)}
                  color="green"
                >
                  Edit PO
                </Button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
