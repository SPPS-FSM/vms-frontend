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
import { SlChart, SlEnvolope, SlHome, SlPeople } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { BiData } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";

export default function SidebarAdmin() {
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
          <ListItem onClick={() => navigate("/admin/dashboard")}>
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
                <SlPeople className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                User
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/user-internal")}
              >
                <ListItemPrefix></ListItemPrefix>
                User Internal
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/all-user-drm")}
              >
                <ListItemPrefix></ListItemPrefix>
                All User DRM
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        {/* <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <BsClockHistory className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                History
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/history-drm")}
              >
                <ListItemPrefix></ListItemPrefix>
                Vendor
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/history-penawaran")}
              >
                <ListItemPrefix></ListItemPrefix>
                Penawaran
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion> */}
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <BiData className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                Master Data
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/master-jenis-document")}
              >
                <ListItemPrefix></ListItemPrefix>
                Jenis Document
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/master-satuan")}
              >
                <ListItemPrefix></ListItemPrefix>
                Satuan
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/master-provinsi")}
              >
                <ListItemPrefix></ListItemPrefix>
                Provinsi
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/admin/master-kota")}
              >
                <ListItemPrefix></ListItemPrefix>
                Kota
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
