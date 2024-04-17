"use client";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "../ui/button";
import { handleCTA } from "../ui/navbar";
import MainCTAButton from "./MainCTAButton";
import Image from "next/image";

type CTAProps = {
  data: {
    heading: string;
    body?: string;
    cta: string;
    list: string[];
    buttonStyle: string;
    classStyles?: string | undefined;
  };
};
export default function CenteredCTA({ data }: CTAProps) {
  console.log("cta", data);
  return (
    <section className={`${data.classStyles}`}>
      <h1>{data.heading}</h1>
      {data.body && <p>{data.body}</p>}
      {data.list && (
        <div className="flex flex-col gap-2">
          {data.list.map((l) => (
            <div key={l} className="flex items-center gap-2">
              <SealCheck size={24} />
              <p>{l}</p>
            </div>
          ))}
        </div>
      )}
      <MainCTAButton type={data.buttonStyle} />
    </section>
  );
}
