import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Nama Perusahaan ", "Jenis Perusahaan", "Aksi"];

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

export function TableAllUserDRM() {
  return (
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
          {TABLE_ROWS.map(({ id, name, status_upload, status_doc }, index) => (
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
              <td className="p-4 flex gap-2">
                <CheckIcon height={20} color="green"/>
                <TrashIcon height={20} color="red"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
