import Image from "next/image";
import { contentfulClient } from "@/lib/utils";

export type ImagesProps = {
  id: number;
  src: string;
};

export interface HeadingWithImagesProps {
  heading: string;
  images: ImagesProps[];
}

export default async function HeadingWithImages({
  heading,
  images,
}: HeadingWithImagesProps) {
  return (
    <section className="section-padding flex flex-col items-center gap-8">
      <p className="font-medium">{heading}</p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {images &&
          images.map((image: any) => (
            <Image
              src={image}
              width={96}
              height={96}
              alt={`image${image.id}`}
              key={`image ${image.id}`}
            />
          ))}
      </div>
    </section>
  );
}
