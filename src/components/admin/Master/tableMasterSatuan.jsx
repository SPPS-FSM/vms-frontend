import {
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const TABLE_HEAD = ["No", "Nama Satuan", "Aksi"];

export function TableSatuan() {
  const [Satuan, setSatuan] = useState([])
  const fetchSatuan = async()=>{
    try {
      const response = await axios.get("http://localhost:4000/api/satuan/satuan", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        }
      })
      setSatuan(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(()=>{
    fetchSatuan()
  },[])

  console.log(Cookies.get("accessToken"))
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
            {Satuan.map(({ id_satuan, nama_satuan }, index) => (
              <tr key={id_satuan} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id_satuan}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nama_satuan}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal "
                  >
                    <a href="#">
                        <button className="bg-red-500 p-2 rounded-md shadow-md mx-2">
                          <TrashIcon height={17} color="white" />
                        </button>
                    </a>
                  </Typography>
                </td>
              </tr>
            ))}
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
