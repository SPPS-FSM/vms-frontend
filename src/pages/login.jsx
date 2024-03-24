import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export default function Login() {
  return (
    <div className="relative h-screen">
      <img
        src="bg-fsm.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover filter blur-md"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <Card
          className="p-8 border-2 border-gray-300"
          color="white"
          shadow={false}
        >
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Selamat datang di SPPS-FSM
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email/NIM
              </Typography>
              <Input
                size="lg"
                placeholder="nama@students.undip.ac.id"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button className="bg-fsmblue-500 mt-6" fullWidth>
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
