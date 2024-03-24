import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  IconButton,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import SidebarAdmin from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbar";
import FooterAdmin from "../../components/admin/footer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { EyeIcon, PencilIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function AllUser() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  console.log(result);

  const TABLE_HEAD = ["Nama", "NIM/NIP", "Jurusan", "Role", "Status", "Action"];

  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "Organization",
      online: true,
      date: "23/04/18",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: false,
      date: "23/04/18",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      org: "Projects",
      online: false,
      date: "19/09/17",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: true,
      date: "24/12/08",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      org: "Executive",
      online: false,
      date: "04/10/21",
    },
  ];
  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarAdmin />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarAdmin openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">All User</div>
        <Card className="h-full w-full">
          <div
            floated={false}
            shadow={false}
            className="rounded-none px-5 pt-2"
          >
            {/* Filter */}
            <div className=" xl:flex flex-row lg:justify-between gap-6">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-1 ">
                <div className="col-span-5">
                  <Select label="Filter by Role">
                    <Option>Mahasiswa</Option>
                    <Option>Kepala Departemen</Option>
                    <Option>Wakil Dekanat</Option>
                    <Option>Ketua Dekanat</Option>
                  </Select>
                </div>
                <div className="col-span-5">
                  <Select label="Filter by Major">
                    <Option>Informatika</Option>
                    <Option>Statistika</Option>
                    <Option>Matematika</Option>
                    <Option>Biologi</Option>
                    <Option>Bioteknologi</Option>
                    <Option>Fisika</Option>
                    <Option>Kimia</Option>
                  </Select>
                </div>
                <div className="col-span-2 mb-1 xl:mb-0 flex items-center justify-start xl:justify-center">
                  <Button
                    size="md"
                    className="bg-light-green-500 flex items-center justify-center"
                  >
                    <p>Filter</p>
                  </Button>
                </div>
              </div>
              {/* Search Bar */}
              <div className="flex">
                <input
                  type="text"
                  placeholder=""
                  // value={searchQuery}
                  // onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-4 pr-12 rounded-l-md border border-fsmblue-500"
                />
                <button
                  type="button"
                  // onClick={() => fetchData({ search: searchQuery })}
                  className="bg-fsmblue-500 text-white font-bold py-2 lg-4 h-10 rounded-r-md px-4 "
                >
                  <FaMagnifyingGlass />
                </button>
              </div>
            </div>
          </div>
          <CardBody className="overflow-scroll px-0">
            {/* Add Button */}
            <div className="flex justify-start md:justify-end mr-0 md:mr-2 ml-4 md:ml-0 ">
              <Button
                className="flex items-center gap-3 bg-light-green-500"
                size="sm"
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add User
              </Button>
            </div>
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
                  ({ img, name, email, job, org, online, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {job}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {org}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={online ? "online" : "offline"}
                              color={online ? "green" : "blue-gray"}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={online ? "online" : "offline"}
                              color={online ? "green" : "blue-gray"}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Detail User">
                            <IconButton variant="text">
                              <EyeIcon className="h-4 w-4 text-fsmblue-500" />
                            </IconButton>
                          </Tooltip>
                          {/* <Tooltip content="Detail User">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4 text-green-500" />
                            </IconButton>
                          </Tooltip> */}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Table All User */}

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
