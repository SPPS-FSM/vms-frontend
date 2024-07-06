import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Nama", "Email", "Role", "Aksi"];

const TABLE_ROWS = [
  {
    id: "1",
    name: "Farhan Dwicahyo",
    email: "farhandiwcahyoo@gmail.com",
    role: "Staff",
  },
  {
    id: "2",
    name: "Tri Wahyundo",
    email: "3wahyundo@gmail.com",
    role: "Manager",
  },
];

export function TableUserInternal() {
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
          {TABLE_ROWS.map(({ id, name, email, role }, index) => (
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
                  {email}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {role}
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
