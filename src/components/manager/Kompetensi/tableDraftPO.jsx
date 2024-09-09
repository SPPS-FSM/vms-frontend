import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Nomor PO",
  "Nomor Penawaran",
  "Brand",
  "Tanggal Dibuat PO",
  "Tanggal Mulai PO",
  "Tanggal Berakhir PO",
  "Terms of Payment",
  "Terms of Delivery",
  "Description",
  "Aksi",
];

export function TableDraftPO() {
  const navigate = useNavigate();
  const [poData, setPoData] = useState([]);

  const fetchPoData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/userpo/userPO",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      console.log("API Response:", response.data); // Log the API response
      setPoData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id_po) => {
    const res = await axios.delete(
      "http://localhost:4000/api/userpo/" + id_po,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    );
    const filteredData = poData.filter((item) => item.id_po !== id_po);
    setPoData(filteredData);
  };

  useEffect(() => {
    fetchPoData();
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
            {poData.map(
              (
                {
                  id_po,
                  no_po,
                  no_penawaran,
                  brand,
                  tanggal_dibuat_po,
                  tanggal_mulai_po,
                  tanggal_berakhir_po,
                  Terms_of_Payment,
                  Terms_of_Delivery,
                  description,
                },
                index
              ) => (
                <tr key={no_po} className="even:bg-blue-gray-50/50">
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
                      {no_po}
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
                      {new Date(tanggal_dibuat_po).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_mulai_po).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(tanggal_berakhir_po).toLocaleDateString()}
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
                    <button
                      onClick={() => navigate("/manager/detail-po?id=" + id_po)}
                      className="bg-blue-500 p-2 rounded-md shadow-md mx-2"
                    >
                      <EyeIcon height={17} color="white" />
                    </button>
                    <button
                      onClick={() => handleDelete(id_po)}
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
