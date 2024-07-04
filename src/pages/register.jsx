import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Navigate } from "react-router-dom";

export default function Register() {
  return (
    <div className=" h-screen bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex items-center justify-center">
      <Card
        className="p-8 border-2 border-gray-300 absolute"
        color="white"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Jadilah bagian dari PT Warung Pangan Indonesia
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
          <Button className="bg-wpigreen-100 mt-6" fullWidth>
            Daftar
          </Button>
          <div className="flex mt-2 text-gray-500">
            <p>Sudah memiliki akun?</p>
            <a href="/login" className="hover:text-light-blue-500">
              Login here
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}
