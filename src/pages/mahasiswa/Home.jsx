import React, { useState, useEffect } from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import FooterMahasiswa from "../../components/mahasiswa/footer";
import CompPersuratanAkademik from "../../components/mahasiswa/compPersuratanAkademik";
import CompPersuratanKKN from "../../components/mahasiswa/compPersuratanKKN";
import CompPersuratanFasilitas from "../../components/mahasiswa/compPersuratanFasilitas";
import CompPersuratanBeasiswa from "../../components/mahasiswa/compPersusratanBeasiswa";

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
    <div className="relative bg-white">
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
      <div className=" container mx-auto grid grid-cols-12 text-center gap-x-2 gap-2 px-2 md:px-0 py-4 -translate-y-0 w-full lg:w-1/2">
        <button
          className={`col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg ${
            contentType === "akademik" && "bg-blue-500 text-white"
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
      <div className="container mx-auto pb-8 px-6 md:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5">
            <img src="../hero.jpg" />
          </div>
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center">
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

      {/* Footer Backup */}
      <div className="bg-[#019EDB] px-6 rounded-lg py-10 absolute top-full left-0 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
