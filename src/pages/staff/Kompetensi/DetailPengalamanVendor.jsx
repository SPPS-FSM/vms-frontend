import React, { useState, useEffect } from "react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import NavbarStaff from "../../../components/staff/navbar";
import SidebarStaff from "../../../components/staff/sidebar";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function DetailPengalamanVendor() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [experienceDetails, setExperienceDetails] = useState(null);
  const { id } = useParams(); // Assuming you are using react-router-dom to get the experience ID from the URL

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
    const fetchExperienceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/userpengalaman/user/${id}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        });
        setExperienceDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperienceDetails();
  }, [id]);

  if (!experienceDetails) {
    return <div>Loading...</div>;
  }

  const {
    nama_perusahaan,
    nama_klien,
    nama_proyek,
    nilai_proyek,
    nama_kurs,
    no_kontrak,
    kontak_klien,
    tanggal_mulai,
    tanggal_selesai,
  } = experienceDetails;

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

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Detail Pengalaman</div>
            <a href="/staff/pengalaman-vendor">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <div className="p-4 text-md ">
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Nama Perusahaan</p>
              <p className="w-full md:w-1/3">{nama_perusahaan}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4">
              <p className="font-bold w-full md:w-1/3">Nama Klien</p>
              <p className="w-full md:w-1/3">{nama_klien}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Nama Proyek</p>
              <p className="w-full md:w-1/3">{nama_proyek}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Kurs</p>
              <p className="w-full md:w-1/3">{nama_kurs}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Nilai Proyek</p>
              <p className="w-full md:w-1/3">{nilai_proyek}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">No Kontrak</p>
              <p className="w-full md:w-1/3">{no_kontrak}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Kontak Klien</p>
              <p className="w-full md:w-1/3">{kontak_klien}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Tanggal Mulai</p>
              <p className="w-full md:w-1/3">{new Date(tanggal_mulai).toLocaleDateString()}</p>
            </div>
            <div className="md:flex flex-none gap-0 mb-4  ">
              <p className="font-bold w-full md:w-1/3">Tanggal Selesai</p>
              <p className="w-full md:w-1/3">{new Date(tanggal_selesai).toLocaleDateString()}</p>
            </div>
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
