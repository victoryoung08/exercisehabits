import { getImagesFromEntries } from "@/lib/utils";
import ImageGrid from "@/components/blocks/ImageGrid";
export default async function ThankYou() {
  const images = await getImagesFromEntries("3zyNRxFxDorkwUN5h7Y5OA");
  console.log(images);
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center gap-4">
      <h1>Thank you!</h1>
      <p>
        I&apos;ll personally reach out within 24-48 hours!
        <br /> You&apos;ll also get a confirmation email saying I&apos;ve
        received your message.
      </p>
      <ImageGrid data={images} />
    </section>
  );
}
