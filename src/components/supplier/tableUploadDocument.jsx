import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { formatDateIndo } from "../../utils/date";
import { splitText } from "../../utils/text";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Nama Document",
  "Jenis Document",
  "Tanggal Beralaku",
  "Tanggal Berakhir",
  "Status Upload",
  "Aksi",
];

export function TableUploadDocument({ data, setData }) {
  const navigate = useNavigate();
  const handleDelete = async (id_document) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/userdocuments/${id_document}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData((prevState) =>
        prevState.filter((item) => item.id_document !== id_document)
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
                  id_document,
                  nama_document,
                  jenis_document,
                  tanggal_berlaku,
                  tanggal_berakhir,
                  nama_status,
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
                      className="font-normal text-wrap"
                      dangerouslySetInnerHTML={{
                        __html: splitText(nama_document, 30),
                      }}
                    ></Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-wrap"
                      dangerouslySetInnerHTML={{
                        __html: splitText(jenis_document, 30),
                      }}
                    ></Typography>
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
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_status}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        navigate(`/supplier/detail-dokumen?id=${id_document}`)
                      }
                      className="bg-blue-500 p-2 rounded-md shadow-md mx-2"
                    >
                      <EyeIcon height={17} color="white" />
                    </button>
                    <button
                      onClick={() => handleDelete(id_document)}
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
