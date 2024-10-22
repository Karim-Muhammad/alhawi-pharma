type BrandProps = {
  bgImage: string;
  brandImage: string;
};

export default function Brand({ bgImage, brandImage }: BrandProps) {
  return (
    <div className="max-w-[320px] mx-auto">
      <div className="image">
        <img src={bgImage} className="w-full" />
      </div>

      <div className="content bg-white p-7 mx-7 -translate-y-1/3 flex flex-col sm:flex-row items-center space-x-3 font-bold ">
        <img src={brandImage} className="w-20" />
        <span className="text-gray-500 sm:text-sm">Logo Brand</span>
      </div>
    </div>
  );
}
