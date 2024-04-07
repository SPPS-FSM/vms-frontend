import React from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import EmblaCarousel from "../../components/mahasiswa/carousel";
import "../../css/embla.css";
import FooterMahasiswa from "../../components/mahasiswa/footer";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  InboxStackIcon,
} from "@heroicons/react/24/outline";

// const OPTIONS = { slidesToScroll: "auto", loop: true, duration: 500 };
// const SLIDES = [
//   {
//     title: "Persuratan Akademik",
//     description:
//       "Persuratan terkait dengan kegiatan akademik di Fakultas Sains dan Matematika",
//     link: "/mahasiswa/surat-akademik",
//   },
//   {
//     title: "Persuratan Beasiswa",
//     description:
//       "Persuratan terkait dengan kegiatan Beasiswa di Fakultas Sains dan Matematika",
//     link: "/mahasiswa/surat-beasiswa",
//   },
//   {
//     title: "Persuratan Kuliah Kerja Nyata (KKN)",
//     description:
//       "Persuratan terkait dengan kegiatan Kuliah Kerja Nyata (KKN) di Fakultas Sains dan Matematika",
//     link: "/mahasiswa/surat-kkn",
//   },
//   {
//     title: "Persuratan Data Aplikasi",
//     description:
//       "Persuratan terkait dengan Data Aplikasi di Fakultas Sains dan Matematika",
//     link: "/mahasiswa/surat-data-aplikasi",
//   },
//   {
//     title: "Persuratan Fasilitas",
//     description:
//       "Persuratan terkait dengan Fasilitas di Fakultas Sains dan Matematika",
//     link: "/mahasiswa/surat-fasilitas",
//   },
// ];

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-2 left-0 right-0 z-10">
        <NavbarMahasiswa />
      </div>
      <img
        src="../bg-fsm.jpg"
        alt="banner"
        className="w-screen h-screen object-cover top-0"
        style={{ zIndex: -1 }}
      />

      {/* Status */}
      <div className="bg-white container mx-auto w-full md:w-3/4 h-20 -translate-y-12 border rounded-lg shadow-lg">
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
      </div>

      {/* New Content */}
      <div className=" container mx-auto grid grid-cols-12 text-center gap-x-2 gap-2 mb-8 px-2 md:px-0 -translate-y-4 w-full">
        <a
          href="/mahasiswa/surat-akademik"
          className="col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg"
        >
          <div className="flex flex-col items-center">
            <img src="../logo-akademik-2.png" alt="" width={90} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan Akademik</p>
            </div>
            <div className="text-sm text-justify pt-2">
              {/* <p>
                Persuratan terkait dengan kegiatan akademik di Fakultas Sains
                dan Matematika.
              </p> */}
            </div>
          </div>
        </a>
        <a
          href="/mahasiswa/surat-beasiswa"
          className="col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg"
        >
          <div className="flex flex-col items-center">
            <img src="../logo-beasiswa-2.png" alt="" width={90} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan Beasiswa</p>
            </div>
            <div className="text-sm text-justify pt-2">
              {/* <p>
                Persuratan terkait dengan kegiatan beasiswa di Fakultas Sains
                dan Matematika.
              </p> */}
            </div>
          </div>
        </a>
        <a
          href="/mahasiswa/surat-kkn"
          className="col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg"
        >
          <div className="flex flex-col items-center">
            <img src="../logo-kkn-2.png" alt="" width={90} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan KKN</p>
            </div>
            <div className="text-sm text-justify pt-2">
              {/* <p>
                Persuratan terkait dengan kegiatan Kuliah Kerja Nyata (KKN) di
                Fakultas Sains dan Matematika.
              </p> */}
            </div>
          </div>
        </a>
        <a
          href="Persuratan Fasilitas"
          className="col-span-12 md:col-span-3 border rounded-md border-gray-500 p-4 hover:shadow-lg"
        >
          <div className="flex flex-col items-center">
            <img src="../logo-fasilitas-2.png" alt="" width={90} />
            <div className="font-medium text-xl pt-4">
              <p>Persuratan Fasilitas</p>
            </div>
            <div className="text-sm text-justify pt-2">
              {/* <p>
                Persuratan terkait dengan kegiatan Kuliah Kerja Nyata (KKN) di
                Fakultas Sains dan Matematika.
              </p> */}
            </div>
          </div>
        </a>
      </div>

      {/* Description */}
      {/* <div className="px-6 py-10 bg-fsmblue-500 rounded-none">
        <div className="flex justify-center items-center flex-col">
          <Typography variant="h2" className="font-bold text-orange-500 pb-2">
            SPPS-FSM
          </Typography>
          <div className="w-16 h-1 bg-orange-500"></div>
        </div>
        <div className="container mx-auto ">
          <p className="text-center md:text-justify text-white text-2xl mt-10">
            SPPS-FSM merupakan Sistem Informasi Pengajuan dan Penandatanganan
            Surat bagi mahasiswa dan civitas akademika di lingkup Fakultas Sains
            dan Matematika Universitas Diponegoro. SPPS-FSM melayani mahasiswa
            Fakultas Sains dan Matematika dalam pengajuan surat dan memonitoring
            surat yang telah diajukan serta memudahkan civitas akademika dalam
            pengarsipan surat, memverifikasi surat, dan menandatangani surat
            yang diajukan oleh mahasiswa.
          </p>
        </div>
      </div> */}

      {/* Carousel */}
      {/* <div className="gap-6 -translate-y-28 lg:-translate-y-24">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div> */}

      {/* Footer New */}
      {/* <div className="bg-gradient-to-t from-black to-fsmblue-500 py-10">
        <FooterMahasiswa />
      </div> */}

      {/* Footer Backup */}
      <div className="bg-[#019EDB] px-6 rounded-lg py-10 absolute top-full left-0 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
