import {
  CheckBadgeIcon,
  CheckIcon,
  EyeIcon,
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
import { BiCheck, BiPencil } from "react-icons/bi";

const TABLE_HEAD = [
  "No",
  "Kode Penawaran",
  "Nama Vendor",
  "PIC Vendor",
  "No Telephone",
  "Product",
  "Status Vendor",
  "Status Penawaran",
  "Status Proses Penawaran",
  "Aksi",
];

const TABLE_ROWS = [
  {
    id: "1",
    kode_penawaran: "A101",
    pic_vendor: "Farhan",
    company_name: "PT Mangosteen",
    no_hp: "085710116209",
    product: "Mangosteen",
    status_vendor: "Terverifikasi",
    status_penawaran: "Berlaku",
    status_proses_vendor: "",
  },
];

export default function TablePenawaranVendor() {
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
                  id,
                  kode_penawaran,
                  pic_vendor,
                  company_name,
                  no_hp,
                  product,
                  status_vendor,
                  status_penawaran,
                  status_proses_vendor,
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
                      {id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {kode_penawaran}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {company_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {pic_vendor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {no_hp}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {product}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {status_vendor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {status_penawaran}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {status_proses_vendor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <a href="/staff/detail-penawaran-vendor">
                      <Tooltip content="Detail Penawaran Vendor">
                        <button className="bg-blue-500 p-2 rounded-md shadow-md mx-2">
                          <EyeIcon height={17} color="white" />
                        </button>
                      </Tooltip>
                    </a>
                    {/* <a href="/manaeger/pilih-penawaran-manager">
                      <Tooltip content="Edit Status Penawaran Vendor">
                        <button className="bg-green-500 p-2 rounded-md shadow-md mx-2">
                          <PencilSquareIcon height={17} color="white" />
                        </button>
                      </Tooltip>
                    </a> */}
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
