import Image from "next/image";
export default function AnimatedImage() {
  return (
    <>
      <Image
        src="/image/showcase.svg"
        alt="Showcase"
        className="undraggable shrinked-width-70"
        width={1920}
        height={1080}
        draggable={false}
      />
    </>
  );
}
