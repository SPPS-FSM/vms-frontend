import axios from "axios";
import Cookies from "js-cookie";

export const submitSertifikasi = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/usersertifikasi",
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Submit dokumen gagal", error);
    throw new Error("Submit dokumen gagal");
  }
};

export const getDetailSertifikasi = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/usersertifikasi/" + id,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Get detail sertifikasi gagal", error);
    throw new Error("Get detail sertifikasi gagal");
  }
};

export const editSertifikasi = async (data, id) => {
  try {
    const response = await axios.put(
      "http://localhost:4000/api/usersertifikasi/" + id,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Edit dokumen gagal", error);
    throw new Error("Edit dokumen gagal");
  }
};
