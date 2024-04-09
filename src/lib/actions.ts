"use server";

import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_MAILERLITE_BASEURL;
const api = process.env.NEXT_PUBLIC_MAILERLITE_API;

export const addMailerliteContact = async (formData: any) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const data = {
    email: email,
    fields: {
      name: name,
      phone: phone,
    },
  };

  const fetchURL = baseURL + "/api/subscribers";
  console.log(fetchURL);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify(data),
  };
  try {
    const req = await fetch(fetchURL, options);
    console.log("posted to mailerlite");
  } catch (err) {
    console.log("Something went wrong with: ", err);
  }
  redirect("/thank-you");
};
