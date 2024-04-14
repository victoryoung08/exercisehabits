import Image from "next/image";
import AlternatingTextBlock from "../blocks/AlternatingTextBlock";
import {
  Asterisk,
  Medal,
  ShootingStar,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Link from "next/link";
import MainCTAButton from "../blocks/MainCTAButton";

export default function HowItWorks() {
  const images = [
    {
      name: "boxing",
      src: "/photos/boxing.png",
    },
    { name: "squats", src: "/photos/squats.png" },
    { name: "sci", src: "/photos/sci.png" },
  ];
  const data = [
    {
      step: 1,
      heading: "Get Started",
      body: "Fill in our form for a free initial consultation",
      icon: Asterisk,
    },
    {
      step: 2,
      heading: "Learn About your Goals",
      body: "We'll work with you to create an exercise plan based on your goals",
      icon: Medal,
    },
    {
      step: 3,
      heading: "We bring the Exercise to you",
      body: "Our EPs come to you, so there's no need to travel anywhere",
      icon: ShootingStar,
    },
    {
      step: 4,
      heading: "Collaborate and NDIS Funded",
      body: "We'll work with your NDIS plan, and coordinator to ensure you're getting the best support",
      icon: CheckCircle,
    },
  ];
  return (
    <section className="px-12 py-24 mx-auto flex flex-col gap-20 lg:flex-row">
      <div className="w-full flex flex-col gap-8 lg:w-1/3">
        <div className="flex flex-col gap-4">
          <span>Get Started with Exercise</span>
          <h2>How our Exercise Physiology Sessions work</h2>

          <MainCTAButton type="default" />
        </div>
        <div className="flex items-center justify-center w-full gap-8">
          {images.map((i) => (
            <div className="relative w-full h-fit aspect-square" key={i.name}>
              <Image
                key={i.name}
                src={i.src}
                fill
                alt={i.name}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[600px] flex flex-col w-full mx-auto gap-12 lg:w-2/3">
        {data.map((d) => (
          <div className="relative mx-auto w-full px-12" key={d.step}>
            <AlternatingTextBlock data={d} length={data.length} />
          </div>
        ))}
      </div>
    </section>
  );
}
