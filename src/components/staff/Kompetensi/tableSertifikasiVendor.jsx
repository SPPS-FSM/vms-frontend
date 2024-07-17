import React, { useState, useEffect } from "react";
import {
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import LihatSertifikasi from "./LihatSertifikasi";

const TABLE_HEAD = [
  "No",
  "Nama Sertifikasi",
  "Jenis Sertifikasi",
  "Tanggal Berlaku",
  "Tanggal Berakhir",
  "Aksi",
];

export default function TableSertifikasiVendor() {
  const [sertifikasiData, setSertifikasiData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchSertifikasiData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/usersertifikasi", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      console.log("API Response:", response.data);
      setSertifikasiData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSertifikasiData();
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
            {sertifikasiData.map(
              ({
                id_sertifikasi,
                nama_sertifikasi,
                jenis_sertifikasi,
                tanggal_berlaku,
                tanggal_berakhir,
              }, index) => (
                <tr key={id_sertifikasi} className="even:bg-blue-gray-50/50">
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
                      {nama_sertifikasi}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {jenis_sertifikasi}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_berlaku).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_berakhir).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-blue-500 rounded-md p-1"
                      onClick={() => setShowModal(true)}
                    >
                      <Tooltip content="Lihat Sertifikat" placement="top">
                        <EyeIcon height={17} color="white" />
                      </Tooltip>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 h-5/6">
              <div className="flex justify-end">
                <button
                  className="text-white bg-red-300 hover:bg-red-400 rounded-sm p-2"
                  onClick={() => setShowModal(false)}
                >
                  <XMarkIcon height={20} />
                </button>
              </div>
              <div className="h-full py-8">
                <LihatSertifikasi />
              </div>
            </div>
          </div>
        )}

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
