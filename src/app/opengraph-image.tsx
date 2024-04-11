import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Exercise Habits Exercise Physiology";

export const size = {
  width: 600,
  height: 600,
};

export const contentType = "image/jpeg";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {alt}
      </div>
    )
  );
}
