import HeadingWithImages from "../blocks/HeadingWithImages";
import { getImagesFromEntries } from "@/lib/utils";

export default async function Community() {
  const images = await getImagesFromEntries("3zyNRxFxDorkwUN5h7Y5OA");
  return (
    <HeadingWithImages
      heading="And have worked with 100+ NDIS Participants"
      images={images}
    />
  );
}
