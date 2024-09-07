import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { formatDateIndo } from "../../../utils/date";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Nama Document",
  "Jenis Document",
  "Tanggal Beralaku",
  "Tanggal Berakhir",
  "Aksi",
];

export function TableDetailDocument() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [dokumen, setDokumen] = useState([]);

  async function fetchUserDocument() {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/userdocuments/user/" + userId,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      setDokumen(response.data);
    } catch (error) {
      console.error("Get jenis dokumen gagal", error);
      throw new Error("Get jenis dokumen gagal");
    }
  }

  useEffect(() => {
    fetchUserDocument();
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
            {dokumen.map(
              (
                {
                  id,
                  nama_document,
                  jenis_document,
                  tanggal_berlaku,
                  tanggal_berakhir,
                  status_upload,
                  file,
                },
                index
              ) => (
                <tr key={nama_document} className="even:bg-blue-gray-50/50">
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
                      {nama_document}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {jenis_document}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_berlaku)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_berakhir)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <a
                      target="_blank"
                      href={
                        "http://localhost:4000/api/file/" + file.split("/")[1]
                      }
                      rel="noreferrer"
                    >
                      <button className="bg-blue-500 p-2 rounded-md shadow-md mx-2">
                        <EyeIcon height={17} color="white" />
                      </button>
                    </a>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
