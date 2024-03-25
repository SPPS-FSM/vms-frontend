import React from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import { Typography } from "@material-tailwind/react";
import EmblaCarousel from "../../components/mahasiswa/carousel";
import "../../css/embla.css";
import FooterMahasiswa from "../../components/mahasiswa/footer";

const OPTIONS = { slidesToScroll: "auto", loop: true, duration: 500 };
const SLIDES = [
  {
    title: "Persuratan Akademik",
    description:
      "Persuratan terkait dengan kegiatan akademik di Fakultas Sains dan Matematika",
    link: "/mahasiswa/surat-akademik",
  },
  {
    title: "Persuratan Beasiswa",
    description:
      "Persuratan terkait dengan kegiatan Beasiswa di Fakultas Sains dan Matematika",
    link: "/mahasiswa/surat-beasiswa",
  },
  {
    title: "Persuratan Kuliah Kerja Nyata (KKN)",
    description:
      "Persuratan terkait dengan kegiatan Kuliah Kerja Nyata (KKN) di Fakultas Sains dan Matematika",
    link: "/mahasiswa/surat-kkn",
  },
  {
    title: "Persuratan Data Aplikasi",
    description:
      "Persuratan terkait dengan Data Aplikasi di Fakultas Sains dan Matematika",
    link: "/mahasiswa/surat-data-aplikasi",
  },
  {
    title: "Persuratan Fasilitas",
    description:
      "Persuratan terkait dengan Fasilitas di Fakultas Sains dan Matematika",
    link: "/mahasiswa/surat-fasilitas",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-2 left-0 right-0 z-10">
        <NavbarMahasiswa />
      </div>
      <img
        src="bg-fsm.jpg"
        alt="banner"
        className="w-screen h-screen object-cover top-0"
        style={{ zIndex: -1 }}
      />
      <div className="gap-6 -translate-y-28 lg:-translate-y-24">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="px-6 py-20 -translate-y-14 bg-fsmblue-500 rounded-lg">
        <div className="flex justify-center items-center flex-col">
          <Typography variant="h2" className="font-bold text-orange-500 pb-2">
            SPPS-FSM
          </Typography>
          <div className="w-16 h-1 bg-orange-500"></div>
        </div>
        <div className="w-5/6 mx-auto ">
          <p className="text-justify text-white text-2xl mt-10">
            SPPS-FSM merupakan Sistem Informasi Pengajuan dan Penandatanganan
            Surat bagi mahasiswa dan civitas akademika di lingkup Fakultas Sains
            dan Matematika Universitas Diponegoro. SPPS-FSM melayani mahasiswa
            Fakultas Sains dan Matematika dalam pengajuan surat dan memonitoring
            surat yang telah diajukan serta memudahkan civitas akademika dalam
            pengarsipan surat, memverifikasi surat, dan menandatangani surat
            yang diajukan oleh mahasiswa.
          </p>
        </div>
      </div>
      <div className="bg-[#019EDB] px-6 rounded-lg py-10">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
