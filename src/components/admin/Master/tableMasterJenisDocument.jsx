import { TrashIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";

const TABLE_HEAD = ["No", "Nama Jenis Document", "Aksi"];

export function TableJenisDocument({ jenisDocument, setJenisDocument }) {
  const handleDelete = async (id_jenis_document) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/jenis-document/documents/${id_jenis_document}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setJenisDocument((prevState) =>
        prevState.filter((item) => item.id_jenis_document !== id_jenis_document)
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
            {jenisDocument.map(
              ({ id_jenis_document, nama_document }, index) => (
                <tr key={id_jenis_document} className="even:bg-blue-gray-50/50">
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
                      className="font-normal "
                    >
                      <button
                        onClick={() => handleDelete(id_jenis_document)}
                        className="bg-red-500 p-2 rounded-md shadow-md mx-2"
                      >
                        <TrashIcon height={17} color="white" />
                      </button>
                    </Typography>
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
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div> */}
      </div>
    </div>
  );
}
