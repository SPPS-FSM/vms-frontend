import {
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Auth";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const role = await login(formData.identifier, formData.password);
 
      switch(role) {
        case 1:
          navigate('/supplier/dashboard');
          break;
        case 2:
          navigate('/staff/dashboard');
          break;
        case 3:
          navigate('/manager/dashboard');
          break;
        case 4:
          navigate('/admin/dashboard');
          break;
        default:
          navigate('/login');
      }
      console.log(role);
    } catch (error) {
      console.error("Error login:", error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex items-center justify-center">
      <Card
        className="p-8 border-2 border-gray-300 absolute"
        color="white"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Selamat datang di Vendor Management System PT WPI
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email/NIM
            </Typography>
            <Input
              size="lg"
              placeholder="email"
              name="identifier"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              name="password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
          </div>
          <Button className="bg-wpigreen-100 mt-6" fullWidth type="submit">
            Login
          </Button>
          <a href="/register">
            <Button className="bg-wpiblue-100 mt-2" fullWidth>
              Daftar
            </Button>
          </a>
        </form>
      </Card>
    </div>
  );
}