import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import FooterAdmin from "../../../components/admin/footer";
import { TableAllUserDRM } from "../../../components/admin/User/tableAllUserDRM";
import SidebarAdmin from "../../../components/admin/sidebar";
import NavbarAdmin from "../../../components/admin/navbar";
import { TableSatuan } from "../../../components/admin/Master/tableMasterSatuan";
import { PlusIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MasterSatuan() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    nama_satuan: "",
  });

  const fetchSatuan = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/satuan/satuan",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSatuan();
  }, []);

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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/satuan/satuan",
        {
          nama_satuan: formData.nama_satuan,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      fetchSatuan();
    } catch (error) {
      console.log(error.message);
    }
    setOpen(false);
  };

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

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="md:flex justify-between items-center">
            <div className="font-semibold mb-4 md:mb-0">Satuan</div>
            <div className="flex gap-1">
              <>
                <Button
                  onClick={handleOpen}
                  className="bg-blue-500 p-2 rounded-md shadow-md mx-2"
                >
                  <PlusIcon height={17} color="white" />
                </Button>
                <Dialog
                  size="sm"
                  open={open}
                  handler={handleOpen}
                  className="p-4"
                >
                  <form onSubmit={handleSubmit}>
                    <DialogHeader className="relative m-0 block">
                      <Typography variant="h4" color="blue-gray">
                        Create Kota
                      </Typography>
                      <Typography className="mt-1 font-normal text-gray-600">
                        Create kota data
                      </Typography>
                      <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                      >
                        <XMarkIcon className="h-4 w-4 stroke-2" />
                      </IconButton>
                    </DialogHeader>
                    <DialogBody className="space-y-4 pb-6">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 text-left font-medium"
                        >
                          Nama Satuan
                        </Typography>
                        <Input
                          color="gray"
                          size="lg"
                          placeholder="Pcs"
                          name="nama_satuan"
                          className="placeholder:opacity-100 focus:!border-t-gray-900"
                          containerProps={{
                            className: "!min-w-full",
                          }}
                          labelProps={{
                            className: "hidden",
                          }}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              nama_satuan: e.target.value,
                            })
                          }
                        />
                      </div>
                    </DialogBody>
                    <DialogFooter>
                      <Button className="ml-auto" type="submit">
                        Add Satuan
                      </Button>
                    </DialogFooter>
                  </form>
                </Dialog>
              </>
            </div>
          </div>
          <div className="text-sm text-gray-500 my-4">
            <TableSatuan
              satuan={data}
              setSatuan={setData}
              fetchSatuan={fetchSatuan}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
