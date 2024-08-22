import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:4000/api/auth/login";

export const getJenisDokumen = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/jenis-document/documents",
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Get jenis dokumen gagal", error);
    throw new Error("Get jenis dokumen gagal");
  }
};

export const submitDokumen = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/userdocuments",
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

export const editDokumen = async (data, id) => {
  try {
    const response = await axios.put(
      "http://localhost:4000/api/userdocuments/" + id,
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
