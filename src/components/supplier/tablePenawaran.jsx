import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  Chip,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["No", "No Penawaran", "Tanggal Dibuat Penawaran", "Tanggal Mulai Penawaran", "Tanggal Berakhir Penawaran", "Terms of Payment", "Terms of Delivery", "Description" ];

const TABLE_ROWS = [
  {
    id: "1",
    name: "Surat Permohonan DRM",
    status_penawaran: "Berlaku",
  },
];

export function TablePenawaran() {
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
              (
                { id, name, status_upload, status_doc, status_penawaran },
                index
              ) => (
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
                  <td className="text-center">
                    <div className="w-max">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={status_penawaran}
                        color={
                          status_penawaran === "Berlaku"
                            ? "green"
                            : status_penawaran === "Tidak Berlaku"
                            ? "red"
                            : "none"
                        }
                      />
                    </div>
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
