// "use client";

import axios from "axios";
import { cookies } from "next/headers";
import { auth, errorToken } from "../actions";

export default function Dashboard() {
  const cookie = cookies().get("token")?.value;
  const accessToken = cookie;
  // const auth: boolean = false;

  // Konfigurasi objek Axios dengan header Authorization
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3333/api/threads",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json", // Sesuaikan dengan jenis konten yang diharapkan oleh API
      // ... (header lainnya jika diperlukan)
    },
  });

  axiosInstance
    .get("http://127.0.0.1:3333/api/threads")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch((error) => {
      // handle error
      const statusError = error.response.status;
      errorToken(statusError);
      // auth("false");
      // console.log(error.response.data);
    });

  return <div>Dashboard</div>;
}
