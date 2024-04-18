"use client";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "../ui/button";
import { handleCTA } from "../ui/navbar";
import MainCTAButton from "./MainCTAButton";
import Image from "next/image";
import SecondaryCTAButton from "./SecondaryCTAButton";

type CTAProps = {
  data: {
    heading: string;
    body?: string;
    cta: string;
    list: string[];
    buttonStyle?: string;
    classStyles?: string | undefined;
    secondaryButtonText?: string;
    secondaryButtonType?: string;
    secondaryButtonStyle?: string;
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
      <div className="flex flex-col gap-2">
        {data.cta && data.buttonStyle && (
          <MainCTAButton type={data.buttonStyle} text={data.cta} />
        )}

        {data.secondaryButtonText && data.secondaryButtonType && (
          <SecondaryCTAButton
            type={data.secondaryButtonType}
            style={data.secondaryButtonStyle}
          />
        )}
      </div>
    </section>
  );
}
