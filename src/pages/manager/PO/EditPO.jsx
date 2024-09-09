import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FooterAdmin from "../../../components/admin/footer";
import axios from "axios";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import NavbarManager from "../../../components/manager/navbar";
import SidebarManager from "../../../components/manager/sidebar";
import Cookies from "js-cookie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDateInput } from "../../../utils/date";

export default function EditPO() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [penawaran, setPenawaran] = useState([]);
  const [formData, setFormData] = useState({
    no_po: "",
    no_penawaran: "",
    id_product: "",
    tanggal_dibuat_po: "",
    tanggal_mulai_po: "",
    tanggal_berakhir_po: "",
    Terms_of_Payment: "",
    Terms_of_Delivery: "",
    description: "",
  });

  const handleChangePenawaran = (e) => {
    const no_penawaran = e.target.value;
    const penawaranData = penawaran.find(
      (item) => item.no_penawaran === no_penawaran
    );
    setFormData({
      ...formData,
      no_penawaran: penawaranData.no_penawaran,
      id_product: penawaranData.id_product,
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:4000/api/userpo/" + id,
        {
          ...formData,
          tanggal_dibuat_po: new Date(formData.tanggal_dibuat_po),
          tanggal_mulai_po: new Date(formData.tanggal_mulai_po),
          tanggal_berakhir_po: new Date(formData.tanggal_berakhir_po),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      console.log(response);
      navigate("/manager/buat-po");
    } catch (error) {
      console.error("Post PO gagal", error);
      throw new Error("Post PO gagal");
    }
  };

  useEffect(() => {
    const fetchPenawaran = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/userpenawaran/statusproses/5",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      setPenawaran(res.data);
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/userpo/" + id,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );
        const resData = response.data;
        setFormData({
          no_po: resData.no_po,
          no_penawaran: resData.no_penawaran,
          id_product: resData.id_product,
          tanggal_berakhir_po: resData.tanggal_berakhir_po,
          tanggal_mulai_po: resData.tanggal_mulai_po,
          tanggal_dibuat_po: resData.tanggal_dibuat_po,
          Terms_of_Delivery: resData.Terms_of_Delivery,
          Terms_of_Payment: resData.Terms_of_Payment,
          description: resData.description,
        });
      } catch (error) {
        console.error("Get jenis dokumen gagal", error);
        throw new Error("Get jenis dokumen gagal");
      }
    };

    fetchPenawaran();
    fetchData();
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

  console.log("formData", formData);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarManager />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <NavbarManager
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="bg-white px-2 py-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Edit PO</div>
            <a href="/manager/buat-po">
              <button className="bg-red-500 rounded-md h-8 w-8 flex justify-center items-center text-white font-bold shadow-md mr-0 md:mr-4">
                <ArrowLeftIcon height={25} />
              </button>
            </a>
          </div>
          <hr className="my-3 border-blue-gray-300 " />
          <form onSubmit={handleSubmit} action="" className="p-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nomor PO
            </label>
            <input
              type="text"
              className="border w-full h-8 my-4 bg-gray-200 pl-2"
              disabled
              value={formData.no_po}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Kode Penawaran
            </label>
            <select
              name="no_penawaran"
              id=""
              className="w-full border h-8 mt-4"
              // value={"A101"}
              onChange={handleChangePenawaran}
              value={formData.no_penawaran}
            >
              <option value=""></option>
              {penawaran.map((item) => (
                <option key={item.id_penawaran} value={item.no_penawaran}>
                  {item.no_penawaran} | {item.brand}
                </option>
              ))}
            </select>
            <div className="text-gray-500 mb-4">
              <p>
                *Pastikan sudah memilih penawaran yang tepat terlebih dahulu
              </p>
            </div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Dibuat PO
            </label>
            <input
              type="date"
              className="border w-full h-8 my-4"
              name="tanggal_dibuat_po"
              onChange={handleChange}
              value={formatDateInput(formData.tanggal_dibuat_po)}
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Dimulai PO
            </label>
            <input
              name="tanggal_mulai_po"
              onChange={handleChange}
              value={formatDateInput(formData.tanggal_mulai_po)}
              type="date"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tanggal Berakhir PO
            </label>
            <input
              name="tanggal_berakhir_po"
              onChange={handleChange}
              value={formatDateInput(formData.tanggal_berakhir_po)}
              type="date"
              className="border w-full h-8 my-4"
            />
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Payment
            </label>
            <select
              name="Terms_of_Payment"
              value={formData.Terms_of_Payment}
              onChange={handleChange}
              id=""
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="COD">COD</option>
              <option value="CBD">CBD</option>
            </select>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Terms of Delivery
            </label>
            <select
              name="Terms_of_Delivery"
              onChange={handleChange}
              value={formData.Terms_of_Delivery}
              id=""
              className="w-full border h-8 my-4"
            >
              <option value=""></option>
              <option value="CPT">CPT</option>
              <option value="Same Day">Same Day</option>
              <option value="Next Day">Next Day</option>
            </select>
            <div className="flex justify-end items-end">
              <Button type="submit" color="green">
                submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <FooterAdmin />
      </div>
    </div>
  );
}
