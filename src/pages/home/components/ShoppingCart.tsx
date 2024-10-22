import { ShoppingBagIcon } from "lucide-react";

export default function ShoppingCart() {
  return (
    <div className="flex items-center">
      <div className="cart relative">
        <ShoppingBagIcon className="w-6 h-6 text-gray-800" />
        <span className="absolute -top-2 -right-2 w-5 h-5 text-center leading-[20px] bg-red-400 text-white rounded-full text-xs">
          0
        </span>
      </div>
      <span className="text-gray-800 mx-2">$0.00</span>
    </div>
  );
}
