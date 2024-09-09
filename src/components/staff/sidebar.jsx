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
import { ChevronDownIcon, FolderIcon } from "@heroicons/react/24/outline";
import { SlChart, SlPeople, SlStar } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function SidebarStaff() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const isAccordionOpen = (index) => {
    return openAccordion === index;
  };

  return (
    <div className="w-full h-screen max-w-[20rem] p-4 shadow-md shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4 justify-center">
        <img src="../logo-wpi.png" alt="logo" className="h-[50px]" />
      </div>
      <List className="text-fsmblue-500 font-normal">
        <Accordion open={isAccordionOpen(1)}>
          <ListItem onClick={() => navigate("/staff/dashboard")}>
            <ListItemPrefix>
              <SlChart className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Accordion>
        <Accordion
          open={isAccordionOpen(2)}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                isAccordionOpen(2) ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleAccordionToggle(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SlPeople className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                DRM
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            {/* <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/user-drm")}
              >
                <ListItemPrefix></ListItemPrefix>
                User DRM
              </ListItem>
            </List> */}
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/list-drm")}
              >
                <ListItemPrefix></ListItemPrefix>
                Verifikasi DRM
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={isAccordionOpen(3)}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                isAccordionOpen(3) ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleAccordionToggle(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SlStar className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                Kompetensi
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/sertifikasi-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                Sertifikasi Vendor
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/pengalaman-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                Pengalaman Vendor
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/product-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                Product Vendor
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={isAccordionOpen(4)}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                isAccordionOpen(4) ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleAccordionToggle(4)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SlPeople className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                Penawaran
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/penawaran-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                Penawaran Vendor
              </ListItem>
            </List>
            {/* <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/ajukan-penawaran-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                Ajukan Penawaran
              </ListItem>
            </List> */}
          </AccordionBody>
        </Accordion>

        <Accordion
          open={isAccordionOpen(5)}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                isAccordionOpen(5) ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleAccordionToggle(5)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FolderIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                Purchase Order
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/list-po")}
              >
                <ListItemPrefix></ListItemPrefix>
                List Purchase Order
              </ListItem>
            </List>
            {/* <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/staff/ajukan-penawaran-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                Ajukan Penawaran
              </ListItem>
            </List> */}
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
