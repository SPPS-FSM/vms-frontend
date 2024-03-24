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
import { SlChart, SlEnvolope, SlPeople } from "react-icons/sl";

export default function SidebarKadep() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className=" w-full h-screen max-w-[20rem] p-4 shadow-md shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4 justify-center">
        <img src="logo-fsm.png" alt="logo" className="h-[50px]" />
      </div>
      <List className="text-fsmblue-500 font-normal">
        <a href="/Dashboard">
          <Accordion>
            <ListItem>
              <ListItemPrefix>
                <SlChart className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Accordion>
        </a>
        {/* <a href="/AllUser">
          <Accordion>
            <ListItem>
              <ListItemPrefix>
                <SlPeople className="h-5 w-5" />
              </ListItemPrefix>
              User
            </ListItem>
          </Accordion>
        </a> */}
        <hr className="my-2 border-blue-gray-50" />
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
                Surat
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <a href="/AllSurat">
                <ListItem className="text-fsmblue-500">
                  <ListItemPrefix></ListItemPrefix>
                  Lihat Surat
                </ListItem>
              </a>
              {/* <a href="#">
                <ListItem className="text-fsmblue-500">
                  <ListItemPrefix></ListItemPrefix>
                  Buat Template Surat
                </ListItem>
              </a> */}
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
