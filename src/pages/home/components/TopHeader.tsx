import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="bg-primary p-2 text-xs font-medium">
      <div className="container mx-auto flex justify-between">
        <p className="text-gray-100">
          Free Shipping for all Order of{" "}
          <span className="text-white font-semibold">$99</span>
        </p>

        <div className="flex gap-1">
          <TwitterIcon className="w-4 h-4 text-white" />
          <LinkedinIcon className="w-4 h-4 text-white" />
          <InstagramIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
}
