import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import axios from "axios";

const TABLE_HEAD = ["No", "Brand", "Price", "Kurs", "Stock", "Satuan", "Aksi"];

const TABLE_ROWS = [
  {
    id: "1",
    brand: "Mangosteen",
    price: "1000",
    kurs: "Rp",
    stock: "100000",
    satuan: "Kg",
  },
];

export function TableProductVendor({ data, setData }) {
  const handleDelete = async (id_product) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/userproduct/${id_product}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData((prevState) =>
        prevState.filter((item) => item.id_product !== id_product)
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
                { id_product, brand, price, nama_kurs, stock, nama_satuan },
                index
              ) => (
                <tr key={brand} className="even:bg-blue-gray-50/50">
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
                      {brand}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_kurs}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {stock}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {nama_satuan}
                    </Typography>
                  </td>
                  <td className="">
                    {/* <a href="/supplier/edit-product">
                      <button className="bg-green-500 p-2 rounded-md shadow-md">
                        <PencilSquareIcon height={17} color="white" />
                      </button>
                    </a> */}
                    <a href={"/supplier/detail-product?id=" + id_product}>
                      <button className="bg-blue-500 p-2 rounded-md shadow-md mx-2">
                        <EyeIcon height={17} color="white" />
                      </button>
                    </a>
                    <button
                      onClick={() => handleDelete(id_product)}
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
