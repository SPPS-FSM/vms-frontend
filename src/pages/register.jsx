import {
  Button,
  Card,
  Checkbox,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../services/Auth";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nip: "",
    email: "",
    username: "",
    nama_perusahaan: "",
    nama_pic: "",
    no_telephone: "",
    password: "",
    id_role: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);

      if (response) {
        navigate("/supplier/dashboard");
      }
    } catch (error) {
      console.error("Error register:", error);
    }
  };

  return (
    <div className=" h-screen bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex items-center justify-center">
      <Card
        className="p-8 border-2 border-gray-300 absolute overflow-y-scroll max-h-screen"
        color="white"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Jadilah bagian dari PT Warung Pangan Indonesia
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              NIP
            </Typography>
            <Input
              size="lg"
              placeholder="nama@students.undip.ac.id"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="nip"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="nama@students.undip.ac.id"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="email"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="username"
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nama Perusahaan
            </Typography>
            <Input
              size="lg"
              placeholder="PT. Warung Pangan Indonesia"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nama_perusahaan"
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nama PIC
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Farhan Dwicahyo"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nama_pic"
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              No. Telephone
            </Typography>
            <Input
              type="text"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="no_telephone"
              placeholder="081234567890"
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              placeholder="**********"
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="bg-wpigreen-100 mt-6" fullWidth>
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
