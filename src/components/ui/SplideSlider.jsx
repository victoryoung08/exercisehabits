"use client";
import Image from "next/image";

export default function SplideSlider() {
  return (
    <div className="w-full">
      {data.map((slide) => (
        <div className="relative" key={slide.name}>
          <Image
            src={slide.src}
            fill
            style={{ objectFit: "cover" }}
            alt={slide.name}
          />
          <h3>{slide.name}</h3>
        </div>
      ))}
    </div>
  );
}
