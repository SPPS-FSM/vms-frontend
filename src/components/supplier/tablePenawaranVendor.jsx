import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  Chip,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { formatDateIndo } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const TABLE_HEAD = [
  "No",
  "Kode Penawaran",
  "Brand",
  "Tanggal Dibuat",
  "Tanggal Dimulai",
  "Tanggal Berakhir",
  "Harga",
  "Status Penawaran",
  "Status Proses Penawaran",
  "Aksi",
];

export function TablePenawaranVendor({ data, setData }) {
  const navigate = useNavigate();
  const handleDelete = async (id_penawaran) => {
    const res = await axios.delete(
      "http://localhost:4000/api/userpenawaran/" + id_penawaran,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    );
    const filteredData = data.filter(
      (item) => item.id_penawaran !== id_penawaran
    );
    setData(filteredData);
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
                  id_penawaran,
                  no_penawaran,
                  brand,
                  tanggal_dibuat_penawaran,
                  tanggal_mulai_penawaran,
                  tanggal_berakhir_penawaran,
                  price,
                  nama_status_penawaran,
                  nama_status_proses_penawaran,
                  nama_kurs,
                },
                index
              ) => (
                <tr key={no_penawaran} className="even:bg-blue-gray-50/50">
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
                      {no_penawaran}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {brand}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatDateIndo(tanggal_dibuat_penawaran)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_mulai_penawaran)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {formatDateIndo(tanggal_berakhir_penawaran)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_kurs} {price}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_status_penawaran}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_status_proses_penawaran}
                    </Typography>
                  </td>
                  <td className="p-4">
                    {/* <a href="/supplier/edit-penawaran">
                      <button className="bg-green-500 p-2 rounded-md shadow-md">
                        <PencilSquareIcon height={17} color="white" />
                      </button>
                    </a> */}
                    <button
                      onClick={() =>
                        navigate("/supplier/edit-penawaran?id=" + id_penawaran)
                      }
                      className="bg-blue-500 p-2 rounded-md shadow-md mx-2"
                    >
                      <EyeIcon height={17} color="white" />
                    </button>
                    <button
                      onClick={() => handleDelete(id_penawaran)}
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
