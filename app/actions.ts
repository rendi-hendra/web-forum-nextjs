"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function create(token: string) {
  cookies().set("token", token);
}

export async function auth(isAuth: string) {
  cookies().set("auth", isAuth);
}

export async function errorToken(err?: number) {
  // console.log(err);
  return err;
}

// export async function getToken(token: string | undefined) {
//   const axiosInstance = axios.create({
//     baseURL: "http://127.0.0.1:3333/api/threads",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json", // Sesuaikan dengan jenis konten yang diharapkan oleh API
//       // ... (header lainnya jika diperlukan)
//     },
//   });

//   axiosInstance
//     .get("http://127.0.0.1:3333/api/threads")
//     .then(function (response) {
//       // handle success
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// }
