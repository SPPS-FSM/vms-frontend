import { TrashIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";

const TABLE_HEAD = ["No", "Nama Provinsi", "Aksi"];

export function TableProvinsi({ provinsi, setProvinsi }) {
  const fetchProvinsi = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/provinsi/provinsi",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setProvinsi(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteProvinsi = async (id_provinsi) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/provinsi/provinsi/${id_provinsi}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      fetchProvinsi();
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
            {provinsi.map(({ id_provinsi, nama_provinsi }, index) => (
              <tr key={id_provinsi} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id_provinsi}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nama_provinsi}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal "
                  >
                    <button
                      onClick={() => handleDeleteProvinsi(id_provinsi)}
                      className="bg-red-500 p-2 rounded-md shadow-md mx-2"
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
