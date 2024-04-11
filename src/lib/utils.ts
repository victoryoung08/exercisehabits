import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";
import { redirect } from "next/navigation";
import { ImageResponse } from "next/og";
// import contentful from "contentful";
const baseURL = process.env.NEXT_PUBLIC_MAILERLITE_BASEURL;
const api = process.env.NEXT_PUBLIC_MAILERLITE_API;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormDataProps = {
  name: {};
  email: {};
  phone: {};
};
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
  } finally {
    redirect("/thank-you");
  }
};

// CONTENTFUL
const contentful = require("contentful");

export const contentfulClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getImagesFromEntries = async (entryID: string) => {
  const data = await contentfulClient.getEntry(entryID);
  try {
    const fields = data.fields.media;
    const links = fields.map((field: any) => {
      const baseURL = process.env.NEXT_PUBLIC_CONTENTFUL_BASEURL!;
      return "https:" + field.fields.file.url;
    });
    return links;
  } catch (err) {
    console.log("something went wrong", err);
  }
};

