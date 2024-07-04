import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Nama", "Email", "Role", "Aksi"];

const TABLE_ROWS = [
  {
    id: "1",
    name: "Farhan Dwicahyo",
    email: "farhandiwcahyoo@gmail.com",
    role: "Manager",
  },
  {
    id: "2",
    name: "Farhan Dwicahyo",
    email: "farhandiwcahyoo@gmail.com",
    role: "Manager",
  },
  {
    id: "3",
    name: "Farhan Dwicahyo",
    email: "farhandiwcahyoo@gmail.com",
    role: "Manager",
  },
  {
    id: "4",
    name: "Farhan Dwicahyo",
    email: "farhandiwcahyoo@gmail.com",
    role: "Staff",
  },
  {
    id: "5",
    name: "Farhan Dwicahyo",
    email: "farhandiwcahyoo@gmail.com",
    role: "Staff",
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
              <td className="p-4 flex gap-2">
                <a href="/admin/edit-user-internal">
                  <PencilSquareIcon height={20} color="orange" />
                </a>
                <TrashIcon height={20} color="red" className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
