import Image from "next/image";
import { Button } from "../ui/button";
import { handleCTA } from "../ui/navbar";
export type ImageWithTextProps = {
  data: {
    heading: string;
    body: string;
    button: "default" | "secondary";
    buttonCTA: string;
    image?: ImageProps;
  };
};

export type ImageProps = {
  src: string | "/";
  alt: string;
  height: number;
  width: number;
};
export default function ImageWithText({ data }: ImageWithTextProps) {
  return (
    <div className="flex flex-col gap-8  items-center justify-center lg:flex-row max-w-[720px] mx-auto">
      <div className="flex flex-col gap-4">
        <h3>{data.heading}</h3>
        <p>{data.body}</p>
        {data.button && (
          <Button variant={data.button} onClick={handleCTA}>
            {data.buttonCTA}
          </Button>
        )}
      </div>
      <div className="w-full">
        {data.image && (
          <Image
            src={data.image}
            alt={data.heading}
            width={data.image.width}
            height={data.image.height}
          />
        )}
      </div>
    </div>
  );
}
