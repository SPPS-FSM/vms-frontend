import React from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import "../../css/embla.css";
import FooterMahasiswa from "../../components/mahasiswa/footer";

export default function PersuratanFasilitas() {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute top-2 left-0 right-0 z-50 ">
        <NavbarMahasiswa />
      </div>
      <div className="absolute top-60 md:top-56 lg:top-52 left-1/2 transform -translate-x-1/2 -translate-y-3/4 z-10 text-center">
        <p className="text-4xl text-orange-500 font-medium">
          Persuratan Fasilitas
        </p>
        <p className="text-white">
          Persuratan terkait dengan kegiatan Fasilitas di Fakultas Sains dan
          Matematika
        </p>
      </div>
      <div className="relative">
        <img
          src="../bg-fsm.jpg"
          alt="banner"
          className="w-screen h-96 object-cover object-center top-0"
          style={{ zIndex: -1 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="col-span-3 flex justify-center items-center">
            {/* gaada suratnya */}
            <p>
              gaada surat
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#019EDB] px-6 rounded-lg py-10 absolute top-full left-0 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
