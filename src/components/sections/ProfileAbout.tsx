import ImageWithText from "../blocks/ImageWithText";
import { ImageWithTextProps } from "../blocks/ImageWithText";

// const data = {
//   heading: "About me",
//   body: "Hey I'm Vic! Exercise Physiologist for 6 years with a special focus on restoring independence and weight management with exercise. I've helped a range of individuals do more around the home and ",
//   button: "default",
//   buttonCTA: "Let's Exercise",
//   image: {
//     src: "/photos/vic.jpeg",
//     alt: "Exercise Habits Exercise Physiology",
//     width: 600,
//     height: 600,
//   },
// };

const data: ImageWithTextProps["data"] = {
  heading: "About me",
  body: "Hey I'm Vic! Exercise Physiologist for 6 years with a special focus on restoring independence and weight management with exercise. I've helped a range of individuals do more around the home and have a close to home relationship with neurological rehabilation. It happens to quite a few of us and did so with Grandma. After working with her to improve how much she could do, I really wanted others to share the same results and feeling of indepdence. Exercise Habits was founded because of this and I'm glad to be sharing this passion with you.",
  button: "default",
  buttonCTA: "Let's Exercise",
  image: {
    src: "/photos/vic.jpeg",
    alt: "Exercise Habits Exercise Physiology",
    width: 480,
    height: 480,
  },
};

export default function ProfileAbout() {
  return (
    <section className="">
      <ImageWithText data={data} />
    </section>
  );
}
