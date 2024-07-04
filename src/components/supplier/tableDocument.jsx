import {
  Button,
  Card,
  Chip,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Nama Document ", "Status Document"];

const TABLE_ROWS = [
  {
    id: "1",
    nama_document: "Surat Permohonan DRM",
    status_upload: "Sudah Upload",
  },
];

export function TableDocument() {
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
          {TABLE_ROWS.map(({ id, nama_document, status_upload }, index) => (
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
              <td className="text-center">
                <div className="w-max">
                  <Chip
                    size="sm"
                    variant="ghost"
                    value={status_upload}
                    color={
                      status_upload === "Sudah Upload"
                        ? "green"
                        : status_upload === "Belum Upload"
                        ? "red"
                        : "none"
                    }
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
