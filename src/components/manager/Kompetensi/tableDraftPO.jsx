import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "No",
  "Kode PO",
  "Tanggal Dibuat PO",
  "Tanggal Mulai PO",
  "Tanggal Berakhir PO",
  "Terms of Payment",
  "Terms of Delivery",
  "Aksi",
];

const TABLE_ROWS = [
  {
    No: "1",
    kode_po: "PO101",
    kode_penawaran: "A101",
    pic_vendor: "-",
    company_name: "-",
    no_hp: "-",
    product: "-",
    status_vendor: "-",
    status_penawaran: "-",
    status_proses_vendor: "-",
    date_buat_po: "03/07/2024",
    date_start_po: "03/07/2024",
    date_end_po: "03/07/2025",
    top: "CBD",
    tod: "CPT",
  },
];

export function TableDraftPO() {
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
                {
                  No,
                  kode_po,
                  kode_penawaran,
                  pic_vendor,
                  company_name,
                  no_hp,
                  product,
                  status_vendor,
                  status_penawaran,
                  status_proses_vendor,
                  date_buat_po,
                  date_start_po,
                  date_end_po,
                  top,
                  tod,
                },
                index
              ) => (
                <tr key={company_name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {No}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {kode_po}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date_buat_po}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date_start_po}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date_end_po}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {top}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {tod}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <a href="/manager/detail-po">
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
