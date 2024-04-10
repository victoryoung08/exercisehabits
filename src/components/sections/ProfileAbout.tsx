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
  body: "Hey I'm Vic! Exercise Physiologist for 6 years with a special focus on restoring independence and weight management with exercise. I've helped a range of individuals do more around the home and ",
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
