import React, { useState } from "react";
import NavbarMahasiswa from "../../../components/mahasiswa/navbar";
import "../../../css/embla.css";
import FooterMahasiswa from "../../../components/mahasiswa/footer";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { EyeIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function DetailSuratPermohonanBeasiswa() {
  const navigate = useNavigate();
  const [formVisible, setFormVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const toggleForm = () => {
    setFormVisible(true);
    setButtonDisabled(true);
  };

  const TABLE_HEAD = ["Nama", "NIM/NIP", "Jurusan", "Role", "Status", "Action"];

  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "Organization",
      online: true,
      date: "23/04/18",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: false,
      date: "23/04/18",
    },
  ];

  return (
    <div className="relative bg-gray-50">
      <div className="absolute top-2 left-0 right-0 z-50 ">
        <NavbarMahasiswa />
      </div>
      <div className="absolute top-60 md:top-56 lg:top-52 left-1/2 transform -translate-x-1/2 -translate-y-3/4 z-10 text-center">
        <p className="text-5xl text-orange-500 font-bold">
          Surat Permohanan Beasiswa
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

      {/* Table */}
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <div className="mb-2">
            <Button
              className="bg-green-500"
              onClick={toggleForm}
              disabled={buttonDisabled}
            >
              Buat Surat
            </Button>
          </div>
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
                      ({ img, name, email, job, org, online, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={name}>
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Avatar src={img} alt={name} size="sm" />
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {name}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    {email}
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
                                  {job}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {org}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Chip
                                  variant="ghost"
                                  size="sm"
                                  value={online ? "online" : "offline"}
                                  color={online ? "green" : "blue-gray"}
                                />
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {date}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Tooltip content="Detail User">
                                <IconButton variant="text">
                                  <EyeIcon className="h-4 w-4" />
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

      {/* Form */}
      {formVisible && (
        <div className="bg-white pb-4">
          <div className="container mx-auto pb-8 border">
            <div className="pl-1 md:p-2">
              <p className="text-center font-bold text-4xl">
                ISI FORM PERMOHONAN BEASISWA
              </p>
              <div className="border-b-2 border-gray-400 my-4"></div>
              <div className="grid grid-cols-12 gap-x-9 gap-y-3">
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nama"
                  >
                    Nama
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nama"
                    type="text"
                    placeholder="FARHAN DWICAHYO"
                    disabled
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    NIM
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder="24060120140099"
                    disabled
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    ANGKATAN
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder="2020"
                    disabled
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    Jurusan
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder="INFORMATIKA"
                    disabled
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nama"
                  >
                    ALAMAT TINGGAL
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nama"
                    type="text"
                    placeholder=" "
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    NO TELPON / HP
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    ALAMAT ORANGTUA
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    RIWAYAT CUTI
                  </label>
                  <select class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">-- PILIH RIWAYAT CUTI --</option>
                    <option value="">SUDAH</option>
                    <option value="">BELUM PERNAH CUTI</option>
                  </select>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    SEMESTER
                  </label>
                  <select class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">-- PILIH SEMESTER --</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    SKS
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder="INFORMATIKA"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nim"
                  >
                    IPK
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-11/12 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nim"
                    type="text"
                    placeholder="IPK"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button color="green">SIMPAN</Button>
                <Button color="red">RESET</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-[#019EDB] px-6 rounded-lg py-10 absolute top-full left-0 w-full">
        <FooterMahasiswa />
      </div>
    </div>
  );
}
