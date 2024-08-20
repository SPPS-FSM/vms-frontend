import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const TABLE_HEAD = ["No", "Nama", "Email", "Role", "Aksi"];

export function TableUserInternal({ userInternal, setUserInternal }) {
  const handleDelete = async (id_user) => {
    try {
      await axios.delete(`http://localhost:4000/api/user/${id_user}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      setUserInternal((prevState) =>
        prevState.filter((item) => item.id_user !== id_user)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

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
          {userInternal.map(
            ({ id_user, nama_pic, email, nama_role }, index) => (
              <tr key={id_user} className="even:bg-blue-gray-50/50">
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
                  <a href={"/admin/edit-user-internal?id=" + id_user}>
                    <button className="bg-green-500 p-2 rounded-md shadow-md mx-2">
                      <PencilSquareIcon height={20} color="white" />
                    </button>
                  </a>
                  <button
                    onClick={() => handleDelete(id_user)}
                    className="bg-red-500 p-2 rounded-md shadow-md"
                  >
                    <TrashIcon height={20} color="white" />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
