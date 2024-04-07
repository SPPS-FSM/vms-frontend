import React, { useState, useEffect } from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import FooterMahasiswa from "../../components/mahasiswa/footer";
import CompPersuratanAkademik from "../../components/mahasiswa/compPersuratanAkademik";
import CompPersuratanKKN from "../../components/mahasiswa/compPersuratanKKN";
import CompPersuratanFasilitas from "../../components/mahasiswa/compPersuratanFasilitas";
import CompPersuratanBeasiswa from "../../components/mahasiswa/compPersusratanBeasiswa";
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  const [contentType, setContentType] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const showContent = (contentType) => {
    setContentType(contentType);
  };

  useEffect(() => {
    // Mark the component as initialized when contentType is not null
    if (contentType !== null) {
      setIsInitialized(true);
    }
  }, [contentType]);

  const renderContent = () => {
    if (isInitialized) {
      switch (contentType) {
        case "akademik":
          return <CompPersuratanAkademik />;
        case "beasiswa":
          return <CompPersuratanBeasiswa />;
        case "kkn":
          return <CompPersuratanKKN />;
        case "fasilitas":
          return <CompPersuratanFasilitas />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    // <div className="relative">
    //   {/* Navbar */}
    //   <div className="absolute top-2 left-0 right-0 z-10">
    //     <NavbarMahasiswa />
    //   </div>
    //   <img
    //     src="../bg-fsm.jpg"
    //     alt="banner"
    //     className="w-screen h-screen object-cover top-0"
    //     style={{ zIndex: -1 }}
    //   />

    // NewNavbar
    <div className="relative bg-gray-50">
      <div className="absolute top-2 left-0 right-0 z-50 ">
        <NavbarMahasiswa />
      </div>
      <div className="relative">
        <img
          src="../bg-fsm.jpg"
          alt="banner"
          className="w-screen h-96 object-cover object-center top-0"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Status Bar*/}
      {/* <div className="bg-white container mx-auto w-full md:w-3/4 h-20 -translate-y-12 border rounded-lg shadow-lg">
        <div className="grid grid-cols-12 items-center h-20">
          <a href="#" className="col-span-4 flex justify-center">
            <div className="border-l-2 pl-2">
              <div className="flex gap-2">
                <div className="flex flex-col justify-center">
                  <p>Surat Diajukan</p>
                  <p className="rounded-full  text-start">10</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="col-span-4 flex justify-center">
            <div className="border-l-2 pl-2">
              <div className="flex gap-2">
                <div className="flex flex-col justify-center">
                  <p>Surat Diproses</p>
                  <p className="rounded-full  text-start">10</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="col-span-4 flex justify-center">
            <div className="border-l-2 pl-2">
              <div className="flex gap-2">
                <div className="flex flex-col justify-center">
                  <p>Surat Selesai</p>
                  <p className="rounded-full  text-start">10</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div> */}

      {/* Filter Content */}
      <div className=" container mx-auto grid grid-cols-12 text-center gap-x-2 gap-2 px-2 md:px-0 mt-0 py-4 w-full lg:w-1/2">
        <button
          className={`col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg ${
            contentType === "akademik" && "bg-blue-500 text-white "
          }`}
          onClick={() => showContent("akademik")}
        >
          <div className="flex flex-col items-center">
            <img src="../logo-akademik-2.png" alt="" width={70} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan Akademik</p>
            </div>
          </div>
        </button>
        <button
          className={`col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg ${
            contentType === "beasiswa" && "bg-blue-500 text-white"
          }`}
          onClick={() => showContent("beasiswa")}
        >
          <div className="flex flex-col items-center">
            <img src="../logo-beasiswa-2.png" alt="" width={70} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan Beasiswa</p>
            </div>
          </div>
        </button>
        <button
          className={`col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg ${
            contentType === "kkn" && "bg-blue-500 text-white"
          }`}
          onClick={() => showContent("kkn")}
        >
          <div className="flex flex-col items-center">
            <img src="../logo-kkn-2.png" alt="" width={70} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan KKN</p>
            </div>
          </div>
        </button>
        <button
          className={`col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg ${
            contentType === "fasilitas" && "bg-blue-500 text-white"
          }`}
          onClick={() => showContent("fasilitas")}
        >
          <div className="flex flex-col items-center">
            <img src="../logo-fasilitas-2.png" alt="" width={70} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan Fasilitas</p>
            </div>
          </div>
        </button>
      </div>

      {/* Content */}
      {renderContent()}

      {/* Description New */}
      <div className="px-6 md:px-0 bg-white">
        <div className="container mx-auto grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <img src="../hero.jpg" className="w-full lg:w-[30rem]" />
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col items-center justify-center">
            {/* <p className="justify-start text-2xl font-bold">
              SPPS-FSM
            </p> */}
            <p className="text-justify text-2xl text-fsmblue-500 font-medium">
              SPPS-FSM merupakan Sistem Informasi Pengajuan dan Penandatanganan
              Surat bagi mahasiswa dan civitas akademika di lingkup Fakultas
              Sains dan Matematika Universitas Diponegoro. SPPS-FSM melayani
              mahasiswa Fakultas Sains dan Matematika dalam pengajuan surat dan
              memonitoring surat yang telah diajukan serta memudahkan civitas
              akademika dalam pengarsipan surat, memverifikasi surat, dan
              menandatangani surat yang diajukan oleh mahasiswa.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className=" container mx-auto grid grid-cols-12 my-8 px-4 md:px-0 gap-4">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col justify-end items-end">
            <Typography variant="h3">
              Gedung Acintya Prasada FSM UNDIP
            </Typography>
            <Typography variant="h6" className="font-medium">
              Jl. Prof. Jacub Rais, Tembalang, Kec. Tembalang, Kota Semarang,
              Jawa Tengah 50275
            </Typography>
            <div className="flex gap-1 mt-2">
              <FaInstagram size={25} />
              <FaFacebook size={25} />
              <FaWhatsapp size={25} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.660512779082!2d110.4391073751251!3d-7.049119792953092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d8825d14be7%3A0xb0ecbfcecc6bd137!2sAcintya%20Prasada%20Building%20Diponegoro%20University!5e0!3m2!1sen!2sid!4v1712521842890!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-w1en-downgrade"
            className="w-full lg:w-[630px] h-[450px]"
          ></iframe>
        </div>
      </div>

      {/* Footer Backup */}
      <div className="bg-[#019EDB] px-6 py-10 top-full left-0 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
