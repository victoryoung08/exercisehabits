import Image from "next/image";

type ImageGridProps = {
  data: {
    url: string;
  }[];
};

export default function ImageGrid({ data }: ImageGridProps) {
  return (
    <div className="grid grid-cols-3 gap-8 w-96 relative">
      {data &&
        data.map((d, i) => {
          const url = d.toString();
          return (
            <div className="relative w-full h-full" key={url}>
              <Image src={url} alt={url} width={200} height={200} />
            </div>
          );
        })}
    </div>
  );
}
