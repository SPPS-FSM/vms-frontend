import { TrashIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";

const TABLE_HEAD = ["No", "Nama Satuan", "Aksi"];

export function TableSatuan({ satuan, setSatuan, fetchSatuan }) {
  const handleDeleteSatuan = async (id_satuan) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/satuan/satuan/${id_satuan}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setSatuan((prevState) =>
        prevState.filter((item) => item.id_satuan !== id_satuan)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="overflow-scroll">
        <table className="w-full min-w-max table-auto text-center">
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
            {satuan.map(({ id_satuan, nama_satuan }, index) => (
              <tr key={id_satuan} className="even:bg-blue-gray-50/50">
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
                    {nama_satuan}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal "
                  >
                    <button
                      className="bg-red-500 p-2 rounded-md shadow-md mx-2"
                      onClick={() => handleDeleteSatuan(id_satuan)}
                    >
                      <TrashIcon height={17} color="white" />
                    </button>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
