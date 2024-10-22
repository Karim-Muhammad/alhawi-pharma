type BannerProps = {
  bgImage: string;
  children: React.ReactNode;
  className?: string;
};

export default function Banner({ children, bgImage, className }: BannerProps) {
  return (
    <div
      className={`w-full md:min-w-[290px] min-h-[200px] bg-cover relative ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay absolute inset-0 bg-gray-900 opacity-30"></div>
      <div className="banner-info relative p-6 h-full">{children}</div>
    </div>
  );
}
