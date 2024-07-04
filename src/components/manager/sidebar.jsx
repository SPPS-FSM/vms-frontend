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
import {
  SlChart,
  SlEnvolope,
  SlEnvolopeLetter,
  SlPeople,
  SlStar,
} from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function SidebarManager() {
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
          <ListItem onClick={() => navigate("/manager/dashboard")}>
            <ListItemPrefix>
              <SlChart className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Accordion>
        <Accordion
          open={isAccordionOpen(1)}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                isAccordionOpen(1) ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleAccordionToggle(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <SlPeople className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-fsmblue-500">
                Vendor
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/manager/list-vendor")}
              >
                <ListItemPrefix></ListItemPrefix>
                List Vendor
              </ListItem>
            </List>
          </AccordionBody>
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
                <SlEnvolopeLetter className="h-5 w-5" />
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
                onClick={() => navigate("/manager/list-penawaran")}
              >
                <ListItemPrefix></ListItemPrefix>
                Penawaran Vendor
              </ListItem>
            </List>
            <List className="p-0">
              <ListItem
                className="text-fsmblue-500"
                onClick={() => navigate("/manager/buat-po")}
              >
                <ListItemPrefix></ListItemPrefix>
                Buat PO
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
        ></Accordion>
      </List>
    </div>
  );
}
