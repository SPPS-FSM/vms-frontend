import React, { useState, useEffect } from "react";
import {
  EyeIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";

const TABLE_HEAD = [
  "No",
  "Klien",
  "Proyek",
  "Nilai Proyek",
  "Kurs",
  "No Kontak",
  "Tanggal Mulai",
  "Tanggal Selesai",
  "Aksi",
];

export default function TablePengalamanVendor() {
  const [pengalamanData, setPengalamanData] = useState([]);

  const fetchPengalamanData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/userpengalaman", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      console.log("API Response:", response.data);
      setPengalamanData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPengalamanData();
  }, []);

  return (
    <div>
      <div className="overflow-scroll">
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
            {pengalamanData.map(
              ({
                id_pengalaman,
                nama_klien,
                nama_proyek,
                nilai_proyek,
                nama_kurs,
                kontak_klien,
                tanggal_mulai,
                tanggal_selesai,
              }, index) => (
                <tr key={id_pengalaman} className="even:bg-blue-gray-50/50">
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
                      className="font-normal"
                    >
                      {nilai_proyek}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama_kurs}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {kontak_klien}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_mulai).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_selesai).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <a href="/staff/detail-pengalaman-vendor">
                      <Tooltip content="Detail Pengalaman Vendor" placement="top">
                        <button className="bg-blue-500 rounded-md p-1">
                          <EyeIcon height={17} color="white" />
                        </button>
                      </Tooltip>
                    </a>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-blue-gray-50 py-4 gap-2">
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
        </div>
      </div>
    </div>
  );
}
