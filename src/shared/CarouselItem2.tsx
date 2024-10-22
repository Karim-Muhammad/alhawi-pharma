import React from "react";

type CarouselItemProps = {
  mainImage: string;
  price?: number;
  bgImage: string;
  Content: React.FC;
};

export default function CarouselItem({
  mainImage,
  bgImage,
  Content,
}: CarouselItemProps) {
  return (
    <div
      className="w-full h-full bg-center bg-cover duration-500 relative p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-30"></div>

      <div className="flex flex-col md:flex-row justify-center gap-3 relative text-white">
        <div className="w-full text-center order-2 md:order-1">
          <img src={mainImage} className="w-full mx-auto" />
        </div>

        <div className="w-full order-1 md:order-2">
          <Content />
        </div>
      </div>
    </div>
  );
}
