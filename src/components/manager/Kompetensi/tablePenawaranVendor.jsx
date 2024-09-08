import { EyeIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Kode Penawaran",
  "Brand",
  "Price",
  "Currency",
  "Stock",
  "Unit",
  "Created Date",
  "Start Date",
  "End Date",
  "Payment Terms",
  "Delivery Terms",
  "Description",
  "Status Penawaran",
  "Proses Penawaran",
  "Aksi",
];

export function TablePenawaranVendor() {
  const [penawaranManager, setpenawaranManager] = useState([]);
  const navigate = useNavigate();
  const fetchpenawaranManager = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:4000/api/userpenawaran/statusproses/4",
        "http://localhost:4000/api/userpenawaran/manager",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setpenawaranManager(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchpenawaranManager();
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
            {penawaranManager.map(
              (
                {
                  id_penawaran,
                  no_penawaran,
                  brand,
                  price,
                  nama_kurs,
                  stock,
                  nama_satuan,
                  tanggal_dibuat_penawaran,
                  tanggal_mulai_penawaran,
                  tanggal_berakhir_penawaran,
                  Terms_of_Payment,
                  Terms_of_Delivery,
                  description,
                  nama_status_penawaran,
                  nama_status_proses_penawaran,
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
                      className="font-normal"
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
                      {price}
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
                      {stock}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama_satuan}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_dibuat_penawaran).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_mulai_penawaran).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(
                        tanggal_berakhir_penawaran
                      ).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Terms_of_Payment}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Terms_of_Delivery}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {description}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama_status_penawaran}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama_status_proses_penawaran}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Tooltip content="Detail Penawaran Vendor">
                      <button
                        onClick={() =>
                          navigate(
                            "/manager/detail-penawaran-manager?id=" +
                              id_penawaran
                          )
                        }
                        className="bg-blue-500 p-2 rounded-md shadow-md mx-2"
                      >
                        <EyeIcon height={17} color="white" />
                      </button>
                    </Tooltip>
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
