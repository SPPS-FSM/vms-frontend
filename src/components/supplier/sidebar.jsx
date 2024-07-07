import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SlEnvolope, SlEnvolopeLetter, SlHome, SlPeople } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function SidebarSupplier() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className=" w-full h-screen max-w-[20rem] p-4 shadow-md shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4 justify-center">
        <img src="../logo-wpi.png" alt="logo" className="h-[50px]" />
      </div>
      <List className="text-fsmblue-500 font-normal">
        {/* <a href="/Dashboard"> */}
        <Accordion>
          <ListItem onClick={() => navigate("/supplier/dashboard")}>
            <ListItemPrefix>
              <SlHome className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Accordion>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SlEnvolope className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                Persyaratan
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/supplier/upload_dokumen")}
              >
                <ListItemPrefix></ListItemPrefix>
                Upload Dokumen
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/supplier/sertifikasi_perusahaan")}
              >
                <ListItemPrefix></ListItemPrefix>
                Sertifikasi
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/supplier/pengalaman_perusahaan")}
              >
                <ListItemPrefix></ListItemPrefix>
                Pengalaman
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/supplier/product_perusahaan")}
              >
                <ListItemPrefix></ListItemPrefix>
                Product
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion>
          <ListItem onClick={() => navigate("/supplier/penawaran")}>
            <ListItemPrefix>
              <SlEnvolopeLetter className="h-5 w-5" />
            </ListItemPrefix>
            Penawaran
          </ListItem>
        </Accordion>
      </List>
    </div>
  );
}
