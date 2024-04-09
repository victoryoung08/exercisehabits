"use client";
import { Button } from "../ui/button";
import { handleCTA } from "../ui/navbar";

type CTAProps = {
  data: {
    heading: string;
    body: string;
    cta: string;
    buttonStyle: "link" | "outline" | "default";
  };
};
export default function CenteredCTA({ data }: CTAProps) {
  return (
    <section>
      <h1>{data.heading}</h1>
      <p>{data.body}</p>
      <Button variant={data.buttonStyle} onClick={handleCTA}>
        {data.cta}
      </Button>
    </section>
  );
}
