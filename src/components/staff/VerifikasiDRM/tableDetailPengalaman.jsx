import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { formatDateIndo } from "../../../utils/date";

const TABLE_HEAD = [
  "No",
  "Nama Klien",
  "Nama Proyek",
  "Nilai Proyek",
  "Kurs",
  "No Kontrak",
  "Kontak Klien",
  "Tanggal Mulai",
  "Tanggal Selesai",
  // "Aksi",
];

export function TableDetailPengalaman() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [pengalaman, setPengalaman] = useState([]);

  async function fetchPengalaman() {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/userpengalaman/user/" + userId,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      setPengalaman(response.data);
    } catch (error) {
      console.error("Get jenis dokumen gagal", error);
      throw new Error("Get jenis dokumen gagal");
    }
  }

  useEffect(() => {
    fetchPengalaman();
  }, []);

  return (
    <div>
      <div className="overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
            {pengalaman.map(
              (
                {
                  nama_klien,
                  nama_proyek,
                  nilai_proyek,
                  nama_kurs,
                  no_kontrak,
                  kontak_klien,
                  tanggal_mulai,
                  tanggal_selesai,
                },
                index
              ) => (
                <tr key={nama_klien} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama_klien}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama_proyek}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nilai_proyek}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_kurs}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {no_kontrak}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {kontak_klien}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_mulai)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_selesai)}
                    </Typography>
                  </td>
                  {/* <td className="p-4">
                    <button className="bg-blue-500 p-2 rounded-md shadow-md mx-2">
                      <EyeIcon height={17} color="white" />
                    </button>
                  </td> */}
                </tr>
              )
            )}
          </tbody>
        </table>
        {/* <div className="flex items-center justify-between border-t border-blue-gray-50 py-4 gap-2  ">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div> */}
      </div>
    </div>
  );
}
