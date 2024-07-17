import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const TABLE_HEAD = ["No", "Nama", "Email", "Role", "Aksi"];

export function TableUserInternal() {
  const [UserInternal, setUserInternal] = useState([])
  const fetchUserInternal = async()=>{
    try {
      const response = await axios.get("http://localhost:4000/api/user/userInternal", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        }
      })
      setUserInternal(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(()=>{
    fetchUserInternal()
  },[])
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
          {UserInternal.map(({ id_user, nama_pic, email, nama_role }, index) => (
            <tr key={id_user} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {id_user}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {nama_pic}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {email}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {nama_role}
                </Typography>
              </td>
              <td className="">
                <a href="/admin/edit-user-internal">
                  <button className="bg-green-500 p-2 rounded-md shadow-md mx-2">
                    <PencilSquareIcon height={20} color="white" />
                  </button>
                </a>
                <button className="bg-red-500 p-2 rounded-md shadow-md">
                  <TrashIcon height={20} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
