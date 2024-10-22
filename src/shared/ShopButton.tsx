import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

type ShopButtonProps = {
  className?: string;
};

export default function ShopButton({ className }: ShopButtonProps) {
  return (
    <div
      className={`${className} flex items-center justify-center md:justify-start gap-3`}
    >
      <div className="bg-black rounded-full grid place-content-center md:flex">
        <ArrowRightCircle className="w-7 h-7 lg:w-9 lg:h-9" color="white" />
      </div>
      <Link to="/" className="text-md lg:text-xl font-semibold uppercase">
        Shop Now
      </Link>
    </div>
  );
}
