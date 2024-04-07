import { Typography } from "@material-tailwind/react";

export default function FooterMahasiswa() {
  return (
    <footer className="container mx-auto flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 pt-2 text-center md:justify-between">
      <Typography color="blue-gray" className="font-bold text-white">
        SPSS-FSM
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="/mahasiswa/home"
            color="blue-gray"
            className="font-normal transition-colors text-white"
          >
            Beranda
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-white"
          >
            Persuratan
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-white"
          >
            Hubungi Kami
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
