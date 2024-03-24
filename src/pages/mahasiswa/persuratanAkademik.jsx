import React from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import "../../css/embla.css";
import FooterMahasiswa from "../../components/mahasiswa/footer";

export default function PersuratanAkademik() {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute top-2 left-0 right-0 z-50 ">
        <NavbarMahasiswa />
      </div>
      <div className="absolute top-60 md:top-56 lg:top-52 left-1/2 transform -translate-x-1/2 -translate-y-3/4 z-10 text-center">
        <p className="text-5xl text-orange-500 font-medium">
          Persuratan Akademik
        </p>
        <p className="text-white">
          Persuratan terkait dengan kegiatan akademik di Fakultas Sains dan
          Matematika
        </p>
      </div>
      <div className="relative">
        <img
          src="bg-fsm.jpg"
          alt="banner"
          className="w-screen h-96 object-cover object-center top-0"
          style={{ zIndex: -1 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className=" block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Perubahan Data Aplikasi SIAP
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Perubahan Data Aplikasi Wisuda
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Keterlambatan KRS
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Cuti Akademik
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Aktif Kuliah Setelah Mangkir
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Undur Diri
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Surat Pengantar PKL/KP/TA
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-full">
              <div className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img src="bg-fsm.jpg" alt="" className="rounded-lg" />
              </div>
              <div className="p-6 h-28">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Form Penundaan UKT
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#019EDB] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                  type="button"
                >
                  Buat Surat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#019EDB] px-6 rounded-lg py-10 absolute top-full left-0 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
