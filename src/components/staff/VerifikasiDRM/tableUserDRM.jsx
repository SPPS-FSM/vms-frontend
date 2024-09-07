import {
  EyeIcon,
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "No",
  "Nama File",
  "Jenis Dokumen",
  "Status",
  "Keterangan",
  "Aksi",
];

const TABLE_ROWS = [
  {
    id: "1",
    name: "Surat Permohonan DRM",
    status_upload: "Sudah",
    status_doc: "Sudah Selesai",
  },
  {
    id: "2",
    name: "Surat Permohonan DRM",
    status_upload: "Sudah",
    status_doc: "Sudah Selesai",
  },
  {
    id: "3",
    name: "Surat Permohonan DRM",
    status_upload: "Sudah",
    status_doc: "Sudah Selesai",
  },
  {
    id: "4",
    name: "Surat Permohonan DRM",
    status_upload: "Belum",
    status_doc: "Sudah Selesai",
  },
  {
    id: "5",
    name: "Surat Permohonan DRM",
    status_upload: "Sudah",
    status_doc: "Sudah Selesai",
  },
];

export function TableUserDRM() {
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
            {TABLE_ROWS.map(
              ({ id, name, status_upload, status_doc }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {status_upload}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {status_doc}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {status_doc}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <a href="">
                      <button className="bg-green-500 p-2 rounded-md shadow-md">
                        <PencilSquareIcon height={17} color="white" />
                      </button>
                    </a>
                    <a href="#">
                      <Tooltip content="Lihat Sertifikat" placement="top">
                        <button className="bg-blue-500 rounded-md p-1">
                          <EyeIcon height={17} color="white" />
                        </button>
                      </Tooltip>
                    </a>
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
