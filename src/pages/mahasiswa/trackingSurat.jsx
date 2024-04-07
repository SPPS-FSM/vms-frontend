import React from "react";
import NavbarMahasiswa from "../../components/mahasiswa/navbar";
import "../../css/embla.css";
import FooterMahasiswa from "../../components/mahasiswa/footer";
import {
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { FaDownload, FaEye } from "react-icons/fa6";

export default function TrackingSurat() {
  const [Search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);

  const TABLE_HEAD = [
    "Nama",
    "NIM/NIP",
    "Jurusan",
    "Jenis Surat",
    "Status",
    "Action",
  ];

  const TABLE_ROWS = [
    {
      nama: "Farhan Dwicahyo",
      nim: "24060120140099",
      jurusan: "Informatika",
      jenis_surat: "Surat Rekomendasi KKN",
      status: "Selesai",
    },
    {
      nama: "Luthfi Arya",
      nim: "24060120140150",
      jurusan: "Informatika",
      jenis_surat: "Surat Rekomendasi KKN",
      status: "Menunggu Tanda Tangan WD1",
    },
  ];

  return (
    <div className="relative bg-gray-50">
      <div className="absolute top-2 left-0 right-0 z-50 ">
        <NavbarMahasiswa />
      </div>
      <div className="absolute top-60 md:top-56 lg:top-52 left-1/2 transform -translate-x-1/2 -translate-y-3/4 z-10 text-center">
        <p className="text-4xl text-orange-500 font-medium">Tracking Surat</p>
        <p className="text-white">
          Tracking terkait persuratan yang telah diajukan oleh mahasiswa
          Fakultas Sains dan Matematika
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

      {/* Search Bar */}
      <div className="container mx-auto p-4 rounded-md -translate-y-8 bg-white shadow-lg">
        <div className="relative flex w-full">
          <Input
            type="text"
            label="Search here"
            value={Search}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            className="!absolute right-1 top-1 rounded bg-black"
          >
            Search
          </Button>
        </div>
        <div className="flex justify-end items-center pt-2 gap-2">
          <select className="border border-gray-400 rounded-md py-2 px-2 w-full text-blue-gray-400">
            <option>--Pilih Jenis Surat--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <Button size="sm" className="rounded">
            Filter
          </Button>
        </div>
      </div>

      {/* Filter */}
      {/* <div className="container mx-auto bg-white -translate-y-6 shadow-lg rounded-md">
        <p>ini filter</p>
      </div> */}

      {/* Table */}
      <div className="container mx-auto -translate-y-4 p-4 bg-white shadow-lg">
        <div className="py-4">
          <div className="">
            <div className="h-full w-full border">
              <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(
                      ({ nama, nim, jurusan, jenis_surat, status }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={nama}>
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {nama}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {nim}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {jurusan}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {jenis_surat}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {status}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Tooltip content="Lihat Surat">
                                <IconButton variant="text">
                                  <FaEye className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
              <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                  <Button variant="outlined" size="sm">
                    Previous
                  </Button>
                  <Button variant="outlined" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#019EDB] px-6 rounded-lg py-10 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
