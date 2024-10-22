type CarouselItemProps = {
  children: React.ReactNode;
  bgImage: string;
};

export default function CarouselItem({ children, bgImage }: CarouselItemProps) {
  return (
    <div
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
}
