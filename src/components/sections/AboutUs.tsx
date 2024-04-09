import MainCTAButton from "../blocks/MainCTAButton";
import { Button } from "../ui/button";

export default function AboutUs() {
  return (
    <section className="bg-sky-900 px-4 py-12" id="about">
      <div className="bg-amber-50 rounded-tl-[48px] rounded-tr-[48px] rounded-b-[24px] section-padding flex flex-col gap-4 ">
        <div className="flex flex-col gap-4">
          <p>Sydney&apos;s South</p>
          <h2>
            NDIS Exercise Physiologists Looking After Your Health and Fitness
          </h2>
          <p>
            With strong grass roots to the South Region of Sydney, we&apos;re
            focused on delivering high quality mobile and in-home Exercise
            Physiology services for NDIS Participants. Our Exercise
            Physiologists are university trained and qualified with a wealth of
            experience working with NDIS Participants long term. We truly
            believe everyone and anyone can exercise and shouldn&apos;t be
            limited to their situation. We&apos;re here to help with exercise,
            improve your independence and improve your overall health, wellbeing
            and fitness.
          </p>
          <div className="mx-auto lg:ml-0">
            <MainCTAButton type="default" />
          </div>
        </div>
      </div>
    </section>
  );
}
