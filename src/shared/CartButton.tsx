import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  return (
    <div className="flex items-center space-x-1 mt-3">
      <div className="icon bg-primary p-2 rounded-full">
        <ShoppingCart className="w-4 h-4 text-white" />
      </div>
      <span>Add to cart</span>
    </div>
  );
}
