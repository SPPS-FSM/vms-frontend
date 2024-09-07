import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { formatDateIndo } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const TABLE_HEAD = [
  "No",
  "Nama Sertifikasi",
  "Jenis Sertifikasi",
  "Tanggal Beralaku",
  "Tanggal Berakhir",
  "File",
  "Aksi",
];

export function TableSertifikasiVendor({ data, setData }) {
  const navigate = useNavigate();
  const handleDelete = async (id_sertifikasi) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/usersertifikasi/${id_sertifikasi}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData((prevState) =>
        prevState.filter((item) => item.id_sertifikasi !== id_sertifikasi)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
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
            {data.map(
              (
                {
                  id_sertifikasi,
                  nama_sertifikasi,
                  jenis_sertifikasi,
                  tanggal_berlaku,
                  tanggal_berakhir,
                  file,
                },
                index
              ) => (
                <tr key={nama_sertifikasi} className="even:bg-blue-gray-50/50">
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
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_berlaku)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatDateIndo(tanggal_berakhir)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal hover:underline"
                    >
                      <a
                        href={
                          "http://localhost:4000/api/file/" + file.split("/")[1]
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lihat File
                      </a>
                    </Typography>
                  </td>
                  <td className="p-4">
                    {/* <a href="/supplier/edit-sertifikasi">
                      <button className="bg-green-500 p-2 rounded-md shadow-md">
                        <PencilSquareIcon height={17} color="white" />
                      </button>
                    </a> */}
                    <button
                      onClick={() =>
                        navigate(
                          "/supplier/detail-sertifikasi?id=" + id_sertifikasi
                        )
                      }
                      className="bg-blue-500 p-2 rounded-md shadow-md mx-2"
                    >
                      <EyeIcon height={17} color="white" />
                    </button>
                    <button
                      onClick={() => handleDelete(id_sertifikasi)}
                      className="bg-red-500 p-2 rounded-md shadow-md"
                    >
                      <TrashIcon height={17} color="white" />
                    </button>
                  </td>
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
              {" "}
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>*/}
      </div>
    </div>
  );
}
