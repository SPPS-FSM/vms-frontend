import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "No",
  "Nama Document",
  "Jenis Document",
  "Tanggal Beralaku",
  "Tanggal Berakhir",
  "Status Upload",
  "Nama File Upload",
  "Aksi",
];

const TABLE_ROWS = [
  {
    id: "1",
    nama_document: "Company Profile PT BPYD JAYA",
    jenis_document: "Company Profile",
    tanggal_berlaku: "2024-06-12",
    tanggal_berakhir: "2026-06-12",
    status_upload: "Sudah",
    nama_file: "file.pdf",
  },
];

export function TableUploadDocument() {
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
              ({ id, nama_document,jenis_document, tanggal_berlaku, tanggal_berakhir, status_upload, nama_file }, index) => (
                <tr key={nama_document} className="even:bg-blue-gray-50/50">
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
                      {tanggal_berlaku}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {tanggal_berakhir}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
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
                      {nama_file}
                    </Typography>
                  </td>
                  <td className="p-4">
                    {/* <a href="/supplier/edit-dokumen">
                      <button className="bg-green-500 p-2 rounded-md shadow-md">
                        <PencilSquareIcon height={17} color="white" />
                      </button>
                    </a> */}
                    <a href="/supplier/detail-dokumen">
                      <button className="bg-blue-500 p-2 rounded-md shadow-md mx-2">
                        <EyeIcon height={17} color="white" />
                      </button>
                    </a>
                    <a href="#">
                      <button className="bg-red-500 p-2 rounded-md shadow-md">
                        <TrashIcon height={17} color="white" />
                      </button>
                    </a>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-blue-gray-50 py-4 gap-2  ">
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
