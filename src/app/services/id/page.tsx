import LogoBlock from "@/components/blocks/LogoBlock";
import MainCTAButton from "@/components/blocks/MainCTAButton";
import MapsEmbed from "@/components/blocks/MapsEmbed";
import SliderTextWithImage from "@/components/blocks/SliderTextWithImage";
import AboutUs from "@/components/sections/AboutUs";
import Community from "@/components/sections/Community";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import {
  PersonSimpleThrow,
  UserCircleCheck,
  RoadHorizon,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function Home() {
  // const data = await getContent();
  // console.log(data[0]);
  const featureIcons = [
    {
      heading: "Convenient, at home or anywhere you'd like sessions",
      body: "We understand not everyone likes to exercise at a gym. That's why we focus on delvering exercise sessions where ever you'd like",
      icon: PersonSimpleThrow,
    },
    {
      heading: "Flexible Scheduling",
      body: "You're busy. Other support workers, services and not to mention activities. We'll work around your schedule so you can be sure you're getting in exercise and fitness you need for a health and fit life.",
      icon: RoadHorizon,
    },
    {
      heading: "Have worked with 100+ NDIS Participants",
      body: "We've had the pleasure working with more than 100+ individuals to improve their health, fitness and confidence",
      icon: UserCircleCheck,
    },
    {
      heading: "NDIS Funded - No out of pocket charges",
      body: "All our sessions can be completely covered under your NDIS Plan",
      icon: SealCheck,
    },
  ];

  const heroList = [
    {
      key: "1",
      item: "Mobile & In-Home | No need to travel",
    },
    {
      key: "2",
      item: "Individualised Exercise Program | Never a one size fits all",
    },
    {
      key: "3",
      item: "We understand, we're patient and we're passionate to help you improve",
    },
    {
      key: "4",
      item: "Completely NDIS Funded",
    },
  ];
  const services = [
    {
      heading: "Weight Management",
      body: "Medications and inactive lifestyles can contribute to weight gain. We'll help you manage all these while also making it fun!",
    },
    {
      heading: "Exercise made fun, not boring",
      body: "We believe exercise shouldn't be a plain old boring routine. Our goal is to make exercise as fun as possible.",
    },
    {
      heading: "Muscle and Joint Strength",
      body: "Develop your strength to support whatever you need to do.",
    },
    {
      heading: "Better focus and mental health",
      body: "Execise is amazing for the brain and given the right amount of exercise can help you feel better, improve your mood and most importantly healthier",
    },
    {
      heading: "Structured and Science-backed",
      body: "We stay up to date with the latest exercise research so you can be sure to be getting the greatest and latest therapy.",
    },
  ];

  return (
    <main className="bg-amber-50 bg-opacity-5">
      <section className="">
        <div className="flex flex-col items-center justify-center section-padding gap-8 lg:flex-row">
          <div className="flex flex-col gap-8 items-center text-center w-full">
            <h1 className="leading-tight">
              In Home Exercise Physiology for Intellectual Disability and ASD
              <br />
              <span className="bg-orange-200 px-2  rounded-md">
                from therapists who care.
              </span>
            </h1>
            <div className="flex flex-col gap-2">
              {heroList.map((list) => (
                <div className="flex gap-2 items-center" key={list.key}>
                  <SealCheck size={20} />
                  <p>{list.item}</p>
                </div>
              ))}
            </div>
            <MainCTAButton type="default" />
          </div>
          <div className="w-full h-64 relative rounded-xl overflow-hidden lg:order-1 lg:h-96">
            <Image
              src="/ndis-exercise-physiology-mobile.jpeg"
              fill
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              alt="NDIS Mobile Exercise Physiologist"
            />
          </div>
        </div>
      </section>
      <LogoBlock textColor="white" />
      <Community />
      {/* Feature Cards */}
      <section className="section-padding flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-4 max-w-[600px] text-center section-padding">
          <h2>
            Always personalised &{" "}
            <span className="bg-primary px-2 py-1 text-white rounded-md">
              never a one size fits all.
            </span>
          </h2>
          <p>
            And it&apos;s our goal to come up with the most specific and best
            exercise program to help you live a healthy and independent life.
          </p>
          <p>
            Our Exercise Physiologists have worked with 100+ NDIS participants
            to regain their mobility, improve their balance and posture and
            increase their fitness for better quality of life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {featureIcons.map((feature) => (
            <div
              className="border-gray-200 bg-amber-50 bg-opacity-10 border-[1.2px] rounded-tr-[96px] rounded-br-[36px] rounded-bl-[72px] rounded-tl-[24px] p-8 overflow-hidden"
              key={feature.heading}
            >
              <div className="relative inline-block mb-1">
                <feature.icon size={32} className="relative z-[2]" />
                <div className="absolute bg-amber-200 bg-opacity-40 top-1/2 left-1/2 rounded-[50%] w-1/2 h-2/3 translate-x-[-50%] translate-y-[-50%] z-[1]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <h3>{feature.heading}</h3>
                <p>{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Social Proof Sliders */}
      <SliderTextWithImage />

      <ServiceGrid data={services} />
      <HowItWorks />

      <LeadForm />
      <AboutUs />
      <MapsEmbed />
    </main>
  );
}
